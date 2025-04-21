
import React, { useState, useEffect } from "react"
import { Trophy, Lock, CheckCircle, Clock, Gift, Star } from "lucide-react"
import { fetchUserRewards } from "../redux/rewardSlice"
import { useSelector, useDispatch } from "react-redux"

const CountdownTimer = ({ endDate }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = new Date(endDate) - new Date()

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24))
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24)
        const minutes = Math.floor((difference / 1000 / 60) % 60)
        const seconds = Math.floor((difference / 1000) % 60)

        return { days, hours, minutes, seconds }
      }

      return { days: 0, hours: 0, minutes: 0, seconds: 0 }
    }

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft())
    }, 1000)

    return () => clearInterval(timer)
  }, [endDate])

  return (
    <div className="flex items-center space-x-1 text-sm font-medium text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full">
      <Clock className="w-4 h-4 mr-1" />
      <span>{timeLeft.days}d </span>
      <span>{timeLeft.hours}h </span>
      <span>{timeLeft.minutes}m </span>
      <span>{timeLeft.seconds}s</span>
    </div>
  )
}

const RewardLevelCard = ({
  level,
  rewardAmount,
  isCompleted,
  startDate,
  endDate,
  currentBusiness,
  threshold,
  isActive,
  title,
}) => {
  return (
    <div
      className={`relative p-5 border rounded-xl shadow-sm transition-all duration-300 ${
        isCompleted
          ? "bg-gradient-to-br from-green-50 to-green-100 border-green-200"
          : startDate
            ? "bg-gradient-to-br from-white to-blue-50 border-blue-200"
            : "bg-gradient-to-br from-gray-50 to-gray-100 border-gray-200"
      } ${isActive ? "animate-pulse shadow-md" : ""} hover:shadow-md`}
    >
      {isActive && (
        <div className="absolute -top-2 -right-2 bg-yellow-400 text-yellow-900 text-xs font-bold px-2 py-1 rounded-full shadow-md">
          ACTIVE
        </div>
      )}

      <div className="flex items-center space-x-5">
        <div className="relative">
          <div
            className={`w-16 h-16 rounded-full flex items-center justify-center ${
              isCompleted
                ? "bg-green-100 text-green-600"
                : startDate
                  ? "bg-blue-100 text-blue-600"
                  : "bg-gray-100 text-gray-400"
            }`}
          >
            {isCompleted ? (
              <CheckCircle className="w-8 h-8" />
            ) : startDate ? (
              <Trophy className="w-8 h-8" />
            ) : (
              <Lock className="w-8 h-8" />
            )}
          </div>
        </div>

        <div className="flex-1">
          <div className="flex justify-between items-center mb-2">
            <div>
              <div className="flex items-center">
                {/* <span className="bg-indigo-100 text-indigo-800 text-xs font-medium px-2.5 py-0.5 rounded-full mr-2">
                  Level {level}
                </span> */}
                <h3 className="text-lg font-bold text-gray-800">{title}</h3>
              </div>
            </div>
            {isCompleted && <Trophy className="text-yellow-500 w-6 h-6" />}
          </div>

          <div className="flex items-center mb-3">
            <Gift className="w-4 h-4 text-emerald-500 mr-1" />
            <p className="text-sm font-semibold text-emerald-600">Reward: ${rewardAmount}</p>
          </div>

          {startDate && (
            <div className="flex flex-wrap gap-2 items-center">
              {threshold && (
                <div className="flex items-center bg-blue-50 px-3 py-1 rounded-full">
                  <Star className="w-4 h-4 text-blue-600 mr-1" />
                  <span className="text-sm font-medium text-blue-700">
                    Goal: {currentBusiness} / {threshold}
                  </span>
                </div>
              )}

              {endDate && <CountdownTimer endDate={endDate} />}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

const UserRewardsComponent = ({ rewards }) => {
  return (
    <div className="max-w-2xl mx-auto p-8 bg-white rounded-2xl shadow-lg">
      <div className="flex items-center mb-8 pb-4 border-b border-gray-100">
        <div className="bg-yellow-100 p-3 rounded-full mr-4">
          <Trophy className="w-10 h-10 text-yellow-600" />
        </div>
        <div className="flex-1">
          <h2 className="text-2xl font-bold text-gray-800 mb-1">Starter Plan Rewards</h2>
          <p className="text-gray-500">Complete challenges to earn rewards</p>
        </div>
      </div>

      <div className="space-y-5">
        {rewards.map((reward) => (
          <RewardLevelCard
            key={reward.id}
            level={reward.level}
            title={reward.title}
            rewardAmount={reward.reward_amount}
            isCompleted={reward.is_completed === 1}
            startDate={reward.start_date}
            endDate={reward.end_date}
            currentBusiness={reward.current_business}
            threshold={reward.threshold}
            isActive={reward.is_active == 1}
          />
        ))}
      </div>

      <div className="mt-8 p-5 bg-indigo-50 border border-indigo-100 rounded-xl">
        <div className="flex items-start">
          <div className="bg-indigo-100 p-2 rounded-full mr-3">
            <Gift className="w-6 h-6 text-indigo-600" />
          </div>
          <div>
            <h3 className="font-bold text-indigo-800 mb-1">Complete Your Journey</h3>
            <p className="text-sm text-indigo-700">
              🏆 Finish all levels to unlock the full Starter Plan reward package!
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function RewardsPage() {
  const dispatch = useDispatch()
  const { auth } = useSelector((state) => state.auth)
  const { rewards, loading } = useSelector((state) => state.rewards)

  React.useEffect(() => {
    if (auth) {
      dispatch(fetchUserRewards(auth?.id))
    }
  }, [dispatch, auth])

  if (loading) {
    return (
      <div className="flex justify-center items-center h-full">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-500"></div>
      </div>
    )
  }

  return <UserRewardsComponent rewards={rewards} />
}

