// StructurePageLayout.tsx
import Image from "next/image";

interface ImportedImage {
  src: string;
  width: number;
  height: number;
}

interface StructureImageProps {
  structureImage: ImportedImage;
}

export default function StructurePageLayout({
  structureImage,
}: StructureImageProps) {
  return (
    <section className="p-6 md:flex md:items-center md:even:flex-row-reverse">
      <div className="md:w-1/2">
        <Image
          src={structureImage}
          alt="immagine della palestra"
          width={350}
          className="m-auto p-4 rounded-3xl"
        />
      </div>
      <div className="md:w-1/2">
        <p className="px-6 mt-8 max-w-prose mx-auto text-center md:text-left">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci
          possimus ducimus dignissimos tenetur quis perferendis voluptates
          dolore ex at quas ratione sequi neque nisi cum, ipsam, ab libero, quam
          esse?
        </p>
      </div>
    </section>
  );
}
