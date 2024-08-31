import React from "react";

const Newletter = () => {
  return (
    <div className=" w-full text-white py-16 px-4">
      {/* Grid Container */}
      <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3">
        {/* Text Container */}
        <div
          className="lg:col-span-2 my-4"
          data-aos="slide-right"
          // data-aos-delay="0"
        >
          <h1 className=" text-2xl py-2 font-bold sm:text-3xl md:text-4xl">
            Want tips to optimize your energy efficient?
          </h1>
          <p className="">Sign up to our newsletter and stay up to date.</p>
        </div>

        {/* Input container */}
        <div className=" my-4">
          <div className=" flex flex-col items-center justify-between sm:flex-row w-full">
            <input
              type="text"
              placeholder="Enter Email"
              className=" w-full flex p-3 text-black rounded-md outline-none"
            />
            <button
              className="bg-greenColor w-[200px] rounded-md font-medium ml-4 my-6 py-3 px-6
               text-black hover:opacity-80 transition duration-300"
            >
              Notify Me
            </button>
          </div>

          <p className="">
            We care about the protection of your data. Read our{" "}
            <span className="text-greenColor">Privacy Policy.</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Newletter;
