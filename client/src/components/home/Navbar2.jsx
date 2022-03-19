import React from "react";

const Navbar = () => {
  return (
    <>
      <nav className="bg-black fixed w-full z-50 py-4 flex justify-between flex-grow items-center    h-20 ">
        <div>
          <img
            src="https://gdurl.com/0PTl"
            alt="Aahar Logo"
            className="h-20 sm:ml-20 ml-5  cursor-pointer"
          />
        </div>

        <div className="hidden w-96  h-10  md:flex ml-32  flex-grow justify-start text-lg font-semibold ">
          <div className=" h-10 w-40 text-right  bg-white rounded-tl-xl rounded-bl-xl">
            <p className="mt-1 mr-2"> Virar ▼</p>
          </div>
          <div className="w-px h-10 bg-black "></div>
          <div className=" h-10 w-96 text-left  bg-white rounded-tr-xl rounded-br-xl flex ">
            <img
              src="https://gdurl.com/NQXS"
              alt="search"
              className="h-6 mr-2 ml-5 mt-2  "
            />
            <p className="mt-1 "> Search in आहार</p>
          </div>
        </div>

        <div className=" hidden sm:flex  mr-24 text-base text-white font-semibold ">
          <a href="">Aahar ▼</a>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
