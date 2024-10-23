import StructurePageLayout from "./structureLayoutPage/StructurePageLayout";
import gym1 from "@/components/public/samuel-girven-CeJuNGDjHAM-unsplash.jpg";
import gym2 from "@/components/public/scott-webb-U5kQvbQWoG0-unsplash.jpg";
import gym3 from "@/components/public/meghan-holmes-wy_L8W0zcpI-unsplash.jpg";
import gym4 from "@/components/public/victor-freitas-WvDYdXDzkhs-unsplash.jpg";

export default function page() {
  return (
    <>
      <StructurePageLayout structureImage={gym1} />
      <StructurePageLayout structureImage={gym2} />
      <StructurePageLayout structureImage={gym3} />
      <StructurePageLayout structureImage={gym4} />
    </>
  );
}
