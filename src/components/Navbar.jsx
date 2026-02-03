import React from "react";
import Logo from "../assets/logo.png";
import SearchIcon from "../assets/search_icon.png";
import ProfileIcon from "../assets/profile-icon.png";
import CartIcon from "../assets/cart-icon.png";
import { NavLink, Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="flex items-center justify-between  w-[80%]">
      <div>
        <Link to="/">
          <img src={Logo} alt="Logo" />
        </Link>
      </div>
      <div className="flex gap-10">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `pb-1 border-b-2  transition-all duration-700 ${
              isActive
                ? "border-black"
                : "border-transparent hover:border-black"
            }`
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/collection"
          className={({ isActive }) =>
            `pb-1 border-b-2 transition-all duration-700 ${
              isActive
                ? "border-black"
                : "border-transparent hover:border-black"
            }`
          }
        >
          Collection
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            `pb-1 border-b-2 transition-all duration-700 ${
              isActive
                ? "border-black"
                : "border-transparent hover:border-black"
            }`
          }
        >
          About
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            `pb-1 border-b-2 transition-all duration-700 ${
              isActive
                ? "border-black"
                : "border-transparent hover:border-black"
            }`
          }
        >
          Contact
        </NavLink>
      </div>

      <div className="flex gap-10">
        <img src={SearchIcon} alt="Search Icon" className="cursor-pointer" />
        <img src={ProfileIcon} alt="Profile Icon" className="cursor-pointer" />
        <img src={CartIcon} alt="CartIcon" className="cursor-pointer" />
      </div>
    </nav>
  );
};

export default Navbar;
