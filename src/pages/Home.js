import React from "react";
import Leftsidebar from "../components/Leftsidebar";
import Rightsidebar from "../components/Rightsidebar";

const Home = () => {
  return (
    <div className="w-full h-screen flex">
      <div className="w-[20%] h-full">
        <Leftsidebar />
      </div>
      <div className="w-[80%] h-screen">
        <Rightsidebar />
      </div>
    </div>
  );
};

export default Home;
