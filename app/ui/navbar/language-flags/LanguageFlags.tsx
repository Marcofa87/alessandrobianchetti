// src/app/ui/LanguageFlags.tsx
import Image from "next/image";
import englishFlag from "@/components/public/united-kingdom.png";
import italianFlag from "@/components/public/italy.png";
import { useLanguage } from "@/components/context/LanguageProvider";

export default function LanguageFlags() {
  const { locale, setLocale } = useLanguage();

  const handleLanguageChange = () => {
    setLocale(locale === "en" ? "it" : "en");
  };

  return (
    <div className="absolute left-1/2 transform -translate-x-1/2 flex space-x-4">
      <button onClick={handleLanguageChange}>
        <Image
          src={locale === "en" ? englishFlag : italianFlag}
          alt={
            locale === "en" ? "english flag language" : "italian flag language"
          }
          width={28}
          height={28}
        />
      </button>
    </div>
  );
}
