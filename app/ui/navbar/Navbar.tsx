"use client";

import useToggle from "@/components/hooks/useToggle";
import { Menu, X } from "lucide-react";

import Logo from "./logo/Logo";
import LanguageFlags from "./language-flags/LanguageFlags";

import MobileNavLinks from "./navlinks/MobileNavLinks";
import DesktopNavLinks from "./navlinks/DesktopNavLinks";

export default function Navbar() {
  const { isOpen, toggleMenu } = useToggle();
  return (
    <nav className="p-4 relative">
      <div className="container mx-auto flex justify-between items-center">
        <Logo />
        {/* Centered flags for both mobile and desktop */}
        <LanguageFlags />
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
          <DesktopNavLinks />
        </div>
      </div>

      {/* Mobile menu - Dropdown */}
      <div
        className={`absolute right-0 p-4 shadow-md transition-all duration-300 ease-in-out ${
          isOpen ? "top-full opacity-100" : "top-[-200%] opacity-0"
        } md:hidden`}
      >
        <MobileNavLinks />
      </div>
    </nav>
  );
}
