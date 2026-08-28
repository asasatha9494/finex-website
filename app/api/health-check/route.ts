import { db } from "@/prisma/db";
import { NextResponse } from "next/server";

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

    const healthCheck =
      await db.orm.public.HealthCheckRequest.create({
        
          name,
          email,
          company,
          service,
          message,
        
      });

    return NextResponse.json(
      {
        success: true,
        message: "Health check request submitted successfully.",
        data: healthCheck,
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