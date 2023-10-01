import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleNav = () => {
    setIsNavOpen(!isNavOpen);
  };
  return (
    <div className="max-w-[1150px] mx-auto h-[80px] flex justify-between items-center text-[#ffffffbf] px-4">
      <p className="uppercase font-bold">
        Mukhammadkodir <br /> Zainabidinov
      </p>

      {/* Navbar */}
      <ul className="hidden md:flex text-lg">
        <li className="px-4">Projects</li>
        <li className="px-4">Technologies</li>
        <li className="px-4">About</li>
      </ul>

      {/* Hamburger Icon */}
      <div onClick={handleNav} className="z-10 md:hidden">
        {!isNavOpen ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile Menu */}
      <ul
        className={
          !isNavOpen
            ? "ease-in-out duration-500 fixed left-[-100%]"
            : "fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#0f1623] ease-in-out duration-500"
        }
      >
        <li className="p-4 border-b border-gray-600">Projects</li>
        <li className="p-4 border-b border-gray-600">Technologies</li>
        <li className="p-4 border-b border-gray-600">About</li>
      </ul>
    </div>
  );
};

export default Navbar;
