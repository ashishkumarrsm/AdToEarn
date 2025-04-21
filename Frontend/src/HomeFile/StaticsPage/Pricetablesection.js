import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";

const pricingData = [
  {
    title: "Starter Plan",
    price: "0.50%",
    amount: "$50",
    features: [
      "Low investment, steady returns",
      "Ideal for beginners",
      "Daily automatic earnings",
      "Full feature access",
    ],
  },
  {
    title: "Growth Plan",
    price: "0.75%",
    amount: "$100",
    features: [
      "Higher daily returns",
      "Boosted earnings",
      "Enhanced rewards",
      "Income growth focus",
    ],
    popular: true,
  },
  {
    title: "Pro Plan",
    price: "1%",
    amount: "$500",
    features: [
      "Maximum profit rate",
      "Premium benefits",
      "Fast payouts",
      "Long-term earnings",
    ],
  },
];

export const Pricetablesection = () => {
  return (
    <>
      <div className="h-[80px]"></div>
      <section className="bg-gradient-to-b from-orange-50 to-white py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-12 lg:mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-amber-600">
                Simple Pricing
              </span>
              <br className="sm:hidden" /> For Every Investor
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mt-4">
              Choose your investment strategy and start earning daily returns. Higher investments unlock greater rewards.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {pricingData.map((plan, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -10 }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-100px" }}
                className="relative group"
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-orange-500 to-amber-600 text-white px-4 py-1 rounded-full text-sm font-semibold shadow-lg">
                    Most Popular
                  </div>
                )}
                <div className={`bg-white rounded-xl shadow-lg p-6 lg:p-8 h-full flex flex-col transition-all duration-300 
                  ${plan.popular ? 'border-2 border-orange-500' : 'border border-gray-200'} 
                  group-hover:shadow-xl`}
                >
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{plan.title}</h3>
                    <p className="text-gray-500 text-lg mb-4">{plan.amount}</p>
                    
                    <div className="my-6 bg-gradient-to-br from-orange-100 to-amber-100 p-4 rounded-xl">
                      <div className="text-4xl font-bold text-gray-900">
                        {plan.price}
                        <span className="text-lg font-medium text-gray-500 ml-2">daily</span>
                      </div>
                    </div>

                    <ul className="space-y-3 mb-8">
                      {plan.features.map((feature, idx) => (
                        <li 
                          key={idx}
                          className="flex items-start space-x-3 text-gray-600"
                        >
                          <FaCheckCircle className="flex-shrink-0 text-orange-500 mt-1" />
                          <span className="text-left">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300
                    ${plan.popular 
                      ? 'bg-gradient-to-r from-orange-500 to-amber-600 text-white hover:shadow-xl'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}
                    `}
                  >
                    Start Investing
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div 
            className="text-center mt-12 text-gray-600 text-sm"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <p>7-day free trial • No hidden fees • Cancel anytime</p>
          </motion.div>
        </div>
      </section>
    </>
  )
}