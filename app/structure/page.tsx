import StructurePageLayout from "@/components/ui/structureLayoutPage/StructurePageLayout";
import { structureSections } from "@/components/ui/structureLayoutPage/structureData";

export default function Page() {
  return (
    <>
      <StructurePageLayout sections={structureSections} />
    </>
  );
}
