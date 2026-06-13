const ShimmerCard = () => (
  <div className="m-4 w-[280px] h-[400px] bg-white rounded-2xl overflow-hidden shadow-md border border-gray-100 p-5 flex flex-col gap-4 animate-pulse">
    <div className="w-full h-40 bg-gray-200 rounded-xl"></div>
    <div className="h-6 bg-gray-200 rounded w-3/4"></div>
    <div className="h-4 bg-gray-200 rounded w-1/2"></div>
    <div className="flex justify-between items-center mt-2">
      <div className="h-6 bg-gray-200 rounded w-12"></div>
      <div className="h-6 bg-gray-200 rounded w-20"></div>
    </div>
    <div className="h-10 bg-gray-200 rounded-xl w-full mt-auto"></div>
  </div>
);

const Shimmer = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 my-8" data-testid="shimmer">
      {/* Shimmer Hero Banner Skeleton */}
      <div className="w-full h-48 bg-gray-100 rounded-2xl animate-pulse mb-8 flex flex-col justify-center items-center gap-3 border border-gray-100">
        <div className="h-8 bg-gray-200 rounded w-1/3"></div>
        <div className="h-4 bg-gray-200 rounded w-1/4"></div>
        <div className="h-12 bg-gray-200 rounded-full w-1/2 mt-2"></div>
      </div>

      {/* Shimmer Cards Grid */}
      <div className="flex flex-wrap justify-center">
        {Array(8)
          .fill("")
          .map((_, i) => (
            <ShimmerCard key={i} />
          ))}
      </div>
    </div>
  );
};

export default Shimmer;
