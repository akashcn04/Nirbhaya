import React, { useState } from "react";
import Icon2 from "../../public/assets/icon2.png";
import { Link } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa"; // For hamburger and close icons

function Navbar() {
  const [navOpen, setNavOpen] = useState(false);

  const toggleNav = () => {
    setNavOpen(!navOpen);
  };

  return (
    <div
      className="w-screen h-[80px] bg-slate-100 py-4 shadow-[0px_0px_20px_5px_white]"
      id="Nav"
    >
      <div className="flex justify-between items-center max-w-[1320px] mx-auto px-4 md:px-8 lg:px-12">
        {/* Logo section */}
        <div className="flex items-center gap-4">
          <img src={Icon2} alt="NIRBHAYA" className="w-[40px] md:w-[50px]" />
          <div className="font-semibold text-xl md:text-2xl lg:text-3xl">
            NIRBHAYA
          </div>
        </div>

        {/* Desktop Navbar links */}
        <div className="hidden md:flex gap-6 lg:gap-9 text-sm md:text-base lg:text-[18px]">
          <li className="list-none cursor-pointer duration-[0.5s] hover:scale-110">
            <Link
              to="/"
              onClick={() => window.location.reload()}
              className="font-semibold transition duration-[0.5s] transform hover:scale-105"
            >
              Home
            </Link>
          </li>
          <li className="list-none font-semibold transition duration-[0.5s] transform hover:scale-110 cursor-pointer">
            <Link
              to="about"
              smooth={true}
              duration={500}
              offset={-70}
              activeClass="active"
            >
              About
            </Link>
          </li>
          <li className="list-none font-semibold transition duration-[0.5s] transform hover:scale-110 cursor-pointer">
            <Link
              to="issues"
              smooth={true}
              duration={500}
              offset={-70}
              activeClass="active"
            >
              Issues
            </Link>
          </li>
          <li className="list-none font-semibold transition duration-[0.5s] transform hover:scale-110 cursor-pointer">
            <Link
              to="model"
              smooth={true}
              duration={500}
              offset={-70}
              activeClass="active"
            >
              Model
            </Link>
          </li>
          <li className="list-none font-semibold transition duration-[0.5s] transform hover:scale-110 cursor-pointer">
            <Link
              to="contact"
              smooth={true}
              duration={500}
              offset={-70}
              activeClass="active"
            >
              Contact
            </Link>
          </li>
        </div>

        {/* Hamburger Icon for Mobile */}
        <div className="md:hidden">
          <button onClick={toggleNav} className="text-2xl">
            {navOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`${
          navOpen ? "block" : "hidden"
        } md:hidden absolute w-full left-0 top-[80px] bg-slate-100 shadow-lg z-10`}
      >
        <ul className="flex flex-col items-center gap-4 py-4 text-sm font-semibold">
          <li className="cursor-pointer duration-[0.5s] hover:scale-110">
            <Link
              to="/"
              onClick={() => {
                window.location.reload();
                toggleNav();
              }}
              className="transition duration-[0.5s] transform hover:scale-105"
            >
              Home
            </Link>
          </li>
          <li
            className="transition duration-[0.5s] transform hover:scale-110 cursor-pointer"
            onClick={toggleNav}
          >
            <Link
              to="about"
              smooth={true}
              duration={500}
              offset={-70}
              activeClass="active"
            >
              About
            </Link>
          </li>
          <li
            className="transition duration-[0.5s] transform hover:scale-110 cursor-pointer"
            onClick={toggleNav}
          >
            <Link
              to="issues"
              smooth={true}
              duration={500}
              offset={-70}
              activeClass="active"
            >
              Issues
            </Link>
          </li>
          <li
            className="transition duration-[0.5s] transform hover:scale-110 cursor-pointer"
            onClick={toggleNav}
          >
            <Link
              to="model"
              smooth={true}
              duration={500}
              offset={-70}
              activeClass="active"
            >
              Model
            </Link>
          </li>
          <li
            className="transition duration-[0.5s] transform hover:scale-110 cursor-pointer"
            onClick={toggleNav}
          >
            <Link
              to="contact"
              smooth={true}
              duration={500}
              offset={-70}
              activeClass="active"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
