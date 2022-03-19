import React from "react";

const DishCard = () => {
  return (
    <>
      <div className="bg-amber-600 w-44 h-64 relative rounded-lg">
        <div className="w-44 h-30 absolute">
          <img
            className="object-cover rounded-t-lg "
            src="https://gdurl.com/Xa2U"
            alt="Pav Bhaji "
          />
        </div>
        <img
          className="absolute h-6 right-2 top-2"
          src="https://gdurl.com/SfSZ"
          alt="Pav Bhaji"
        />
        <div className="bg-green-500 px-2 py-0.5  rounded-lg absolute left-2 top-36">
          <p className="text-md text-center">4.3★</p>
        </div>
        <div className="left-2 top-40 mt-3 absolute">
          <p className="text-lg font-bold ">Pav Bhaji</p>
          <p className="text-xs ">by Aahar Kitchens</p>
          <div className="h-px w-3/4 my-0.5 bg-black "></div>
          <p className="text-xs font-light w-3/4">Snack Food, Indian Cusine</p>
        </div>
        <div className="top-48 right-2 absolute">
          <p className="text-3xl font-bold ">₹65</p>
        </div>
      </div>
    </>
  );
};

export default DishCard;
