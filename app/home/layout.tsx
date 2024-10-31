"use client";
import Image from "next/image";

import gymMainImage from "@/components/public/victor-freitas-WvDYdXDzkhs-unsplash.jpg";
import MapLocation from "@/components/ui/locationmap/MapLocation";
import Accordion from "@/components/ui/accordion/Accordion";

export default function HomePage() {
  return (
    <div className="w-3/4 md:max-w-3xl mx-auto space-y-12">
      <h1 className="text-center">Alessandro Bianchetti Personal Trainer</h1>
      <Image
        src={gymMainImage}
        alt="immagine della palestra"
        width={500}
        className="m-auto w-2/3 mb-12"
      />
      <Accordion />
      <MapLocation />
    </div>
  );
}
