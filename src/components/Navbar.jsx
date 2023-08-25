import React, { useState } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import logo from "../assets/brand.png";
import Fade from "react-reveal/Fade";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div>
      <Fade top>
        <div className="flex justify-between items-center h-24 max-w-[1240px]  mx-auto z-[999] px-4 text-white">
          <img className="w-16" src={logo} alt="brand.logo" />
          <h1 className="w-full text-3xl font-bold text-[#00d9fa]">TMS</h1>
          <ul className="hidden md:flex cursor-pointer">
            <li className="p-4">
              {" "}
              <Link
                to="home"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
              >
                home
              </Link>
            </li>
            <li className="p-4">
              {" "}
              <Link
                to="features"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
              >
                features
              </Link>
            </li>
            <li className="p-4">
              {" "}
              <Link
                to="about"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
              >
                about
              </Link>
            </li>
            <li className="p-4">
              {" "}
              <Link
                to="testomonial"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
              >
                testomonial
              </Link>
            </li>
            <li className="p-4">
              {" "}
              <Link
                to="contact"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
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
                ? "  fixed  left-0 top-0 w-[70%] h-full  bg-[#000300]  ease-in-out duration-500"
                : " fixed left-[-100%] z-2000"
            }
          >
            <div className="flex flex-row justify-left items-center gap-0 my-1 ml-5">
              <div>
                <img class="w-16" src={logo} alt="brand.logo" />
              </div>
              <div>
                <h1 className="w-full text-3xl m-4 font-bold text-[#00d9fa]">
                  TMS
                </h1>
              </div>
            </div>

            <ul className="uppercase p-4 cursor-pointer bg-[#000300]">
              <li className="p-4">
                {" "}
                <Link
                  to="home"
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                >
                  home
                </Link>
              </li>
              <li className="p-4">
                {" "}
                <Link
                  to="features"
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                >
                  features
                </Link>
              </li>
              <li className="p-4">
                {" "}
                <Link
                  to="about"
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                >
                  about
                </Link>
              </li>
              <li className="p-4">
                {" "}
                <Link
                  to="testomonial"
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                >
                  testomonial
                </Link>
              </li>
              <li className="p-4">
                {" "}
                <Link
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </Fade>
    </div>
  );
};

export default Navbar;
