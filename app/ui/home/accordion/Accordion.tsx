import { useState } from "react";
import { accordionData } from "../../navbar/accordionData";
import { Plus, Minus } from "lucide-react";

export default function Accordion() {
  const [openItems, setOpenItems] = useState<number[]>([0]);

  const toggleItem = (index: number) => {
    setOpenItems(
      (prevOpenItems) =>
        prevOpenItems.includes(index)
          ? prevOpenItems.filter((item) => item !== index)
          : [index] // Chiude gli altri accordion, lasciando aperto solo quello cliccato
    );
  };

  return (
    <div>
      {accordionData.map((item, index) => (
        <div
          key={index}
          className="border border-[var(--tertiary-color)] rounded-lg overflow-hidden"
        >
          <button
            className="flex justify-between items-center w-full p-4 text-left focus:outline-none transition-all"
            onClick={() => toggleItem(index)}
            aria-expanded={openItems.includes(index)}
          >
            <span className="flex items-center justify-center w-6 h-6 text-[var(--tertiary-color)]">
              {openItems.includes(index) ? (
                <Minus size={16} />
              ) : (
                <Plus size={16} />
              )}
            </span>
            <span className="m-4 font-medium w-full">{item.title}</span>
          </button>
          {/* Contenuto con transizione */}
          <div
            className={`transition-[max-height,opacity] duration-300 ease-in-out overflow-hidden ${
              openItems.includes(index)
                ? "max-h-40 opacity-100"
                : "max-h-0 opacity-0"
            }`}
          >
            <div className="p-4 ">
              <p>{item.content}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
