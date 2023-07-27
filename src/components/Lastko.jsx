import React from "react";

const Lastko = () => {
  return (
    <div className="w-full bg-[#E9B384]">
      <div className="max-w-[1200px] mx-auto flex  lg:flex-row flex-col gap-2 justify-center items-center">
        <div className=" flex flex-col justify-center gap-5  items-center py-16">
          <h1 className="md-text-4xl  ml-5 sm:text-center sm:text:3xl text-7xl gap-10 font-bold py-2">
            Start growing your
            <br /> Business today...
          </h1>
          <p className=" mx-5 font-semibold">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
            tempora reprehenderit dolor!
          </p>
        </div>
        <div className="w-full max-w-md p-2 md:mt-[-4rem] mx-auto">
          <form
            className="contact-inputs bg-[#7C9D96] rounded-xl shadow-2xl  px-8 pt-6 pb-8 mb-4"
            action="https://formspree.io/f/mnqknevy"
            method="POST"
          >
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
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
                className="block text-gray-700 text-sm font-bold mb-2"
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
                className="block text-gray-700 text-sm font-bold mb-2"
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
        </div>
      </div>
    </div>
  );
};

export default Lastko;
