import React from "react";
import single from "../assets/single.png";
import double from "../assets/double.png";
import triple from "../assets/triple.png";

const Card = () => {
  return (
    <div className="w-full py-[10rem] px-4 bg-white">
      {/* Grid Container */}
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8">
        {/* Item 1 */}
        <div
          className="flex flex-col p-4 my-4 shadow-xl rounded-lg 
            duration-300 hover:scale-105"
        >
          <img
            src={single}
            alt="/"
            className="w-20 mx-auto bg-white -mt-[3rem]"
          />

          <h1 className=" py-8 font-bold text-center text-2xl">Basic</h1>

          <h1 className=" font-bold text-center text-4xl">$149</h1>

          <div className="text-center mt-8 font-medium">
            <p className=" border-b py-2 mx-8">2KVA 48V Growatt inverter</p>
            <p className=" border-b py-2 mx-8">28V Lithium Batteries</p>
            <p className=" border-b py-2 mx-8">180W Solar Panels</p>
          </div>

          <button
            className="w-[200px] mx-auto my-6 py-3 text-black font-medium
           bg-greenColor rounded-md hover:opacity-80 transition duration-300"
          >
            Get Started
          </button>
        </div>

        {/* Item 2 */}
        <div
          className="flex flex-col p-4 my-6 bg-gray-100 
          shadow-xl rounded-lg duration-300 hover:scale-105 md:my-0"
        >
          <img
            src={double}
            alt="/"
            className="w-20 mx-auto bg-transparent -mt-[3rem]"
          />

          <h1 className=" p-8 font-bold text-center text-2xl">Premium</h1>

          <h1 className=" font-bold text-center text-4xl">$199</h1>

          <div className="text-center mt-8 font-medium">
            <p className=" border-b py-2 mx-8">3KVA 48V Growatt inverter</p>
            <p className=" border-b py-2 mx-8">38V Lithium Batteries</p>
            <p className=" border-b py-2 mx-8">280W Solar Panels</p>
          </div>

          <button
            className="w-[200px] mx-auto my-6 py-3 bg-black font-medium
           text-greenColor rounded-md hover:text-white transition duration-300 "
          >
            Get Started
          </button>
        </div>

        {/* Item 3 */}
        <div
          className=" w-full flex flex-col p-4 my-4 shadow-xl rounded-lg 
            duration-300 hover:scale-105"
        >
          <img
            src={triple}
            alt="/"
            className="w-20 mx-auto bg-white -mt-[3rem]"
          />

          <h1 className=" p-8 font-bold text-center text-2xl">Enterprise</h1>

          <h1 className=" font-bold text-center text-4xl">$299</h1>

          <div className="text-center mt-8 font-medium">
            <p className=" border-b py-2 mx-8">5KVA 48V Growatt inverter</p>
            <p className=" border-b py-2 mx-8">48V Lithium Batteries</p>
            <p className=" border-b py-2 mx-8">380W Solar Panels</p>
          </div>

          <button
            className="w-[200px] mx-auto my-6 py-3 text-black font-medium
           bg-greenColor rounded-md hover:opacity-80 transition duration-300"
          >
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
