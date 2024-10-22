"use client";
import Image from "next/image";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import gymMainImage from "@/components/public/victor-freitas-WvDYdXDzkhs-unsplash.jpg";
type AccordionItem = {
  title: string;
  content: string;
};

const accordionData: AccordionItem[] = [
  {
    title: "La mia storia",
    content: "Qui puoi inserire la tua storia personale e professionale...",
  },
  {
    title: "Formazione",
    content: "Dettagli sulla tua formazione, certificazioni, e qualifiche...",
  },
  {
    title: "Lavoro/Servizi",
    content:
      "Descrizione dei servizi offerti e della tua esperienza lavorativa...",
  },
];

export default function HomePage() {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems((prevOpenItems) =>
      prevOpenItems.includes(index)
        ? prevOpenItems.filter((item) => item !== index)
        : [...prevOpenItems, index]
    );
  };

  return (
    <div className="w-3/4 md:max-w-3xl mx-auto space-y-2">
      <Image
        src={gymMainImage}
        alt="immagine della palestra"
        width={400}
        className="m-auto w-2/3 mb-12"
      />
      {accordionData.map((item, index) => (
        <div
          key={index}
          className="border border-[var(--tertiary-color)] rounded-lg overflow-hidden"
        >
          <button
            className="flex justify-between items-center w-full p-4 text-left hover:bg-gray-50 focus:outline-none"
            onClick={() => toggleItem(index)}
            aria-expanded={openItems.includes(index)}
          >
            <span className="flex items-center justify-center w-6 h-6 rounded-full border border-[var(--tertiary-color)]">
              {openItems.includes(index) ? (
                <Minus size={16} />
              ) : (
                <Plus size={16} />
              )}
            </span>
            <span className="m-4 font-medium w-full ">{item.title}</span>
          </button>
          {openItems.includes(index) && (
            <div className="p-4 border-t border-[var(--tertiary-color)]">
              <p>{item.content}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
