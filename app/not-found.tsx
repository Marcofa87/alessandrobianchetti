import Link from "next/link";
import { Dumbbell } from "lucide-react";
import { useTranslations } from "next-intl";

export default function NotFound() {
  const t = useTranslations("NotFound");
  return (
    <div className="flex flex-col items-center mt-28">
      <Dumbbell className="my-8" size={128} color="#c1292e" />
      <h2 className="text-4xl font-bold mb-4">{t("error")}</h2>
      <p className="text-xl mb-8 text-center max-w-md">{t("content")}</p>
      <Link href="/" passHref>
        <button className="px-4 py-2 bg-[var(--tertiary-color)]  rounded hover:bg-red-800 transition font-bold">
          {t("home")}
        </button>
      </Link>
    </div>
  );
}
