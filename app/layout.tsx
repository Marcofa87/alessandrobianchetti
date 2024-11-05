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
  return (
    <>
      <html lang="en">
        <body className={`${roboto.className} antialiased  m-auto `}>
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
    </>
  );
}
