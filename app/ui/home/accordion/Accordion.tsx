import { useState } from "react";
import { accordionData } from "../../navbar/accordionData";
import { Plus, Minus } from "lucide-react";
export default function Accordion() {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems((prevOpenItems) =>
      prevOpenItems.includes(index)
        ? prevOpenItems.filter((item) => item !== index)
        : [...prevOpenItems, index]
    );
  };
  return (
    <div>
      {accordionData.map((item, index) => (
        <div
          key={index}
          className="border border-[var(--color)] rounded-lg overflow-hidden"
        >
          <button
            className="flex justify-between items-center w-full p-4 text-left hover:bg-gray-50 focus:outline-none"
            onClick={() => toggleItem(index)}
            aria-expanded={openItems.includes(index)}
          >
            <span className="flex items-center justify-center w-6 h-6 ">
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
