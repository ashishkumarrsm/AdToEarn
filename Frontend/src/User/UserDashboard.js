// import React from "react";

// import {
//   CursorArrowRaysIcon,
//   EnvelopeOpenIcon,
//   UsersIcon,
//   ClipboardDocumentIcon,
// } from "@heroicons/react/24/outline";
// // import { ArrowUpRight, TrendingUp, Users, CreditCard, BarChart3 } from "lucide-react"

// import {
//   Star,
//   Award,
//   Sparkles,
//   ArrowUpRight,
//   ChevronRight,
// } from "lucide-react";
// import { motion } from "framer-motion";
// import { FaRegUserCircle } from "react-icons/fa";
// import { MdEmail } from "react-icons/md";
// import { FaUser, FaEnvelope } from "react-icons/fa";
// import { FiLink2 } from "react-icons/fi";
// import { FiCheck, FiCopy } from "react-icons/fi";
// import { CheckCircleIcon } from "@heroicons/react/20/solid";
// import UserTransaction from "./UserTransaction";
// import { getTreeData } from "../redux/referralSlice";
// import { getctoListByid } from "../redux/ctoSlice";
// import { getUser } from "../redux/userSlice";
// import { getAllDepositeByid } from "../redux/depositeSlice";
// import { getAllWithdrawalByid } from "../redux/withdrawalSlice";
// import { useEffect, useState } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import UserRewardDetail from "./UserRewardDetail";
// import Trading from "./Trading";
// import NotificationPopup from "./NotificationPopup";
// import NotificationList from "./NotificationList";
// import { UserAchievement } from "./UserAchivement";
// import { Link } from "react-router-dom";
// import UserTradingView from "./UserTradingView";
// import {
//   Handshake,
//   Package,
//   TrendingUp,
//   Info,
//   UserCheck,
//   Activity,
//   Wallet,
// } from "lucide-react";
// import UserSlider from "./UserSlider";
// import UserData from "./UserData";

// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Pagination, Autoplay } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";

// import { FaTelegramPlane, FaRocketchat } from "react-icons/fa";
// import { IoCall } from "react-icons/io5";
// import { MdMessage } from "react-icons/md";
// import UserAnimatedClock from "./UserAnimatedClock ";
// import UserNotificationPanel from "./UserNotificationPanel";
// import { FiGift, FiShield, FiBox, FiSend } from "react-icons/fi";
// import UserPlaneCard from "./UserPlaneCard";
// import RewardsInitializationPopup from "./RewardInitilizing";

// const UserDashboard = () => {
//   const dispatch = useDispatch();
//   const { auth } = useSelector((state) => state.auth);
//   const { singleuser } = useSelector((state) => state.allusers);

//   const { singleDeposite } = useSelector((state) => state.alldeposite);
//   const { singleWithdrawal } = useSelector((state) => state.allwithdrawal);
//   const { treeData } = useSelector((state) => state.referralTree);
//   const [topGenerations, setTopGenerations] = useState([]);
//   const [totalBusiness, setTotalBusiness] = useState();
//   const [isCopied, setIsCopied] = useState(false);

//   useEffect(() => {
//     dispatch(getUser(auth?.id));
//     dispatch(getAllDepositeByid(auth?.id));
//     dispatch(getAllWithdrawalByid(auth?.id));
//     dispatch(getTreeData(auth?.refferal_code));
//   }, [auth?.id]);
//   useEffect(() => {
//     if (singleuser?.cto == "true") {
//       dispatch(getctoListByid(auth?.id));
//     }
//   }, [singleuser, auth?.id]);

//   const referralCode = singleuser?.refferal_code;
//   let registerUrl = `https://www.adtofuture.com/registration?referral=${referralCode}`;

//   const handleCopy = () => {
//     navigator.clipboard
//       .writeText(registerUrl)
//       .then(() => {
//         alert("Referral link copied to clipboard!");
//         setIsCopied(true);
//         setTimeout(() => setIsCopied(false), 2000);
//       })
//       .catch((err) => {
//         console.error("Failed to copy referral link: ", err);
//       });
//   };

//   let combinedArray = [];
//   const depositsWithType =
//     singleDeposite?.map((deposit) => ({ ...deposit, type: "deposit" })) || [];
//   const withdrawalsWithType =
//     singleWithdrawal?.map((withdrawal) => ({
//       ...withdrawal,
//       type: "withdrawal",
//     })) || [];
//   if (withdrawalsWithType.length > 0) {
//     combinedArray = [...depositsWithType, ...withdrawalsWithType];
//     combinedArray.sort((a, b) => new Date(a.createdAT) - new Date(b.createdAT));
//   }
//   const totalDeposits = depositsWithType?.reduce(
//     (total, deposit) => total + (deposit.amount || 0),
//     0
//   );
//   const totalWithdrawals = withdrawalsWithType?.reduce(
//     (total, withdrawal) =>
//       total + (withdrawal.amount || 0) + (withdrawal.deduction || 0),
//     0
//   );

//   function countTotalTeamWithActiveInactive(user) {
//     let totalTeam = 0;
//     let activeCount = 0;
//     let inactiveCount = 0;
//     const stack = [user];

//     while (stack.length > 0) {
//       const currentUser = stack.pop();
//       totalTeam += 1;

//       if (currentUser.is_active === "active") {
//         activeCount += 1;
//       } else if (currentUser.is_active === "inactive") {
//         inactiveCount += 1;
//       }
//       if (currentUser.referrals && currentUser.referrals.length > 0) {
//         stack.push(...currentUser.referrals);
//       }
//     }

//     return { totalTeam, activeCount, inactiveCount };
//   }

//   const totalDirectActiveMembers = treeData?.filter(
//     (user) => user.is_active === "active"
//   ).length;
//   const totalDirectInactiveMembers = treeData?.filter(
//     (user) => user.is_active === "inactive"
//   ).length;

//   let totalTeamCount = 0;
//   let totalActiveMembers = 0;
//   let totalInactiveMembers = 0;

//   treeData?.forEach((user) => {
//     const { totalTeam, activeCount, inactiveCount } =
//       countTotalTeamWithActiveInactive(user);
//     totalTeamCount += totalTeam;
//     totalActiveMembers += activeCount;
//     totalInactiveMembers += inactiveCount;
//   });

