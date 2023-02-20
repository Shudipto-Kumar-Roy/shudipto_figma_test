import React from "react";
import headset from "../imges/headset.png";
import headset1 from "../imges/headse2.png";
import radio from "../imges/radio.png";
import music from "../imges/music.png";
import disk from "../imges/disc.png";
import cd from "../imges/cd.png";
const RightSideLastBar = () => {
  return (
    <div>
      <h1 className="text-lg text-[#66FF1E] my-4">
        Explore The Popular Categories{" "}
        <span className="text-sm text-gray-500">See All</span>
      </h1>
      <div className="flex gap-x-4">
        <div className="w-full flex justify-between rounded-lg shadow-lg shadow-gray-400  p-4">
          <div className="w-[40%] flex items-center gap-x-1">
            <img
              className="w-10 rounded-full bg-[#D9D9D9] p-1"
              src={radio}
              alt=""
            />
            <img
              className="w-10 rounded-full bg-[#D9D9D9] p-1"
              src={headset}
              alt=""
            />
            <img
              className="w-10 rounded-full bg-[#D9D9D9] p-1"
              src={headset1}
              alt=""
            />
          </div>
          <div className="w-[60%] border-l-4 border-gray-800 pl-2">
            <h1 className="text-base text-gray-900">Popular top 10 brands</h1>
            <h1 className="text-gray-600 text-sm">$400+ Orders & reviews</h1>
          </div>
        </div>
        <div className="w-full flex justify-between rounded-lg shadow-lg shadow-gray-400 p-4">
          <div className="w-[40%] flex items-center gap-x-1">
            <img
              className="w-10 rounded-full bg-[#D9D9D9] p-1"
              src={music}
              alt=""
            />
            <img
              className="w-10 rounded-full bg-[#D9D9D9] p-1"
              src={disk}
              alt=""
            />
            <img
              className="w-10 rounded-full bg-[#D9D9D9] p-1"
              src={cd}
              alt=""
            />
          </div>
          <div className="w-[60%] border-l-4 border-gray-800 pl-2">
            <h1 className="text-base text-gray-900">Popular top 10 brands</h1>
            <h1 className="text-gray-600 text-sm">$400+ Orders & reviews</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightSideLastBar;
