import React from "react";

const ProductSkeleton = () => {
  return (
    <div>
      <div className="h-40 w-full bg-gray-200 rounded-t-md animate-pulse"></div>
      <div className="p-4 flex justify-between items-center">
        <div className="flex flex-col space-y-2">
          <div className="h-4 bg-gray-200 rounded animate-pulse"></div>
          <div className="h-3 bg-gray-200 rounded animate-pulse"></div>
          <div className="h-2 bg-gray-200 rounded animate-pulse"></div>
        </div>
        <div className="flex flex-col space-y-2">
          <div className="h-8 bg-gray-200 rounded animate-pulse"></div>
          <div className="h-6 bg-gray-200 rounded animate-pulse"></div>
        </div>
      </div>
    </div>
  );
};

export default ProductSkeleton;