//   const calculateBusinessForTeam = (user) => {
//     let totalBusiness = user.active_plan || 0;

//     if (user.referrals && user.referrals.length > 0) {
//       user.referrals.forEach((referral) => {
//         totalBusiness += calculateBusinessForTeam(referral); // Recursively calculate for all referrals
//       });
//     }

//     return totalBusiness;
//   };

//   useEffect(() => {
//     if (treeData) {
//       const businessByLeg = calculateBusinessForLegs(treeData);

//       // Extract and sort legs by total business
//       const sortedLegs = Object.entries(businessByLeg)
//         .map(([legId, totalBusiness]) => ({
//           legId: parseInt(legId),
//           totalBusiness,
//         }))
//         .sort((a, b) => b.totalBusiness - a.totalBusiness);

//       // Determine the top two legs
//       const topTwoLegs = sortedLegs.slice(0, 2);

//       // Sum up the total business of all legs
//       const totalBusiness = Object.values(businessByLeg).reduce(
//         (acc, value) => acc + value,
//         0
//       );

//       // Calculate the third leg as the sum of all other legs
//       const thirdLegTotalBusiness = sortedLegs
//         .slice(2)
//         .reduce((acc, leg) => acc + leg.totalBusiness, 0);

//       // Combine top two legs and the third leg
//       const topGenerations = [
//         ...topTwoLegs,
//         { legId: "Other", totalBusiness: thirdLegTotalBusiness },
//       ];

//       setTopGenerations(topGenerations);
//       setTotalBusiness(totalBusiness);
//     }
//   }, [treeData]);

//   const calculateBusinessForLegs = (users) => {
//     const result = {};

//     users?.forEach((user) => {
//       result[user.id] = calculateTeamBusiness(user);
//     });

//     return result;
//   };

//   const calculateTeamBusiness = (user) => {
//     let totalBusiness = user.active_plan || 0;

//     if (user.referrals && user.referrals.length > 0) {
//       user.referrals.forEach((referral) => {
//         totalBusiness += calculateTeamBusiness(referral);
//       });
//     }

//     return totalBusiness;
//   };

//   const stat = [
//     // {
//     //   id: 7,
//     //   value: `$ ${totalWithdrawals}`,
//     //   description: "Total Withdrawal",
//     //   upadtePlan: "Copy Link",
//     //   percentage: "20",
//     //   borderColor: "border-indigo-500 ",
//     //   icon: CursorArrowRaysIcon,
//     //   bgColor: "bg-indigo-500",
//     //   iconBgColor: "bg-indigo-700",
//     //   gredient: "border-t bg-gradient-to-r from-indigo-900 to-gray-900",
//     // },
//     // {
//     //   id: 8,
//     //   value: `$${totalBusiness}`,
//     //   description: "Total Business",
//     //   percentage: "75",
//     //   borderColor: "border-purple-500 ",
//     //   icon: CursorArrowRaysIcon,
//     //   color: "text-purple-900",
//     //   bgColor: "bg-purple-200",
//     //   iconBgColor: "bg-purple-300",
//     //   href: "#",
//     //   gredient: "border-t bg-gradient-to-r from-amber-700 to-amber-800",
//     // },
//     // {
//     //   id: 9,
//     //   value: `${
//     //     topGenerations?.[0]?.totalBusiness
//     //       ? "$" + topGenerations?.[0]?.totalBusiness
//     //       : 0
//     //   }`,
//     //   description: "Team A",
//     //   percentage: "10",
//     //   // upadtePlan: "Copy Link",
//     //   icon: CursorArrowRaysIcon,
//     //   borderColor: "border-orange-500 ",
//     //   bgColor: "bg-orange-500",
//     //   iconBgColor: "bg-orange-700",
//     //   href: "#",
//     //   gredient: "border-t bg-gradient-to-r from-green-700 to-green-800",
//     // },
//     // {
//     //   id: "10",
//     //   value: `${
//     //     topGenerations?.[1]?.totalBusiness
//     //       ? "$" + topGenerations?.[1]?.totalBusiness
//     //       : 0
//     //   }`,
//     //   description: "Team B",
//     //   percentage: "13",
//     //   // upadtePlan: "Copy Link",
//     //   icon: CursorArrowRaysIcon,
//     //   bgColor: "bg-sky-500",
//     //   iconBgColor: "bg-sky-700",
//     //   borderColor: "border-sky-500 ",
//     //   href: "#",
//     //   gredient: "border-t bg-gradient-to-r from-sky-900 to-gray-900",
//     // },
//     // {
//     //   id: 11,
//     //   value: `${
//     //     topGenerations?.[2]?.totalBusiness
//     //       ? "$" + topGenerations?.[2]?.totalBusiness
//     //       : 0
//     //   } Business`,
//     //   description: "Team Others",
//     //   percentage: "48",
//     //   icon: CursorArrowRaysIcon,
//     //   bgColor: "bg-amber-200",
//     //   color: "text-amber-900",
//     //   borderColor: "border-amber-500 ",
//     //   iconBgColor: "bg-amber-300",
//     //   href: "#",
//     //   gredient: "bg-gradient-to-r from-indigo-700 to-indigo-800",
//     // },
//     // {
//     //   id: 7,
//     //   value: "Inactive Team",
//     //   description: `${totalInactiveMembers} Member` || "0",
//     //   icon: ClipboardDocumentIcon,
//     //   iconBgColor: "bg-blue-300",
//     //   change: "5.4%",
//     //   changeType: "increase",
//     //   percentage: 51,
//     //   bgColor: "bg-blue-200",
//     //   color: "text-blue-900",
//     //   href: "#",
//     //   gredient:
//     //     "bg-gradient-to-r from-gray-900 to-blue-900 shadow-lg shadow-blue-500/50",
//     // },
//     // {
//     //   id: 5,

