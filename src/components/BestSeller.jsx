import React from "react";
import ProductCard from "./ProductCard";

const BestSeller = ({ products }) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex flex-col items-center justify-center gap-5">
        <p className="flex items-center gap-2 text-[35px]">
          BEST SELLERS
          <span className="w-8 h-0.5 bg-black"></span>
        </p>

        <p className="text-[14px]">
          Our best sellers loved by thousands—timeless designs, unbeatable
          quality, and pieces customers keep coming back for.
        </p>

        <div className="grid grid-cols-5 gap-6">
          {products.map((item) => (
            <ProductCard key={item._id} product={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BestSeller;
