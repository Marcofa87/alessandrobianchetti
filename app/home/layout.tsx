"use client";

import Image from "next/image";

import gymMainImage from "@/components/public/pexels-victorfreitas-841130.jpg";
import MapLocation from "@/components/ui/locationmap/MapLocation";
import Accordion from "@/components/ui/accordion/Accordion";
import { useTranslations } from "next-intl";

export default function HomePage() {
  const t = useTranslations("HomePage");
  return (
    <div className="w-full mx-auto space-y-12 relative">
      <div className="relative w-full h-96">
        {" "}
        {/* Altezza fissa per il contenitore */}
        <Image
          src={gymMainImage}
          alt="immagine della palestra"
          layout="fill" // Riempe il contenitore
          objectFit="cover" // Adatta l’immagine
          quality={75} // Riduce la qualità per migliorare la velocità
          className="opacity-40"
        />
        <h1 className="absolute inset-0 top-20 text-center md:text-6xl lg:text-8xl font-black text-balance">
          {t("title")}
        </h1>
      </div>

      <Accordion />
      <MapLocation />
    </div>
  );
}
