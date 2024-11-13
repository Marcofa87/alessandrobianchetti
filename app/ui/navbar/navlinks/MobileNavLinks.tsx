import Link from "next/link";
import useToggle from "@/components/hooks/useToggle";
import { useTranslations } from "next-intl";

export default function MobileNavLinks() {
  const t = useTranslations("Links");
  const { toggleMenu } = useToggle();
  return (
    <ul className="space-y-4">
      <li>
        <Link
          href="/structure"
          className="block hover:text-accent transition-colors duration-200 font-bold"
          onClick={toggleMenu}
        >
          {t("structure")}
        </Link>
      </li>
      <li className="z-40">
        <Link
          href="/contacts"
          className="block hover:text-accent transition-colors duration-200 font-bold"
          onClick={toggleMenu}
        >
          {t("contacts")}
        </Link>
      </li>
    </ul>
  );
}
