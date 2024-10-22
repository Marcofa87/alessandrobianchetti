import Image from "next/image";
import englishFlag from "@/components/public/united-kingdom.png";
import italianFlag from "@/components/public/italy.png";
export default function LanguageFlags() {
  return (
    <div className="absolute left-1/2 transform -translate-x-1/2 flex space-x-4">
      <button>
        <Image
          src={italianFlag}
          alt="italian flag language"
          width={32}
          height={32}
        />
      </button>
      <button>
        <Image
          src={englishFlag}
          alt="english flag language"
          width={32}
          height={32}
        />
      </button>
    </div>
  );
}
