import Image from "next/image";
import englishFlag from "@/components/public/united-kingdom.png";
import italianFlag from "@/components/public/italy.png";
import { useLanguage } from "@/components/context/LanguageContext";

export default function LanguageFlags() {
  const { locale, toggleLocale } = useLanguage();
  return (
    <div className="absolute left-1/2 transform -translate-x-1/2 flex space-x-4">
      <button onClick={toggleLocale}>
        {locale === "it" ? (
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
