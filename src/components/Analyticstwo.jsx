import React from "react";
import task from "../assets/picture4.png";

const Analyticstwo = () => {
  return (
    <div className="w-full bg-white py-8 px-4 ">
      <div className="max-w-[1240px] mx-12 grid md:grid-cols-2">
        <div className="flex flex-col justify-center">
          <div className="text-center">
            <p className="text-[rgb(0,223,154)] font-bold">
              Lorem ipsum dolor sit.
            </p>
            <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
              Lorem ipsum dolor sit amet.
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
              nobis quasi ab ad dolor ratione, dolores distinctio vero
              blanditiis voluptatibus voluptate repellat nam aspernatur nemo,
              possimus est fugit animi? Veniam.
            </p>
          </div>
        </div>
        <img className="w-[500px] mx-auto my-4" src={task} alt="/" />
      </div>
    </div>
  );
};

export default Analyticstwo;
