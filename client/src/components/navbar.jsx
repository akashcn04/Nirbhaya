import React from "react";
import Icon2 from "../../public/assets/icon2.png";
import About from "./about";
import { Link } from "react-scroll";
import Issues from "./womenIssues"
import Model from "./Model"
import Contact from "./contact"
// import Link from 'react-router-dom'

function navbar() {
  return (
    <div
      className="w-screen h-[80px] bg-slate-100 py-4 shadow-[0px_0px_20px_5px_white] "
      id="Nav"
    >
      <div className="flex justify-center items-center gap-[500px] max-w-[1320px] mx-auto">
        <div className="flex items-center justify-center gap-5">
          <img
            src="../../public/assets/icon2.png"
            alt=""
            className="w-[50px]"
          />
          <div className="font-semibold text-3xl">NIRBHAYA</div>
        </div>
        <div></div>
        <div>
          <ul className="flex gap-9 text-[18px]">
            <li className="cursor-pointer duration-[0.5s] hover:scale-110">
            <Link to="/" onClick={() => window.location.reload()} className="font-semibold transition duration-[0.5s] transform hover:scale-105">
              Home
            </Link>
            </li>

            <li className="font-semibold transition duration-[0.5s] transform hover:scale-110 cursor-pointer">
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


            <li className="font-semibold transition duration-[0.5s] transform hover:scale-110 cursor-pointer">
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


            <li className="font-semibold transition duration-[0.5s] transform hover:scale-110 cursor-pointer">
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


            <li className="font-semibold transition duration-[0.5s] transform hover:scale-110 cursor-pointer">
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
    </div>
  );
}

export default navbar;
