import React from "react";
import ExchangeIcon from "../assets/exchange_icon.png";
import QualityIcon from "../assets/quality_icon.png";
import SupportIcon from "../assets/support_img.png";
const PolicySection = () => {
  return (
    <div className="flex items-center justify-center gap-40 mt-15">
      <div className="flex flex-col items-center justify-center gap-3">
        <img src={ExchangeIcon} alt="Exchange Icon" className="w-8 h-8" />
        <p className="text-[12px]">Easy Exchange Policy</p>
        <p className="text-[12px]">We offer hassle free exchange policy</p>
      </div>
      <div className="flex flex-col items-center justify-center gap-3">
        <img src={QualityIcon} alt="Quality Icon" className="w-8 h-8" />
        <p className="text-[12px]">7 Days Return Policy</p>
        <p className="text-[12px]">We provide 7 days free return policy</p>
      </div>
      <div className="flex flex-col items-center justify-center gap-3">
        <img src={SupportIcon} alt="Support Icon" className="w-8 h-8" />
        <p className="text-[12px]">Best Customer Support</p>
        <p className="text-[12px]">We provide 24/7 customer support</p>
      </div>
    </div>
  );
};

export default PolicySection;
