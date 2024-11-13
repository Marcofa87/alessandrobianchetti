import gym1 from "@/components/public/meghan-holmes-wy_L8W0zcpI-unsplash.jpg";
import gym2 from "@/components/public/scott-webb-U5kQvbQWoG0-unsplash.jpg";
import gym3 from "@/components/public/samuel-girven-CeJuNGDjHAM-unsplash.jpg";
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
        src: gym1,
        width: 350,
        height: 250,
        alt: "Sala pesi moderna e attrezzata",
      },
      title: t("services.0.title"),
      content: t("services.0.content"),
    },
    {
      id: 2,
      image: {
        src: gym2,
        width: 350,
        height: 250,
        alt: "Area cardio con tapis roulant e cyclette",
      },
      title: t("services.1.title"),
      content: t("services.1.content"),
    },
    {
      id: 3,
      image: {
        src: gym3,
        width: 350,
        height: 250,
        alt: "Posturale",
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
        alt: "Zona pesi liberi e attrezzature",
      },
      title: t("services.3.title"),
      content: t("services.3.content"),
    },
  ];
  return structureSections;
};
