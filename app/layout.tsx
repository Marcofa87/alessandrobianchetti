import { getLocale, getMessages } from "next-intl/server";
import { Metadata } from "next";

import { roboto } from "./ui/fonts";
import "./styles/globals.css";
import Navbar from "./ui/navbar/Navbar";
import Footer from "./ui/footer/Footer";
import { Analytics } from "@vercel/analytics/react";
import IntlProviderWrapper from "./ui/intlwrapper/INtlProvideWrapper";

export const metadata: Metadata = {
  title: "Alessandro Bianchetti Personal Trainer",
  description: "Alessandro Bianchetti Personal Trainer",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const locale = await getLocale();
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className={`${roboto.className} antialiased m-auto`}>
        <IntlProviderWrapper locale={locale} messages={messages}>
          <Analytics />
          <header>
            <nav>
              <Navbar />
            </nav>
          </header>
          <main className="mt-12 min-h-screen">{children}</main>
          <Footer />
        </IntlProviderWrapper>
      </body>
    </html>
  );
}
