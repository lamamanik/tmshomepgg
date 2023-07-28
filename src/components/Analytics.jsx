import React from "react";
import card from "../assets/picture4.png";
import dashboard from "../assets/picture3.png";

import list from "../assets/picture9.png";

const Analytics = () => {
  return (
    <div name="features" className=" w-full  my-20 line-height">
      <div className="w-full   flex justify-center items-center">
        <div className="max-w-[1240px]  flex flex-col md:flex-row justify-center items-center">
          <img className="w-[500px] mx-auto" src={card} alt="/" />
          <div className="flex flex-col justify-center text-center">
            <p className="text-[#00df9a] font-bold">Lorem ipsum dolor sit.</p>
            <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
              Clear Task Overview.
            </h1>
            <p className="font-sans font-semibold">
              Task cards provide a comprehensive overview of tasks, including
              status, assignment time, and deadlines. Similarly, the
              personalized staff dashboard offers this data with a completion
              status button, enhancing task management.
            </p>
          </div>
        </div>
      </div>

      <div className="w-full  my-16 flex justify-center items-center">
        <div className="max-w-[1240px] flex flex-col-reverse md:flex-row sm:flex-col-reverse justify-start items-center">
          <div className="flex flex-col justify-center text-center">
            <p className="text-[#00df9a] font-bold">Lorem ipsum dolor sit.</p>
            <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
              Simple,Userfriendly dashboard
            </h1>
            <p className="font-sans font-semibold">
              Dashboard designed to be user-friendly and straightforward,
              providing comprehensive information about all system users, total
              tasks, and staff notices. It also includes a pie chart displaying
              task status (pending and completed). Notably, the admin dashboard
              differs from the staff dashboard, catering to their specific
              individual needs.
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
              User Management
            </h1>
            <p className="font-sans font-semibold">
              Allows administrators to add users, granting them login
              credentials. Staff can then access an overview of system,
              facilitating management and analysis.This overview aids in
              managing user accounts effectively, monitoring user activities,
              and performing insightful analysis to optimize system performance.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
