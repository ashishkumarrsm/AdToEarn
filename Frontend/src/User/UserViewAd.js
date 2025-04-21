












import { motion } from "framer-motion";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import React, { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { claimBonus, resetState } from "../redux/bonusSlice";
import { SuccessModal } from "../components/PopModal";
import axios from "axios";
import { BASEURL } from "./JoinTelegram";

const MySwal = withReactContent(Swal);

// Animation variants
const fadeIn = {
  hidden: { opacity: 0 },
  visible: (i = 1) => ({
    opacity: 1,
    transition: { delay: i * 0.1, duration: 0.5, ease: "easeInOut" },
  }),
};

const slideIn = {
  hidden: { x: -50, opacity: 0 },
  visible: (i = 1) => ({
    x: 0,
    opacity: 1,
    transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" },
  }),
};

const adVideos = [
  "/Adto.mp4",
  // "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1",
  // "https://www.youtube.com/embed/kXYiU_JCYtU?autoplay=1",
];

const UserViewAd = () => {
  const dispatch = useDispatch();
  const { auth } = useSelector((state) => state.auth);
  const { loading, message } = useSelector((state) => state.bonuses);
  const [roiFound, setRoiFound] = useState(null);
  const { singleuser } = useSelector((state) => state.allusers);
  const [found, setFound] = useState(null);
  const userId = auth?.id;
  const activePlan = singleuser?.active_plan;

  // Use useRef to store the randomly selected video URL
  // This prevents re-selection on every render
  const videoUrlRef = useRef(
    adVideos[Math.floor(Math.random() * adVideos.length)]
  );

  const [currentTimerValue, setCurrentTimerValue] = useState(10);
  const timerIntervalRef = useRef(null);
  const timerDisplayRef = useRef(null);
  const claimButtonContainerRef = useRef(null);

  // Cleanup function for all intervals
  const cleanupIntervals = () => {
    if (timerIntervalRef.current) {
      clearInterval(timerIntervalRef.current);
      timerIntervalRef.current = null;
    }
  };

  const checkTransaction = async () => {
    try {
      const response = await axios.post(
        `${BASEURL}/api/v1/tr/check-existing/${userId}`,
        { source: "roi_income" }
      );
      setFound(response.data.found);
    } catch (error) {
      console.error(error);
      setFound(true); // fallback to true to prevent multiple claims
    }
  };

  const checkRoiTodayTransaction = async () => {
    try {
      const response = await axios.get(
        `${BASEURL}/api/v1/tr/roi-check/${userId}`
      );
      setRoiFound(response.data.found);
    } catch (error) {
      console.error(error);
      setRoiFound(true); // fallback to true to prevent multiple claims
    }
  };

  useEffect(() => {
    checkTransaction();
    checkRoiTodayTransaction();
  }, []);

  // Cleanup on unmount
  useEffect(() => {
    return cleanupIntervals;
  }, []);

  // Handle successful claim
  useEffect(() => {
    if (!loading && message === "Bonus claimed successfully") {
      MySwal.fire({
        title: "Congratulations!",
        text: "You've earned your daily reward!",
        icon: "success",
        confirmButtonColor: "#f97316", // orange-500
      });
      dispatch(resetState());
    }
  }, [loading, message, dispatch]);

  const handleClaim = () => {
    // Call redux action to claim bonus
    dispatch(claimBonus({ user_id: userId, bonus_type: "roi_income", plan_id: singleuser?.plan_id }));

    // Close the modal
    MySwal.close();

    // Reset timer
    setCurrentTimerValue(10);
  };

  const showVideoModal = () => {
    // Reset timer before showing modal
    setCurrentTimerValue(10);

    MySwal.fire({
      title: "Watch To Earn Rewards",
      html: `
        <div class="flex flex-col items-center justify-center">
          <iframe 
            width="100%" 
            height="315" 
            src="${videoUrlRef.current}" 
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowfullscreen
          ></iframe>
          <div id="timer-display" class="mt-4 text-xl font-bold text-orange-500">Please watch for: 10s</div>
          <div id="claim-button-container" class="mt-4"></div>
        </div>
      `,
      width: 600,
      padding: "2em",
      color: "#333",
      background: "#fffbf0",
      backdrop: `rgba(0,0,0,0.6)`,
      showConfirmButton: false,
      showCloseButton: false,
      allowOutsideClick: false,
      allowEscapeKey: false,
      didOpen: () => {
        // Store references to DOM elements
        timerDisplayRef.current = document.getElementById("timer-display");
        claimButtonContainerRef.current = document.getElementById(
          "claim-button-container"
        );

        // Start a new timer
        cleanupIntervals();
        timerIntervalRef.current = setInterval(() => {
          setCurrentTimerValue((prev) => {
            const newValue = prev - 1;

            // Update the timer display
            if (timerDisplayRef.current) {
              timerDisplayRef.current.textContent = `Please watch for: ${newValue}s`;
            }

            // When timer reaches 0, show claim button and stop timer
            if (newValue <= 0) {
              cleanupIntervals();

              // Update timer text
              if (timerDisplayRef.current) {
                timerDisplayRef.current.textContent =
                  "Video watched! Claim your reward now.";
                timerDisplayRef.current.className =
                  "mt-4 text-xl font-bold text-orange-500";
              }

              // Create and add claim button
              if (claimButtonContainerRef.current) {
                claimButtonContainerRef.current.innerHTML = "";
                const claimButton = document.createElement("button");
                claimButton.textContent = "🎁 Claim Reward";
                claimButton.className =
                  "px-6 py-3 text-white bg-orange-500 rounded-lg hover:bg-orange-400 transition-all";
                claimButton.onclick = handleClaim;
                claimButtonContainerRef.current.appendChild(claimButton);

                // Add close button after timer completes
                const closeButton = document.createElement("button");
                closeButton.textContent = "✖️ Close";
                closeButton.className =
                  "px-6 py-3 ml-2 text-white bg-gray-500 rounded-lg hover:bg-gray-400 transition-all";
                closeButton.onclick = () => MySwal.close();
                claimButtonContainerRef.current.appendChild(closeButton);
              }

              return 0;
            }

            return newValue;
          });
        }, 1000);
      },
      willClose: () => {
        // Clean up when modal closes
        cleanupIntervals();
        setCurrentTimerValue(10);
      },
    });
  };

  function clearState() {
    dispatch(resetState());
    window.location.reload();
  }

  if (found === null || roiFound === null) {
    return (
      <div className="flex justify-center items-center h-screen w-full bg-orange-50">
        <div className="p-8 bg-white rounded-xl shadow-lg">
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 border-4 border-t-orange-500 border-r-orange-300 border-b-orange-300 border-l-orange-300 rounded-full animate-spin"></div>
            <p className="mt-4 text-orange-500 text-xl font-medium">Checking eligibility...</p>
          </div>
        </div>
      </div>
    );
  }

  // Determine if user can watch ad based on plan and transaction history
  const canWatchAd = activePlan === 0 ? !found : !roiFound;

  // Message to display when user can't watch more ads
  const limitMessage =
    activePlan === 0
      ? "You've already claimed your one-time reward"
      : "You've already claimed your daily reward";

  return (
    <div className="min-h-screen bg-orange-50 py-8">
      {message && <SuccessModal message={message} clear={clearState} />}
      
      {/* Main container */}
      <div className="w-full mx-auto px-4">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          
          {/* Header */}
          <div className="bg-gradient-to-r from-orange-500 to-orange-400 p-6 md:p-10">
            <motion.div
              className="text-center"
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              custom={1}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
                🎬 Rewards Center
              </h2>
              <p className="text-orange-100 max-w-xl mx-auto">
                Watch short videos and earn rewards instantly. Your path to daily earnings starts here!
              </p>
            </motion.div>
          </div>
          
          {/* Content */}
          <div className="p-6 md:p-10">
            {/* User profile */}
            <motion.div 
              className="flex items-center justify-center mb-8"
              initial="hidden"
              animate="visible"
              variants={slideIn}
              custom={1}
            >
              <div className="flex items-center bg-orange-100 px-6 py-3 rounded-full">
                <img
                  src="https://i.pravatar.cc/100?img=3"
                  alt="user"
                  className="w-12 h-12 rounded-full border-2 border-orange-500"
                />
                <div className="ml-3">
                  <p className="font-medium text-gray-800">
                    {auth?.username || "User"}
                  </p>
                  <p className="text-sm text-orange-500">
                    {activePlan === 0 ? "Free Plan" : "Premium Plan"}
                  </p>
                </div>
              </div>
            </motion.div>
            
            {/* Info boxes */}
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-8"
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              custom={2}
            >
              {[
                {
                  icon: "⏱",
                  title: "Quick & Easy",
                  desc: "Just 10 seconds to earn rewards",
                  color: "bg-orange-100"
                },
                {
                  icon: "🎁",
                  title: "Daily Rewards",
                  desc: activePlan === 0 ? "One-time reward for free users" : "Claim rewards every day",
                  color: "bg-blue-50"
                },
                {
                  icon: "📊",
                  title: "Your Status",
                  desc: canWatchAd ? "Ready to claim" : "Already claimed today",
                  color: "bg-green-50"
                },
              ].map((item, idx) => (
                <motion.div
                  key={item.title}
                  className={`${item.color} rounded-xl p-5 shadow-sm transition-all hover:shadow-md`}
                  whileHover={{ y: -5 }}
                >
                  <div className="text-2xl mb-2">{item.icon}</div>
                  <h3 className="text-lg font-semibold text-gray-800">{item.title}</h3>
                  <p className="text-sm text-gray-600 mt-1">{item.desc}</p>
                </motion.div>
              ))}
            </motion.div>
            
            {/* Call to action */}
            <motion.div 
              className="text-center mb-8"
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              custom={3}
            >
              {canWatchAd ? (
                <motion.button
                  onClick={showVideoModal}
                  className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-xl shadow-lg transition-all flex items-center justify-center mx-auto gap-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="text-2xl">▶️</span>
                  <span className="font-medium">Watch & Earn Now</span>
                </motion.button>
              ) : (
                <div className="bg-gray-100 p-6 rounded-xl shadow-sm">
                  <p className="text-gray-600 mb-2">
                    <span className="text-xl">⏳</span> Limit Reached
                  </p>
                  <p className="text-orange-500 font-medium">{limitMessage}</p>
                  <p className="text-sm text-gray-500 mt-2">
                    {activePlan === 0 
                      ? "Upgrade to premium for daily rewards!" 
                      : "Come back tomorrow for more rewards!"}
                  </p>
                </div>
              )}
            </motion.div>
            
            {/* Footer info */}
            <motion.div 
              className="text-center border-t border-gray-200 pt-6"
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              custom={4}
            >
              <p className="text-sm text-gray-500">
                <span className="text-orange-500 font-medium">Premium members:</span> Earn rewards daily
                • <span className="text-orange-500 font-medium">Free users:</span> One-time reward only
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserViewAd;