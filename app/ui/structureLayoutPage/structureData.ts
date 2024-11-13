import functional from "@/components/public/funzionale.png";
import isotonic from "@/components/public/IMG-20241113-WA0012 2.jpg";
import postural from "@/components/public/2.png";
import gym4 from "@/components/public/output-onlinetools .png";
import { StaticImageData } from "next/image";
import { useTranslations } from "next-intl";

export interface StructureImage {
  src: StaticImageData;
  width: number;
  height: number;
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
        src: isotonic,
        width: 350,
        height: 250,
        alt: "Pesi per allenamento funzionale",
      },
      title: t("services.0.title"),
      content: t("services.0.content"),
    },
    {
      id: 2,
      image: {
        src: functional,
        width: 350,
        height: 250,
        alt: "Pesi per allenamento isotonico ",
      },
      title: t("services.1.title"),
      content: t("services.1.content"),
    },
    {
      id: 3,
      image: {
        src: postural,
        width: 350,
        height: 250,
        alt: "attrezzatura per posturale",
      },
      title: t("services.2.title"),
      content: t("services.2.content"),
    },
    {
      id: 4,
      image: {
        src: gym4,
        width: 350,
        height: 250,
        alt: "visita posturale",
      },
      title: t("services.3.title"),
      content: t("services.3.content"),
    },
  ];
  return structureSections;
};
