import React from "react";
import { motion } from "framer-motion";

export const Aboutherosection1 = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const floatAnimation = {
    y: [0, -15, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      repeatType: "reverse",
      ease: "easeInOut"
    }
  };

  return (
  <>
  <div className="h-[80px]"></div>
  
  
  <section className="relative overflow-hidden bg-gradient-to-br from-orange-50 to-orange-100 py-24 px-4 lg:px-8">
      <div className="container mx-auto relative z-10">
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="text-center"
        >
          <motion.h2 
            className="text-4xl md:text-6xl font-bold mb-6"
            variants={fadeIn}
          >
            <span className="bg-gradient-to-r from-orange-600 to-orange-700 bg-clip-text text-transparent">
            AdToEarn – Built for 
            </span>
            <br />
            <span className="bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
            Everyday Earners
            </span>
          </motion.h2>

          <motion.p 
            className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-8 leading-relaxed"
            variants={fadeIn}
          >
            AdToEarn is a simple and trusted platform where users earn real money  
            <span className="font-semibold text-orange-600"> just by watching ads .</span>. 
            We’re changing how people use their screen time—turning it into a reliable income stream .
          </motion.p>

          <motion.div 
            className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl mx-auto"
            variants={fadeIn}
          >
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
              <p className="text-3xl font-bold text-orange-600 mb-2">1M+</p>
              <p className="text-sm text-gray-600">Active Users Globally</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
              <p className="text-3xl font-bold text-orange-500 mb-2">$5M+</p>
              <p className="text-sm text-gray-600">Paid to Users</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 col-span-2 md:col-span-1">
              <p className="text-3xl font-bold text-orange-400 mb-2">4.9★</p>
              <p className="text-sm text-gray-600">People Earning Daily</p>
            </div>
          </motion.div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-8 bg-gradient-to-r from-orange-600 to-orange-500 text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all"
          >
            Start Earning Now
          </motion.button>
        </motion.div>
      </div>

      {/* Animated Background Elements */}
      <motion.div 
        className="absolute top-1/3 left-10 w-24 h-24 bg-blue-100 rounded-full blur-xl"
        animate={floatAnimation}
      />
      <motion.div 
        className="absolute top-1/4 right-20 w-32 h-32 bg-cyan-100 rounded-full blur-xl opacity-70"
        animate={{ ...floatAnimation, y: [0, -20, 0] }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-white/30 to-transparent" />
    </section></>
  );
};