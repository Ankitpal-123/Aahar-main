import React from "react";
import Carousel1 from "./Carousel1";

const FamousPik = () => {
  return (
    <>
      <div className="sm:flex sm:justify-between sm:ml-40 mt-10 ">
        <div className="mx-10 mt-10">
          <p className="text-3xl font-bold text-amber-600 sm:m-0 mx-36">
            FAMOUS PICKS
          </p>
          <p className="max-w-2xl test-xl mb-1 sm:m-0 mx-24">
            The Dishes that trends this week in आहार
          </p>
          <div className="border-dashed h-1 border-white border-2 w-96 sm:m-0 mx-14"></div>
          <button className="rounded-3xl bg-amber-600 h-19 w-32 text-xl text-white font-semi-bold mt-3 sm:mx-0 mx-48">
            LOGIN
          </button>
        </div>

        <div className="sm:w-1/2 w-4/5/ ml-32 mt-5 mx-auto">
          <Carousel1 />
        </div>
      </div>
    </>
  );
};

export default FamousPik;
