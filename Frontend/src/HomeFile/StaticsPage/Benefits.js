import { Briefcase, Hourglass, Backpack, Baby, Gift, DollarSign } from "lucide-react";
import { motion } from "framer-motion";

const benefits = [
  {
    icon: <Briefcase className="h-6 w-6 text-white" />,
    title: "Safe & Secure",
    description: "Your data and earnings are always protected with top-level security.",
  },
  {
    icon: <Hourglass className="h-6 w-6 text-white" />,
    title: " Real Earnings",
    description: "Get paid for every ad you watch—no fake promises or delays.",
  },
  {
    icon: <Backpack className="h-6 w-6 text-white" />,
    title: "100% Free to Use",
    description: "No joining fees, no subscriptions—start earning without spending a rupee.",
  },
  {
    icon: <Baby className="h-6 w-6 text-white" />,
    title: "Accessible Anywhere",
    description: " Use AdToEarn on your phone, laptop, or tablet—anytime, anywhere.",
  },
  {
    icon: <Gift className="h-6 w-6 text-white" />,
    title: " Instant Tracking",
    description: " Live dashboard shows your ad views and earnings in real time.",
  },
  {
    icon: <DollarSign className="h-6 w-6 text-white" />,
    title: " Referral Bonuses",
    description: "Invite friends and earn extra through our simple referral system.",
  },
];

export const Benefits = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl font-bold text-gray-900 mb-6 relative">
            Why Choose{" "}
            <span className="relative inline-block">
            AdToEarn?

              <span className="absolute bottom-0 left-0 w-full h-2 bg-orange-100 opacity-80 -z-10 transform translate-y-2" />
            </span>
          </h2>
          <p className="text-gray-500 text-xl max-w-3xl mx-auto">
          We make it easy for anyone to earn money online—no investment, no tricks. With trusted features and real payouts, AdToEarn stands out from the rest.

          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              className="group relative bg-white rounded-xl border border-gray-100 hover:border-orange-100 transition-all duration-300 p-6"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <div className="flex items-start space-x-4">
                <motion.div
                  className="p-3 rounded-xl bg-orange-500 shadow-lg group-hover:scale-110 transition-transform duration-300"
                >
                  {benefit.icon}
                </motion.div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
              
              {/* Hover effect overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-white to-orange-50 opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-xl pointer-events-none" />
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
            Explore Career Opportunities
          </button>
        </motion.div>
      </div>
    </section>
  )
}