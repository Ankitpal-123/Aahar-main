import React from "react";
import Navbar from "../Navbar";

const FoodDisplay = () => {
  return (
    <>
      <Navbar />
      <div className="bg-cyan-200 w-full  mt-10 grid grid-cols-6 grid-rows-2 py-5 px-12 gap-1">
        <div className="bg-red-300 col-span-4 row-span-2 bg-[url('https://gdurl.com/2iZx')] "></div>
        <div className="bg-blue-300 w-48 h-48 ml-10 overflow-hidden ">
          <img
            className=" h-full center hover:h-64"
            src="https://gdurl.com/2iZx"
            alt=""
          />
        </div>
        <div className="bg-green-300 w-48 h-48 overflow-hidden ">
          <img
            className=" h-full center hover:h-64"
            src="https://gdurl.com/2iZx"
            alt=""
          />
        </div>
        <div className="bg-orange-300 w-48 h-48 ml-10 overflow-hidden">
          <img
            className=" h-full center hover:h-64"
            src="https://gdurl.com/2iZx"
            alt=""
          />
        </div>
        <div className="bg-yellow-300 w-48 h-48 overflow-hidden ">
          <img
            className=" h-full center hover:h-64"
            src="https://gdurl.com/2iZx"
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default FoodDisplay;
