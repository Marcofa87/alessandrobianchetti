import { useState } from "react";
import { useAccordionData } from "./accordionData";
import { Plus, Minus } from "lucide-react";

export default function Accordion() {
  const [openItems, setOpenItems] = useState<number[]>([0]);
  const accordionData = useAccordionData();
  const toggleItem = (index: number) => {
    setOpenItems(
      (prevOpenItems) =>
        prevOpenItems.includes(index)
          ? prevOpenItems.filter((item) => item !== index)
          : [index] // Chiude gli altri accordion, lasciando aperto solo quello cliccato
    );
  };

  return (
    <div className="p-8 md:max-w-5xl m-auto">
      {accordionData.map((item, index) => (
        <div
          key={index}
          className="border-y border-[var(--background)] rounded-lg first:border-t-0"
        >
          <button
            className="flex justify-between items-center w-full p-4 text-left focus:outline-none transition-all"
            onClick={() => toggleItem(index)}
            aria-expanded={openItems.includes(index)}
          >
            <span className="flex items-center justify-center w-6 h-6 text-[var(--tertiary-color)]">
              {openItems.includes(index) ? (
                <Minus size={22} />
              ) : (
                <Plus size={22} />
              )}
            </span>
            <span className="m-4 text-xl font-medium w-full flex items-center gap-2">
              {item.title}
            </span>
          </button>
          <div
            className={`transition-all duration-300 ease-in-out ${
              openItems.includes(index)
                ? "opacity-100"
                : "h-0 opacity-0 overflow-hidden"
            }`}
          >
            <div className="p-4">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <item.Icon size={24} />
                </div>
                <p className="text-lg">{item.content}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
