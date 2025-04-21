import React from "react";
import { motion } from "framer-motion";
import BlurText from "./BlurText";

const HeroSection = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (custom) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: custom * 0.2,
        duration: 0.6,
        ease: "easeOut",
      },
    }),
  };

  const floatAnimation = {
    y: [0, -20, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      repeatType: "reverse",
      ease: "easeInOut",
    },
  };

  const gradientAnimation = {
    backgroundPosition: ["0% 50%", "100% 50%"],
    transition: {
      duration: 15,
      repeat: Infinity,
      repeatType: "mirror",
      ease: "linear",
    },
  };
  const handleAnimationComplete = () => {
    console.log('Animation completed!');
  };

  return (
  <>
  <div className="h-[80px]"></div>
    <div className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 py-16 overflow-hidden">
      {/* Animated gradient background */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(45deg, #3b82f6, #06b6d4, #ec4899, #f97316)",
          backgroundSize: "400% 400%",
        }}
        animate={gradientAnimation}
      >
        <div className="absolute inset-0 bg-black/40 backdrop-blur-3xl" />
      </motion.div>

      {/* Grid overlay */}
      <div className="absolute inset-0 opacity-20 mix-blend-overlay"
        style={{
          backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px),
                              linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }} />

      {/* Content container */}
      <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center z-10">
        {/* Left Column - Text Content */}
        <motion.div
          className="flex flex-col justify-center space-y-6 md:space-y-8"
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            className="text-4xl sm:text-5xl xl:text-6xl font-bold leading-tight"
            variants={fadeInUp}
            custom={0}
          >
            <span className="bg-white bg-clip-text text-transparent block">
            Earn Money Every Time 
            </span>
            <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent block mt-2">
            You Watch Ads
             
            </span>
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-slate-200 leading-relaxed"
            variants={fadeInUp}
            custom={1}
          >
            Turn your screen time into income with no  
            <span className="font-semibold text-orange-500">experience or investment</span> needed. Just sign up, watch ads, and start getting paid instantly.
          </motion.p>

          <motion.div
            variants={fadeInUp}
            custom={2}
            className="flex flex-col sm:flex-row gap-4"
          >
            <motion.button
              className="flex items-center justify-center gap-3 bg-gradient-to-r from-orange-600 to-orange-500 px-6 py-4 rounded-xl text-lg font-semibold text-white hover:scale-105 transition-transform"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              Start Earning Now

            </motion.button>

            <a href="#features" className="px-6 py-4 text-center text-slate-100 hover:text-white font-medium underline decoration-cyan-400">
              See How It Works →
            </a>
          </motion.div>

          {/* Stats Grid */}
          <motion.div
      className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full mx-auto"
      variants={fadeInUp}
      custom={3}
    >
      <div className="p-4 rounded-lg bg-transparent shadow-sm border border-orange-200 text-center">
        <p className="text-xl sm:text-2xl font-bold text-orange-500">$1,000+</p>
        <p className="text-sm text-gray-900 mt-1">Earned Daily by Users</p>
      </div>
      <div className="p-4 rounded-lg bg-transparent shadow-sm border border-orange-200 text-center">
        <p className="text-xl sm:text-2xl font-bold text-orange-500">$10,000+</p>
        <p className="text-sm text-gray-900 mt-1">Paid Out Securely</p>
      </div>
      <div className="p-4 rounded-lg bg-transparent shadow-sm border border-orange-200 text-center">
        <p className="text-xl sm:text-2xl font-bold text-orange-500">24/7 Access</p>
        <p className="text-sm text-gray-900 mt-1">Earn Anytime, Anywhere</p>
      </div>
    </motion.div>
        </motion.div>

        {/* Right Column - Image Section */}
        <motion.div
          className="flex justify-center items-center"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <div className="relative w-full   ">
            <motion.div
              className="relative bg-gradient-to-br from-slate-900 to-slate-800 p-6 rounded-[40px] shadow-2xl border-8 border-slate-700/50"
              animate={floatAnimation}
              style={{
                boxShadow: "0 0 40px rgba(59, 130, 246, 0.3)"
              }}
            >
              <div className="bg-slate-900 rounded-[30px] overflow-hidden border-2 border-cyan-400/20">
                <img
                  src="/hero3.png"
                  alt="App interface"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute bottom-4 left-4 right-4 bg-slate-800/50 rounded-full h-2">
                  <motion.div
                    className="bg-cyan-400 h-full rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: "70%" }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      repeatType: "reverse"
                    }}
                  />
                </div>
              </div>

              <motion.div
                className="absolute top-1/2 -right-16 transform -translate-y-1/2"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.5 }}
              >
                <div className="bg-gradient-to-br from-cyan-500 to-blue-600 p-3 rounded-xl shadow-lg">
                  <p className="text-xs font-bold text-white">+ $9.25 Earned</p>
                  <div className="flex items-center mt-1">
                    <div className="h-1 bg-white/30 rounded-full flex-1 mr-2">
                      <div className="h-full bg-white w-3/4 rounded-full" />
                    </div>
                    <span className="text-xs text-cyan-100">0:22</span>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Animated particles */}
            <div className="absolute inset-0  top-10 left-10">
              {[...Array(8)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute text-2xl opacity-50"
                  initial={{ scale: 0 }}
                  animate={{
                    scale: [0, 1, 0],
                    x: Math.random() * 100 - 50,
                    y: Math.random() * 100 - 50
                  }}
                  transition={{
                    duration: 3 + i,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  {i % 2 === 0 ? "✨" : "💎"}
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  
  </>
  );
};

export default HeroSection;