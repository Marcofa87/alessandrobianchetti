"use client";

import Image from "next/image";

import homePageGym from "@/components/public/homeGym.webp";
const MapLocation = dynamic(
  () => import("@/components/ui/locationmap/MapLocation")
);
import Accordion from "@/components/ui/accordion/Accordion";
import { useTranslations } from "next-intl";
import dynamic from "next/dynamic";
import Cta from "../ui/cta/cta";

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
      <Cta />
      <MapLocation />
    </div>
  );
}
