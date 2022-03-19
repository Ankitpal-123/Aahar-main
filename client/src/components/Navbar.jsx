import React from "react";
// import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="bg-black  py-4 flex justify-between flex-grow items-center   text-white h-20 mx-auhref">
        <div>
          <img
            src="https://gdurl.com/0PTl"
            alt="Aahar Logo"
            className="h-28 sm:ml-20 ml-5 mt-10 cursor-pointer"
          />
        </div>

        <div className="hidden  md:flex ml-10 flex-grow justify-start text-lg font-semi-bold ">
          <a href="/" className=" courser-pointer">
            HOME
          </a>

          <a href="" className="ml-5 courser-pointer">
            MENU
          </a>
          <a href="" className="ml-5 courser-pointer">
            ORDER
          </a>
          <a href="" className="ml-5 courser-pointer">
            NEAR ME
          </a>
          <a href="" className="ml-5 courser-pointer">
            ABOUT
          </a>
        </div>

        <div className=" hidden sm:flex text-lg font-semi-bold ">
          <a href="">ADD RESTURANT</a>
        </div>
        <div className="  sm:ml-5  mr-5 sm:mr-5">
          <button className="rounded-md bg-amber-600 h-10 w-28 text-xl text-white font-semi-bold ">
            <a href="/login">LOGIN</a>
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
