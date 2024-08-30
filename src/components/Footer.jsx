import React from "react";
import {
  FaDribbbleSquare,
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaTwitterSquare,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      {/* Grid Container */}
      <div
        className=" max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 text-gray-300 
        gap-8 "
        data-aos="zoom-in-up"
      >
        {/* Left Item */}
        <div className=" lg:col-span-1">
          <h1 className=" w-full text-greenColor text-2xl md:text-3xl font-bold mb-2">
            Mck Energy
          </h1>

          <p className="">
            Mck Energy represents a groundbreaking innovation in the field of
            renewable energy, offering a dependable and consistent power supply
            to thousands of households around the clock.
          </p>

          <div className="my-6 flex justify-between items-center md:w-[75%]">
            <FaFacebookSquare size={20} />
            <FaInstagram size={20} />
            <FaTwitterSquare size={20} />
            <FaGithubSquare size={20} />
            <FaDribbbleSquare size={20} />
          </div>
        </div>

        {/* Links */}
        <div className=" flex justify-between mt-6 lg:col-span-2">
          {/* Link 1 */}
          <div className="">
            <h4 className=" text-gray-400 font-medium">Solutions</h4>
            <ul className=" text-sm">
              <li className=" py-2">Analytics</li>
              <li className=" py-2">Marketing</li>
              <li className=" py-2">Commerce</li>
              <li className=" py-2">Insight</li>
            </ul>
          </div>

          {/* Link 2 */}
          <div className="">
            <h4 className=" text-gray-400 font-medium">Support</h4>
            <ul className=" text-sm">
              <li className=" py-2">Pricing</li>
              <li className=" py-2">Documentation</li>
              <li className=" py-2">Guides</li>
              <li className=" py-2">API Status</li>
            </ul>
          </div>

          {/* Link 3 */}
          <div className="">
            <h4 className=" text-gray-400 font-medium">Company</h4>
            <ul className=" text-sm">
              <li className=" py-2">About</li>
              <li className=" py-2">Blog</li>
              <li className=" py-2">Jobs</li>
              <li className=" py-2">Press</li>
              <li className=" py-2">Careers</li>
            </ul>
          </div>

          {/* Link 4 */}
          <div className="">
            <h4 className=" text-gray-400 font-medium">Legal</h4>
            <ul className=" text-sm">
              <li className=" py-2">Claim</li>
              <li className=" py-2">Policy</li>
              <li className=" py-2">Terms</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
