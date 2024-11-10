// app/api/language/route.ts
import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { Locale } from "node_modules/next/dist/compiled/@vercel/og/satori";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { locale } = body as { locale: Locale };

    // Set the cookie
    (
      await // Set the cookie
      cookies()
    ).set("NEXT_LOCALE", locale, {
      path: "/",
      sameSite: "lax",
      secure: process.env.NODE_ENV === "production",
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to update language" },
      { status: 500 }
    );
  }
}
