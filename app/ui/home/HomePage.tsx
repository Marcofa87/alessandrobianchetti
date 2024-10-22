"use client";
import Image from "next/image";

import gymMainImage from "@/components/public/victor-freitas-WvDYdXDzkhs-unsplash.jpg";
import Accordion from "./accordion/Accordion";

export default function HomePage() {
  return (
    <div className="w-3/4 md:max-w-3xl mx-auto space-y-2">
      <Image
        src={gymMainImage}
        alt="immagine della palestra"
        width={400}
        className="m-auto w-2/3 mb-12"
      />
      <Accordion />
    </div>
  );
}
