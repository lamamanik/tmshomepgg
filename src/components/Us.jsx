import React from "react";

import duoimg from "../assets/duo.jpg";
import logo from "../assets/year.png";
import logo2 from "../assets/love.png";
import logo3 from "../assets/opportunity.png";
import Roll from "react-reveal/Roll";
import Slide from "react-reveal/Slide";
import Fade from "react-reveal/Fade";
import bgimg from "../assets/bgimg1.jpg";

const Us = () => {
  return (
    <div name="about" className="text-[#FFEDDB] w-full  mb-20 ">
      <Fade>
        <div className="w-full left-0 right-0  h-[700px] bg-gray-900/90 absolute">
          <img
            className="w-full h-full bg-gray-500 object-cover mix-blend-overlay"
            src={duoimg}
            alt="/"
          />
        </div>

        <div className="max-w-1240px mx-auto text-[#FFEDDB] relative">
          <div className="px-4 py-12">
            <Fade bottom>
              <h2 className="text-4xl font-semibold pt-8 text-[#FFEDDB] text-center">
                Who are we ??
              </h2>
            </Fade>
            <Fade bottom>
              <h3 className="text-5xl text-[#F4F4F2] font-bold py-6 text-center">
                we are geeks.
              </h3>
            </Fade>
            <Fade bottom>
              <p className="py-4 text-3xl text-[#F4F4F2] text-center font-semibold">
                Passionate coding enthusiasts, university students exploring
                development and enjoying gaming for fun while working on our
                first college project.
              </p>
            </Fade>
          </div>

          <div className="grid grid-cols-1  lg:grid-cols-3  mx-8 sm:mx-20 gap-x-8 gap-y-10 pt-12 sm:pt-20 text-black">
            <Roll left>
              <div className="transition-transform hover:scale-105">
                <div className="bg-[#141E46] text-[#FFEDDB] rounded-xl shadow-2xl transition-transform hover:scale-105 ">
                  <div className="p-8 ">
                    <img
                      className="w-16 p-1 rounded  mt-[-4rem]"
                      src={logo}
                      alt=""
                    />
                    <h3 className="text-2xl font-bold">About Us</h3>
                    <p className="text-1xl  font-semibold ">
                      We are student who find joy in learning and exploring
                      every day. Our passion lies in creating and innovating,
                      whether it's developing new ideas or bringing them to
                      life. Collaboration is key to our approach, combining our
                      perspectives for better results. From software to physical
                      prototypes, we enjoy diverse projects that fuel our growth
                      and contribution.
                    </p>
                  </div>
                </div>
              </div>
            </Roll>

            <Slide bottom>
              <div className="transition-transform hover:scale-105">
                <div className="bg-[#141E46] text-[#FFEDDB] rounded-xl shadow-2xl transition-transform hover:scale-105 ">
                  <div className="p-8">
                    <img
                      className="w-16 p-1 rounded mt-[-4rem]"
                      src={logo2}
                      alt=""
                    />
                    <h3 className="text-2xl font-bold">Our Project TMS</h3>
                    <p className="text-1xl font-semibold ">
                      This project is our first big project that we worked on
                      together. It's an important step in our teamwork. The goal
                      is to help manage tasks and employees in the system. We
                      used PHP and JS to make this project happen. We had a
                      great time doing it and really enjoyed the process. It was
                      an experience we'll always remember and be happy about.
                    </p>
                  </div>
                </div>
              </div>
            </Slide>

            <Roll right>
              <div className="transition-transform hover:scale-105">
                <div className="bg-[#141E46] text-[#FFEDDB] rounded-xl shadow-2xl ransition-transform hover:scale-105 ">
                  <div className="p-8">
                    <img
                      className="w-16 p-1 rounded mt-[-4rem]"
                      src={logo3}
                      alt=""
                    />
                    <h3 className="text-2xl font-bold">Our vision</h3>
                    <p className="text-1xl font-semibold ">
                      We think of this as a simple and useful app for handling
                      tasks, especially good for small teams. Even though it's
                      best for smaller groups, we're looking ahead to making
                      more complicated projects. Our goal is to give everyone a
                      chance to show their potential by providing them platform
                      to work on with bigger projects on future.
                    </p>
                  </div>
                </div>
              </div>
            </Roll>
          </div>
        </div>
      </Fade>
    </div>
  );
};

export default Us;
