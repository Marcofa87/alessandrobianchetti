// app/layout.tsx
import { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";
import { roboto } from "./ui/fonts";
import "./styles/globals.css";
import Navbar from "./ui/navbar/Navbar";
import Footer from "./ui/footer/Footer";
import { Analytics } from "@vercel/analytics/react";
import { LanguageProvider } from "./context/LanguageProvider";
import {
  Locale,
  locales,
  defaultLocale,
} from "@/components/../messages/i18n/config";

export const metadata: Metadata = {
  title: "Alessandro Bianchetti Personal Trainer",
  description: "Alessandro Bianchetti Personal Trainer",
};

const validateLocale = (locale: string): Locale => {
  if (locales.includes(locale as Locale)) {
    return locale as Locale;
  }
  return defaultLocale;
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const rawLocale = await getLocale();
  const locale = validateLocale(rawLocale);
  const messages = await getMessages();

  return (
    <NextIntlClientProvider messages={messages}>
      <LanguageProvider initialLocale={locale}>
        <html lang={locale}>
          <body className={`${roboto.className} antialiased m-auto`}>
            <Analytics />
            <header>
              <nav>
                <Navbar />
              </nav>
            </header>
            <main className="mt-12 min-h-screen">{children}</main>
            <Footer />
          </body>
        </html>
      </LanguageProvider>
    </NextIntlClientProvider>
  );
}
