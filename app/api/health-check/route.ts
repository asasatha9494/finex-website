import { db } from "@/prisma/db";
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const name = body.name?.trim();
    const email = body.email?.trim();
    const company = body.company?.trim();
    const service = body.service?.trim();
    const message = body.message?.trim();

    if (!name || !email || !company || !service || !message) {
      return NextResponse.json(
        {
          success: false,
          message: "Please fill in all required fields.",
        },
        { status: 400 }
      );
    }

    // 1. Save the enquiry to the database
    const healthCheck =
      await db.orm.public.HealthCheckRequest.create({
        name,
        email,
        company,
        service,
        message,
      });

    // 2. Send notification email to the admin
    const { error: emailError } = await resend.emails.send({
      from: "FineX <onboarding@resend.dev>",
      to: process.env.ADMIN_EMAIL!,
      subject: `New Books Health Check Request - ${company}`,
      html: `
        <h2>New Books Health Check Request</h2>

        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Company:</strong> ${company}</p>
        <p><strong>Service:</strong> ${service}</p>

        <h3>Message</h3>
        <p>${message}</p>

        <hr />

        <p>
          This enquiry has also been saved to the FineX admin dashboard.
        </p>
      `,
    });

    if (emailError) {
      console.error("Resend email error:", emailError);

      // The enquiry was already saved successfully.
      // Don't tell the customer that the whole submission failed.
      return NextResponse.json(
        {
          success: true,
          message: "Request received successfully.",
          data: healthCheck,
          emailSent: false,
        },
        { status: 201 }
      );
    }

    return NextResponse.json(
      {
        success: true,
        message: "Health check request submitted successfully.",
        data: healthCheck,
        emailSent: true,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Health check API error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Something went wrong. Please try again.",
      },
      { status: 500 }
    );
  }
}