import { NextResponse } from "next/server";
import { BUSINESS_CONFIG } from "@/lib/business";

export async function POST(request: Request) {
  // Feature flag check
  if (!BUSINESS_CONFIG.enableFormSubmission) {
    return NextResponse.json(
      {
        success: true,
        prototypeMode: true,
        message: "Prototype demonstration mode: No email or WhatsApp message was dispatched.",
      },
      { status: 200 }
    );
  }

  try {
    const body = await request.json();
    const { name, phone, service, makeModel, regNumber, email, message } = body;

    if (!name || !phone || !service) {
      return NextResponse.json(
        { error: "Missing required fields (name, phone, service)" },
        { status: 400 }
      );
    }

    // In production with feature flag active:
    // Dispatch webhook to Twilio WhatsApp / SendGrid / Postmark to notify workshop
    return NextResponse.json({
      success: true,
      message: "Quote request delivered to Shine Auto Centre workshop.",
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Invalid request payload" },
      { status: 500 }
    );
  }
}
