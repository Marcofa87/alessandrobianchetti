import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";

import type { Metadata } from "next";
import { roboto } from "./ui/fonts";
import "./styles/globals.css";
import Navbar from "./ui/navbar/Navbar";
import Footer from "./ui/footer/Footer";

import { Analytics } from "@vercel/analytics/react";

export const metadata: Metadata = {
  title: "Alessandro Bianchetti Personal Trainer",
  description: "Alessandro Bianchetti Personal Trainer",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();
  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <>
      <html lang={locale}>
        <body className={`${roboto.className} antialiased  m-auto `}>
          <NextIntlClientProvider locale={locale} messages={messages}>
            <Analytics />
            <header>
              <nav>
                <Navbar />
              </nav>
            </header>
            <main className="mt-12 min-h-screen">{children}</main>
            <Footer />
          </NextIntlClientProvider>
        </body>
      </html>
    </>
  );
}
