import React from "react";
import AdCard from "./AdCard";
import ProductCard from "./ProductCard";

const RightSideMiddlebar = () => {
  return (
    <div className="w-full flex items-center gap-x-4">
      <div className="w-[65%]">
        <ProductCard />
      </div>
      <div className="w-[35%]">
        <AdCard />
      </div>
    </div>
  );
};

export default RightSideMiddlebar;
