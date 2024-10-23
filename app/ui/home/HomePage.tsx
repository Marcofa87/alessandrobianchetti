"use client";
import Image from "next/image";

import gymMainImage from "@/components/public/victor-freitas-WvDYdXDzkhs-unsplash.jpg";
import Accordion from "./accordion/Accordion";
import MapLocation from "./locationmap/MapLocation";

export default function HomePage() {
  return (
    <div className="w-3/4 md:max-w-3xl mx-auto space-y-12">
      <h1 className="text-center text-3xl">
        Alessandro Bianchetti Personal Trainer
      </h1>
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
