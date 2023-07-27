import React from "react";
import card from "../assets/picture4.png";
import dashboard from "../assets/picture3.png";
import list from "../assets/picture9.png";

const Analytics = () => {
  return (
    <div className=" w-full  my-20 line-height">
      <div className="w-full   flex justify-center items-center">
        <div className="max-w-[1240px]  flex flex-col md:flex-row justify-center items-center">
          <img className="w-[500px] mx-auto" src={card} alt="/" />
          <div className="flex flex-col justify-center text-center">
            <p className="text-[#00df9a] font-bold">Lorem ipsum dolor sit.</p>
            <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
              Lorem ipsum dolor sit amet.
            </h1>
            <p className="font-sans font-semibold">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
              nobis quasi ab ad dolor ratione, dolores distinctio vero
              blanditiis voluptatibus voluptate repellat nam aspernatur nemo,
              possimus est fugit animi? Veniam.
            </p>
          </div>
        </div>
      </div>

      <div className="w-full  my-16 flex justify-center items-center">
        <div className="max-w-[1240px] flex flex-col-reverse md:flex-row sm:flex-col-reverse justify-start items-center">
          <div className="flex flex-col justify-center text-center">
            <p className="text-[#00df9a] font-bold">Lorem ipsum dolor sit.</p>
            <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
              Lorem ipsum dolor sit amet.
            </h1>
            <p className="font-sans font-semibold">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
              nobis quasi ab ad dolor ratione, dolores distinctio vero
              blanditiis voluptatibus voluptate repellat nam aspernatur nemo,
              possimus est fugit animi? Veniam.
            </p>
          </div>
          <img className="w-[500px] mx-auto" src={dashboard} alt="/" />
        </div>
      </div>

      <div className="w-full  flex justify-center items-center">
        <div className="max-w-[1240px] flex flex-col md:flex-row justify-center items-center">
          <img className="w-[300px] mx-auto" src={list} alt="/" />
          <div className="flex flex-col justify-center text-center">
            <p className="text-[#00df9a] font-bold">Lorem ipsum dolor sit.</p>
            <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
              Lorem ipsum dolor sit amet.
            </h1>
            <p className="font-sans font-semibold">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
              nobis quasi ab ad dolor ratione, dolores distinctio vero
              blanditiis voluptatibus voluptate repellat nam aspernatur nemo,
              possimus est fugit animi? Veniam.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
