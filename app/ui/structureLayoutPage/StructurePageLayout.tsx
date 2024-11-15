import Image from "next/image";
import { StructureSection, useStructureData } from "./structureData";
import { useTranslations } from "next-intl";

export interface StructurePageLayoutProps {
  sections: StructureSection[];
}

export default function StructurePageLayout({}: StructurePageLayoutProps) {
  const t = useTranslations("Structure");
  const structureSections = useStructureData();

  return (
    <div className="container mx-auto py-12">
      <h1 className="pb-24 text-center">{t("title")}</h1>
      {structureSections.map((section, index) => (
        <section key={section.id} className="p-6 mb-12">
          {/* Titolo centrale */}
          <h2 className="text-center pb-16">{section.title}</h2>

          {/* Contenitore immagine e contenuto con flex */}
          <div
            className={`md:flex md:items-center ${
              index % 2 === 1 ? "md:flex-row-reverse" : ""
            }`}
          >
            {/* Immagine */}
            <div className="md:w-2/3 flex justify-center items-center ">
              <div className="relative w-[350px] h-[250px]">
                <Image
                  src={section.image.src}
                  alt={section.image.alt}
                  fill
                  className="object-cover rounded-3xl p-4"
                  sizes="(max-width: 768px) 100vw, 500px"
                />
              </div>
            </div>

            {/* Contenuto */}
            <div className="md:w-2/3">
              <p className="px-8 mt-8 mx-auto text-center lg:text-xxl">
                {section.content}
              </p>
            </div>
          </div>
        </section>
      ))}
    </div>
  );
}
