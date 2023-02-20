import React from "react";
import product_headphone from "../imges/product_headphone.png";
import { FiPlus, FiMinus } from "react-icons/fi";
import star from "../imges/star.png";
import heart from "../imges/heart.png";
const ProductCard = () => {
  return (
    <div className="w-[680px] h-[330px] flex justify-center items-center rounded-lg shadow-xl shadow-gray-300">
      <div className="w-[40%]">
        <img
          className="w-full h-full object-contain"
          src={product_headphone}
          alt=""
        />
      </div>
      <div className="w-[60%] flex flex-col items-start justify-center gap-y-1">
        <h1 className="text-base">Beats Studio3 Wireless Headphone</h1>
        <div className="flex justify-center item-center gap-x-1">
          <img className="w-5 h-5 object-contain" src={star} alt="" />
          <img className="w-5 h-5 object-contain" src={star} alt="" />
          <img className="w-5 h-5 object-contain" src={star} alt="" />
          <img className="w-5 h-5 object-contain" src={star} alt="" />
          <img className="w-5 h-5 object-contain" src={star} alt="" />
          <p className="text-gray-400 text-xs">( 200+ Reviews )</p>
        </div>
        <p className="text-sm">
          Ergonomic or cupe with on-oor controls up to <br /> 22 hours of tening
          time. Apple Wi crip & Closs{" "}
        </p>
        <p className="text-sm text-[#07FFD2] font-medium">Price $ 450.55</p>
        <div className="flex justify-between">
          <div className="flex gap-x-2 items-center ">
            <p className="text-gray-800 text-s">Color :</p>
            <div className="flex justify-center items-center gap-x-1">
              <span className="w-5 h-5 rounded-full bg-[#66FF1E]"></span>
              <span className="w-7 h-7 rounded-full border-2 border-[#07FFD2] flex justify-center items-center">
                <span className="w-4 h-4 rounded-full border-1 border-white bg-[#07FFD2]"></span>
              </span>
              <span className="w-5 h-5 rounded-full bg-[#1E78FF]"></span>
              <span className="w-5 h-5 rounded-full bg-[#8E3785]"></span>
            </div>
          </div>
          <div className="ml-8 rounded-md bg-[#F5F4F4] flex justify-center items-center gap-x-2 p-1">
            <FiPlus size={20} className="bg-[#D9D9D9] rounded-full" />
            <p>1</p>
            <FiMinus size={20} className="bg-[#D9D9D9] rounded-full" />
          </div>
        </div>

        <div className="flex gap-x-2">
          <img
            className="w-10 rounded-md p-1 border-2 border-[#38FF4C]"
            src={heart}
            alt=""
          />
          <span className="rounded-md px-2 py-1 tex-sm border-2 border-[#38FF4C]">
            Add To Cart
          </span>
          <button className="rounded-md px-3 py-1 border-none text-sm bg-[#38FF4C]">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
