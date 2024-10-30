import {
  Dumbbell,
  GraduationCap,
  BookOpenText,
  LucideIcon,
} from "lucide-react";

// Specifica il tipo `Icon` come un componente che accetta solo le icone da `lucide-react`.
type AccordionItem = {
  title: string;
  content: string;
  Icon: LucideIcon; // Cambiato a `LucideIcon`
};

export const accordionData: AccordionItem[] = [
  {
    title: "La mia storia",
    content: "Qui puoi inserire la tua storia personale e professionale...",
    Icon: BookOpenText,
  },
  {
    title: "Formazione",
    content: "Dettagli sulla tua formazione, certificazioni, e qualifiche...",
    Icon: GraduationCap,
  },
  {
    title: "Lavoro/Servizi",
    content:
      "Descrizione dei servizi offerti e della tua esperienza lavorativa...",
    Icon: Dumbbell,
  },
];
