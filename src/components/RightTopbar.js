import React from "react";
import { CgSearchLoading } from "react-icons/cg";
import category_search from "../imges/category_search.png";
import mail from "../imges/mail.png";
import notification from "../imges/notification.png";
import user from "../imges/user.png";
const RightTopbar = () => {
  return (
    <div className="flex justify-between items-center">
      <div className="flex flex-col justify-center items-center gap-y-1">
        <h1 className="text-lg text-black font-semibold">Headphone</h1>
        <h1 className="text-sm text-gray-800 font-medium">For the top brand</h1>
      </div>
      <div className="flex items-center gap-x-2">
        <div>
          <div className="flex items-center border-2 px-2 py-1 rounded-md px-1">
            <CgSearchLoading size={25} className="text-gray-700" />
            <input
              placeholder="Search Product"
              className=" outline-none "
              type="text"
            />
            <img className="w-8" src={category_search} alt="" />
          </div>
        </div>

        <div className="flex gap-x-2">
          <img className="w-10 bg-[#17FF3C8C] rounded-md p-1" src={mail} alt="" />
          <img
            className="w-10 bg-[#53FF027D] rounded-md p-1"
            src={notification}
            alt=""
          />
          <img className=" w-10 bg-[#17FF3C8C] rounded-md p-1" src={user} alt="" />
        </div>
      </div>
    </div>
  );
};

export default RightTopbar;