//     //   description: "Reward Rank",
//     //   value: `${singleuser?.reward_level} Level`,
//     //   upadtePlan: "Add More",
//     //   borderColor: "border-yellow-500 ",
//     //   percentage: "25",
//     //   href: "#",
//     //   icon: CursorArrowRaysIcon,
//     //   bgColor: "bg-yellow-200",
//     //   color: "text-yellow-900",
//     //   iconBgColor: "bg-yellow-300",
//     //   gredient: "border-t bg-gradient-to-r from-pink-700 to-pink-700",
//     // },
//   ];

//   const cardData = [
//     // {
//     //   id: 5,

//     //   description: "Total Salary",
//     //   value: `${singleuser?.total_salary}`,
//     //   upadtePlan: "Add More",
//     //   borderColor: "border-amber-300 ",
//     //   href: "/user/salary",
//     //   percentage: "25",
//     //   icon: UserCheck,
//     //   bgColor: "bg-amber-200",
//     //   iconBgColor: "bg-amber-300",
//     //   gredient: "border-t bg-gradient-to-r from-amber-700 to-amber-700",
//     // },
//     // {
//     //   id: 5,

//     //   description: "Total Reward",
//     //   value: `${singleuser?.reward} `,
//     //   upadtePlan: "Add More",
//     //   borderColor: "border-teal-500 ",
//     //   percentage: "25",
//     //   icon: UserCheck,
//     //   bgColor: "bg-teal-200",
//     //   iconBgColor: "bg-teal-300",
//     //   href: "#",
//     //   gredient: "border-t bg-gradient-to-r from-teal-700 to-teal-700",
//     // },
//     {
//       id: 1,
//       description: "Total Direct",
//       value: `${totalDirectActiveMembers + totalDirectInactiveMembers} Member`,

//       borderColor: "border-blue-200 ",
//       icon: UserCheck,
//       bgColor: "bg-blue-200",
//       iconBgColor: "bg-blue-300",
//       gredient: "bg-gradient-to-br from-purple-800 to-indigo-700",
//       percentage: "45",
//       href: "/user/directmember",
//     },
//     // {
//     //   id: 2,
//     //   description: "Active Sponser",
//     //   value: `${totalDirectActiveMembers} Member`,
//     //   borderColor: "border-green-100 ",
//     //   icon: Activity,
//     //   bgColor: "bg-amber-200",
//     //   iconBgColor: "bg-amber-300",
//     //   gredient: "bg-gradient-to-br from-blue-700 to-cyan-800",
//     //   percentage: "25",
//     //   href: "/user/directmember",
//     // },
//     // {
//     //   id: 3,
//     //   value: `$ ${singleuser?.level_income}` || 0,
//     //   description: "Level Income",

//     //   borderColor: "border-green-100 ",
//     //   icon: TrendingUp,
//     //   bgColor: "bg-indigo-200",
//     //   iconBgColor: "bg-indigo-300",
//     //   gredient: "bg-gradient-to-br from-teal-700 to-teal-900 ",
//     //   percentage: "25",
//     //   href: "/user/transaction/invest_level_transaction/invest",
//     // },
//   ];

//   const incomedetail = [
//     {
//       value: `$ ${singleuser?.sponsor_income}`,
//       description: "Promotion-Sponsor",
//       bgColor: "bg-blue-200",
//       iconBgColor: "bg-blue-300",
//       btnColor: "bg-blue-700 hover:bg-purple-600 shadow-purple-600",
//       percentage: "66",
//       icon: Handshake,
//       color: "text-blue-900",
//       href: "/user/directmember",
//       gredient: "bg-gradient-to-r from-[#182a91] to-blue-700 shadow-lg ",
//     },
//     {
//       id: 89,
//       value: `$ ${singleuser?.wallet}` || 0,
//       description: "Promotion Income",
//       color: "text-teal-900",
//       borderColor: "border-green-100 ",
//       icon: TrendingUp,
//       bgColor: "bg-teal-200",
//       iconBgColor: "bg-teal-300",
//       gredient: "bg-gradient-to-br from-teal-700 to-teal-900 ",
//       percentage: "25",
//       href: "/user/transaction/invest_level_transaction/invest",
//     },
//     {
//       value: `$ ${singleuser?.roi_income}`,
//       description: "Add-Income",
//       initials: "IS",
//       icon: TrendingUp,
//       bgColor: "bg-red-200",
//       iconBgColor: "bg-red-300",
//       color: "text-red-900",
//       btnColor: "bg-red-700 hover:bg-green-600 shadow-green-600",
//       percentage: "99",
//       href: "/user/transaction/roi_transaction/Invest",
//       gredient: "bg-gradient-to-r from-[#182a91] to-red-700 shadow-lg ",
//     },
//        {
//       value: `$ ${singleuser?.sponsor_income + singleuser?.wallet + singleuser?.roi_income}`,
//       description: "Total Earning",
//       icon: Package,
//       btnColor: "bg-purple-700 hover:bg-blue-600 shadow-blue-600",
//       bgColor: "bg-purple-200",
//       percentage: "+22%",
//       iconBgColor: "bg-purple-300",
//       color: "text-purple-900",
//       href: "/user/plan",
//       gredient: "bg-gradient-to-r from-[#182a91] to-[#751bc0] shadow-lg ",
//     },
//     // {
//     //   value: `$ ${singleuser?.active_plan}`,
//     //   description: "Active Package",
//     //   icon: Package,
//     //   btnColor: "bg-purple-700 hover:bg-blue-600 shadow-blue-600",
//     //   bgColor: "bg-purple-200",
//     //   percentage: "+22%",
//     //   iconBgColor: "bg-purple-300",
//     //   color: "text-purple-900",
//     //   href: "/user/plan",
//     //   gredient: "bg-gradient-to-r from-[#182a91] to-[#751bc0] shadow-lg ",
//     // },




//     // {
//     //   value: "Members Tree",
//     //   description: `${totalDirectInactiveMembers} Member`,
//     //   href: "/user/referraltree",
//     //   icon: Info,
//     //   bgColor: "bg-green-200",
//     //   color: "text-green-900",
//     //   btnColor: "bg-green-700 hover:bg-red-600 shadow-indigo-600",
//     //   iconBgColor: "bg-green-300",
//     //   percentage: "+3%",
//     //   gredient: "bg-gradient-to-r from-[#182a91] to-green-700 shadow-lg ",
//     // },
//     // {
//     //   id: 4,
//     //   value: `$ ${totalWithdrawals}`,
//     //   description: "Total Withdrawal",
//     //   upadtePlan: "Need Support",
//     //   borderColor: "border-red-800 ",
//     //   icon: Wallet,
//     //   bgColor: "bg-orange-200",
//     //   color: "text-orange-900",
//     //   iconBgColor: "bg-orange-300",
//     //   gredient: "bg-gradient-to-br from-pink-800 to-rose-900",
//     //   percentage: "55",
//     //   href: "/user/addwithdrawal",
//     // },

