import React from "react";
import logo from "../imges/logo.png";
import { data } from "../data/sidebardata";
import vector1 from "../imges/Vector1.png";
import vector2 from "../imges/vector2.png";
import { HiPlus } from "react-icons/hi";
const Leftsidebar = () => {
  return (
    <div className="shadow border-r-4 h-screen p-4">
      <div className="flex items-center gap-x-2">
        <img className="w-8" src={logo} alt="" />
        <h1 className="text-lg">MK Sounds</h1>
      </div>
      <div className="flex flex-col mt-4">
        {data &&
          data?.map((item, index) => (
            <div
              key={index}
              className="flex items-center border-l-8 border-transparent rounded-sm gap-x-4 w-full px-3 my-2 hover:border-[#09FB5B] cursor-pointer transition-all duration-500"
            >
              <img className="w-5" src={item.icon} alt="" />
              <h1 className="text-sm">{item.title}</h1>
            </div>
          ))}
      </div>

      <div className="w-[236px] h-[229px] bg-[#44E50B8C] rounded-lg relative flex flex-col justify-center items-center">
        <img className="absolute top-0 left-0 -z-10" src={vector1} alt="" />
        <img className="absolute bottom-0 right-0 -z-10" src={vector2} alt="" />

        <HiPlus
          size={30}
          className="text-white bg-[#1240E2] font-bold border-[4px] shadow-lg p-1 rounded-full"
        />
        <h1 className="text-white text-lg font-semibold">Need Help</h1>
        <p className="text-white text-base text-center">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum
        </p>
        <button className="text-white text-base outline-none rounded-md bg-[#21D111] px-2 py-1 border-6">
          Customer Service
        </button>
      </div>
    </div>
  );
};

export default Leftsidebar;
