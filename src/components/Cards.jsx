import React from "react";
import year from "../assets/year.png";
import onemonth from "../assets/1month.png";
import sixmonth from "../assets/6month.png";

const Cards = () => {
  return (
    <div className="w-full py-[10rem] px 4 bg-[#3F72AF]">
      <div className="max-2-[1240px] mx-auto grid grid-cols-3 gap-8">
        <div className="w-full ">
          <img
            className="w-10 mx-auto mt-[-3rem] bg-white "
            src={onemonth}
            alt="/"
          />
          <h2>1 MOnth</h2>
          <div>
            <p></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
