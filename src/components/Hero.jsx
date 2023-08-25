import React from "react";
import Typed from "react-typed";
import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";
import vid from "../assets/vid3.mp4";
import "/src/index.css";

const Hero = () => {
  return (
    <div className="relative pointer-events-none text-white">
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
      >
        <source src={vid} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-70 mix-blend-overlay z-0"></div>

      <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
        <Fade top>
          <p className="text-[#F4F2DE] mt-16 md:text-5xl sm:text-2xl text-xl z-[1] ">
            want to grow up your efficiency?
          </p>
        </Fade>
        <Fade top>
          <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-4 hover-effect">
            Grow with our TMS
          </h1>
        </Fade>
        <div className="flex flex-col">
          <Fade top>
            <div className="md:text-4xl sm:text-3xl py-1 text-3xl font-bold hover-effect">
              <Typed
                className="md:text-3xl sm:text-2xl py-1 text-1xl font-bold"
                strings={[
                  "",
                  "create task",
                  "delete task",
                  "edit task",
                  "Manage user",
                  "manage team",
                ]}
                typeSpeed={130}
                backSpeed={160}
                loop
              />
            </div>
          </Fade>
        </div>
        <Zoom>
          <a href="http://localhost/TMS/login.php">
            <button className="bg-[black] w-[140px] rounded-md font-medium my-5 mx-auto py-2  text-white ransition-transform hover:scale-105 hover:text-black hover:bg-white">
              Get Started
            </button>
          </a>
        </Zoom>
      </div>
    </div>
  );
};

export default Hero;
