import React from "react";

const EmailSection = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-5 mt-15">
      <p className="text-[20px] font-semibold">Subscribe now & get 20% off</p>
      <p className="text-[14px]">
        Sign up today for exclusive updates, new arrivals, and 20% off your
        first order.
      </p>
      <div>
        <input
          type="email"
          placeholder="Enter your email id"
          className="border-r-0 border-t border-l border-b outline-none p-2"
        />
        <button className=" p-2.5 bg-black text-white cursor-pointer">
          SUBSCRIBE
        </button>
      </div>
    </div>
  );
};

export default EmailSection;
