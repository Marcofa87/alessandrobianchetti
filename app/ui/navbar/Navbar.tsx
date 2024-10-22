"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import logo from "@/components/public/danielle-cerullo-CQfNt66ttZM-unsplash.jpg";
import englishFlag from "@/components/public/united-kingdom.png";
import italianFlag from "@/components/public/italy.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <nav className="p-4 relative">
      <div className="container mx-auto flex justify-between items-center">
        <div className="logo">
          <Link
            href="/"
            className="hover:text-accent transition-colors duration-200"
          >
            <Image
              src={logo}
              alt="Personal Trainer Logo"
              width={100}
              height={100}
              className="rounded-full"
            />
          </Link>
        </div>

        {/* Centered flags for both mobile and desktop */}
        <div className="absolute left-1/2 transform -translate-x-1/2 flex space-x-4">
          <Image
            src={italianFlag}
            alt="italian flag language"
            width={32}
            height={32}
          />
          <Image
            src={englishFlag}
            alt="english flag language"
            width={32}
            height={32}
          />
        </div>

        {/* Toggle button for mobile menu */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="focus:outline-none"
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>

        {/* Menu items for larger screens */}
        <div className="hidden md:flex items-center space-x-4">
          <Link
            href="/structure"
            className="hover:text-accent transition-colors duration-200"
          >
            Struttura
          </Link>
          <Link
            href="/contacts"
            className="hover:text-accent transition-colors duration-200"
          >
            Contatti
          </Link>
        </div>
      </div>

      {/* Mobile menu - Dropdown */}
      <div
        className={`absolute right-0 p-4 shadow-md transition-all duration-300 ease-in-out ${
          isOpen ? "top-full opacity-100" : "top-[-200%] opacity-0"
        } md:hidden`}
      >
        <ul className="space-y-4">
          <li>
            <Link
              href="/structure"
              className="block hover:text-accent transition-colors duration-200"
              onClick={toggleMenu}
            >
              Struttura
            </Link>
          </li>
          <li>
            <Link
              href="/contacts"
              className="block hover:text-accent transition-colors duration-200"
              onClick={toggleMenu}
            >
              Contatti
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
