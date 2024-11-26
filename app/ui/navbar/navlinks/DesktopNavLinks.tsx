import { useTranslations } from "next-intl";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function DesktopNavLinks() {
  const pathname = usePathname();
  console.log(pathname);
  const t = useTranslations("Links");

  return (
    <>
      <ul>
        <li>
          <Link
            href="/structure"
            className={`hover:text-accent transition-colors duration-200 mr-10 ${
              pathname === "/structure" ? "active" : ""
            }`}
          >
            {t("structure")}
          </Link>
        </li>
        <li>
          <Link
            href="/contacts"
            className={`hover:text-accent transition-colors duration-200 ${
              pathname === "/contacts" ? "active" : ""
            }`}
          >
            {t("contacts")}
          </Link>
        </li>
      </ul>
    </>
  );
}
