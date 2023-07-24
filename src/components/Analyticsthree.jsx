import React from "react";
import dashboard from "../assets/picture9.png";

const Analyticsthree = () => {
  return (
    <div className="w-full bg-white py-10 px-10 flex justify-center items-center">
      <div className="max-w-[1240px] flex flex-col md:flex-row justify-center items-center">
        <img className="w-[300px] mx-auto my-4" src={dashboard} alt="/" />
        <div className="flex flex-col justify-center text-center">
          <p className="text-[#00df9a] font-bold">Lorem ipsum dolor sit.</p>
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
            Lorem ipsum dolor sit amet.
          </h1>
          <p className="font-sans font-semibold">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus nobis
            quasi ab ad dolor ratione, dolores distinctio vero blanditiis
            voluptatibus voluptate repellat nam aspernatur nemo, possimus est
            fugit animi? Veniam.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Analyticsthree;
