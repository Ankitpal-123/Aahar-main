import React from "react";

const DishCard2 = () => {
  return (
    <>
      <div className="w-40 h-48 bg-red-500 mt-10 relative rounded-lg">
        <img
          className=" object-fill h-full w-40 absolute rounded-lg"
          src="https://gdurl.com/Xa2U"
          alt="Pav Bhaji"
        />
        <div className="w-36 h-48 bg-gradient-to-bl from-transparent to-black absolute rounded-lg"></div>
        <p className="absolute text-white text-xl font-semibold top-32 ml-2">
          Pav Bhaji
        </p>
        <div className="w-24 h-0.5 bg-white absolute top-40 ml-2"></div>
        <p className="absolute text-amber-600 text-md top-40 ml-2">
          Aahar Kitchens
        </p>
        <div>
          <img
            className="h-6 bg-yellow-500 absolute right-2 top-24"
            src="https://gdurl.com/VCtC"
            alt="Healthy"
          />
          <img
            className="h-6 bg-yellow-500 absolute  right-2 top-32"
            src="https://gdurl.com/ZoX0b"
            alt="Delivery"
          />
          <img
            className="h-6 bg-yellow-500 absolute right-2 top-40 "
            src="https://gdurl.com/EqOY"
            alt="Trending"
          />
        </div>
      </div>
    </>
  );
};

export default DishCard2;