//   ];

//   const userIncomeData = [
//     {
//       username: "Telegram",
//       income: "$5,200",
//       platform: "Coinbase",
//       icon: (
//         <FaTelegramPlane className="text-5xl text-blue-500 drop-shadow-lg" />
//       ),
//       image: "/model-removebg-preview.png",
//     },
//     {
//       username: "Chat",
//       income: "$7,850",
//       platform: "Binance",
//       icon: (
//         <FaRocketchat className="text-5xl text-purple-500 drop-shadow-lg" />
//       ),
//       image: "/model-removebg-preview.png",
//     },
//     {
//       username: "Call",
//       income: "$6,400",
//       platform: "Bybit",
//       icon: <IoCall className="text-5xl text-green-500 drop-shadow-lg" />,
//       image: "/model-removebg-preview.png",
//     },
//     {
//       username: "Message",
//       income: "$9,100",
//       platform: "Kraken",
//       icon: <MdMessage className="text-5xl text-red-500 drop-shadow-lg" />,
//       image: "/model-removebg-preview.png",
//     },
//   ];


//   return (
//     <>
//       <div className="space-y-5">

//         <div className=" w-full ">
//           <UserNotificationPanel />
//         </div>

//         <div className="grid grid-cols-12  gap-4">
//           <div className="lg:col-span-3 col-span-12 ">
//             <UserData />
//           </div>
//           <div className="lg:col-span-6 col-span-12 p-4 sm:p-6 w-full bg-white rounded-md sm:rounded-sm border border-blue-100 shadow-md">
//             <motion.div
//               initial={{ opacity: 0, y: 30 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5 }}
//               className=""
//             >
//               <h2 className="flex gap-2 items-center mb-2 sm:mb-3 text-base sm:text-lg font-bold md:text-xl">
//                 Invite & Earn <span className="text-lg sm:text-xl">🎉</span>
//               </h2>
//               <p className="mb-3 sm:mb-4 text-xs sm:text-sm md:text-base">
//                 Share your referral code with friends and earn rewards when they
//                 sign up!
//               </p>
//               <div className="flex items-center p-1 sm:p-2 rounded-lg border border-indigo-200 shadow-md">
//                 <input
//                   type="text"
//                   value={referralCode}
//                   readOnly
//                   className="p-1 sm:p-2 w-full text-sm sm:text-base font-medium bg-transparent outline-none text-indigo-900"
//                 />
//                 <button
//                   onClick={handleCopy}
//                   className="flex gap-1 sm:gap-2 items-center p-1 sm:p-2 rounded-md shadow-md transition-all duration-300 bg-indigo-500 hover:bg-indigo-600"
//                 >
//                   {isCopied ? (
//                     <FiCheck className="w-3 h-3 sm:w-4 sm:h-5 text-white" />
//                   ) : (
//                     <FiCopy className="w-3 h-3 sm:w-4 sm:h-5 text-white" />
//                   )}
//                   <span className="text-xs sm:text-sm text-white">
//                     {isCopied ? "Copied" : "Copy"}
//                   </span>
//                 </button>
//               </div>
//             </motion.div>
//           </div>
//           <div className="lg:col-span-3 col-span-12 bg-white rounded-sm overflow-hidden shadow-lg transition-all duration-300 transform">
//             {/* Profile Image */}
//             <div className="relative">
//               <div className="h-24 bg-gradient-to-r from-blue-500 to-purple-600"></div>
//               <div className="absolute -bottom-10 w-full flex justify-center">
//                 <div className="w-20 h-20 border border-gray-300 rounded-full  bg-white overflow-hidden">
//                   <img
//                     src="/pink-panther.png"
//                     alt="Profile"
//                     className="w-full h-full  object-cover"
//                   />
//                 </div>
//               </div>
//             </div>
//             <div className="pt-12 px-4 pb-4 text-center">
//               <h2 className="text-xl font-bold text-gray-800">{singleuser?.fullname}</h2>
//               <p className="text-sm text-purple-600 font-medium">{singleuser?.email}</p>
//             </div>
//           </div>
//         </div>

//          <div className="grid lg:grid-cols-2 grid-cols-1 gap-4">
//           <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 ">
//             {incomedetail?.map((item, i) => (
//               <motion.div
//                 key={i}
//                 initial={{ scale: 0.9, opacity: 0 }}
//                 animate={{ scale: 1, opacity: 1 }}
//                 transition={{ duration: 0.3, delay: i * 0.1, ease: "easeOut" }}
//                 className={`relative overflow-hidden rounded-md ${item.bgColor} shadow-md`}
//               >
//                 {/* Background gradient accent */}
//                 <div className="absolute inset-0 opacity-5 bg-gradient-to-br rounded-xl" />

//                 {/* Top accent line */}
//                 <div className={`h-1 w-full ${item.borderColor}`}></div>

//                 <div className="p-6">
//                   <div className="flex justify-between items-start">
//                     <div>
//                       <p className={`text-sm font-medium ${item.color}`}>
//                         {item.description}
//                       </p>
//                       <h3 className="mt-1 text-base font-semibold tracking-tight text-gray-900">
//                         {item.value}
//                       </h3>

//                       <div className="mt-2 flex items-center">
//                         <span className="text-xs font-medium text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full flex items-center">
//                           {item.percentage}
//                           <ArrowUpRight className="ml-0.5 h-3 w-3" />
//                         </span>
//                         <span className="ml-2 text-xs text-gray-700">
//                           vs last month
//                         </span>
//                       </div>
//                     </div>

