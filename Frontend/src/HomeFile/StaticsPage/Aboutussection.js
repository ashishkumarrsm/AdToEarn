import React from 'react'
import { FaCheck } from "react-icons/fa";
import { motion } from "framer-motion";
import CountUp from 'react-countup';

export const Aboutussection = () => {
  return (
    <div className="bg-gradient-to-br from-orange-50 to-amber-50 py-16 px-4 sm:px-6 md:px-10 lg:px-16">
      <div className="container mx-auto space-y-16">
        {/* Header Section */}
        <motion.div 
          className="text-center md:text-left"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.p 
            className="text-base sm:text-lg font-semibold mb-3 bg-gradient-to-r from-orange-600 to-amber-500 bg-clip-text text-transparent"
          >
         Why Choose AdToEarn

          </motion.p>
          <motion.h2 
            className="text-2xl sm:text-3xl md:text-5xl font-bold mb-6 leading-tight"
          >
            <span className="bg-gradient-to-r from-gray-800 to-orange-900 bg-clip-text text-transparent pr-2">
            Why Millions Trust
            </span>
            <span className="bg-gradient-to-r from-orange-600 to-amber-500 bg-clip-text text-transparent">
            AdToEarn
            </span>
          </motion.h2>
        </motion.div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="space-y-6">
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
              We’re more than just a platform—we’re a community of real people earning real money. With our 

                <span className="font-semibold text-orange-600"> user-friendly setup</span>. 
                , fast payouts, and 24/7 support, AdToEarn has become a top choice for thousands looking for a reliable online income source. We make earning easy, secure, and stress-free.
              </p>

              {/* Feature List */}
              <div className="grid gap-4">
                {[
                  "🔒 Trusted & Secure – Your data and earnings are fully protected",
                  " 💰 Guaranteed Payouts – Always get paid for your ad views",
                  "🌍 Global Access – Use AdToEarn anytime, anywhere",
                  "📊 Real-Time Dashboard – Track your earnings live"
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start bg-white p-4 rounded-xl shadow-sm border border-gray-100"
                    whileHover={{ y: -4 }}
                  >
                    <div className="w-8 h-8 bg-orange-50 rounded-lg flex items-center justify-center mr-4">
                      <FaCheck className="text-orange-500" />
                    </div>
                    <p className="text-gray-700 text-sm sm:text-base">{item}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Image Section */}
          <motion.div
            className="relative group"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative overflow-hidden rounded-[2rem] shadow-2xl border-8 border-white transform group-hover:scale-[1.01] transition-transform">
              <img 
                src="https://finestwp.co/demos/html/fastland/image/home-3/feature-l3-image.png" 
                alt="AdToFuture platform" 
                className="w-full h-auto object-cover"
              />
              {/* Floating Stats Overlay */}
              <div className="absolute bottom-4 left-4 right-4 sm:bottom-8 sm:left-8 sm:right-8 bg-white/90 backdrop-blur-sm p-4 sm:p-6 rounded-xl shadow-lg">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {[
                    { value: 50000, label: "Daily Active Users" },
                    { value: 10000, label: "5-Star Reviews" },
                    { value: 250, label: "Global Partners" }
                  ].map((stat, index) => (
                    <div key={index} className="text-center">
                      <div className="text-xl sm:text-2xl font-bold text-orange-600">
                        <CountUp end={stat.value} duration={3} separator="," />
                        +
                      </div>
                      <div className="text-sm text-gray-600 mt-1">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Background Effects */}
            <div className="absolute -top-6 -right-6 -bottom-6 -left-6 -z-10 bg-gradient-to-r from-orange-100/30 to-amber-100/30 rounded-[2rem]"></div>
            <div className="absolute inset-0 -z-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
          </motion.div>
        </div>

        {/* Trust Badges */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
        >
          {[
            { icon: "🔒", title: "Secure Payments", text: " Fast & safe earnings with full protection." },
            { icon: "💳", title: "Flexible Payouts", text: "Choose from 10+ ways to get paid." },
            { icon: "🌍", title: "Global Reach", text: "Earn from anywhere—150+ countries." }
          ].map((badge, index) => (
            <div key={index} className="bg-white p-5 sm:p-6 rounded-2xl shadow-sm border border-gray-100 hover:border-orange-200 transition-colors">
              <div className="text-3xl sm:text-4xl mb-4 text-orange-500">{badge.icon}</div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-1">{badge.title}</h3>
              <p className="text-sm text-gray-600">{badge.text}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}
