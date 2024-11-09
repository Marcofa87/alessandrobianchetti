import Image from "next/image";
import englishFlag from "@/components/public/united-kingdom.png";
import italianFlag from "@/components/public/italy.png";
import useToggle from "@/components/hooks/useToggle";

export default function LanguageFlags() {
  const { isOpen, toggleMenu } = useToggle();
  return (
    <div className="absolute left-1/2 transform -translate-x-1/2 flex space-x-4">
      <button onClick={toggleMenu}>
        {isOpen ? (
          <Image
            src={italianFlag}
            alt="italian flag language"
            width={24}
            height={24}
          />
        ) : (
          <Image
            src={englishFlag}
            alt="english flag language"
            width={24}
            height={24}
          />
        )}
      </button>
    </div>
  );
}
