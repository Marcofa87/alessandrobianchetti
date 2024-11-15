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
      {structureSections.map((section) => (
        <section
          key={section.id}
          className="p-6 md:flex md:items-center md:even:flex-row-reverse mb-12"
        >
          <div className="md:w-2/3 flex justify-center items-center">
            <div className="relative w-[400px] h-[250px]">
              <Image
                src={section.image.src}
                alt={section.image.alt}
                fill
                className="object-cover rounded-3xl p-4"
                sizes="(max-width: 768px) 100vw, 500px"
              />
            </div>
          </div>
          <div className="md:w-2/3">
            <h2 className="text-center py-8">{section.title}</h2>
            <p className="px-6 mt-8 mx-auto max-w-96 text-center">
              {section.content}
            </p>
          </div>
        </section>
      ))}
    </div>
  );
}
