const Loading = () => {
  const numSkeletons = 3;

  return (
    <div className="w-full max-w-7xl mx-auto p-4 ">
      {Array.from({ length: numSkeletons }).map((_, index) => (
        <div key={index} className="flex flex-col md:flex-row gap-6 mt-40">
          {/* Image skeleton */}
          <div className="w-full md:w-1/2 h-64 md:h-80 bg-gray-200 animate-pulse rounded-lg"></div>

          {/* Content skeleton */}
          <div className="w-full md:w-1/2 space-y-4">
            {/* Title skeleton */}
            <div className="h-8 bg-gray-200 rounded-lg w-3/4 animate-pulse"></div>

            {/* Text lines skeleton */}
            <div className="space-y-3">
              <div className="h-4 bg-gray-200 rounded w-full animate-pulse"></div>
              <div className="h-4 bg-gray-200 rounded w-4/5 animate-pulse"></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Loading;
