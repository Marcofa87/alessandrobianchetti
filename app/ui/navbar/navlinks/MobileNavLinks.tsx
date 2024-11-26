"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { useTranslations } from "next-intl";
import useToggle from "@/components/hooks/useToggle";

export default function MobileNavLinks() {
  const pathname = usePathname(); // Ottiene il percorso corrente
  const t = useTranslations("Links");
  const { toggleMenu } = useToggle();

  return (
    <ul className="space-y-4">
      <li>
        <Link
          href="/structure"
          className={`block transition-colors duration-200 font-bold ${
            pathname === "/structure" ? "underline" : "hover:text-accent"
          }`}
          onClick={toggleMenu}
        >
          {t("structure")}
        </Link>
      </li>
      <li>
        <Link
          href="/contacts"
          className={`block transition-colors duration-200 font-bold ${
            pathname === "/contacts" ? "underline" : ""
          }`}
          onClick={toggleMenu}
        >
          {t("contacts")}
        </Link>
      </li>
    </ul>
  );
}
