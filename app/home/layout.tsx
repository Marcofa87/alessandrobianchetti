"use client";

import Image from "next/image";
import alessandro from "@/components/public/7b374c55-9627-4add-a25a-261f1d4442ef_large.jpg";

import homePageGym from "@/components/public/homeGym.webp";
const MapLocation = dynamic(
  () => import("@/components/ui/locationmap/MapLocation")
);
import Accordion from "@/components/ui/accordion/Accordion";
import { useTranslations } from "next-intl";
import dynamic from "next/dynamic";

export default function HomePage() {
  const t = useTranslations("HomePage");
  return (
    <div className="w-full mx-auto space-y-12 relative">
      <div className="relative w-full h-96">
        <Image
          src={homePageGym}
          alt="immagine della palestra kamehouse"
          layout="fill"
          objectFit="cover"
          className="opacity-40"
          loading="eager"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <h1 className="absolute inset-0 top-28 md:text-6xl md:leading-normal text-center font-black 2xl:w-5/6 m-auto">
          {t("title")}
        </h1>
      </div>
      <Accordion />
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
          rel="noopener noreferrer"
          className="px-4 py-3 bg-[var(--tertiary-color)] rounded-xl hover:bg-red-800 transition font-bold w-60 text-center text-2xl cursor-pointer"
        >
          {t("cta")}
        </a>
      </div>

      <MapLocation />
    </div>
  );
}
