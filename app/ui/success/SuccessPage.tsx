import { BicepsFlexed } from "lucide-react";
import { useTranslations } from "next-intl";
import Link from "next/link";

export default function SuccessSubmit() {
  const t = useTranslations("SuccessSubmission");
  return (
    <div className="flex flex-col items-center mt-28 ">
      <h2 className=" mb-4">{t("success")}</h2>
      <p className="text-lg text-center mb-6">{t("formsubmission")}</p>
      <BicepsFlexed className="my-8" size={128} color="#c1292e" />
      <Link href="/" passHref>
        <button className="px-4 py-2 bg-[var(--tertiary-color)]  rounded hover:bg-red-800 transition font-bold">
          {t("home")}
        </button>
      </Link>
    </div>
  );
}