//                     <div className={`p-2 rounded-lg ${item.iconBgColor} `}>
//                       <item.icon className="h-6 w-6" />
//                     </div>
//                   </div>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//           <div className=" bg-white shadow-lg overflow-hidden">
//             <div className="">
//               <h2 className="text-xl font-bold text-gray-800  p-6  border-b border-gray-300">
//                 Performance Statistics
//               </h2>
//               <ul className="divide-y divide-gray-200">
//                 {cardData.map((stat, index) => (
//                   <li
//                     key={index}
//                     className="px-6 py-4 hover:bg-gray-50 transition-colors duration-150 rounded-lg"
//                   >
//                     <div className="flex items-center justify-between">
//                       <div className="flex items-center space-x-4">
//                         <div
//                           className={`p-3 ${stat.bgColor} ${stat.textColor} rounded-full`}
//                         >
//                           <stat.icon />
//                         </div>
//                         <div>
//                           <p className="text-lg font-semibold text-gray-900">
//                             {stat.value}
//                           </p>
//                           <p className="text-sm text-gray-500">
//                             {stat.description}
//                           </p>
//                         </div>
//                       </div>
//                       <div className="flex items-center">
//                       <Link to="/user/directmember">
//                         <button
//                           className={`flex items-center px-3 py-1 rounded-full ${stat.bgColor} ${stat.textColor} text-sm font-medium hover:bg-opacity-80 transition-all duration-150`}
//                         >
//                           See All
//                           {/* <stat.linkIcon size={14} className="ml-1" /> */}
//                         </button>
//                         </Link>
//                         <ChevronRight
//                           size={18}
//                           className="text-gray-400 ml-2"
//                         />
//                       </div>
//                     </div>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           </div>
//         </div>
//         <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
//           {stat?.map((item, i) => (
//             <motion.div
//               key={i}
//               initial={{ scale: 0.9, opacity: 0 }}
//               animate={{ scale: 1, opacity: 1 }}
//               transition={{ duration: 0.3, delay: i * 0.1, ease: "easeOut" }}
//               className={`relative overflow-hidden rounded-md ${item.bgColor} shadow-md`}
//             >
//               {/* Background gradient accent */}
//               <div className="absolute inset-0 opacity-5 bg-gradient-to-br rounded-xl" />

//               {/* Top accent line */}
//               <div className={`h-1 w-full ${item.borderColor}`}></div>

//               <div className="p-6">
//                 <div className="flex justify-between items-start">
//                   <div>
//                     <p className={`text-sm font-medium ${item.color}`}>
//                       {item.description}
//                     </p>
//                     <h3 className="mt-1 text-base font-semibold tracking-tight text-gray-900">
//                       {item.value}
//                     </h3>

//                     <div className="mt-2 flex items-center">
//                       <span className="text-xs font-medium text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full flex items-center">
//                         {item.percentage}
//                         <ArrowUpRight className="ml-0.5 h-3 w-3" />
//                       </span>
//                       <span className="ml-2 text-xs text-gray-700">
//                         vs last month
//                       </span>
//                     </div>
//                   </div>

//                   <div className={`p-2 rounded-lg ${item.iconBgColor} `}>
//                     <item.icon className="h-6 w-6" />
//                   </div>
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </div>


//       </div>
//     </>
//   );
// };

// export default UserDashboard;




















import React from "react";
import {
  CursorArrowRaysIcon,
  EnvelopeOpenIcon,
  UsersIcon,
  ClipboardDocumentIcon,
  CheckCircleIcon,
} from "@heroicons/react/24/outline";

import {
  Star,
  Award,
  Sparkles,
  ArrowUpRight,
  ChevronRight,
  Handshake,
  Package,
  TrendingUp,
  Info,
  UserCheck,
  Activity,
  Wallet,
} from "lucide-react";
import { motion } from "framer-motion";
import { FaPhotoVideo, FaRegUserCircle } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaUser, FaEnvelope } from "react-icons/fa";
import { FiLink2 } from "react-icons/fi";
import { FiCheck, FiCopy } from "react-icons/fi";
import UserTransaction from "./UserTransaction";
import { getTreeData } from "../redux/referralSlice";
import { getctoListByid } from "../redux/ctoSlice";
import { getUser } from "../redux/userSlice";
import { getAllDepositeByid } from "../redux/depositeSlice";
import { getAllWithdrawalByid } from "../redux/withdrawalSlice";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import UserRewardDetail from "./UserRewardDetail";
import Trading from "./Trading";
import NotificationPopup from "./NotificationPopup";
import NotificationList from "./NotificationList";
import { UserAchievement } from "./UserAchivement";
import { Link } from "react-router-dom";
import UserTradingView from "./UserTradingView";

import UserSlider from "./UserSlider";
import UserData from "./UserData";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { FaTelegramPlane, FaRocketchat } from "react-icons/fa";
import { IoCall } from "react-icons/io5";
import { MdMessage } from "react-icons/md";
import UserAnimatedClock from "./UserAnimatedClock ";
import UserNotificationPanel from "./UserNotificationPanel";
import { FiGift, FiShield, FiBox, FiSend } from "react-icons/fi";
import UserPlaneCard from "./UserPlaneCard";
import RewardsInitializationPopup from "./RewardInitilizing";

