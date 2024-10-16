import React from 'react';
import { Link } from "react-scroll";

function Footer() {
  return (
    <footer className="bg-black opacity-85 text-white py-6 mt-10">
      <div className="max-w-[1320px] mx-auto flex flex-col items-center px-4">
        <div className="text-center mb-4">  
          <p className="text-sm font-semibold">
            © {new Date().getFullYear()} NIRBHAYA  All rights reserved.
          </p>
          <p className="text-xs italic">
            Committed to ensuring women's safety and empowerment.
          </p>
          <p className="text-xs mt-2">
            Our mission is to create a safer world for women through awareness, technology, and community support. Together, we can stand against violence.
          </p>
          <p className="text-xs mt-2">
            Remember, safety is a right, not a privilege. Let's empower each other to speak up and take action!
          </p>
        </div>

        <div className="flex space-x-4">
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
    </footer>
  );
}

export default Footer;
