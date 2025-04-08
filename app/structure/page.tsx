// app/structure/page.tsx
import StructurePageLayout from "@/components/ui/structureLayoutPage/StructurePageLayout";
import { useStructureData } from "@/components/ui/structureLayoutPage/structureData";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Servizi di Allenamento - Alessandro Bianchetti Personal Trainer",
  description:
    "Scopri i servizi di allenamento di Alessandro Bianchetti, personal trainer a Roma. Allenamento isotonico, funzionale e posturale.",
  keywords: [
    "servizi personal trainer",
    "allenamento isotonico",
    "allenamento funzionale",
    "posturale Roma",
    "allenamento personalizzato",
    "allenamento a Roma",
    "personal trainer Roma",
  ],
  /* openGraph: {
    title: "Servizi di Allenamento - Alessandro Bianchetti",
    description:
      "Alessandro Bianchetti offre servizi di allenamento personalizzati: allenamento isotonico, funzionale e posturale.",
    url: "https://alessandrobianchetti.vercel.app/structure",
    images: [
      {
        url: "https://URL_dell_immagine_di_preview_servizi",
        width: 800,
        height: 600,
        alt: "Servizi di Alessandro Bianchetti",
      },
    ],
  }, */
};

export default function Page() {
  const structureSections = useStructureData();

  return <StructurePageLayout sections={structureSections} />;
}
