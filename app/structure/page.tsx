import StructurePageLayout from "@/components/ui/structureLayoutPage/StructurePageLayout";
import { useStructureData } from "@/components/ui/structureLayoutPage/structureData";

export default function Page() {
  const structureSections = useStructureData();

  return (
    <>
      <StructurePageLayout sections={structureSections} />
    </>
  );
}
