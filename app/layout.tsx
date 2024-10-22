import type { Metadata } from "next";
import { roboto } from "./ui/fonts";
import "./styles/globals.css";
import Navbar from "./ui/navbar/Navbar";

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
    <html lang="en">
      <body className={`${roboto.className} antialiased `}>
        <nav>
          <Navbar />
        </nav>
        <main className="mt-12">{children}</main>
      </body>
    </html>
  );
}
