import functional from "@/components/public/funzionale.png";
import isotonic from "@/components/public/isotonico.png";
import postural from "@/components/public/posturale.png";
import gym4 from "@/components/public/victor-freitas-WvDYdXDzkhs-unsplash.jpg";
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
        width: 500,
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
        width: 500,
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
        width: 500,
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
        width: 500,
        height: 250,
        alt: "visita posturale",
      },
      title: t("services.3.title"),
      content: t("services.3.content"),
    },
  ];
  return structureSections;
};
