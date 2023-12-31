import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleNav = () => {
    setIsNavOpen(!isNavOpen);
  };
  return (
    <div className="max-w-[1050px] mx-auto h-[80px] flex justify-between items-center text-[#ffffffbf] px-4">
      <h3 className="font-body font-['Inter'] text-4xl font-bold text-neutral-200 -m-1.5 p-1.5">
        mz<span className="text-[#5c62ec]">.</span>
      </h3>

      <ul className="hidden md:flex text-lg">
        <li className="px-8">
          <Link to="projects" smooth={true} duration={500}>
            Projects
          </Link>
        </li>
        <li className="px-8">
          <Link to="technologies" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className="px-8">
          <Link to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
      </ul>

      <div onClick={handleNav} className="z-10 md:hidden">
        {!isNavOpen ? <FaBars /> : <FaTimes />}
      </div>

      <ul
        className={
          !isNavOpen
            ? "ease-in-out duration-500 fixed left-[-100%]"
            : "fixed left-0 top-0 w-[70%] h-full border-r border-r-gray-900 bg-[#0f1623] ease-in-out duration-500 z-10"
        }
      >
        <li className="p-4 border-b border-gray-600">
          <Link
            onClick={handleNav}
            className="block"
            to="projects"
            smooth={true}
            duration={500}
          >
            Projects
          </Link>
        </li>
        <li className="p-4 border-b border-gray-600">
          <Link
            onClick={handleNav}
            className="block"
            to="technologies"
            smooth={true}
            duration={500}
          >
            Skills
          </Link>
        </li>
        <li className="p-4 border-b border-gray-600">
          <Link
            onClick={handleNav}
            className="block"
            to="about"
            smooth={true}
            duration={500}
          >
            About
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
