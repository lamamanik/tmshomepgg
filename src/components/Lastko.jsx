import React from "react";
import Fade from "react-reveal/Fade";
import bgimg from "../assets/bgimg6.jpg";

const Lastko = () => {
  return (
    <div name="contact ">
      <div
        className=" bg-cover bg-center "
        style={{
          backgroundImage: `url(${bgimg}), linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5))`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundBlendMode: "darken",
        }}
      >
        <Fade bottom>
          <div className="max-w-[1200px] mx-auto flex  lg:flex-row flex-col gap-2 justify-center items-center">
            <div className=" flex flex-col justify-center gap-5  items-center py-16">
              <Fade left>
                <h1 className="md-text-4xl text-white  ml-5 sm:text-center sm:text:3xl text-7xl gap-10 font-bold py-2">
                  Start growing your
                  <br /> Business today
                </h1>
              </Fade>

              <Fade left>
                <p className=" mx-5 text-2xl font-semibold text-white">
                  Through the our straightforward, dependable, and user-friendly
                  task and user management solution...
                </p>
              </Fade>
            </div>
            <div className="w-full max-w-md p-2 md:mt-[-4rem] mx-auto ransition-transform hover:scale-105">
              <Fade right>
                <form
                  className="contact-inputs bg-[#252B48] text-white rounded-xl shadow-2xl  px-8 pt-6 pb-8 mb-4"
                  action="https://formspree.io/f/mnqknevy"
                  method="POST"
                >
                  <div className="mb-4">
                    <label
                      className="block  text-sm font-bold mb-2"
                      htmlFor="username"
                    >
                      Name:
                    </label>
                    <input
                      className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      type="text"
                      name="username"
                      placeholder="Enter your name"
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      className="block  text-sm font-bold mb-2"
                      htmlFor="email"
                    >
                      Email:
                    </label>
                    <input
                      className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      type="email"
                      id="email"
                      name="email"
                      placeholder="Enter your email"
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      className="block text-sm font-bold mb-2"
                      htmlFor="message"
                    >
                      Message:
                    </label>
                    <textarea
                      className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="message"
                      name="message"
                      placeholder="Enter your message"
                      required
                    />
                  </div>
                  <div className="flex items-center justify-center">
                    <button
                      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                      type="submit"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </Fade>
            </div>
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default Lastko;
