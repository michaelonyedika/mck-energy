import React from "react";
import { ReactTyped } from "react-typed";
import { HiOutlineLightBulb } from "react-icons/hi";

const Hero = () => {
  return (
    <div
      className="text-white max-w-[800px] w-full mx-auto h-[500px] flex flex-col 
       text-center mt-16"
    >
      <h4 className="font-bold text-greenColor p-2">
        Electricity for every Home
      </h4>

      <div className=" flex items-center justify-center text-4xl sm:text-5xl md:py-6 md:text-6xl font-bold">
        <HiOutlineLightBulb className=" text-yellow-400" />
        24/7 Power Supply
      </div>

      <div className=" flex justify-center items-center">
        <h1 className="text-xl font-bold py-4 sm:text-3xl md:text-4xl">
          Reliable power, generated from
        </h1>

        <ReactTyped
          className="text-xl font-bold pl-2 sm:text-3xl text-slate-400 md:pl-4 md:text-4xl"
          strings={["Sun", "Water", "Wind"]}
          typeSpeed={120}
          backSpeed={140}
          loop
        />
      </div>

      <h3 className="text-xl font-bold text-gray-500 md:text-2xl">
        Our mission is to harness the power of nature to provide clean,
        reliable, and affordable energy.
      </h3>

      <button
        className="w-[200px] mx-auto my-6 py-3 text-black font-medium bg-greenColor 
        rounded-md hover:opacity-80 transition duration-300 "
      >
        Get Started
      </button>
    </div>
  );
};

export default Hero;
