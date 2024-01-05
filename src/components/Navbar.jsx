import React, { useState } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import logo from "../assets/brand.png";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [navVisible, setNavVisible] = useState(true);

  const handleNav1 = () => {
    setNavVisible(!navVisible);
  };

  const handleNav = () => {
    setNav(!nav);
  };

  const handleLinkClick = () => {
    setNav(false); // Close the small screen navbar
  };

  return (
    <div className="z-[10000]  flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white">
      <img class="w-16" src={logo} alt="brand.logo" />
      <h1 className="w-full text-3xl font-bold text-[#00d9fa]">TMS</h1>
      <ul className="hidden md:flex cursor-pointer">
        <li className="p-4">
          <Link
            to="home"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
            onClick={handleLinkClick} // Close the small screen navbar
          >
            Home
          </Link>
        </li>
        <li className="p-4">
          <Link
            to="features"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
            onClick={handleLinkClick} // Close the small screen navbar
          >
            Features
          </Link>
        </li>
        <li className="p-4">
          <Link
            to="about"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
            onClick={handleLinkClick} // Close the small screen navbar
          >
            About
          </Link>
        </li>
        <li className="p-4">
          <Link
            to="testomonial"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
            onClick={handleLinkClick} // Close the small screen navbar
          >
            Testimonial
          </Link>
        </li>
        <li className="p-4">
          <Link
            to="contact"
            spy={true}
            smooth={true}
            offset={50}
            duration={1000}
            onClick={handleLinkClick} // Close the small screen navbar
          >
            Contact
          </Link>
        </li>
      </ul>

      <div onClick={handleNav} className="block md:hidden">
        {!nav ? <AiOutlineMenu size={25} /> : <AiOutlineClose size={25} />}
      </div>

      <div
        className={
          nav
            ? "  fixed  left-0 top-0 w-[100%] z-[1000] h-full border-r border-r-gray-900 bg-[#000300]  ease-in-out duration-500"
            : " fixed left-[-100%]"
        }
      >
        <div className="pt-14">
          <div className="flex flex-row justify-center items-center gap-0 my-1 ml-5">
            <div className="flex justify-center items-center">
              <img class="w-16" src={logo} alt="brand.logo" />
            </div>
            <div>
              <h1 className="w-full text-3xl m-4 font-bold text-[#00d9fa]">
                TMS
              </h1>
            </div>
          </div>
        </div>

        <ul className="md:flex flex flex-col justify-center items-center cursor-pointer">
          <li className="py-16 font-semibold">
            <Link
              to="home"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              onClick={handleLinkClick} // Close the small screen navbar
            >
              home
            </Link>
          </li>
          <li className="p-10 font-semibold">
            <Link
              to="features"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              onClick={handleLinkClick} // Close the small screen navbar
            >
              features
            </Link>
          </li>
          <li className="p-10 font-semibold">
            <Link
              to="about"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              onClick={handleLinkClick} // Close the small screen navbar
            >
              about
            </Link>
          </li>
          <li className="p-10">
            <Link
              to="testomonial"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              onClick={handleLinkClick} // Close the small screen navbar
            >
              testimonial
            </Link>
          </li>
          <li className="p-10">
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={50}
              duration={1000}
              onClick={handleLinkClick} // Close the small screen navbar
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
