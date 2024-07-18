import React from "react";

const SkeletonProductCard = () => {
  return (
    <div className="rounded-lg bg-gray-200 animate-pulse">
      <div className="h-40 w-full bg-gray-300 rounded-t-lg"></div>
      <div className="p-4">
        <div className="h-4 bg-gray-400 rounded-full mb-2"></div>
        <div className="h-3 bg-gray-500 rounded mb-1"></div>
        <div className="h-4 bg-gray-200 rounded"></div>
      </div>
    </div>
  );
};

export default SkeletonProductCard;
