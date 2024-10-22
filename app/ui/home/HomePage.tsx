"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

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
    <div className="w-full max-w-2xl mx-auto space-y-2">
      {accordionData.map((item, index) => (
        <div
          key={index}
          className="border border-gray-200 rounded-lg overflow-hidden"
        >
          <button
            className="flex justify-between items-center w-full p-4 text-left bg-white hover:bg-gray-50 focus:outline-none"
            onClick={() => toggleItem(index)}
            aria-expanded={openItems.includes(index)}
          >
            <span className="flex items-center justify-center w-6 h-6 rounded-full border border-gray-300">
              {openItems.includes(index) ? (
                <Minus size={16} />
              ) : (
                <Plus size={16} />
              )}
            </span>
            <span className=" m-4 font-medium w-full">{item.title}</span>
          </button>
          {openItems.includes(index) && (
            <div className="p-4 bg-white border-t border-gray-200">
              <p>{item.content}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
