"use client";
import Link from "next/link";
import Image from "next/image";
import logo from "@/components/public/danielle-cerullo-CQfNt66ttZM-unsplash.jpg";
export default function Logo() {
  return (
    <div className="logo">
      <Link
        href="/"
        className="hover:text-accent transition-colors duration-200"
      >
        <Image
          src={logo}
          alt="Personal Trainer Logo"
          className="rounded-full"
          height={60}
          width={60}
        />
      </Link>
    </div>
  );
}
