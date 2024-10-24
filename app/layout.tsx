import type { Metadata } from "next";
import { roboto } from "./ui/fonts";
import "./styles/globals.css";
import Navbar from "./ui/navbar/Navbar";
import Footer from "./ui/footer/Footer";
import { Suspense } from "react";

import { Analytics } from "@vercel/analytics/react";
import Loading from "./loading";

export const metadata: Metadata = {
  title: "Alessandro Bianchetti",
  description: "Alessandro Bianchetti Personal Trainer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <html lang="en">
        <body className={`${roboto.className} antialiased  max-w-6xl m-auto`}>
          <Analytics />
          <header>
            <nav>
              <Navbar />
            </nav>
          </header>
          <main className="mt-12">{children}</main>
          <Footer />
        </body>
      </html>
    </>
  );
}
