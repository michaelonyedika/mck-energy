import React from "react";
import wind_turbin from "../assets/wind-turbin.jpg";

const Analytics = () => {
  return (
    <div className=" w-full bg-white py-16 px-4">
      {/* Grid Container */}
      <div className=" max-w-[1240px] mx-auto grid md:grid-cols-2 gap-8">
        <img
          src={wind_turbin}
          alt="wind_turbin"
          className=" w-[400px] mx-auto my-0 rounded-xl"
          data-aos="fade-up"
          // data-aos-delay="200"
        />

        {/* Right Item */}
        <div className=" flex flex-col justify-center" data-aos="fade-up">
          <h4 className=" font-bold text-greenColor">DATA-DRIVEN INNOVATION</h4>

          <h1 className=" text-2xl my-2 font-bold sm:text-3xl md:text-4xl">
            Wind Power Source
          </h1>

          <p className="">
            Wind power is one of the most widely used renewable energy sources,
            known for its environmental benefits and growing contribution to the
            global energy mix. However, its reliability as a power source is
            subject to various factors, making it both a promising and
            challenging option.
          </p>

          <button
            className="w-[200px] mx-auto my-6 py-3 bg-black font-medium text-greenColor 
            rounded-md md:mx-0 hover:text-white transition duration-300 "
          >
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
