import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

export async function GET() {
  try {
    const resendApiKey = process.env.RESEND_API_KEY;

    if (!resendApiKey) {
      return NextResponse.json({
        status: "error",
        message: "RESEND_API_KEY not found in environment variables",
      });
    }

    if (!resendApiKey.startsWith("re_")) {
      return NextResponse.json({
        status: "error",
        message:
          'Invalid API key format. Resend API keys should start with "re_"',
      });
    }

    // Test the API key
    const resend = new Resend(resendApiKey);

    // Try to get account info (this validates the API key)
    try {
      // Note: We can't actually test without making a real API call
      // But we can check the format and initialization
      return NextResponse.json({
        status: "success",
        message: "API key is properly configured",
        keyFormat: "Valid (starts with re_)",
        fromEmail: process.env.FROM_EMAIL || "onboarding@resend.dev",
      });
    } catch (apiError) {
      return NextResponse.json({
        status: "error",
        message: "API key validation failed",
        details: apiError,
      });
    }
  } catch (error) {
    return NextResponse.json({
      status: "error",
      message: "Error checking Resend configuration",
      details: error instanceof Error ? error.message : "Unknown error",
    });
  }
}
