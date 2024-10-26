// components/StructurePageLayout.tsx
import Image from "next/image";
import { StructureSection } from "./structureData";

export interface StructurePageLayoutProps {
  sections: StructureSection[];
}

export default function StructurePageLayout({
  sections,
}: StructurePageLayoutProps) {
  return (
    <div className="container mx-auto py-12">
      {sections.map((section) => (
        <section
          key={section.id}
          className="p-6 md:flex md:items-center md:even:flex-row-reverse mb-12"
        >
          <div className="md:w-1/2">
            <Image
              src={section.image.src}
              alt={section.image.alt}
              width={section.image.width}
              height={section.image.height}
              className="m-auto p-4 rounded-3xl"
            />
          </div>
          <div className="md:w-2/3">
            <p className="px-6 mt-8 mx-auto max-w-96 text-center md:text-left">
              {section.text}
            </p>
          </div>
        </section>
      ))}
    </div>
  );
}
