import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.png";
const Footer = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-10 w-[80%] mt-15">
      <div className="flex items-center justify-between gap-20  ">
        <div className="w-[40%] flex flex-col gap-5">
          <img src={Logo} alt="Logo" className="w-40" />
          <p className="text-[14px]">
            We create modern fashion for men and kids, offering premium
            T-shirts, stylish shirts, and comfortable kids wear designed for
            everyday life. Our collections focus on quality, fit, durability,
            and trend-driven designs to deliver confidence, comfort, and style
            for every growing family everywhere today.
          </p>
        </div>
        <div className="flex justify-between w-[40%]">
          <div className="flex flex-col gap-2">
            <p className="font-semibold">COMPANY</p>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/collection">Collection</Link>
            <Link to="/contact">Contact</Link>
          </div>
          <div className="flex flex-col gap-3">
            <p className="font-semibold">GET IN TOUCH</p>
            <p>+1-212-456-7890</p>
            <p>aditya.dev@gmail.com</p>
          </div>
        </div>
      </div>
      <hr className="w-full" />
      <div>
        <p>Copyright 2024 © AdityaRai.dev - All Right Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
