import { db } from "@/prisma/db";
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const allowedServices = [
  "bookkeeping",
  "accounting",
  "both",
  "other",
];

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const name = typeof body.name === "string" ? body.name.trim() : "";
    const email = typeof body.email === "string" ? body.email.trim() : "";
    const company =
      typeof body.company === "string" ? body.company.trim() : "";
    const service =
      typeof body.service === "string" ? body.service.trim() : "";
    const message =
      typeof body.message === "string" ? body.message.trim() : "";

    // Required fields
    if (!name || !email || !company || !service || !message) {
      return NextResponse.json(
        {
          success: false,
          message: "Please fill in all required fields.",
        },
        { status: 400 }
      );
    }

    // Length limits
    if (name.length > 100) {
      return NextResponse.json(
        {
          success: false,
          message: "Name is too long.",
        },
        { status: 400 }
      );
    }

    if (email.length > 254) {
      return NextResponse.json(
        {
          success: false,
          message: "Email is too long.",
        },
        { status: 400 }
      );
    }

    if (company.length > 150) {
      return NextResponse.json(
        {
          success: false,
          message: "Company name is too long.",
        },
        { status: 400 }
      );
    }

    if (message.length > 5000) {
      return NextResponse.json(
        {
          success: false,
          message: "Message is too long.",
        },
        { status: 400 }
      );
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      return NextResponse.json(
        {
          success: false,
          message: "Please enter a valid email address.",
        },
        { status: 400 }
      );
    }

    // Validate service
    if (!allowedServices.includes(service)) {
      return NextResponse.json(
        {
          success: false,
          message: "Invalid service selected.",
        },
        { status: 400 }
      );
    }

    // Save enquiry to database
    const healthCheck =
      await db.orm.public.HealthCheckRequest.create({
        name,
        email,
        company,
        service,
        message,
      });

    // Send email notification
    const { error: emailError } = await resend.emails.send({
      from: "FineX <onboarding@resend.dev>",
      to: process.env.ADMIN_EMAIL!,
      subject: `New Books Health Check Request - ${company}`,
      html: `
        <h2>New Books Health Check Request</h2>

        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Company:</strong> ${escapeHtml(company)}</p>
        <p><strong>Service:</strong> ${escapeHtml(service)}</p>

        <h3>Message</h3>
        <p>${escapeHtml(message)}</p>

        <hr />

        <p>
          This enquiry has been saved to the FineX admin dashboard.
        </p>
      `,
    });

    if (emailError) {
      console.error("Resend email error:", emailError);

      return NextResponse.json(
        {
          success: true,
          message: "Request received successfully.",
          emailSent: false,
        },
        { status: 201 }
      );
    }

    return NextResponse.json(
      {
        success: true,
        message: "Health check request submitted successfully.",
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

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}