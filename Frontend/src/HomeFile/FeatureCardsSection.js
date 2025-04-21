import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaRegLightbulb, 
  FaMoneyBillWave, 
  FaGift, 
  FaShieldAlt, 
  FaChartLine, 
  FaHandshake 
} from 'react-icons/fa';

const FeatureCard = ({ item, index }) => {
  // Card variants for hover animations
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.5, 
        delay: index * 0.15,
        ease: "easeOut"
      }
    },
    hover: { 
      y: -10,
      boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.15)",
      transition: { duration: 0.3 }
    }
  };

  // Icon variants
  const iconVariants = {
    hidden: { scale: 0.2, opacity: 0 },
    visible: { 
      scale: 1, 
      opacity: 1,
      transition: { 
        delay: index * 0.15 + 0.3,
        duration: 0.5,
        type: "spring",
        stiffness: 200
      }
    },
    hover: { 
      scale: 1.1,
      rotate: [0, -10, 10, -5, 5, 0],
      transition: { duration: 0.4 }
    }
  };

  // Heading variants
  const textVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { 
        delay: index * 0.15 + 0.5,
        duration: 0.4
      }
    }
  };

  // Description variants
  const descVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        delay: index * 0.15 + 0.7,
        duration: 0.4
      }
    }
  };

  // Icon mapping
  const icons = {
    "Simple to Use:": <FaRegLightbulb size={24} />,
    "Daily Income:": <FaMoneyBillWave size={24} />,
    "Bonus Earnings:": <FaGift size={24} />,
    "Secure Platform:": <FaShieldAlt size={24} />,
    "Growth Potential:": <FaChartLine size={24} />,
    "Support Team:": <FaHandshake size={24} />
  };

  return (
    <motion.div
      className="relative rounded-xl overflow-hidden h-full"
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      whileHover="hover"
      viewport={{ once: true, margin: "-50px" }}
    >
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-white to-gray-50 opacity-90"></div>
      
      {/* Card content */}
      <div className="relative z-10 p-7 sm:p-8 h-full flex flex-col">
        {/* Icon container */}
        <motion.div
          className={`relative w-16 h-16 rounded-2xl flex items-center justify-center ${item.bgcolor} bg-opacity-90 shadow-lg`}
          variants={iconVariants}
        >
          {icons[item.heading] || <FaRegLightbulb size={24} />}
        </motion.div>

        {/* Subtle decoration */}
        <motion.div 
          className={`absolute top-0 right-0 w-32 h-32 ${item.bgcolor} bg-opacity-5 rounded-full -mr-16 -mt-16 z-0`}
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ delay: index * 0.15 + 0.2, duration: 0.7 }}
          viewport={{ once: true }}
        />
        
        {/* Heading */}
        <motion.h3 
          className="text-xl sm:text-2xl font-semibold text-gray-800 mt-6 mb-2"
          variants={textVariants}
        >
          {item.heading.replace(':', '')}
        </motion.h3>
        
        {/* Description */}
        <motion.p 
          className="text-gray-600 mt-2"
          variants={descVariants}
        >
          {item.description}
        </motion.p>
        
        {/* Learn more link */}
        <motion.div 
          className="mt-auto pt-5"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: index * 0.15 + 0.9 }}
        >
          <motion.button 
            className={`mt-4 text-sm font-medium ${item.bgcolor.replace('bg-', 'text-')} flex items-center gap-2 group`}
            whileHover={{ x: 5 }}
          >
            Learn more
            <motion.span 
              initial={{ x: 0 }}
              whileHover={{ x: 5 }}
              transition={{ duration: 0.2 }}
            >
              →
            </motion.span>
          </motion.button>
        </motion.div>
      </div>
    </motion.div>
  );
};

const FeatureCardsSection = () => {
  // Enhanced data with more options
  const data = [
    {
      heading: "Turn Time Into Income",
      description:
        "Every second you spend watching ads turns into real money. No need for skills or investment.",
      image: "https://finestwp.co/demos/html/fastland/image/svg/athletics.svg",
      bgcolor: "bg-blue-500",
    },
    {
      heading: "Use Any Device, Anytime",
      description:
        "AdToEarn works on mobile, tablet, and PC. Earn from home or on the go.",
      image: "https://finestwp.co/demos/html/fastland/image/svg/money-coins.svg",
      bgcolor: "bg-green-500",
    },
    {
      heading: "Quick Start",
      description:
        "Sign up and start watching ads instantly. No approvals or long forms.",
      image: "https://finestwp.co/demos/html/fastland/image/svg/archery-target.svg",
      bgcolor: "bg-purple-500",
    },
    {
      heading: "Unlimited Ad Access",
      description:
        "Watch as many ads as you want—no daily limits. The more you watch, the more you earn",
      image: "https://finestwp.co/demos/html/fastland/image/svg/shield.svg",
      bgcolor: "bg-indigo-500",
    },
    {
      heading: "Perfect Side Hustle",
      description:
        "Make money in your free time without stress. Even 10 minutes a day can add up.",
      image: "https://finestwp.co/demos/html/fastland/image/svg/graph.svg",
      bgcolor: "bg-pink-500",
    },
    {
      heading: "Easy Tracking",
      description:
        "View your earnings and history in your dashboard. Stay in control of your progress",
      image: "https://finestwp.co/demos/html/fastland/image/svg/customer-service.svg",
      bgcolor: "bg-yellow-500",
    }
  ];

  // Container animation
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8 ">
     
      
      
      {/* Feature cards grid */}
      <motion.div 
        className="container mx-auto mt-12"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
          {data.map((item, index) => (
            <FeatureCard key={index} item={item} index={index} />
          ))}
        </div>
      </motion.div>
      
      {/* Call to action */}
      <motion.div 
        className="mt-16 text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        viewport={{ once: true }}
      >
        <motion.button 
          className="px-8 py-3 bg-gradient-to-r from-orange-500 to-indigo-600 text-white font-medium rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
        >
          Get Started Now
        </motion.button>
      </motion.div>
    </div>
  );
};

export default FeatureCardsSection;