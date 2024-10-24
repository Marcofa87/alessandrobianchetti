import { Suspense } from "react";
import StructurePageLayout from "./structureLayoutPage/StructurePageLayout";
import { structureSections } from "./structureLayoutPage/structureData";
import LoadingSkeleton from "./loading";

export default function Page() {
  return (
    <>
      <Suspense fallback={<LoadingSkeleton />}>
        <StructurePageLayout sections={structureSections} />
      </Suspense>
    </>
  );
}