const UserDashboard = () => {
  const dispatch = useDispatch();
  const { auth } = useSelector((state) => state.auth);
  const { singleuser } = useSelector((state) => state.allusers);

  const { singleDeposite } = useSelector((state) => state.alldeposite);
  const { singleWithdrawal } = useSelector((state) => state.allwithdrawal);
  const { treeData } = useSelector((state) => state.referralTree);
  const [topGenerations, setTopGenerations] = useState([]);
  const [totalBusiness, setTotalBusiness] = useState();
  const [isCopied, setIsCopied] = useState(false);

  useEffect(() => {
    dispatch(getUser(auth?.id));
    dispatch(getAllDepositeByid(auth?.id));
    dispatch(getAllWithdrawalByid(auth?.id));
    dispatch(getTreeData(auth?.refferal_code));
  }, [auth?.id]);

  useEffect(() => {
    if (singleuser?.cto == "true") {
      dispatch(getctoListByid(auth?.id));
    }
  }, [singleuser, auth?.id]);

  const referralCode = singleuser?.refferal_code;
  let registerUrl = `https://www.adtofuture.com/registration?referral=${referralCode}`;

  const handleCopy = () => {
    navigator.clipboard
      .writeText(registerUrl)
      .then(() => {
        alert("Referral link copied to clipboard!");
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 2000);
      })
      .catch((err) => {
        console.error("Failed to copy referral link: ", err);
      });
  };

  let combinedArray = [];
  const depositsWithType =
    singleDeposite?.map((deposit) => ({ ...deposit, type: "deposit" })) || [];
  const withdrawalsWithType =
    singleWithdrawal?.map((withdrawal) => ({
      ...withdrawal,
      type: "withdrawal",
    })) || [];
  if (withdrawalsWithType.length > 0) {
    combinedArray = [...depositsWithType, ...withdrawalsWithType];
    combinedArray.sort((a, b) => new Date(a.createdAT) - new Date(b.createdAT));
  }
  const totalDeposits = depositsWithType?.reduce(
    (total, deposit) => total + (deposit.amount || 0),
    0
  );
  const totalWithdrawals = withdrawalsWithType?.reduce(
    (total, withdrawal) =>
      total + (withdrawal.amount || 0) + (withdrawal.deduction || 0),
    0
  );

  function countTotalTeamWithActiveInactive(user) {
    let totalTeam = 0;
    let activeCount = 0;
    let inactiveCount = 0;
    const stack = [user];

    while (stack.length > 0) {
      const currentUser = stack.pop();
      totalTeam += 1;

      if (currentUser.is_active === "active") {
        activeCount += 1;
      } else if (currentUser.is_active === "inactive") {
        inactiveCount += 1;
      }
      if (currentUser.referrals && currentUser.referrals.length > 0) {
        stack.push(...currentUser.referrals);
      }
    }

    return { totalTeam, activeCount, inactiveCount };
  }

  const totalDirectActiveMembers = treeData?.filter(
    (user) => user.is_active === "active"
  ).length;
  const totalDirectInactiveMembers = treeData?.filter(
    (user) => user.is_active === "inactive"
  ).length;

  let totalTeamCount = 0;
  let totalActiveMembers = 0;
  let totalInactiveMembers = 0;

  treeData?.forEach((user) => {
    const { totalTeam, activeCount, inactiveCount } =
      countTotalTeamWithActiveInactive(user);
    totalTeamCount += totalTeam;
    totalActiveMembers += activeCount;
    totalInactiveMembers += inactiveCount;
  });

  const calculateBusinessForTeam = (user) => {
    let totalBusiness = user.active_plan || 0;

    if (user.referrals && user.referrals.length > 0) {
      user.referrals.forEach((referral) => {
        totalBusiness += calculateBusinessForTeam(referral);
      });
    }

    return totalBusiness;
  };

  useEffect(() => {
    if (treeData) {
      const businessByLeg = calculateBusinessForLegs(treeData);

      // Extract and sort legs by total business
      const sortedLegs = Object.entries(businessByLeg)
        .map(([legId, totalBusiness]) => ({
          legId: parseInt(legId),
          totalBusiness,
        }))
        .sort((a, b) => b.totalBusiness - a.totalBusiness);

      // Determine the top two legs
      const topTwoLegs = sortedLegs.slice(0, 2);

      // Sum up the total business of all legs
      const totalBusiness = Object.values(businessByLeg).reduce(
        (acc, value) => acc + value,
        0
      );

      // Calculate the third leg as the sum of all other legs
      const thirdLegTotalBusiness = sortedLegs
        .slice(2)
        .reduce((acc, leg) => acc + leg.totalBusiness, 0);

      // Combine top two legs and the third leg
      const topGenerations = [
        ...topTwoLegs,
        { legId: "Other", totalBusiness: thirdLegTotalBusiness },
      ];

      setTopGenerations(topGenerations);
      setTotalBusiness(totalBusiness);
    }
  }, [treeData]);

  const calculateBusinessForLegs = (users) => {
    const result = {};

    users?.forEach((user) => {
      result[user.id] = calculateTeamBusiness(user);
    });

    return result;
  };

  const calculateTeamBusiness = (user) => {
    let totalBusiness = user.active_plan || 0;

    if (user.referrals && user.referrals.length > 0) {
      user.referrals.forEach((referral) => {
        totalBusiness += calculateTeamBusiness(referral);
      });
    }

    return totalBusiness;
  };

  const stat = [];

  const cardData = [
    {
      id: 1,
      description: "Total Direct",
      value: `${totalDirectActiveMembers + totalDirectInactiveMembers} Member`,
      icon: UserCheck,
      bgColor: "bg-orange-100",
      iconBgColor: "bg-orange-200",
      textColor: "text-orange-800",
      percentage: "45",
      href: "/user/directmember",
    },
  ];

  const incomedetail = [
    {
      value: `$ ${singleuser?.sponsor_income}`,
      description: "Promotion-Sponsor",
      bgColor: "bg-gradient-to-br from-orange-50 to-orange-100",
      iconBgColor: "bg-orange-500",
      btnColor: "bg-orange-600 hover:bg-orange-700",
      percentage: "66",
      icon: Handshake,
      color: "text-orange-900",
      href: "/user/directmember",
      borderAccent: "border-t-4 border-orange-500",
    },
    {
      id: 89,
      value: `$ ${singleuser?.wallet}` || 0,
      description: "Promotion Income",
      color: "text-orange-800",
      icon: TrendingUp,
      bgColor: "bg-gradient-to-br from-orange-50 to-orange-100",
      iconBgColor: "bg-orange-500",
      borderAccent: "border-t-4 border-orange-400",
      percentage: "25",
      href: "/user/transaction/invest_level_transaction/invest",
    },
    {
      value: `$ ${singleuser?.roi_income}`,
      description: "Add-Income",
      icon: TrendingUp,
      bgColor: "bg-gradient-to-br from-orange-50 to-orange-100",
      iconBgColor: "bg-orange-500",
      color: "text-orange-800",
      btnColor: "bg-orange-600 hover:bg-orange-700",
      percentage: "99",
      href: "/user/transaction/roi_transaction/Invest",
      borderAccent: "border-t-4 border-orange-300",
    },
    {
      value: `$ ${singleuser?.sponsor_income + singleuser?.wallet + singleuser?.roi_income}`,
      description: "Total Earning",
      icon: Package,
      btnColor: "bg-orange-600 hover:bg-orange-700",
      bgColor: "bg-gradient-to-br from-orange-50 to-orange-100",
      percentage: "+22%",
      iconBgColor: "bg-orange-500",
      color: "text-orange-800",
      href: "/user/plan",
      borderAccent: "border-t-4 border-orange-600",
    },
  ];

  const userIncomeData = [
    {
      username: "Telegram",
      income: "$5,200",
      platform: "Coinbase",
      link: '/join-telegram',
      icon: (
        <FaTelegramPlane className="text-5xl text-orange-500 drop-shadow-lg" />
      ),
      image: "/model-removebg-preview.png",
    },
    {
      username: "Chat",
      income: "$7,850",
      platform: "Binance",
      link: "/watch-adds",
      icon: (
        <FaRocketchat className="text-5xl text-orange-500 drop-shadow-lg" />
      ),
      image: "/model-removebg-preview.png",
    },
    {
      username: "Call",
      income: "$6,400",
      platform: "Bybit",
      link: "/join-instagram",
      icon: <IoCall className="text-5xl text-orange-500 drop-shadow-lg" />,
      image: "/model-removebg-preview.png",
    },
    {
      username: "Video",
      income: "$9,100",
      platform: "Kraken",
      link: "/watch-adds",
      icon: <FaPhotoVideo  className="text-5xl text-orange-500 drop-shadow-lg" />,
      image: "/model-removebg-preview.png",
    },
  ];

  return (
    <>
      <div className="space-y-5 bg-orange-50 p-4 md:p-6 ">
        {/* <div className="w-full rounded-lg overflow-hidden shadow-md z-10">
          <UserNotificationPanel />
        </div> */}

        <div className="grid grid-cols-12 gap-4 ">
          {/* User Profile Card */}
          <div className="lg:col-span-3 col-span-12 space-y-2 ">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="rounded-xl overflow-hidden shadow-lg bg-white"
            >
              <div className="h-20 bg-gradient-to-r from-orange-400 to-orange-600"></div>
              <div className="relative px-6 pb-6">
                <div className="absolute -top-10 left-1/2 transform -translate-x-1/2">
                  <div className="w-20 h-20 rounded-full border-4 border-white bg-orange-100 flex items-center justify-center shadow-lg">
                    <img
                      src="/pink-panther.png"
                      alt="Profile"
                      className="w-16 h-16 rounded-full object-cover"
                    />
                  </div>
                </div>
                <div className="pt-12 text-center">
                  <h2 className="text-xl font-bold text-gray-800">{singleuser?.fullname}</h2>
                  <p className="text-sm text-orange-600 font-medium mt-1">{singleuser?.email}</p>

                  <div className="mt-4 flex justify-center">
                    <Link to="/user/profile">
                      <button className="px-4 py-2 bg-orange-500 text-white rounded-lg text-sm font-medium hover:bg-orange-600 transition-all shadow-md">
                        View Profile
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
           
            <div className="border-2 rounded-lg shadow-md bg-white p-4 mb-6">
              <h2 className="text-xl font-bold text-orange-800 mb-4">Top Contributors</h2>
              <div className="overflow-hidden">
                <ul className="divide-y divide-orange-100">
                  {/* You'll need to replace this with your actual user data */}
                  {[
                    { name: "John Smith", amount: 1250 },
                    { name: "Emma Johnson", amount: 980 },
                    { name: "Michael Brown", amount: 745 },
                    { name: "Sarah Davis", amount: 620 },
                    { name: "Robert Wilson", amount: 510 }
                  ].map((user, index) => (
                    <li key={index} className="py-3 flex justify-between items-center hover:bg-orange-50 px-3 rounded-md">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-orange-200 flex items-center justify-center text-orange-800 font-medium">
                          {user.name.charAt(0)}
                        </div>
                        <span className="font-medium text-gray-800">{user.name}</span>
                      </div>
                      <div className="text-orange-600 font-semibold">
                        ${user.amount.toLocaleString()}
                      </div>
                    </li>
                  ))}
                </ul>

                <div className="mt-4 text-center">
                  <button className="text-orange-600 hover:text-orange-700 text-sm font-medium flex items-center mx-auto">
                    View All Contributors
                    <ChevronRight size={16} className="ml-1" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Referral Section */}
          <div className="lg:col-span-6 col-span-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="p-6 bg-white rounded-xl border border-orange-200 shadow-lg"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-orange-100 rounded-lg">
                  <FiSend className="w-6 h-6 text-orange-600" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-gray-800">Invite & Earn</h2>
                  <p className="text-sm text-gray-600">Share your referral code and earn rewards!</p>
                </div>
              </div>

              <div className="mb-6 p-4 bg-gradient-to-r from-orange-50 to-orange-100 rounded-lg border border-orange-200">
                <p className="mb-2 text-sm text-orange-800">
                  Your Referral Code:
                </p>
                <div className="flex items-center p-3 rounded-lg bg-white border border-orange-300 shadow-sm">
                  <input
                    type="text"
                    value={referralCode}
                    readOnly
                    className="p-2 w-full text-base font-medium bg-transparent outline-none text-orange-900"
                  />
                  <button
                    onClick={handleCopy}
                    className="flex gap-2 items-center p-2 rounded-md transition-all duration-300 bg-orange-500 hover:bg-orange-600 text-white"
                  >
                    {isCopied ? (
                      <FiCheck className="w-4 h-5 text-white" />
                    ) : (
                      <FiCopy className="w-4 h-5 text-white" />
                    )}
                    <span className="text-sm">
                      {isCopied ? "Copied" : "Copy Code"}
                    </span>
                  </button>
                </div>
                <p className="mt-3 text-xs text-orange-700">
                  Share this code with friends and earn bonuses when they join!
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-4 rounded-lg border border-orange-200 shadow-sm">
                  <p className="text-sm text-orange-800">Direct Referrals</p>
                  <p className="text-2xl font-bold text-orange-900">{totalDirectActiveMembers + totalDirectInactiveMembers}</p>
                  <div className="flex items-center mt-2">
                    <span className="text-xs font-medium text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">
                      +{totalDirectActiveMembers}
                    </span>
                    <span className="ml-2 text-xs text-gray-600">active</span>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-4 rounded-lg border border-orange-200 shadow-sm">
                  <p className="text-sm text-orange-800">Referral Earnings</p>
                  <p className="text-2xl font-bold text-orange-900">$ {singleuser?.sponsor_income}</p>
                  <div className="flex items-center mt-2">
                    <span className="text-xs font-medium text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full flex items-center">
                      66%
                      <ArrowUpRight className="ml-0.5 h-3 w-3" />
                    </span>
                    <span className="ml-2 text-xs text-gray-600">vs last month</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Stats Carousel */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-4 bg-white rounded-xl p-6 shadow-lg"
            >
              <h2 className="text-xl font-bold text-gray-800 mb-4">Performance Statistics</h2>
              <Swiper
                spaceBetween={20}
                slidesPerView={1}
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: false,
                }}
                pagination={{ clickable: true }}
                modules={[Autoplay, Pagination]}
                className="h-48"
              >
                {cardData.map((stat, index) => (
                  <SwiperSlide key={index}>
                    <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-6 h-36 flex flex-col justify-between border border-orange-200">
                      <div className="flex justify-between items-start">
                        <div>
                          <p className="text-sm font-medium text-orange-800">{stat.description}</p>
                          <h3 className="mt-2 text-2xl font-bold text-gray-900">{stat.value}</h3>
                        </div>
                        <div className="p-3 bg-orange-500 text-white rounded-full">
                          <stat.icon size={24} />
                        </div>
                      </div>
                      <div className="flex justify-between items-center mt-4">
                        <div className="flex items-center">
                          <span className="text-xs font-medium text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full flex items-center">
                            {stat.percentage}%
                            <ArrowUpRight className="ml-0.5 h-3 w-3" />
                          </span>
                          <span className="ml-2 text-xs text-gray-600">vs last period</span>
                        </div>
                        <Link to={stat.href}>
                          <button className="text-orange-600 hover:text-orange-700 text-sm font-medium flex items-center">
                            View All
                            <ChevronRight size={16} className="ml-1" />
                          </button>
                        </Link>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </motion.div>
          </div>

          {/* Communication Section */}
          <div className="lg:col-span-3 col-span-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white rounded-xl  shadow-lg h-full"
            >

              <div className="p-4 bg-gradient-to-r from-orange-500 to-orange-600">
                <h2 className="text-lg font-bold text-white">Contact Support</h2>
                <p className="text-sm text-orange-100">We're here to help you</p>
              </div>
              <div className="w-full   shadow-md z-10">
                <UserNotificationPanel />
              </div>
              <div className="p-4">
                <div className="grid grid-cols-2 gap-3">
                  {userIncomeData.map((item, index) => (
                    <div
                      key={index}
                      className="bg-gradient-to-br from-orange-50 to-orange-100 p-3 rounded-lg flex flex-col items-center justify-center text-center border border-orange-200 hover:shadow-md transition-all cursor-pointer"
                    >
                      <Link
                        to={item.link}
                      >
                        {item.icon}
                        <p className="mt-2 font-medium text-orange-900">{item.username}</p>

                      </Link>

                    </div>
                  ))}
                </div>
                <div className="mt-6 p-4 bg-orange-50 rounded-lg border border-orange-200">
                  <h3 className="text-base font-semibold text-orange-800 mb-2">Need Help?</h3>
                  <p className="text-sm text-gray-700 mb-3">Our support team is available 24/7 to assist you with any questions.</p>
                  <button className="w-full py-2 bg-orange-500 text-white rounded-lg font-medium hover:bg-orange-600 transition-all shadow-sm">
                    Contact Support
                  </button>
                </div>
              </div>


            </motion.div>
          </div>
        </div>

        {/* Income Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {incomedetail.map((item, i) => (
            <motion.div
              key={i}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.3, delay: i * 0.1, ease: "easeOut" }}
              className={`rounded-xl shadow-lg overflow-hidden ${item.borderAccent}`}
            >
              <div className={`p-6 ${item.bgColor}`}>
                <div className="flex justify-between items-start mb-4">
                  <div className={`p-3 rounded-full text-white ${item.iconBgColor}`}>
                    <item.icon size={24} />
                  </div>
                  <div>
                    <span className="text-xs font-medium text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full flex items-center">
                      {item.percentage}
                      <ArrowUpRight className="ml-0.5 h-3 w-3" />
                    </span>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-gray-900">{item.value}</h3>
                <p className={`text-sm font-medium mt-1 ${item.color}`}>{item.description}</p>

                <div className="mt-4 pt-4 border-t border-orange-200">
                  <Link to={item.href || "#"}>
                    <button className="text-orange-600 hover:text-orange-700 text-sm font-medium flex items-center">
                      View Details
                      <ChevronRight size={16} className="ml-1" />
                    </button>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 gap-6">
          {stat.map((item, i) => (
            <motion.div
              key={i}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.3, delay: i * 0.1, ease: "easeOut" }}
              className={`relative overflow-hidden rounded-md ${item.bgColor} shadow-md`}
            >
              <div className="absolute inset-0 opacity-5 bg-gradient-to-br rounded-xl" />
              <div className={`h-1 w-full ${item.borderColor}`}></div>
              <div className="p-6">
                <div className="flex justify-between items-start">
                  <div>
                    <p className={`text-sm font-medium ${item.color}`}>{item.description}</p>
                    <h3 className="mt-1 text-base font-semibold tracking-tight text-gray-900">{item.value}</h3>
                    <div className="mt-2 flex items-center">
                      <span className="text-xs font-medium text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full flex items-center">
                        {item.percentage}
                        <ArrowUpRight className="ml-0.5 h-3 w-3" />
                      </span>
                      <span className="ml-2 text-xs text-gray-700">vs last month</span>
                    </div>
                  </div>
                  <div className={`p-2 rounded-lg ${item.iconBgColor}`}>
                    <item.icon className="h-6 w-6" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
};

export default UserDashboard;