import StructurePageLayout from "./structureLayoutPage/StructurePageLayout";
import { structureSections } from "./structureLayoutPage/structureData";

export default function Page() {
  return (
    <>
      <StructurePageLayout sections={structureSections} />
    </>
  );
}
