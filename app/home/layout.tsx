"use client";
import Image from "next/image";

import gymMainImage from "@/components/public/victor-freitas-WvDYdXDzkhs-unsplash.jpg";
import MapLocation from "@/components/ui/locationmap/MapLocation";
import Accordion from "@/components/ui/accordion/Accordion";

export default function HomePage() {
  return (
    <div className="w-full mx-auto space-y-12 relative">
      <div className="relative">
        <Image
          src={gymMainImage}
          alt="immagine della palestra"
          width={500}
          className="m-auto w-full h-64 opacity-50"
        />
        <h1 className="absolute inset-0 top-20 text-center  md:text-5xl font-bold">
          Alessandro Bianchetti Personal Trainer
        </h1>
      </div>
      <Accordion />
      <MapLocation />
    </div>
  );
}
