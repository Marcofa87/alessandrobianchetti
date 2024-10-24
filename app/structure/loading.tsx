import React from "react";

export default function LoadingSkeleton() {
  return (
    <div className="flex flex-col gap-4 p-4">
      {/* Sezione per avatar e testo */}
      <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
        {/* Skeleton circolare per l'avatar */}
        <div className="h-16 w-16 md:h-24 md:w-24 bg-gray-300 rounded-full animate-pulse"></div>

        {/* Skeleton per il testo */}
        <div className="flex flex-col gap-2 w-full">
          <div className="h-4 w-3/4 md:w-1/2 bg-gray-300 rounded animate-pulse"></div>
          <div className="h-4 w-1/2 md:w-1/3 bg-gray-300 rounded animate-pulse"></div>
        </div>
      </div>

      {/* Skeleton rettangolare più grande */}
      <div className="h-32 w-full md:h-48 bg-gray-300 rounded animate-pulse"></div>
    </div>
  );
}
