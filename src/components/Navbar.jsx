import React, { useState } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import logo from "../assets/brand.png";

const Navbar = () => {
  // let links = [
  //   { name: "HOME",  },
  //   { name: "Service", link: "/" },
  //   { name: "About", link: "/" },
  //   { name: "Contact", link: "/" },
  // ];
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className=" z-[10000] flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white">
      <img class="w-16" src={logo} alt="brand.logo" />
      <h1 className="w-full text-3xl font-bold text-[#00d9fa]">TMS</h1>
      <ul className="hidden md:flex cursor-pointer">
        <li className="p-4">
          {" "}
          <Link to="home" spy={true} smooth={true} offset={50} duration={500}>
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
          <Link to="about" spy={true} smooth={true} offset={50} duration={500}>
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
            duration={1000}
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
            ? "  fixed  left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300]  ease-in-out duration-500"
            : " fixed left-[-100%]"
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

        <ul className="uppercase p-4 cursor-pointer">
          <li className="p-4">Home</li>
          <li className="p-4">Features</li>
          <li className="p-4">About</li>
          <li className="p-4">Contact</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
