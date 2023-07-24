import react from "react";
import Typed from "react-typed";

const Hero = () => {
  return (
    <div className="text-white">
      <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
        <p className="text-[#112D4E] md:text-3xl sm:text-2xl text-xl font-bold">
          want to grow with future ?
        </p>
        <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-4 ">
          Grow with our TMS
        </h1>
        <div className="flex flex-col">
          <p className="md:text-4xl sm:text-3xl py-1 text-3xl font-bold">
            simple,efficient way to
          </p>
          <Typed
            className="md:text-3xl sm:text-2xl py-1 text-1xl font-bold"
            strings={[
              "",
              "create task",
              "delete task",
              "update/add user",
              "Monitor employee",
            ]}
            typeSpeed={120}
            backSpeed={130}
            loop
          />
        </div>
        <button className="bg-[black] w-[140px] rounded-md font-medium my-5 mx-auto py-2 text-white">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Hero;
