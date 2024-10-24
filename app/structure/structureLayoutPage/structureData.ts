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
    text: "La nostra sala pesi è dotata delle più moderne attrezzature Technogym, progettate per garantire un allenamento efficace e sicuro. Con oltre 200mq di spazio dedicato, offriamo una vasta gamma di macchine isotoniche, pesi liberi e aree per l'allenamento funzionale.",
  },
  {
    id: 2,
    image: {
      src: gym2,
      width: 350,
      height: 250,
      alt: "Area cardio con tapis roulant e cyclette",
    },
    text: "L'area cardio è equipaggiata con tapis roulant di ultima generazione, cyclette, ellittiche e vogatori. Ogni postazione è dotata di schermo personale per rendere l'allenamento più piacevole e monitorare in tempo reale i propri progressi.",
  },
  {
    id: 3,
    image: {
      src: gym3,
      width: 350,
      height: 250,
      alt: "Sala corsi spaziosa e luminosa",
    },
    text: "La nostra sala corsi di 150mq ospita una varietà di attività di gruppo, dallo yoga al pilates, dal functional training allo zumba. Il pavimento ammortizzante e gli specchi a parete creano l'ambiente ideale per ogni tipo di lezione.",
  },
  {
    id: 4,
    image: {
      src: gym4,
      width: 350,
      height: 250,
      alt: "Zona pesi liberi e attrezzature",
    },
    text: "La nostra zona pesi liberi è completa di tutto il necessario per un allenamento intenso e efficace. Manubri, bilancieri e rack professionali sono a disposizione per soddisfare le esigenze di ogni atleta.",
  },
];
