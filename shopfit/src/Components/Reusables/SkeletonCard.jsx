import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const SkeletonCard = () => {
  return (
    <div className="bg-[#ffffff] w-[200px] sm:w-[300px] shadow-lg rounded-2xl p-3 max-w-sm mx-auto text-sm sm:text-base space-y-3">
      {/* Image */}
      <Skeleton height={160} className="rounded-xl" />

      {/* Title */}
      <Skeleton height={20} width="80%" />

      {/* Rating */}
      <div className="flex gap-1">
        {Array(5)
          .fill()
          .map((_, i) => (
            <Skeleton key={i} circle width={18} height={18} />
          ))}
      </div>

      {/* Description */}
      <Skeleton count={2} height={12} />

      {/* Buttons */}
      <div className="flex justify-between gap-2 mt-2">
        <Skeleton height={36} width="75%" borderRadius={12} />
        <Skeleton height={36} width="20%" borderRadius={12} />
      </div>
    </div>
  );
};

export default SkeletonCard;
