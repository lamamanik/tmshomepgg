import React from "react";

import duoimg from "../assets/duo.jpg";
import logo from "../assets/year.png";

const Us = () => {
  return (
    <div name="about" className="text-white w-full p-5 mb-20 ">
      <div className="w-full  rounded-xl left-0 right-0  h-[700px] bg-gray-900/90 absolute">
        <img
          className="w-full h-full bg-gray-500 object-cover mix-blend-overlay"
          src={duoimg}
          alt="/"
        />
      </div>

      <div className="max-w-1240px mx-auto text-white relative">
        <div className="px-4 py-12">
          <h2 className="text-3xl pt-8 text-slate-300 text-center">
            Who are we ??
          </h2>
          <h3 className="text-5xl font-bold py-6 text-center">we are geeks.</h3>
          <p className="py-4 text-3xl text-slate-300 text-center">
            Passionate coding enthusiasts, university students exploring
            development and enjoying Valorant Gold hardstuck gaming for fun
            while working on our first college project.
          </p>
        </div>

        <div className="grid grid-cols-1  lg:grid-cols-3  mx-8 sm:mx-20 gap-x-8 gap-y-10 pt-12 sm:pt-20 text-black">
          <div className="bg-[#EFE1D1] rounded-xl shadow-2xl ">
            <div className="p-8">
              <img className="w-16 p-1 rounded  mt-[-4rem]" src={logo} alt="" />
              <h3 className="text-2xl font-bold">About Us</h3>
              <p className="text-1xl font-semibold ">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde
                voluptate blanditiis accusantium adipisci! Quae ab quas,
                pariatur praesentium sunt blanditiis.
              </p>
            </div>
          </div>

          <div className="bg-[#EFE1D1]  rounded-xl shadow-2xl ">
            <div className="p-8">
              <img className="w-16 p-1 rounded mt-[-4rem]" src={logo} alt="" />
              <h3 className="text-2xl font-bold">We love</h3>
              <p className="text-1xl font-semibold ">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Similique incidunt maxime quae voluptates esse accusantium earum
                vero? Iste suscipit magnam omnis, eveniet possimus molestias
                aspernatur consequuntur quae, reiciendis, nobis temporibus?
              </p>
            </div>
          </div>

          <div className="bg-[#EFE1D1] rounded-xl shadow-2xl ">
            <div className="p-8">
              <img className="w-16 p-1 rounded mt-[-4rem]" src={logo} alt="" />
              <h3 className="text-2xl font-bold">Our vision</h3>
              <p className="text-1xl font-semibold ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quibusdam mollitia sit ut optio voluptas tempora earum
                doloremque est nisi sed, porro saepe modi voluptatem
                voluptatibus nihil distinctio nesciunt. Fugit, rerum deserunt?
                Voluptatem harum explicabo, tempora quisquam, quos veniam
                sapiente aspernatur numquam suscipit neque maiores omnis
                adipisci ut culpa ad dolore.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Us;
