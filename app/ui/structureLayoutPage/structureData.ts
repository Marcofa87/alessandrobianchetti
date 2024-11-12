import gym1 from "@/components/public/meghan-holmes-wy_L8W0zcpI-unsplash.jpg";
import gym2 from "@/components/public/scott-webb-U5kQvbQWoG0-unsplash.jpg";
import gym3 from "@/components/public/samuel-girven-CeJuNGDjHAM-unsplash.jpg";
import gym4 from "@/components/public/victor-freitas-WvDYdXDzkhs-unsplash.jpg";
import { StaticImageData } from "next/image";

export interface StructureImage {
  src: StaticImageData; // Cambiato da string a StaticImageData
  width: number;
  height: number;
  alt: string;
}

export interface StructureSection {
  id: number;
  image: StructureImage;
  title: string;
  text: string;
}

export const structureSections: StructureSection[] = [
  {
    id: 1,
    image: {
      src: gym1,
      width: 350,
      height: 250,
      alt: "Sala pesi moderna e attrezzata",
    },
    title: "Allenamento isotonico",
    text: "Nella parte di sala pesi tutto è strutturato per aumentare, migliorare, rinforzare e ultimo, ma non per ultimo, rassodare la muscolatura. Basta un rack, una panca, manubri e bilanciere per poter arrivare, con costanza, a ottimi risultati.",
  },
  {
    id: 2,
    image: {
      src: gym2,
      width: 350,
      height: 250,
      alt: "Area cardio con tapis roulant e cyclette",
    },
    title: "Allenamento funzionale",
    text: "Per aumentare l'attività cardiaca e il metabolismo. La presenza di kettlebell di varie misure, di corde e di palle mediche più altri , diabolici ma funzionali attrezzi, si possono combinare tra loro per aumentare le proprie performance e per sfogarsi dopo una lunga giornata di lavoro.",
  },
  {
    id: 3,
    image: {
      src: gym3,
      width: 350,
      height: 250,
      alt: "Posturale",
    },
    title: "Posturale",
    text: "Per aumentare la flessibilità , e migliorare la postura.",
  },
  {
    id: 4,
    image: {
      src: gym4,
      width: 350,
      height: 250,
      alt: "Zona pesi liberi e attrezzature",
    },
    title: "Visita Posturale",
    text: "Con la presenza di un lettino e di un filo a piombo si può fare una completa analisi posturale per analizzare, trovare e cercare di risolvere squilibri della nostra postura.",
  },
];
