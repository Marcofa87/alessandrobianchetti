import functional from "@/components/public/WhatsApp Image 2024-11-14 at 20.24.32.jpeg";
import isotonic from "@/components/public/funzionale.png";
import postural from "@/components/public/WhatsApp Image 2024-11-14 at 20.29.25.jpeg";
import posturalCheck from "@/components/public/WhatsApp Image 2024-11-14 at 20.41.00.jpeg";
import { StaticImageData } from "next/image";
import { useTranslations } from "next-intl";

export interface StructureImage {
  src: StaticImageData;
  alt: string;
}

export interface StructureSection {
  id: number;
  image: StructureImage;
  title: string;
  content: string;
}

export const useStructureData = () => {
  const t = useTranslations("Structure");
  const structureSections: StructureSection[] = [
    {
      id: 1,
      image: {
        src: functional,
        alt: "Pesi per allenamento funzionale",
      },
      title: t("services.0.title"),
      content: t("services.0.content"),
    },
    {
      id: 2,
      image: {
        src: isotonic,
        alt: "Pesi per allenamento isotonico ",
      },
      title: t("services.1.title"),
      content: t("services.1.content"),
    },
    {
      id: 3,
      image: {
        src: postural,
        alt: "attrezzatura per posturale",
      },
      title: t("services.2.title"),
      content: t("services.2.content"),
    },
    {
      id: 4,
      image: {
        src: posturalCheck,
        alt: "visita posturale",
      },
      title: t("services.3.title"),
      content: t("services.3.content"),
    },
  ];
  return structureSections;
};
