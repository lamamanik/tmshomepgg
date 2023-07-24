import React from "react";
import dashboard from "../assets/picture3.png";

const Analyticstwo = () => {
  return (
    <div className="w-full bg-white flex justify-center items-center">
      <div className="max-w-[1240px] mx-20 flex flex-col md:flex-row sm:flex-col-reverse justify-center items-center">
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
        <img className="w-[500px] mx-auto" src={dashboard} alt="/" />
      </div>
    </div>
  );
};

export default Analyticstwo;
