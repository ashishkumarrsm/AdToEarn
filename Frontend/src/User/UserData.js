import React from "react";
import { motion } from "framer-motion";
import {
  FaTelegramPlane,
  FaRocketchat,
  FaPhotoVideo,
  FaUser,
} from "react-icons/fa";
import { IoCall } from "react-icons/io5";
import { Link } from "react-router-dom";

// User Information

const CircularText = ({ text, radius = 45 }) => {
  const characters = text.split("");
  const deg = 360 / characters.length;

  return (
    <div
      className="absolute w-full h-full animate-spin-slow"
      style={{ animationDuration: "20s" }}
    >
      {characters.map((char, i) => (
        <div
          key={i}
          className="absolute w-full h-full text-xs font-medium text-gray-600"
          style={{
            transform: `rotate(${i * deg}deg)`,
            transformOrigin: `0 ${radius}px`,
            left: "50%",
            top: "0",
          }}
        >
          {char}
        </div>
      ))}
    </div>
  );
};

const UserData = () => {
  return (
    <div className="flex flex-col gap-6  lg:flex-row">
     
      <div class="flex flex-col gap-2 justify-center w-full  p-4">
      <p className="w-full text-center font-semibold text-base">Click & Earn</p>
        <div class="flex flex-row gap-2 justify-center">
         
          <Link
            to="/join-instagram"
            className="w-[90px] h-[90px] outline-none border-none bg-gray-900 rounded-[90px_5px_5px_5px] shadow-lg transition-all duration-200 ease-in-out hover:scale-110 hover:bg-[#cc39a4] group flex items-center justify-center"
          >
            <svg
              class="mt-6 ml-5 fill-[#fff] group-hover:fill-white"
              height="30"
              width="30"
              viewBox="0,0,256,256"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g stroke="none">
                <g transform="scale(8,8)">
                  <path d="M11.46875,5c-3.55078,0 -6.46875,2.91406 -6.46875,6.46875v9.0625c0,3.55078 2.91406,6.46875 6.46875,6.46875h9.0625c3.55078,0 6.46875,-2.91406 6.46875,-6.46875v-9.0625c0,-3.55078 -2.91406,-6.46875 -6.46875,-6.46875zM11.46875,7h9.0625c2.47266,0 4.46875,1.99609 4.46875,4.46875v9.0625c0,2.47266 -1.99609,4.46875 -4.46875,4.46875h-9.0625c-2.47266,0 -4.46875,-1.99609 -4.46875,-4.46875v-9.0625c0,-2.47266 1.99609,-4.46875 4.46875,-4.46875zM21.90625,9.1875c-0.50391,0 -0.90625,0.40234 -0.90625,0.90625c0,0.50391 0.40234,0.90625 0.90625,0.90625c0.50391,0 0.90625,-0.40234 0.90625,-0.90625c0,-0.50391 -0.40234,-0.90625 -0.90625,-0.90625zM16,10c-3.30078,0 -6,2.69922 -6,6c0,3.30078 2.69922,6 6,6c3.30078,0 6,-2.69922 6,-6c0,-3.30078 -2.69922,-6 -6,-6zM16,12c2.22266,0 4,1.77734 4,4c0,2.22266 -1.77734,4 -4,4c-2.22266,0 -4,-1.77734 -4,-4c0,-2.22266 1.77734,-4 4,-4z"></path>
                </g>
              </g>
            </svg>
          </Link>

          <Link
            to="/watch-adds"
            className="w-[90px] h-[90px] outline-none border-none bg-gray-900 rounded-[5px_90px_5px_5px] shadow-lg transition-all duration-200 ease-in-out hover:scale-110 hover:bg-[#03A9F4] group flex items-center justify-center"
          >
            <FaRocketchat className="mb-2 w-6 h-6 text-purple-500 mt-6 -ml-4 fill-[#03A9F4] group-hover:fill-white" />
          </Link>
        </div>

        <div class="flex flex-row gap-2 justify-center">
          <Link
            to="/join-telegram"
            className="w-[90px] h-[90px] outline-none border-none bg-gray-900 rounded-[5px_5px_5px_90px] shadow-lg transition-all duration-200 ease-in-out hover:scale-110 hover:bg-[#d18b8b] group flex items-center justify-center"
          >
            <FaTelegramPlane className="mt-[-0.375rem] ml-5  fill-[#d18b8b] w-6 h-6 group-hover:fill-white" />
          </Link>

          <Link
            to="/watch-adds"
            className="w-[90px] h-[90px] outline-none border-none bg-gray-900 rounded-[5px_5px_90px_5px] shadow-lg transition-all duration-200 ease-in-out hover:scale-110 hover:bg-[#8c9eff] group flex items-center justify-center"
          >
            <FaPhotoVideo className="mt-[-0.563rem] -ml-5 fill-[#8c9eff] w-6 h-6 group-hover:fill-white" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default UserData;
