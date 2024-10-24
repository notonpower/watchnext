const SkeletonCard = () => {
    return (
      <div className="w-[450px]">
        <div className="relative">
          <div className="absolute top-2 left-2 z-10">
            <div className="bg-black/70 backdrop-blur-sm rounded-lg px-3 py-1">
              <div className="h-8 w-8 bg-gray-700 rounded animate-pulse" />
            </div>
          </div>
          <div className="w-full h-[253px] bg-gray-800 rounded-lg animate-pulse" />
          <div className="absolute bottom-3 left-3 flex gap-2">
            <div className="h-[42px] w-[100px] bg-black/60 backdrop-blur-sm rounded-full animate-pulse" />
            <div className="h-[42px] w-[100px] bg-black/60 backdrop-blur-sm rounded-full animate-pulse" />
          </div>
        </div>
      </div>
    );
  };
  
  export default SkeletonCard;