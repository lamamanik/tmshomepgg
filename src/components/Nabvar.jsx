import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

// const Navbar = () => {
//   const [nav, setNav] = useState[false];

//   const handlenav = () => {
//     setNav(!nav);
//   };
// };

const Navbar = () => {
  return (
    <div className=" flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white">
      <h1 className="w-full text-3xl font-bold text-[#00d9fa]">TMS</h1>
      <ul className="flex hidden">
        <li className="p-4">Home</li>
        <li className="p-4">Purpose</li>
        <li className="p-4">planning</li>
        <li className="p-4">About</li>
        <li className="p-4">Contact</li>
      </ul>

      <div>
        <AiOutlineMenu size={25} />
      </div>

      <div className="fixed left-o top-0 w-[40%] border-r-gray-400 bg-[#000300]">
        <h1 className="w-full text-3xl m-4 font-bold text-[#00d9fa]">TMS</h1>

        <ul className=" uppercase">
          <li className="p-4 border-b border-gray-600">Home</li>
          <li className="p-4 border-b border-gray-600">Purpose</li>
          <li className="p-4 border-b border-gray-600">Planning</li>
          <li className="p-4 border-b border-gray-600">About</li>
          <li className="p-4">Contact</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
