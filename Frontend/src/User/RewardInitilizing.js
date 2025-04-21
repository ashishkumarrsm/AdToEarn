import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { motion, AnimatePresence } from "framer-motion";
import { initializeRewards, fetchUserRewards } from "../redux/rewardSlice";
import { Gift, Sparkles, Award } from "lucide-react";

const RewardsInitializationPopup = () => {
  const dispatch = useDispatch();
  const { auth } = useSelector((state) => state.auth);
  const { loading, rewards } = useSelector((state) => state.rewards);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  useEffect(() => {
    if (auth && rewards.length === 0) {
      setIsPopupOpen(true);
    }
  }, [auth, rewards]);

  useEffect(() => {
    if (auth) {
      dispatch(fetchUserRewards(auth.id));
    }
  }, [auth]);

  const handleInitializeRewards = async () => {
    if (!loading) {
      try {
        await dispatch(initializeRewards(auth?.id)).unwrap();
        setIsPopupOpen(false);
      } catch (error) {
        console.error("Error initializing rewards:", error);
      }
    }
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <AnimatePresence>
      {rewards.length === 0 && isPopupOpen && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4"
        >
          <motion.div
            className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 text-center relative"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <button
              onClick={closePopup}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 transition-colors"
            >
              ✕
            </button>

            <div className="flex justify-center mb-6">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
              >
                <Sparkles className="w-24 h-24 text-yellow-500" />
              </motion.div>
            </div>

            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Welcome to Rewards!
            </h2>

            <p className="text-gray-600 mb-6">
              Participating in the rewards program is required to unlock key
              features and benefits. Click the button below to activate your
              rewards and start enjoying exclusive opportunities and perks!
            </p>

            <motion.button
              onClick={handleInitializeRewards}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              disabled={loading}
              className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 px-6 rounded-lg flex items-center justify-center"
            >
              {loading ? (
                <>
                  <svg
                    className="w-5 h-5 mr-2 animate-spin"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="white"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="white"
                      d="M4 12a8 8 0 018-8v8H4z"
                    ></path>
                  </svg>
                  Initializing...
                </>
              ) : (
                <>
                  <Award className="mr-2" />
                  Get Started
                </>
              )}
            </motion.button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default RewardsInitializationPopup;
