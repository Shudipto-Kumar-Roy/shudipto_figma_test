import React from "react";

const DailyDeals = ({ products }) => {
  return (
    <div className="flex flex-col items-start h-[598px] w-[300px] overflow-y-auto">
      <div className="w-full flex justify-between items-start px-4">
        <h1 className="text-base mb-4">Daily Deals</h1>
        <h1 className=" mb-4 text-sm">View All</h1>
      </div>

      <div className="flex flex-col justify-start gap-y-2">
        {products &&
          products?.slice(0, 9)?.map((item, index) => (
            <div key={index} className="flex gap-x-1 items-center">
              <img
                className="w-[48px] h-[48px] bg-gray-300 rounded-full object-contain"
                src={item?.picture}
                alt=""
              />
              <div className="flex flex-col items-start">
                <h1>
                  {item?.name}{" "}
                  <span className="text-xs">Price: {item?.price}</span>
                </h1>
                <h1 className="text-sm">
                  {item?.review} Review And {item?.order} Order
                </h1>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default DailyDeals;
