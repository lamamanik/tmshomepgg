import react from "react";
import dashboard from "../assets/picture4.png";

const Analytics = () => {
  return (
    <div className=" w-full bg-white py-16 px-4">
      <div className="max-w-[1240px] mx-12 grid md:grid-cols-2">
        <img className="w-[500px] mx-auto my-4" src={dashboard} alt="/" />
        <div className="flex flex-col justify-center  text-center">
          <p className="text-[#00df9a] font-bold ">Lorem ipsum dolor sit.</p>
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
            Lorem ipsum dolor sit amet.
          </h1>
          <p className="">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus nobis
            quasi ab ad dolor ratione, dolores distinctio vero blanditiis
            voluptatibus voluptate repellat nam aspernatur nemo, possimus est
            fugit animi? Veniam.
          </p>
        </div>
      </div>
    </div>
  );
};
export default Analytics;
