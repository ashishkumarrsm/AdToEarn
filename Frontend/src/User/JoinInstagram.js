import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { claimBonus, resetState } from "../redux/bonusSlice";
import { LoadingModal, SuccessModal } from "../components/PopModal";
import axios from "axios";
import { BASEURL } from "./JoinTelegram";

const telegramGroupUrl = "https://www.instagram.com/adtofuture/"; // Replace with your real group link
const JoinInstagram = () => {
  const dispatch = useDispatch();
  const { auth } = useSelector((state) => state.auth);
  const { loading, message } = useSelector((state) => state.bonuses);
  const { singleuser } = useSelector((state) => state.allusers);
  const [found, setFound] = useState(true);
  const userId = auth.id;



  const handleClaim = async () => {
    dispatch(claimBonus({ user_id: userId, bonus_type: "insta_income", plan_id:singleuser?.plan_id }));

  };
  const [joined, setJoined] = useState(false);
  const [claimReady, setClaimReady] = useState(false);

  const handleJoin = () => {
    window.open(telegramGroupUrl, "_blank"); // Opens Telegram group in new tab
    setJoined(true);

    setTimeout(() => {
      setClaimReady(true);
    }, 10000); // Show claim button after 10 seconds
  };

  const checkTransaction = async () => {
    try {
      const response = await axios.post(
        `${BASEURL}/api/v1/tr/check-existing/${userId}`,
        { source: "insta_income" }
      );
      setFound(response.data.found);
    } catch (error) {
      console.error(error);
      setFound(true); // fallback to true to prevent multiple claims
    }
  };

  useEffect(() => {
    checkTransaction();
  }, []);
  function clear(){
    dispatch(resetState())
  }
  return (
    <div className="p-4 text-center">
      <h3 className="font-semibold mb-2">Join us on Instagram </h3>
      <p className="text-sm text-gray-600 mb-4">
        Click below to join our Telegram community. Once done, you'll be able to
        claim your reward.
      </p>

      <LoadingModal isLoading={loading} />

      {found ? (
        <p className="text-green-600 font-medium mb-4">
          ✅ You have already claimed your Instagram reward.
        </p>
      ) : !joined ? (
        <button
          onClick={handleJoin}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Join Instagram
        </button>
      ) : !claimReady ? (
        <p className="text-sm text-gray-500">Waiting for confirmation... 10s</p>
      ) : (
        <button
          onClick={handleClaim}
          className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700"
        >
          Claim Instagram Reward
        </button>
      )}

      {message && <SuccessModal message={message} clear={clear} />}

      <div className="mt-6 text-xs text-gray-500 italic">
        * By joining our Instagram and claiming the reward, you agree to
        our terms and conditions.
      </div>
    </div>
  );
};

export default JoinInstagram;
