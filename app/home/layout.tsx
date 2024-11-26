"use client";

import Image from "next/image";

import homePageGym from "@/components/public/homeGym.jpeg";
import MapLocation from "@/components/ui/locationmap/MapLocation";
import Accordion from "@/components/ui/accordion/Accordion";
import { useTranslations } from "next-intl";

export default function HomePage() {
  const t = useTranslations("HomePage");
  return (
    <div className="w-full mx-auto space-y-12 relative">
      <div className="relative w-full h-96">
        <Image
          src={homePageGym}
          alt="immagine della palestra"
          layout="fill"
          objectFit="cover"
          className="opacity-40"
          loading="eager"
        />
        <h1 className="absolute inset-0 top-20 text-center font-black text-balance 2xl:w-5/6 m-auto">
          {t("title")}
        </h1>
      </div>

      <Accordion />
      <MapLocation />
    </div>
  );
}
