import React from "react";
import {
  FaBuilding,
  FaUsers,
  FaChartBar,
  FaUsersCog,
  FaClipboardList,
  FaNewspaper,
} from "react-icons/fa";
import { AboutHeroSection } from "./AboutHeroSection";
import { Link } from "react-router-dom";
import { AiOutlineArrowRight } from "react-icons/ai";

import { Aboutherosection1 } from "./Aboutherosection1";
import { Aboutwatchvedio } from "./Aboutwatchvedio";
import { Aboutussection } from "./Aboutussection";
import Header from "../../CoreFile/Header";
import Footer from "../../CoreFile/Footer";
import { Team } from "./Team";
export const About = () => {
  return (
    <>
      <Header />
      <Aboutherosection1 />
      <Aboutwatchvedio />
      <Aboutussection />
      <Team />

      <Footer />
    </>
  );
};

// hero section

// <div className="grid items-center grid-cols-1 gap-12 mb-20 lg:grid-cols-2">
//           <div>
//             <span className="bg-gradient-to-r from-blue-500 to-green-500 text-transparent bg-clip-text text-lg border-blue-500  border-b-[2px] ">
//               About Us
//             </span>
//             <h2 className="mt-2 mb-3 text-4xl font-semibold leading-snug">
//             We Make Automated Trading Easy and Profitable
//             </h2>
//             <p className="text-base text-justify text-gray-600">
//             Take charge of your investments with FinRain, a smart trading designed to help you make more profit with less effort. Our advanced AI-powered technology allows you to trade 24/7 without the hassle of manual trading. Whether you are a beginner or an expert, FinRain makes trading simpler, safer, and more efficient for everyone.
//             </p>
//           </div>
//           <div className="relative sm:h-[400px] rounded-lg overflow-hidden">
//             <img
//               src="https://img.freepik.com/free-photo/robot-with-final-piece-jigsaw-puzzle_1048-3550.jpg?uid=R176823449&ga=GA1.1.1433286368.1718702777&semt=ais_hybrid"
//               alt="Office workspace"
//               fill
//               className="object-cover"
//             />
//           </div>
//         </div>
