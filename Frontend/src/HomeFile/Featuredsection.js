import React from "react";
import { motion } from "framer-motion";
import Aurora from "./Aurora";
import BlurText from "./BlurText";
import FeatureCardsSection from "./FeatureCardsSection";


export const Featuredsection = () => {


  const handleAnimationComplete = () => {
    console.log('Animation completed!');
  };
  // const data = [
  //   {
  //     heading: "Simple to Use:",
  //     description:
  //       " Just sign up and start watching ads.",
  //     image: "https://finestwp.co/demos/html/fastland/image/svg/athletics.svg",
  //     bgcolor: "bg-blue-500",
  //   },
  //   {
  //     heading: "Daily Income:",
  //     description:
  //       "Earn money every day from your activity.",
  //     image: "https://finestwp.co/demos/html/fastland/image/svg/money-coins.svg ",
  //     bgcolor: "bg-green-500",
  //   },
  //   {
  //     heading: "Bonus Earnings:",
  //     description:
  //       "Invite others and grow your income faster.",
  //     image: "https://finestwp.co/demos/html/fastland/image/svg/archery-target.svg",
  //     bgcolor: "bg-purple-500",
  //   },
  // ];

  return (

    <div className="relative w-full   text-white overflow-hidden">
      {/* Background effect container */}
      <div className="absolute inset-0 z-0">
        <Aurora
          colorStops={["white", "white", "white"]}
          blend={0.5}
          amplitude={1.0}
          speed={0.5}
        />
      </div>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="my-12 sm:my-16 md:my-28  px-6 sm:px-12 md:px-32 py-6 overflow-hidden space-y-4"
      >
        <div className="flex relative flex-col md:flex-row justify-between gap-6 lg:gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-[36px] sm:text-[48px] md:text-[64px] lg:text-[78px] font-medium tracking-[-0.01em] leading-[1.075] z-10 text-orange-500 flex justify-center w-full "
          >

            <BlurText
              text="How AdToEarn Helps You Make Real Money
"
              delay={150}
              animateBy="words"
              direction="top"
              onAnimationComplete={handleAnimationComplete}
              className=""
            />

          </motion.div>

          <div className="hidden md:block">
            <img
              className="absolute -left-[220px] top-[120px] max-w-none opacity-70 md:opacity-100"
              src="https://finestwp.co/demos/html/fastland/image/home-1/services-shape-l1.png"
              alt="shape"
            />
          </div>

        </div>
        {/* paragraph */}
        <div className="container mx-auto text-xl text-white z-10 text-center  relative">
          <p>AdToEarn is for anyone who wants to earn extra income with no setup or investment. Just watch ads in your free time and get paid—simple, flexible, and for everyone.</p>
        </div>

       
        <div>
          <FeatureCardsSection/>
        </div>
      </motion.div>


    </div>
  );
};
