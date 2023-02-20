import React from "react";
import RightSideLastMiddlebar from "./RightSIdeLastMiddleBar";
import RightSideMiddlebar from "./RightSideMiddlebar";
import RightTopbar from "./RightTopbar";

const Rightsidebar = () => {
  return (
    <div className="h-screen p-4">
      <div>
        <RightTopbar />
        <RightSideMiddlebar />
        <RightSideLastMiddlebar />
        
      </div>
    </div>
  );
};

export default Rightsidebar;
