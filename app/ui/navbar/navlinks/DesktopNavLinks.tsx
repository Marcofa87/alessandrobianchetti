import { useTranslations } from "next-intl";
import Link from "next/link";

export default function DesktopNavLinks() {
  const t = useTranslations("Links");
  return (
    <div>
      <Link
        href="/structure"
        className="hover:text-accent transition-colors duration-200 mr-10"
      >
        {t("structure")}
      </Link>
      <Link
        href="/contacts"
        className="hover:text-accent transition-colors duration-200"
      >
        {t("contacts")}
      </Link>
    </div>
  );
}
