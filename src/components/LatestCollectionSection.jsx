import React from "react";
import ProductCard from "./ProductCard";

const LatestCollectionSection = ({ products }) => {
  const firstRow = products.slice(0, 5);
  const secondRow = products.slice(5, 10);
  return (
    <div className="flex flex-col items-center justify-center gap-10">
      <div className="flex flex-col items-center justify-center gap-5">
        <p className="flex items-center gap-2 text-[35px]">
          LATEST COLLECTIONS
          <span className="w-8 h-0.5 bg-black"></span>
        </p>

        <p className="text-[14px]">
          Discover our latest collection crafted with modern design, premium
          quality, and styles made to elevate your everyday look.
        </p>
      </div>
      <div className="flex flex-col gap-10">
        <div className="grid grid-cols-5 gap-6">
          {firstRow.map((item) => (
            <ProductCard key={item._id} product={item} />
          ))}
        </div>
        <div className="grid grid-cols-5 gap-6">
          {secondRow.map((item) => (
            <ProductCard key={item._id} product={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LatestCollectionSection;
