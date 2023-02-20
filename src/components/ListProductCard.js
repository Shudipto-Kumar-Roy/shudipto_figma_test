import React from "react";
import star from "../imges/star2.png";
import product_headphone from "../imges/product_headphone.png";
import { FiPlus } from "react-icons/fi";

const ListProductCard = ({ data }) => {
  return (
    <div className="w-[191px] h-[241px] flex flex-col justify-center items-center rounded-md shadow-lg shadow-gray-500 p-2 my-4">
      <div className="h-[60%] w-full">
        <img
          className="w-[212px] h-[129px] object-contain"
          src={data?.picture}
          alt=""
        />
      </div>
      <div className="h-[40%] w-full flex flex-col items-start gap-y-1">
        <h1 className="text-base">{data?.name} </h1>
        <p className="text-sm text-[#2F29299E] font-medium">
          Price ${data?.price}
        </p>

        <div className="flex w-full justify-between">
          <div className="flex items-center gap-x-1">
            <img className="" src={star} alt="" />
            <span className="#38FF4C text-xs">{data?.ratting}</span>
          </div>
          <FiPlus size={30} className="rounded-full bg-[#38FF4C] text-white" />
        </div>
      </div>
    </div>
  );
};

export default ListProductCard;
