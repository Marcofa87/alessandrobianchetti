import Image from "next/image";
import React from "react";
import alessandro from "@/components/public/7b374c55-9627-4add-a25a-261f1d4442ef_large.jpg";
import { useTranslations } from "next-intl";
function Cta() {
  const t = useTranslations("HomePage");
  return (
    <div className="flex flex-col items-center justify-center space-y-4 py-3">
      <Image
        src={alessandro}
        alt="foto di Alessandro Bianchetti personal trainer"
        height={300}
        width={300}
        loading="lazy"
        className="rounded-2xl m-auto opacity-70 mb-6"
      />
      <a
        href="https://www.miodottore.it/alessandro-bianchetti/chinesiologo-posturologo/roma"
        target="_blank"
        className="px-4 py-3 bg-[var(--tertiary-color)] rounded-xl hover:bg-red-800 transition font-bold w-60 text-center text-2xl cursor-pointer"
      >
        {t("cta")}
      </a>
    </div>
  );
}

export default Cta;
