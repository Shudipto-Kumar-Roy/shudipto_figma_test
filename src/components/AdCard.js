import React from "react";
import ring from "../imges/ring.png";
import headphone from "../imges/headphone.png";
import headphone2 from "../imges/headphone2.png";

const AdCard = () => {
  return (
    <div className="w-[350px] h-[212px] rounded-xl bg-gradient-to-br from-[#42990D] to-[#076969] relative p-4 flex flex-col justify-between">
      <img
        src={ring}
        className="absolute top-0 right-0 overflow-hidden"
        alt=""
      />

      <img
        src={headphone2}
        className="absolute bottom-0 right-10 overflow-hidden"
        alt=""
      />
      <img
        src={headphone}
        className="absolute bottom-0 right-0 overflow-hidden"
        alt=""
      />

      <h1 className="text-white text-2xl font-normal">
        Summer headphones <br /> from top brands
      </h1>
      <h1 className="text-white text-2xl font-normal">Buy it Now</h1>
    </div>
  );
};

export default AdCard;
