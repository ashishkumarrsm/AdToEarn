import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export const Aboutwatchvedio = () => {
  return (
    <section className="px-4 md:px-8 bg-gradient-to-br from-gray-50 to-blue-50 py-20">
      <div className="container  mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
       

        {/* Right Section - Enhanced Content */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <motion.h2
            className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-orange-600 to-orange-500 bg-clip-text text-transparent p-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Join AdToEarn and Start Earning Today
          </motion.h2>

          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-xl flex items-center justify-center">
                <span className="text-blue-600">✓</span>
              </div>
              <p className="text-lg text-gray-600">
              No skills or investment needed—just sign up and start watching ads.
              </p>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-cyan-100 rounded-xl flex items-center justify-center">
                <span className="text-cyan-600">⏱</span>
              </div>
              <p className="text-lg text-gray-600">
              Perfect for students, freelancers, and anyone wanting extra income.
              </p>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-orange-100 rounded-xl flex items-center justify-center">
                <span className="text-orange-600">💰</span>
              </div>
              <p className="text-lg text-gray-600">
              Earn anytime, anywhere—right from your phone or laptop.

              </p>
            </div>
          </div>

          <motion.div
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <Link
              to="/learn-more"
              className="px-8 py-4 bg-gradient-to-r from-orange-600 to-orange-500 text-white rounded-xl font-medium hover:shadow-lg transition-all flex items-center gap-2 justify-center"
            >
              <span>Explore Features</span>
              <span className="text-xl">→</span>
            </Link>
            
            <Link
              to="/get-started"
              className="px-8 py-4 border-2 border-orange-600 text-orange-600 rounded-xl font-medium hover:bg-blue-50 transition-colors flex items-center gap-2 justify-center"
            >
              <span>Start Earning Now</span>
              <span className="text-xl">🚀</span>
            </Link>
          </motion.div>

          {/* Trust Badges */}
          <div className="flex flex-wrap gap-4 items-center mt-8">
            <div className="px-4 py-2 bg-white rounded-full shadow-sm text-sm flex items-center gap-2">
              🔒 SSL Secure
            </div>
            <div className="px-4 py-2 bg-white rounded-full shadow-sm text-sm flex items-center gap-2">
              ⭐ 4.9/5 Rating
            </div>
          </div>
        </motion.div>



         {/* Left Section - Enhanced Media Display */}
         <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
          className="relative group"
        >
          <div className="relative overflow-hidden rounded-3xl shadow-2xl border-8 border-white transform group-hover:scale-[1.02] transition-transform duration-300">
            <img 
              src="https://img.freepik.com/premium-vector/refer-friend-concept-with-businessman-shout-megaphone-come-out-from-big-smartphone_138260-1129.jpg" 
              alt="Ad to future"
              className="w-full h-auto object-cover"
            />
            {/* Floating Badge */}
            <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-md flex items-center gap-2">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              <span className="text-sm font-medium text-orange-700">Live Demo</span>
            </div>
          </div>
          
          {/* Animated Grid Pattern */}
          <div className="absolute inset-0 -z-10 opacity-20" 
               style={{
                 backgroundImage: `linear-gradient(to right, #3b82f6 1px, transparent 1px),
                                  linear-gradient(to bottom, #3b82f6 1px, transparent 1px)`,
                 backgroundSize: "40px 40px",
               }} />
        </motion.div>
      </div>
    </section>
  )
}