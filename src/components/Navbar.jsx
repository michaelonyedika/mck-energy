import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="text-white">
      {/* Flex Container */}
      <div className=" max-w-[1240px] mx-auto flex justify-between items-center h-24 px-4">
        {/* Logo */}
        <h1 className=" w-full text-greenColor text-3xl font-bold">
          Mck Energy
        </h1>

        {/* Menu */}
        <ul className=" hidden text-nowrap md:flex md:items-center md:justify-center cursor-pointer">
          <li className=" p-4 hover:opacity-50 transition duration-300 ">
            Home
          </li>
          <li className=" p-4 hover:opacity-50 transition duration-300 ">
            Account
          </li>
          <li className=" p-4 hover:opacity-50 transition duration-300 ">
            Sign In
          </li>
          <button
            className=" px-4 py-2 m-4 text-black font-medium bg-white rounded-md
           hover:text-opacity-50 transition duration-300 "
          >
            Get Started
          </button>
        </ul>

        {/* Menu Icon */}
        <div
          onClick={() => setIsOpen((prev) => !prev)}
          className=" block md:hidden"
        >
          {isOpen ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </div>

        {/* Mobile Menu */}
        <div
          className={
            isOpen
              ? "fixed left-0 top-0 w-[60%] h-full bg-[#000300] border-r border-r-slate-900 ease-in-out duration-500 md:hidden"
              : "fixed -left-[100%] ease-in-out duration-500"
          }
        >
          <h1 className=" text-greenColor text-3xl font-bold m-4">
            Mck Energy
          </h1>

          <ul className="uppercase p-4 cursor-pointer">
            <li className="border-b border-gray-600 p-4  hover:opacity-50">
              Home
            </li>
            <li className="border-b border-gray-600 p-4  hover:opacity-50">
              Account
            </li>
            <li className="border-b border-gray-600 p-4  hover:opacity-50">
              Sign In
            </li>
            <button
              className=" px-4 py-2 m-4 text-black font-medium bg-white rounded-md 
              hover:text-opacity-50"
            >
              Get Started
            </button>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
