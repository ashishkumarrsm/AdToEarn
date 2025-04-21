import { useState } from "react";
import { motion } from "framer-motion";
import { FiSearch } from "react-icons/fi";

const searchOptions = [
  { placeholder: "Type job title or keyword" }
];

export const Team = () => {
  const [searchInput, setSearchInput] = useState("");
  return (
    <motion.div 
      className="flex flex-col items-center justify-center bg-orange-50 py-20 px-4 sm:px-6 lg:px-8"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-4xl w-full space-y-8 text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Interested in joining our{" "}
          <span className="text-orange-500">team</span>?
        </h2>

        {searchOptions.map((option, index) => (
          <div 
            key={index}
            className="relative group w-full mx-auto"
          >
            <div className="flex flex-col sm:flex-row items-center gap-4 bg-white rounded-xl shadow-lg p-1 transition-all duration-300 focus-within:shadow-orange-100">
              <div className="flex items-center w-full px-4 py-2 sm:py-3">
                <FiSearch className="text-gray-400 text-xl mr-3 group-focus-within:text-orange-500 transition-colors" />
                <input
                  type="text"
                  placeholder={option.placeholder}
                  value={searchInput}
                  onChange={(e) => setSearchInput(e.target.value)}
                  className="flex-grow w-full outline-none text-gray-700 placeholder-gray-400 bg-transparent text-base sm:text-lg"
                />
              </div>
              <button className="w-full sm:w-auto bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-3 rounded-lg sm:rounded-r-lg transition-all transform hover:scale-105 active:scale-95">
                Search Jobs
              </button>
            </div>
          </div>
        ))}

        <p className="text-gray-600 mt-6 text-sm sm:text-base">
          You can also{" "}
          <span className="text-orange-500 cursor-pointer hover:underline">
            browse open roles
          </span>{" "}
          below to find your perfect match
        </p>
      </div>
    </motion.div>
  )
}