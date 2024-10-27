import StructurePageLayout from "../../ui/structureLayoutPage/StructurePageLayout";
import { structureSections } from "../../ui/structureLayoutPage/structureData";

export default function Page() {
  return (
    <>
      <StructurePageLayout sections={structureSections} />
    </>
  );
}
