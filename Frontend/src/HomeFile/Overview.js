import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

export const Overview = () => {
  // Refs for intersection observer
  const statsRef = useRef(null);
  
  // States for counters
  const [isVisible, setIsVisible] = useState(false);
  const [countValues, setCountValues] = useState({
    visitors: 0,
    conversion: 0,
    saved: 0,
    success: 0
  });

  // Final values for the counters
  const finalValues = {
    visitors: 15,
    conversion: 60,
    saved: 500,
    success: 95
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  // Use Intersection Observer to trigger animations when component is in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => {
      if (statsRef.current) {
        observer.unobserve(statsRef.current);
      }
    };
  }, []);

  // Counter animation effect
  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000; // Animation duration in ms
    const frameRate = 16; // Update every 16ms (roughly 60fps)
    const steps = duration / frameRate;
    
    let currentStep = 0;
    
    const interval = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;
      
      if (progress >= 1) {
        setCountValues({
          visitors: finalValues.visitors,
          conversion: finalValues.conversion,
          saved: finalValues.saved,
          success: finalValues.success
        });
        clearInterval(interval);
        return;
      }
      
      // Easing function for smoother animation
      const easeOutQuad = t => t * (2 - t);
      const easedProgress = easeOutQuad(progress);
      
      setCountValues({
        visitors: Math.round(easedProgress * finalValues.visitors),
        conversion: Math.round(easedProgress * finalValues.conversion),
        saved: Math.round(easedProgress * finalValues.saved),
        success: Math.round(easedProgress * finalValues.success)
      });
    }, frameRate);
    
    return () => clearInterval(interval);
  }, [isVisible]);

  // Stat items data
  const statItems = [
    {
      value: countValues.visitors,
      suffix: "K",
      text: "people earning daily",
      color: "text-orange-500"
    },
    {
      value: countValues.conversion,
      suffix: "%",
      text: "payouts than other platforms",
      color: "text-orange-500"
    },
    {
      value: countValues.saved,
      suffix: "K+",
      text: "already paid to users",
      color: "text-orange-500"
    },
    {
      value: countValues.success,
      suffix: "%",
      text: "satisfaction from active users",
      color: "text-orange-500"
    }
  ];

  return (
    <div 
      className="overflow-hidden py-12 px-4 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-b from-orange-50 to-white" 
      ref={statsRef}
    >
      <div className="container mx-auto">
        <motion.h2 
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-12 md:mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
        >
      See What Makes  <span className="text-orange-500">AdToEarn </span>So Powerful
        </motion.h2>
        
        <motion.div 
          className="max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 lg:gap-10">
            {statItems.map((item, index) => (
              <motion.div 
                key={index}
                className="bg-white rounded-xl shadow-md p-6 md:p-8 flex flex-col items-center text-center transform transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border border-orange-100"
                variants={itemVariants}
              >
                <div className="w-16 h-1 bg-orange-500 rounded-full mb-4"></div>
                <span className={`text-4xl sm:text-5xl font-bold ${item.color} mb-2 md:mb-4`}>
                  {item.value}{item.suffix}
                </span>
                <p className="text-gray-600 text-base sm:text-lg md:text-xl">
                  {item.text}
                </p>
                <div className="mt-4 w-full h-1 bg-gradient-to-r from-transparent via-orange-200 to-transparent rounded-full"></div>
              </motion.div>
            ))}
          </div>
        </motion.div>
        
        <motion.div
          className="mt-12 md:mt-16 text-center"
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <p className="text-gray-600 text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
          Thousands of users are already earning every single day with AdToEarn. We’ve built a trusted platform that delivers real results, with strong payouts and happy users worldwide
          </p>
          <motion.button
            className="mt-6 px-6 py-3 bg-orange-500 text-white font-medium rounded-lg shadow-md hover:bg-orange-600 transition-colors duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Started Today
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default Overview;