import React from "react";
import BannerImage from "../assets/banner.png";
const BannerSection = () => {
  return (
    <div className="flex items-center justify-between  border border-gray-400">
      <div className="ml-28">
        <p className="flex items-center gap-2 text-[18px]">
          <span className="w-8 h-0.5 bg-black"></span>
          OUR BESTSELLERS
        </p>

        <h1 className="text-[60px]">Latest Arrivals</h1>
        <p className="flex items-center gap-2 text-[18px]">
          SHOP NOW
          <span className="w-8 h-0.5 bg-black"></span>
        </p>
      </div>
      <div className="w-lg">
        <img src={BannerImage} alt="Banner Image" />
      </div>
    </div>
  );
};

export default BannerSection;
