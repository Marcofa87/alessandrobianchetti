// app/api/language/route.ts
import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { Locale, locales } from "@component/../messages/i18n/config";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { locale } = body as { locale: Locale };

    if (!locales.includes(locale)) {
      return NextResponse.json(
        {
          success: false,
          message: `Invalid locale. Must be one of: ${locales.join(", ")}`,
        },
        { status: 400 }
      );
    }

    (await cookies()).set("NEXT_LOCALE", locale, {
      path: "/",
      sameSite: "lax",
      secure: process.env.NODE_ENV === "production",
    });

    return NextResponse.json({ success: true });
  } catch (_err) {
    console.error("Error setting language");
    return NextResponse.json(
      {
        success: false,
        message: "Failed to update language",
      },
      { status: 500 }
    );
  }
}
