import React from "react";
import { motion } from "framer-motion";
import { Aboutwatchvedio } from "./Aboutwatchvedio";
import { Benefits } from "./Benefits";
import { Team } from "./Team";
import Header from "../../CoreFile/Header";
import Footer from "../../CoreFile/Footer";

export const Carrer = () => {
  return (
    <>
      <Header />
      <div className="h-[80px]"></div>
      <section className="relative bg-gradient-to-b from-orange-50 to-white py-24 lg:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Decorative elements */}
        <div className="hidden md:block absolute -right-20 -top-20 w-64 h-64 bg-orange-100 rounded-full opacity-50"></div>
        <div className="hidden md:block absolute left-0 bottom-0 w-48 h-48 bg-orange-500 rounded-tr-full"></div>
        
        <motion.div 
          className="relative z-10 max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.p 
            className="text-orange-600 font-bold uppercase tracking-wider mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Join Our Team
          </motion.p>
          <motion.h2 
            className="text-4xl md:text-5xl xl:text-6xl font-bold text-gray-900 mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
          Grow Your Career with 
            <span className="bg-gradient-to-r from-orange-500 to-amber-600 bg-clip-text text-transparent">
              {" "}AdToEarn

            </span>
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            We’re always looking for passionate, driven people to join our team. Be part of a fast-growing platform that’s changing how people earn online. Your ideas, skills, and growth matter here.
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <button className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all transform hover:scale-105 shadow-lg hover:shadow-orange-200">
              Explore Open Positions
            </button>
          </motion.div>
        </motion.div>

        {/* Animated background elements */}
        <div className="absolute hidden lg:block right-0 top-1/3 w-48 h-48 bg-orange-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute hidden lg:block left-0 bottom-1/4 w-64 h-64 bg-amber-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
      </section>

      <Aboutwatchvedio />
      <Benefits />
      <Team />
      <Footer />
    </>
  );
};