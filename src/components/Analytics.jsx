import React from "react";
import card from "../assets/picture4.png";
import dashboard from "../assets/picture3.png";
import bgimg from "../assets/bgimg6.jpg";
import list from "../assets/picture9.png";
import notice from "../assets/picture11.png";
import task from "../assets/picture10.png";
import Fade from "react-reveal/Fade";
import "../index.css";

const Analytics = () => {
  return (
    <div
      name="features"
      className="w-full py-28 line-height text-white"
      style={{
        backgroundImage: `url(${bgimg}), linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.5))`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundBlendMode: "darken",
      }}
    >
      <div name="features" className=" w-full pt-24  ">
        <div className="w-full   flex justify-center items-center">
          <Fade bottom>
            <div className="max-w-[1340px] p-5   flex flex-col md:flex-row justify-center items-center">
              <Fade left>
                <img
                  className="hover-scale w-[600px] mx-auto hover-scale"
                  src={card}
                  alt="/"
                />
              </Fade>
              <div className="flex flex-col justify-center text-center sm:px-20">
                <Fade right>
                  <p className="text-[#00df9a] font-bold ">
                    Clear Task overview
                  </p>
                  <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
                    Task Overview.
                  </h1>
                  <p className="font-sans text-justify  text-xl font-semibold">
                    Task cards provide a comprehensive overview of tasks,
                    including task importance, ssigned time and deadlines.
                    Similarly, the personalized staff dashboard gets to see only
                    the task which is assigned to them.
                  </p>
                </Fade>
              </div>
            </div>
          </Fade>
        </div>

        <div className="w-full   my-36 flex justify-center items-center">
          <div className="max-w-[1340px] p-5 flex flex-col-reverse md:flex-row sm:flex-col-reverse justify-start items-center">
            <div className="flex flex-col justify-center text-center sm:px-20">
              <Fade left>
                <p className="text-[#00df9a] font-bold">
                  Individual feature Dashboard.
                </p>
                <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
                  Simple,Userfriendly dashboard
                </h1>
                <p className="font-sans text-justify  text-xl font-semibold">
                  Dashboard designed to be user-friendly and straightforward,
                  providing comprehensive information about all system users,
                  total tasks, and staff notices. It also includes a pie chart
                  displaying task status (pending and completed).
                </p>
              </Fade>
            </div>
            <Fade right>
              <img className="w-[600px] mx-auto" src={dashboard} alt="/" />
            </Fade>
          </div>
        </div>

        <div className="w-full my-36 flex justify-center items-center">
          <div className="max-w-[1340px] p-5 flex flex-col md:flex-row justify-center items-center">
            <Fade left>
              <img className="w-[500px] mx-auto" src={list} alt="/" />
            </Fade>
            <div className="flex flex-col justify-center text-center sm:px-24">
              <Fade right>
                <p className="text-[#00df9a] font-bold">
                  User section to manage all user
                </p>
                <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
                  User Management
                </h1>
                <p className="font-sans text-justify  text-xl font-semibold">
                  Allows administrators to add users, granting them login
                  credentials. Staff can then access an overview of system,
                  facilitating taskoverview and analysis.This feature aids in
                  managing user accounts effectively, monitoring user data, and
                  performing insightful analysis to optimize system users.
                </p>
              </Fade>
            </div>
          </div>
        </div>

        <div className="w-full  my-36 flex justify-center items-center">
          <div className="max-w-[1340px] p-5 flex flex-col-reverse md:flex-row sm:flex-col-reverse justify-start items-center">
            <div className="flex flex-col justify-center text-center sm:px-20">
              <Fade left>
                <p className="text-[#00df9a] font-bold">
                  Send lot of notices to team
                </p>
                <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
                  Send Notices to system users.
                </h1>
                <p className="font-sans text-justify  text-xl font-semibold">
                  "Administrators have the capability to transmit Notices to the
                  entire system, thereby assisting all system users in staying
                  informed about information provided by administrators and
                  managers
                </p>
              </Fade>
            </div>
            <Fade right>
              <img className="w-[500px] mx-auto" src={notice} alt="/" />
            </Fade>
          </div>
        </div>

        <div className="w-full mt-36 flex justify-center items-center">
          <div className="max-w-[1340px] p-5 flex flex-col md:flex-row justify-center items-center">
            <Fade left>
              <img className="w-[600px] mx-auto" src={task} alt="/" />
            </Fade>
            <div className="flex flex-col justify-center sm:px-20 text-center">
              <Fade right>
                <p className="text-[#00df9a] font-bold">
                  Transparent and Comprehensive Task Assignment
                </p>
                <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
                  Task Assignment
                </h1>
                <p className="font-sans text-justify  text-xl font-semibold ">
                  Allocate assignments to staff, indicating title, description,
                  deadlines, and the degree of importance through low, medium,
                  and high priority levels.
                </p>
              </Fade>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
