// import { useState, useEffect } from "react";
// import { motion } from "framer-motion";
// import { getAllUsers, getUser } from "../redux/userSlice";
// import { getAllDeposite } from "../redux/depositeSlice";
// import { ScaleIcon } from "@heroicons/react/24/outline";
// import { FaUsers } from "react-icons/fa";
// import { FaUserCheck } from "react-icons/fa";
// import { FaUserTimes } from "react-icons/fa";
// import { RiUserForbidFill } from "react-icons/ri";
// import { FaUserShield } from "react-icons/fa";
// import { useSelector, useDispatch } from "react-redux";
// import { Link } from "react-router-dom";
// import AdminSetting from "./AdminSetting";
// import { getAllWithdrawal } from "../redux/withdrawalSlice";
// import Connect from "../metamask/Connect";
// import { Clock, ArrowRight, Database } from 'lucide-react';
// import SummaryCharts from "./SummaryChart";
// export default function AdminDashboard({ AdminPendingWidhdrawalRequest }) {
//   const { admin } = useSelector((state) => state.auth);
//   const dispatch = useDispatch();
//   const { allusers, loading, error, message } = useSelector(
//     (state) => state.allusers
//   );
//   const { alldeposite } = useSelector((state) => state.alldeposite);
//   const { allwithdrawal } = useSelector((state) => state.allwithdrawal);
//   useEffect(() => {
//     dispatch(getAllUsers());
//     dispatch(getAllDeposite());
//     dispatch(getAllWithdrawal());
//   }, [admin?.id]);
//   let totalCount = allusers?.length;
//   let activeCount = allusers?.filter(
//     (user) => user?.is_active == "active"
//   ).length;
//   let blockCount = allusers?.filter((user) => user?.status == "block").length;
//   let activePlanSum = allusers
//     ?.filter((user) => user.is_active)
//     .reduce((sum, user) => sum + user.active_plan, 0);
//   let totalbusiness = allusers?.reduce(
//     (sum, user) => sum + user.active_plan,
//     0
//   );
//   let inactiveCount = totalCount - activeCount;
//   let unblockCount = totalCount - blockCount;

//   const today = new Date().toISOString().slice(0, 10);

//   // Filter users who joined today
//   let joinedTodayCount = allusers?.filter((user) => {
//     const createdAtDate = user?.created_at?.slice(0, 10); // Extract YYYY-MM-DD from created_at
//     return createdAtDate === today;
//   }).length;

//   let pendingDepositsCount = alldeposite?.filter(
//     (deposit) => deposit.status === "pending"
//   ).length;
//   let pendingaWithdrawalCount = allwithdrawal?.filter(
//     (wd) => wd.status === "pending"
//   ).length;

//   let TotalDepositsAmount = alldeposite
//     ?.filter(
//       (deposit) =>
//         deposit.status === "complete" || deposit.status === "TRN-ADM002"
//     )
//     .reduce((sum, deposit) => sum + (deposit.amount || 0), 0);

//   let TotalWithdrawalAmount = allwithdrawal
//     ?.filter((wd) => wd.status === "complete" || wd.status === "TRN-ADM002")
//     .reduce((sum, wd) => sum + (wd.amount || 0) + (wd.deduction || 0), 0);

//   let TotalPendingDepositsAmount = alldeposite
//     ?.filter((deposit) => deposit.status === "pending")
//     .reduce((sum, deposit) => sum + (deposit.amount || 0), 0);

//   let TotalPendingWithdrawalAmount = allwithdrawal
//     ?.filter((wd) => wd.status === "pending")
//     .reduce((sum, wd) => sum + (wd.amount || 0) + (wd.deduction || 0), 0);

//   const cards = [
//     {
//       name: "Block Member",
//       to: "/admin/user/block",
//       icon: RiUserForbidFill,
//       amount: blockCount,
//       iconBgColor: "bg-purple-700",
//       gredient: "bg-gradient-to-r from-[#182a91] to-green-700 shadow-lg ",
//       percentage: "69",
//     },
//     {
//       name: "Unblock Member",
//       to: "/admin/user/unblock",
//       icon: FaUserShield,
//       amount: unblockCount,
//       iconBgColor: "bg-indigo-700",
//       gredient: "bg-gradient-to-r from-[#182a91] to-green-700 shadow-lg ",
//       percentage: "66",
//     },
//     {
//       name: "Inactive Member",
//       to: "/admin/user/inactive",
//       icon: FaUserTimes,
//       amount: inactiveCount,
//       iconBgColor: "bg-red-700",
//       gredient: "bg-gradient-to-r from-[#182a91] to-red-700 shadow-lg ",
//       percentage: "98",
//     },
//     {
//       name: "Subscription Plan Amount",
//       to: "/admin/dashboard",
//       icon: ScaleIcon,
//       amount: `$${activePlanSum}`,
//       iconBgColor: "bg-yellow-700",
//       gredient: "bg-gradient-to-r from-[#182a91] to-green-700 shadow-lg ",
//       percentage: "76",
//     },

//   ];
//   const card3 = [
//     {
//       name: "Total User",
//       to: "/admin/user/all",
//       icon: FaUsers,
//       amount: totalCount,
//       iconBgColor: "bg-blue-700",
//       gredient: "bg-gradient-to-r from-[#182a91] to-[#751bc0] shadow-lg ",
//       percentage: "76",
//     },
//     {
//       name: "Active Member",
//       to: "/admin/user/active",
//       icon: FaUserCheck,
//       amount: activeCount,
//       iconBgColor: "bg-green-700",
//       gredient: "bg-gradient-to-r from-[#182a91] to-blue-700 shadow-lg ",
//       percentage: "36",
//     },
  
//   ];
//   const card4 = [
//     {
//       name: "Total Business",
//       to: "/admin/income",
//       icon: ScaleIcon,
//       amount: "$" + totalbusiness,
//       iconBgColor: "bg-indigo-700",
//       gredient: "bg-gradient-to-br from-indigo-800 via-indigo-700 to-purple-600 shadow-lg ",
//     },
//     {
//       name: "Today Join",
//       to: "/admin/user/all",
//       icon: ScaleIcon,
//       amount: joinedTodayCount,
//       iconBgColor: "bg-blue-700",
//       gredient: "bg-gradient-to-br from-indigo-800 via-indigo-700 to-purple-600 shadow-lg ",
//     },
//   ];
//   const card5 = [
//     {
//       name: "Pending Deposite",
//       to: "/admin/deposite",
//       icon: ScaleIcon,
//       amount: pendingDepositsCount,
//       iconBgColor: "bg-purple-700",
//       gredient: "bg-gradient-to-br from-indigo-800 via-indigo-700 to-purple-600 shadow-lg ",
//     },
    
//   ];
//   const card6 = [
//     {
//       name: "Pending Withdrawal",
//       to: "/admin/pendingwithdrawalrequest",

//       icon: ScaleIcon,
//       amount: pendingaWithdrawalCount,
//       iconBgColor: "bg-red-700",
//       iconColor: "text-blue-500",
//       percentage: "66",
//       gredient: "bg-gradient-to-br from-indigo-800 via-indigo-700 to-purple-600 shadow-lg ",
//     },
//     {
//       name: "Total Deposite",
//       to: "/admin/deposite",
//       icon: ScaleIcon,
//       amount: TotalDepositsAmount,
//       iconBgColor: "bg-purple-700",
//       iconColor: "text-blue-500",
//       percentage: "66",
//       gredient: "bg-gradient-to-br from-indigo-800 via-indigo-700 to-purple-600 shadow-lg ",
//     },
//   ];


//   const cards2 = [
  
//     // {
//     //   name: "Pending Deposite",
//     //   to: "/admin/deposite/pending",
//     //   icon: ScaleIcon,
//     //   amount: TotalPendingDepositsAmount,
//     //   iconBgColor: "bg-purple-700",
//     //   iconColor: "text-blue-500",
//     //   percentage: "66",
//     //   gredient: "bg-gradient-to-br from-indigo-800 via-indigo-700 to-purple-600 shadow-lg ",
//     // },
//     {
//       name: "Total Withdrawal",
//       to: "/admin/pendingwithdrawalrequest",
//       icon: ScaleIcon,
//       amount: TotalWithdrawalAmount?.toFixed(2),
//       iconBgColor: "bg-red-700",
//       iconColor: "text-blue-500",
//       percentage: "66",
//       gredient: "bg-gradient-to-br from-indigo-800 via-indigo-700 to-purple-600 shadow-lg ",
//     },
  
//   ];
//   const itemVariants = {
//     hidden: { opacity: 0, scale: 0.9 },
//     visible: { opacity: 1, scale: 1 },
//   };

//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.1,
//       },
//     },
//   };

//   const itemVariant = {
//     hidden: { opacity: 0, scale: 0.9 },
//     visible: {
//       opacity: 1,
//       scale: 1,
//       transition: {
//         type: "spring",
//         stiffness: 100,
//         damping: 12,
//       },
//     },
//   };
//   const sampleTransactions = [
//     {  user: "No Transaction"},
//   ];

//   // Then use it in the conditional - this avoids the initialization error
//   const transactions = Array.isArray(AdminPendingWidhdrawalRequest) && AdminPendingWidhdrawalRequest.length > 0 
//     ? AdminPendingWidhdrawalRequest.slice(0, 3) 
//     : sampleTransactions;
//   return (
//     <>
//       <div className="relative min-h-screen flex flex-col overflow-hidden  text-gray-900">
//         {/* <div className="absolute inset-0 bg-gradient-to-br from-indigo-800 via-indigo-700 to-purple-600 opacity-20"></div> */}
//         <div className="relative z-10 flex flex-col flex-1">
//           <main className="flex-1 pb-8">
//             <div className="mt-8">
//               <div className="container mx-auto ">
//                 <div className=" ">
//                   <motion.div
//                     initial="hidden"
//                     animate="visible"
//                     variants={{
//                       visible: {
//                         transition: { staggerChildren: 0.3 },
//                       },
//                     }}
//                     className="overflow-hidden"
//                   >
//                     <div className=" lg:grid grid-cols-12  gap-4 mb-4 ">
//                       <div
//                         className="lg:col-span-7 lg:mb-0 mb-4
//                       rounded-md flex justify-between bg-gradient-to-br from-indigo-800 via-indigo-700 to-purple-600"
//                       >
//                         <div>
//                           <div className="text-xl font-semibold p-5 mt-3 text-white">
//                             TOTAL USER
//                           </div>
//                           <div className="flex sm:flex-row flex-col   sm:items-end ">
//                             {card3?.map((item, i) => (
//                               <motion.div
//                                 key={i}
//                                 variants={itemVariants}
//                                 transition={{ duration: 0.3 }}
//                                 className="relative flex flex-col mt-6    items-end justify-center  rounded-lg overflow-hidden"
//                               >
//                                 <div
//                                   className={`flex  flex-row justify-center item-center  gap-2 px-3  py-3 w-full  rounded-md relative ${item.bgColor}`}
//                                 >
//                                   <div className="relative flex flex-col  items-center mx-auto justify-center w-16 h-12 rounded-full bg-gradient-to-br from-indigo-800 via-indigo-700 to-purple-600  shadow-md z-10">
//                                     <div
//                                       className={`absolute inset-0 right-0 flex justify-center  rounded-full ${item.bgColor}`}
//                                     ></div>
//                                     <item.icon className="w-6 h-6 text-white relative z-10" />
//                                   </div>
//                                   <div className="flex flex-col text-left flex-1">
//                                     <h3 className="text-base   uppercase text-white">
//                                       {item.name}
//                                     </h3>
//                                     <p className="text-white text-lg">
//                                       {item.amount}
//                                     </p>
//                                   </div>
//                                 </div>
//                               </motion.div>
//                             ))}
//                           </div>
//                         </div>
//                         <div className="hidden sm:block ">
//                           <img
//                             src="/Adminpic.png"
//                             alt=""
//                             className="w-auto pt-6 h-[200px]"
//                           />
//                         </div>
//                       </div>
//                       <div className="lg:col-span-5  ">
//                         <div className=" gap-4 grid-cols-2 grid">
//                           {card4.map((item, i) => (
//                             <motion.div
//                               key={i}
//                               variants={itemVariants}
//                               transition={{ duration: 0.3 }}
//                               className="relative flex flex-col items-center justify-center shadow-lg rounded-lg overflow-hidden"
//                             >
//                               <div
//                                 className={`flex  flex-col justify-center    gap-4  px-8 py-8 w-full bg-gradient-to-br from-indigo-800 via-indigo-700 to-purple-600 rounded-md relative ${item.bgColor}`}
//                               >
//                                 <div className="relative flex flex-col  items-center mx-auto justify-center w-20 h-16 rounded-full bg-gradient-to-br from-indigo-800 via-indigo-700 to-purple-600  shadow-md z-10">
//                                   <div
//                                     className={`absolute inset-0 right-0 flex justify-center  rounded-full ${item.bgColor}`}
//                                   ></div>
//                                   <item.icon className="w-8 h-8 text-white relative z-10" />
//                                 </div>
//                                 <div className="flex flex-col text-center flex-1">
//                                   <h3 className="text-base   uppercase text-white">
//                                     {item.name}
//                                   </h3>
//                                   <p className="text-white text-lg">
//                                     {item.amount}
//                                   </p>
//                                 </div>
//                               </div>
//                             </motion.div>
//                           ))}
//                         </div>
//                       </div>
//                     </div>
//                     <div className="grid lg:grid-cols-12 gap-4">
//                       <div className=" col-span-8 grid md:grid-cols-2 gap-2">
//                         {cards.map((item, i) => (
//                           <motion.div
//                             key={i}
//                             variants={itemVariants}
//                             transition={{ duration: 0.3 }}
//                             className="relative flex flex-col items-center justify-center shadow-lg rounded-lg overflow-hidden"
//                           >
//                             <div
//                               className={`flex  flex-row justify-center p-3 gap-4   w-full bg-gradient-to-br from-indigo-800 via-indigo-700 to-purple-600 rounded-md relative ${item.bgColor}`}
//                             >
//                               <div className="relative flex flex-col  items-center mx-auto  justify-center w-12 h-10 rounded-full bg-gradient-to-br from-indigo-800 via-indigo-700 to-purple-600  shadow-md z-10">
//                                 <div
//                                   className={`absolute inset-0 right-0 flex  justify-between p-4  rounded-full ${item.bgColor}`}
//                                 ></div>
//                                 <item.icon className="w-6 h-6 text-white relative z-10" />
//                               </div>
//                               <div className="flex items-center justify-between gap-3 text-center flex-1">
//                                 <div className="text-base   uppercase text-white">
//                                   {item.name}
//                                 </div>
//                                 <div className="text-white text-lg">
//                                   {item.amount}
//                                 </div>
//                               </div>
//                             </div>
//                           </motion.div>
//                         ))}
//                       </div>
//                       <div className="lg:col-span-4  col-span-8 rounded-md">
//                         <motion.div
//                           className="grid grid-cols-1  gap-3"
//                           variants={containerVariants}
//                           initial="hidden"
//                           animate="visible"
//                         >
//                           {card5?.map((item, i) => (
//                             <motion.div
//                               key={i}
//                               variants={itemVariant}
//                             transition={{ duration: 1.0 }}
//                               className="group relative overflow-hidden rounded-sm"
//                             >
//                               <div
//                                 className={`absolute inset-0 bg-gradient-to-br ${item.gredient} rounded-xl opacity-80  transition-opacity duration-300 group-hover:opacity-100`}
//                               ></div>

//                               <div className="relativ backdrop-blur-lg rounded-md p-4  flex  flex-col justify-between h-full shadow-md transition-all duration-300 group-hover:border-white/50">
//                                 <div className="flex lg:flex-row flex-col items-center justify-between">
//                                   <div className="relative flex flex-col  items-center  justify-center w-20 h-16 rounded-full bg-gradient-to-br from-indigo-800 via-indigo-700 to-purple-600  shadow-md z-10">
//                                     <div
//                                       className={`absolute inset-0 right-0 flex items-center  justify-between p-4  rounded-full ${item.bgColor}`}
//                                     ></div>
//                                     <item.icon className="w-8 h-8 text-white items-center relative z-10" />
//                                   </div>
//                                   <div className="flex my-2 justify-center text-center items-center mb-2">
//                                     <div className="text-lg  text-white">
//                                       {item.name}
//                                       <div className="text-lg text-gray-300 opacity-90 group-hover:opacity-100 transition-opacity duration-300">
//                                         {item.amount}
//                                       </div>
//                                     </div>
//                                   </div>
//                                 </div>

//                                 <div className="text-lg  flex justify-center text-white">
//                                   <Link
//                                     to={item.to}
//                                     className="text-[18px] font-semibold text-white"
//                                   >
//                                     View all
//                                   </Link>
//                                 </div>
//                               </div>
//                             </motion.div>
//                           ))}
//                         </motion.div>
//                       </div>
//                     </div>
//                   </motion.div>
//                 </div>
//                 <section className="lg:grid lg:grid-cols-12  mt-4 gap-2 ">
//                   <motion.div
//                     className="flex flex-col  bg-gradient-to-br from-indigo-800 via-indigo-700 to-purple-600 p-2 rounded-md  md:col-span-8 sm:col-span-8 lg:mb-0 mb-4 lg:col-span-4"
//                     variants={containerVariants}
//                     initial="hidden"
//                     animate="visible"
//                   >
//                     <div className="flex justify-center items-center ">
//                       <img
//                         src="https://bootstrapdemos.adminmart.com/modernize/dist/assets/images/backgrounds/piggy.png"
//                         alt=""
//                       />
//                     </div>
//                     {cards2?.map((item, i) => (
//                       <motion.div
//                         key={i}
//                         variants={itemVariant}
//                         className="group relative overflow-hidden rounded-lg mb-3"
//                       >
//                         {/* Glass morphism card with better gradient */}
//                         <div className="absolute inset-0 bg-gradient-to-br from-indigo-800 via-indigo-700 to-purple-600 rounded-lg opacity-75 transition-all duration-300 group-hover:opacity-90"></div>

//                         {/* Card content with improved spacing and hover effects */}
//                         <div className="relative backdrop-blur-md p-3 rounded-lg flex flex-col h-full shadow-lg ">
//                           <div className="flex justify-between items-start w-full">
//                             <div className="space-y-2">
//                               <h3 className="text-lg font-semibold text-white">
//                                 {item.name}
//                               </h3>
//                               <p className="text-2xl font-bold text-white/90 group-hover:text-white transition-colors duration-300">
//                                 {item.amount}
//                               </p>
//                             </div>

//                             {/* Icon that shows on hover */}
//                             <div className="text-white flex  justify-center items-center ">
//                               {/* You can add an icon here if desired */}
//                               <Link
//                               to={item.to}
//                               className="inline-flex items-center px-3 py-1.5 bg-white/10 rounded-md text-sm font-medium text-white "
//                             >
//                               View all
//                               <svg
//                                 xmlns="http://www.w3.org/2000/svg"
//                                 className="h-4 w-4 ml-1.5 "
//                                 fill="none"
//                                 viewBox="0 0 24 24"
//                                 stroke="currentColor"
//                               >
//                                 <path
//                                   strokeLinecap="round"
//                                   strokeLinejoin="round"
//                                   strokeWidth={2}
//                                   d="M9 5l7 7-7 7"
//                                 />
//                               </svg>
//                             </Link>
//                             </div>
//                           </div>

//                           {/* Button with better hover effect */}
                        
//                         </div>
//                       </motion.div>
//                     ))}
//                   </motion.div>
//                   <motion.div
//                     className="lg:grid grid-cols-1 flex sm:flex-row flex-col lg:mb-0 mb-4   bg-gradient-to-br from-indigo-800 via-indigo-700 to-purple-600 p-2 rounded-md col-span-8 lg:col-span-3"
//                     variants={containerVariants}
//                     initial="hidden"
//                     animate="visible"
//                   >
//                     {card6?.map((item, i) => (
//                       <motion.div
//                         key={i}
//                         variants={itemVariants}
//                         transition={{ duration: 0.3 }}
//                         className="relative flex flex-col items-center justify-center rounded-lg overflow-hidden"
//                       >
//                         <div
//                           className={`flex  lg:flex-col flex-row justify-between lg:justify-center    gap-4  px-4 py-4 w-full rounded-md relative ${item.bgColor}`}
//                         >
//                           <div className="relative flex flex-col  items-center mx-auto justify-center w-20 h-16 rounded-full bg-gradient-to-br from-indigo-800 via-indigo-700 to-purple-600   z-10">
//                             <div
//                               className={`absolute inset-0 right-0 flex justify-center  rounded-full ${item.bgColor}`}
//                             ></div>
//                             <item.icon className="w-8 h-8 text-white relative z-10" />
//                           </div>
//                           <div className="flex flex-col text-center flex-1">
//                             <h3 className="text-base   uppercase text-white">
//                               {item.name}
//                             </h3>
//                             <p className="text-white text-lg">{item.amount}</p>
//                           </div>
//                         </div>
//                       </motion.div>
//                     ))}
//                   </motion.div>

                  
//                   <motion.div
//                     className="grid grid-cols-1   bg-gradient-to-br from-indigo-800 via-indigo-700 to-purple-600  rounded-md col-span-8 lg:col-span-5"
//                     variants={containerVariants}
//                     initial="hidden"
//                     animate="visible"
//                   >
//                     <div className="col-span-5">
//                       <motion.div
//                         className="relative bg-black/50 rounded-lg overflow-hidden shadow-xl w-full h-full"
//                         initial={{ opacity: 0, y: 20 }}
//                         animate={{ opacity: 1, y: 0 }}
//                         transition={{ duration: 0.5 }}
//                       >
//                         {/* Animated gradient backgrounds */}
//                         <motion.div
//                           className="absolute w-[540px] h-[700px] opacity-60 bg-gradient-to-br from-indigo-800 via-indigo-700 to-purple-600 rounded-full -top-40 -left-40"
//                           animate={{ rotate: 360 }}
//                           transition={{
//                             repeat: Infinity,
//                             duration: 55,
//                             ease: "linear",
//                           }}
//                         ></motion.div>
//                         <motion.div
//                           className="absolute w-[540px] h-[700px] opacity-60 bg-gradient-to-br from-indigo-800 via-indigo-700 to-purple-600 rounded-full -top-10 -left-40"
//                           animate={{ rotate: 360 }}
//                           transition={{
//                             repeat: Infinity,
//                             duration: 50,
//                             ease: "linear",
//                           }}
//                         ></motion.div>
//                         <motion.div
//                           className="absolute w-[540px] h-[700px] opacity-60 bg-gradient-to-br from-indigo-800 via-indigo-700 to-purple-600 rounded-full top-[150px] left-0"
//                           animate={{ rotate: 360 }}
//                           transition={{
//                             repeat: Infinity,
//                             duration: 45,
//                             ease: "linear",
//                           }}
//                         ></motion.div>

//                         {/* Content container */}
//                         <div className="relative z-10 p-3">
//                           {/* Header */}
//                           <div className="flex items-center justify-between mb-3">
//                             <div className="flex items-center gap-3">
//                               <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-indigo-800 via-indigo-700 to-purple-600 shadow-lg">
//                                 <Database className="w-6 h-6 text-white" />
//                               </div>
//                               <div className="text-xl font-bold text-white">
//                                 Withdrawals
//                               </div>
//                             </div>
//                             <motion.div
//                               className="text-white text-sm flex items-center gap-2"
//                               whileHover={{ scale: 1.05 }}
//                             >
//                               <Clock className="w-4 h-4" />
//                               <span>Recently Updated</span>
//                             </motion.div>
//                           </div>

//                           {/* Transactions */}
//                           <div className=" bg-gray-900/70 backdrop-blur-sm rounded-lg mb-6">
//                             {transactions.map((transaction, index) => (
//                               <motion.div
//                                 key={transaction.id || index}
//                                 className=" p-4"
                                
//                                 initial={{ opacity: 0, x: -20 }}
//                                 animate={{ opacity: 1, x: 0 }}
//                                 transition={{ duration: 0.3 }}
//                               >
//                                 <div className="flex justify-between items-center">
//                                   <div>
//                                     <h3 className="text-white font-medium">
//                                       {transaction.user}
//                                     </h3>
//                                     <div className="flex items-center gap-2">
//                                       <span className="text-gray-400 text-sm">
//                                         {transaction.date}
//                                       </span>
//                                       <span className="inline-block w-2 h-2 rounded-full bg-blue-400"></span>
//                                       <span className="text-blue-400 text-sm">
//                                         {transaction.status}
//                                       </span>
//                                     </div>
//                                   </div>
//                                   <div className="text-right">
//                                     <div className="text-white font-bold">
//                                       {transaction.amount}
//                                     </div>
                                 
//                                   </div>
//                                 </div>
//                               </motion.div>
//                             ))}
//                           </div>

//                           {/* Show More Button */}
//                           <a href="/admin/pendingwithdrawalrequest">
//                             <motion.button
//                               className="w-full py-3 rounded-lg bg-purple-700 text-white font-medium flex items-center justify-center gap-2"
//                               whileHover={{ scale: 1.02 }}
//                               whileTap={{ scale: 0.98 }}
//                             >
//                               Show All Pending Withdrawals
//                               <ArrowRight className="w-4 h-4" />
//                             </motion.button>
//                           </a>
//                         </div>
//                       </motion.div>
//                     </div>
                  
//                     {/* {card7?.map((item, i) => (
//                       <motion.div className="e-card playing relative bg-black/50  rounded-lg overflow-hidden  shadow-xl w-full mx-auto">
//                         <motion.div
//                           className="absolute w-[540px] h-[700px] opacity-60 bg-gradient-to-br from-indigo-800 via-indigo-700 to-purple-600 rounded-full -top-40 -left-40"
//                           animate={{ rotate: 360 }}
//                           transition={{
//                             repeat: Infinity,
//                             duration: 55,
//                             ease: "linear",
//                           }}
//                         ></motion.div>
//                         <motion.div
//                           className="absolute w-[540px] h-[700px] opacity-60 bg-gradient-to-br from-indigo-800 via-indigo-700 to-purple-600 rounded-full -top-10 -left-40"
//                           animate={{ rotate: 360 }}
//                           transition={{
//                             repeat: Infinity,
//                             duration: 50,
//                             ease: "linear",
//                           }}
//                         ></motion.div>
//                         <motion.div
//                           className="absolute w-[540px] h-[700px] opacity-60 bg-gradient-to-br from-indigo-800 via-indigo-700 to-purple-600 rounded-full top-[150px] left-0"
//                           animate={{ rotate: 360 }}
//                           transition={{
//                             repeat: Infinity,
//                             duration: 45,
//                             ease: "linear",
//                           }}
//                         ></motion.div>
//                         <div className="text-center text-white absolute  top-24 w-full">
//                           <motion.svg
//                             xmlns="http://www.w3.org/2000/svg"
//                             fill="none"
//                             viewBox="0 0 24 24"
//                             className="w-12 h-12 mx-auto mb-4"
//                             whileHover={{ scale: 1.2 }}
//                           ></motion.svg>
//                           <div className="absolute ">
//                             {" "}
//                             <div
//                               className={`flex  flex-col justify-center    gap-4  px-8 py-8 w-full  rounded-md inset-0 ${item.bgColor}`}
//                             >
//                               <div className="relative flex flex-col  items-center mx-auto justify-center w-20 h-16 rounded-full   shadow-md z-10">
//                                 <div
//                                   className={`absolute inset-0 right-0 flex justify-center bg-gradient-to-br from-indigo-800 via-indigo-700 to-purple-600  rounded-full ${item.bgColor}`}
//                                 ></div>
//                                 <item.icon className="w-8 h-8 text-white relative z-10" />
//                               </div>
//                               <div className="flex flex-col text-center flex-1">
//                                 <h3 className="text-base   uppercase text-white">
//                                   {item.name}
//                                 </h3>
//                                 <p className="text-white text-lg">
//                                   {item.amount}
//                                 </p>
//                               </div>
//                             </div>
//                           </div>
//                         </div>
//                       </motion.div>
//                     ))} */}
//                   </motion.div>
//                   {/* <motion.div
//                     className="grid grid-cols-1   bg-gradient-to-br from-indigo-800 via-indigo-700 to-purple-600  rounded-md col-span-5"
//                     variants={containerVariants}
//                     initial="hidden"
//                     animate="visible"
//                   >
               
//                     {card7?.map((item, i) => (
//                       <motion.div className="e-card playing relative bg-black/50  rounded-lg overflow-hidden  shadow-xl w-full mx-auto">
//                         <motion.div
//                           className="absolute w-[540px] h-[700px] opacity-60 bg-gradient-to-br from-indigo-800 via-indigo-700 to-purple-600 rounded-full -top-40 -left-40"
//                           animate={{ rotate: 360 }}
//                           transition={{
//                             repeat: Infinity,
//                             duration: 55,
//                             ease: "linear",
//                           }}
//                         ></motion.div>
//                         <motion.div
//                           className="absolute w-[540px] h-[700px] opacity-60 bg-gradient-to-br from-indigo-800 via-indigo-700 to-purple-600 rounded-full -top-10 -left-40"
//                           animate={{ rotate: 360 }}
//                           transition={{
//                             repeat: Infinity,
//                             duration: 50,
//                             ease: "linear",
//                           }}
//                         ></motion.div>
//                         <motion.div
//                           className="absolute w-[540px] h-[700px] opacity-60 bg-gradient-to-br from-indigo-800 via-indigo-700 to-purple-600 rounded-full top-[150px] left-0"
//                           animate={{ rotate: 360 }}
//                           transition={{
//                             repeat: Infinity,
//                             duration: 45,
//                             ease: "linear",
//                           }}
//                         ></motion.div>
//                         <div className="text-center text-white absolute  top-24 w-full">
//                           <motion.svg
//                             xmlns="http://www.w3.org/2000/svg"
//                             fill="none"
//                             viewBox="0 0 24 24"
//                             className="w-12 h-12 mx-auto mb-4"
//                             whileHover={{ scale: 1.2 }}
//                           ></motion.svg>
//                           <div className="absolute ">
//                             {" "}
//                             <div
//                               className={`flex  flex-col justify-center    gap-4  px-8 py-8 w-full  rounded-md inset-0 ${item.bgColor}`}
//                             >
//                               <div className="relative flex flex-col  items-center mx-auto justify-center w-20 h-16 rounded-full   shadow-md z-10">
//                                 <div
//                                   className={`absolute inset-0 right-0 flex justify-center bg-gradient-to-br from-indigo-800 via-indigo-700 to-purple-600  rounded-full ${item.bgColor}`}
//                                 ></div>
//                                 <item.icon className="w-8 h-8 text-white relative z-10" />
//                               </div>
//                               <div className="flex flex-col text-center flex-1">
//                                 <h3 className="text-base   uppercase text-white">
//                                   {item.name}
//                                 </h3>
//                                 <p className="text-white text-lg">
//                                   {item.amount}
//                                 </p>
//                               </div>
//                             </div>
//                           </div>
//                         </div>
//                       </motion.div>
//                     ))}
//                   </motion.div> */}
//                 </section>
//                 <SummaryCharts/>
//                 <div className="py-4">
//                   <AdminSetting />
//                 </div>
//               </div>
//             </div>
//           </main>
//         </div>
//       </div>
//     </>
//   );
// }

// // {/* <div className="relative min-h-screen flex flex-col overflow-hidden text-gray-900">
// // <div className="absolute inset-0 bg-black opacity-20"></div>
// // <div className="relative z-10 flex flex-col flex-1">
// //   <main className="flex-1 pb-8">
// //     <Connect />
// //     <div className="mt-8">
// //       <div className="container mx-auto ">
// //         <div className=" ">
// //           <motion.div
// //             initial="hidden"
// //             animate="visible"
// //             variants={{
// //               visible: {
// //                 transition: { staggerChildren: 0.3 },
// //               },
// //             }}
// //             className="overflow-hidden"
// //           >
// //             <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
// //               {cards.map((item, i) => (
// //                 <motion.div
// //                   key={i}
// //                   variants={itemVariants}
// //                   transition={{ duration: 0.3 }}
// //                   className="relative flex items-center  shadow-lg rounded-lg overflow-hidden"
// //                 >
// //                   {/* <div className="relative flex items-center justify-center w-20 h-16 rounded-full bg-white border-4 shadow-md z-10">
// //                     <div
// //                       className={`absolute inset-0 rounded-full ${item.bgColor}`}
// //                     ></div>
// //                     <item.icon className="w-8 h-8 text-white relative z-10" />
// //                   </div> */}

// //                   <div
// //                     className={`flex gap-2  px-6 py-4 w-full bg-[#212130] rounded-md relative ${item.bgColor}`}
// //                   >

// //                     <div className="flex flex-col flex-1"> <h3 className="text-lg   font-semibold text-white">
// //                       {item.name}
// //                     </h3>
// //                     <p className="text-white text-lg">{item.amount}</p></div>
// //                   <div className="relative flex items-center justify-center w-20 h-16 rounded-full bg-[#212130] border-4 shadow-md z-10">
// //                     <div
// //                       className={`absolute inset-0 right-0  rounded-full ${item.bgColor}`}
// //                     ></div>
// //                     <item.icon className="w-8 h-8 text-white relative z-10" />
// //                   </div>

// //                   </div>
// //                 </motion.div>
// //               ))}
// //             </div>
// //           </motion.div>
// //         </div>

// //         <section className="mt-4">
// //           <motion.div
// //             className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
// //             variants={containerVariants}
// //             initial="hidden"
// //             animate="visible"
// //           >
// //             {cards2?.map((item, i) => (
// //               <motion.div
// //                 key={i}
// //                 variants={itemVariant}
// //                 className="group relative overflow-hidden rounded-sm"
// //               >
// //                 <div
// //                   className={`absolute inset-0 bg-gradient-to-br ${item.gredient} rounded-xl opacity-80 transition-opacity duration-300 group-hover:opacity-100`}
// //                 ></div>
// //                 <div className="relative bg-black/30 backdrop-blur-lg border border-white/20 p-5 rounded-sm flex flex-col justify-between h-full shadow-md transition-all duration-300 group-hover:border-white/50">
// //                   <div className="flex justify-between items-start mb-3">
// //                     <h3 className="text-base  text-white">
// //                       {item.name}
// //                       <p className="text-base text-gray-300 opacity-90 group-hover:opacity-100 transition-opacity duration-300">
// //                         {item.amount}
// //                       </p>
// //                     </h3>
// //                     <div className="h-3 w-3 rounded-full bg-white/50 group-hover:bg-white  group-hover:animate-pulse"></div>
// //                   </div>
// //                   <div className="w-full h-0.5 bg-gradient-to-r from-transparent via-indigo-400 to-transparent"></div>

// //                   <p className="text-sm font-medium pt-4 text-white">
// //                     <Link
// //                       to={item.to}
// //                       className="text-base font-medium text-white"
// //                     >
// //                       View all
// //                     </Link>
// //                   </p>
// //                 </div>
// //               </motion.div>
// //             ))}
// //           </motion.div>
// //         </section>
// //         <div className="py-4">
// //           <AdminSetting />
// //         </div>
// //       </div>
// //     </div>
// //   </main>
// // </div>
// // </div> */}













import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { getAllUsers, getUser } from "../redux/userSlice";
import { getAllDeposite } from "../redux/depositeSlice";
import { ScaleIcon } from "@heroicons/react/24/outline";
import { FaUsers } from "react-icons/fa";
import { FaUserCheck } from "react-icons/fa";
import { FaUserTimes } from "react-icons/fa";
import { RiUserForbidFill } from "react-icons/ri";
import { FaUserShield } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import AdminSetting from "./AdminSetting";
import { getAllWithdrawal } from "../redux/withdrawalSlice";
import Connect from "../metamask/Connect";
import { Clock, ArrowRight, Database, ChevronRight, Activity, DollarSign, Users, BarChart3, TrendingUp, CircleDollarSign, Wallet, Shield, AlertCircle } from 'lucide-react';
import SummaryCharts from "./SummaryChart";

export default function AdminDashboard({ AdminPendingWidhdrawalRequest }) {
  const { admin } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const { allusers, loading, error, message } = useSelector(
    (state) => state.allusers
  );
  const { alldeposite } = useSelector((state) => state.alldeposite);
  const { allwithdrawal } = useSelector((state) => state.allwithdrawal);
  
  useEffect(() => {
    dispatch(getAllUsers());
    dispatch(getAllDeposite());
    dispatch(getAllWithdrawal());
  }, [admin?.id]);
  
  let totalCount = allusers?.length;
  let activeCount = allusers?.filter(
    (user) => user?.is_active == "active"
  ).length;
  let blockCount = allusers?.filter((user) => user?.status == "block").length;
  let activePlanSum = allusers
    ?.filter((user) => user.is_active)
    .reduce((sum, user) => sum + user.active_plan, 0);
  let totalbusiness = allusers?.reduce(
    (sum, user) => sum + user.active_plan,
    0
  );
  let inactiveCount = totalCount - activeCount;
  let unblockCount = totalCount - blockCount;

  const today = new Date().toISOString().slice(0, 10);

  // Filter users who joined today
  let joinedTodayCount = allusers?.filter((user) => {
    const createdAtDate = user?.created_at?.slice(0, 10);
    return createdAtDate === today;
  }).length;

  let pendingDepositsCount = alldeposite?.filter(
    (deposit) => deposit.status === "pending"
  ).length;
  
  let pendingaWithdrawalCount = allwithdrawal?.filter(
    (wd) => wd.status === "pending"
  ).length;

  let TotalDepositsAmount = alldeposite
    ?.filter(
      (deposit) =>
        deposit.status === "complete" || deposit.status === "TRN-ADM002"
    )
    .reduce((sum, deposit) => sum + (deposit.amount || 0), 0);

  let TotalWithdrawalAmount = allwithdrawal
    ?.filter((wd) => wd.status === "complete" || wd.status === "TRN-ADM002")
    .reduce((sum, wd) => sum + (wd.amount || 0) + (wd.deduction || 0), 0);

  let TotalPendingDepositsAmount = alldeposite
    ?.filter((deposit) => deposit.status === "pending")
    .reduce((sum, deposit) => sum + (deposit.amount || 0), 0);

  let TotalPendingWithdrawalAmount = allwithdrawal
    ?.filter((wd) => wd.status === "pending")
    .reduce((sum, wd) => sum + (wd.amount || 0) + (wd.deduction || 0), 0);

  // User Statistics Cards
  const userStatCards = [
    {
      name: "Total Users",
      to: "/admin/user/all",
      icon: Users,
      amount: totalCount,
      bgColor: "bg-orange-50",
      textColor: "text-orange-500",
      borderColor: "border-orange-500",
    },
    {
      name: "Active Users",
      to: "/admin/user/active",
      icon: FaUserCheck,
      amount: activeCount,
      bgColor: "bg-orange-50",
      textColor: "text-orange-500",
      borderColor: "border-orange-500",
    },
    {
      name: "Inactive Users",
      to: "/admin/user/inactive",
      icon: FaUserTimes,
      amount: inactiveCount,
      bgColor: "bg-orange-50",
      textColor: "text-orange-500",
      borderColor: "border-orange-500",
    },
    {
      name: "Blocked Users",
      to: "/admin/user/block",
      icon: RiUserForbidFill,
      amount: blockCount,
      bgColor: "bg-orange-50",
      textColor: "text-orange-500",
      borderColor: "border-orange-500",
    },
  ];

  // Financial Cards
  const financialCards = [
    {
      name: "Total Business",
      to: "/admin/income",
      icon: TrendingUp,
      amount: `$${totalbusiness}`,
      bgColor: "bg-orange-500",
      textColor: "text-white",
    },
    {
      name: "Active Plans Value",
      to: "/admin/dashboard",
      icon: CircleDollarSign,
      amount: `$${activePlanSum}`,
      bgColor: "bg-orange-500",
      textColor: "text-white",
    },
    {
      name: "Total Deposits",
      to: "/admin/deposite",
      icon: Wallet,
      amount: `$${TotalDepositsAmount?.toFixed(2)}`,
      bgColor: "bg-orange-500",
      textColor: "text-white",
    },
    {
      name: "Total Withdrawals",
      to: "/admin/pendingwithdrawalrequest",
      icon: DollarSign,
      amount: `$${TotalWithdrawalAmount?.toFixed(2)}`,
      bgColor: "bg-orange-500",
      textColor: "text-white",
    },
  ];

  // Activity Cards
  const activityCards = [
    {
      name: "New Users Today",
      to: "/admin/user/all",
      icon: Activity,
      amount: joinedTodayCount,
      bgColor: "bg-white",
      iconBgColor: "bg-orange-100",
      iconColor: "text-orange-500",
      borderColor: "border-orange-500",
    },
    {
      name: "Pending Deposits",
      to: "/admin/deposite",
      icon: AlertCircle,
      amount: pendingDepositsCount,
      bgColor: "bg-white",
      iconBgColor: "bg-orange-100",
      iconColor: "text-orange-500",
      borderColor: "border-orange-500",
    },
    {
      name: "Pending Withdrawals",
      to: "/admin/pendingwithdrawalrequest",
      icon: Clock,
      amount: pendingaWithdrawalCount,
      bgColor: "bg-white",
      iconBgColor: "bg-orange-100",
      iconColor: "text-orange-500",
      borderColor: "border-orange-500",
    },
  ];

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const sampleTransactions = [
    { user: "No Transaction" },
  ];

  const transactions = Array.isArray(AdminPendingWidhdrawalRequest) && AdminPendingWidhdrawalRequest.length > 0 
    ? AdminPendingWidhdrawalRequest.slice(0, 3) 
    : sampleTransactions;
    
  return (
    <div className="min-h-screen bg-orange-50 ">
      <div className="w-full mx-auto px-4 py-8">
        {/* Welcome Banner */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8 bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl shadow-lg overflow-hidden"
        >
          <div className="flex flex-col md:flex-row justify-between items-center p-6">
            <div className="text-white mb-6 md:mb-0">
              <h1 className="text-3xl font-bold mb-2">Welcome back, Admin</h1>
              <p className="text-orange-100">
                Here's what's happening with your platform today
              </p>
              <div className="flex mt-4 space-x-4">
                <div className="bg-white bg-opacity-20 rounded-lg px-4 py-2">
                  <p className="text-orange-100 text-sm">Total Users</p>
                  <p className="text-white font-bold text-2xl">{totalCount}</p>
                </div>
                <div className="bg-white bg-opacity-20 rounded-lg px-4 py-2">
                  <p className="text-orange-100 text-sm">Business</p>
                  <p className="text-white font-bold text-2xl">${totalbusiness}</p>
                </div>
              </div>
            </div>
            <img
              src="/Adminpic.png"
              alt="Admin Dashboard"
              className="w-48 h-48 object-contain"
            />
          </div>
        </motion.div>

        {/* Financial Overview Section */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="mb-8"
        >
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-800">Financial Overview</h2>
            <Link to="/admin/income" className="text-orange-500 hover:text-orange-600 flex items-center">
              View all <ChevronRight className="w-4 h-4 ml-1" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {financialCards.map((card, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`${card.bgColor} rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300`}
              >
                <Link to={card.to} className="block p-5">
                  <div className="flex items-center mb-4">
                    <div className="bg-white bg-opacity-25 rounded-full p-3">
                      <card.icon className={`w-6 h-6 ${card.textColor}`} />
                    </div>
                  </div>
                  <h3 className={`${card.textColor} text-lg font-medium`}>{card.name}</h3>
                  <p className={`${card.textColor} text-2xl font-bold mt-2`}>{card.amount}</p>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* User Statistics Section */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="mb-8"
        >
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-800">User Statistics</h2>
            <Link to="/admin/user/all" className="text-orange-500 hover:text-orange-600 flex items-center">
              View all users <ChevronRight className="w-4 h-4 ml-1" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {userStatCards.map((card, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`bg-white border-l-4 ${card.borderColor} rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300`}
              >
                <Link to={card.to} className="block p-5">
                  <div className="flex justify-between items-center">
                    <div className="flex flex-col">
                      <h3 className="text-gray-700 font-medium">{card.name}</h3>
                      <p className={`${card.textColor} text-2xl font-bold mt-1`}>{card.amount}</p>
                    </div>
                    <div className={`${card.bgColor} rounded-full p-3`}>
                      {typeof card.icon === 'function' ? (
                        <card.icon className={`w-6 h-6 ${card.textColor}`} />
                      ) : (
                        <card.icon className={`w-6 h-6 ${card.textColor}`} />
                      )}
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Recent Activity Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-8">
          {/* Activity Cards */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="lg:col-span-5"
          >
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-gray-800">Recent Activity</h2>
            </div>
            <div className="space-y-4">
              {activityCards.map((card, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className={`${card.bgColor} border-l-4 ${card.borderColor} rounded-xl shadow-md overflow-hidden`}
                >
                  <Link to={card.to} className="block p-5">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className={`${card.iconBgColor} rounded-full p-3`}>
                          {typeof card.icon === 'function' ? (
                            <card.icon className={`w-6 h-6 ${card.iconColor}`} />
                          ) : (
                            <card.icon className={`w-6 h-6 ${card.iconColor}`} />
                          )}
                        </div>
                        <div>
                          <h3 className="text-gray-700 font-medium">{card.name}</h3>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <span className={`text-xl font-bold ${card.textColor || 'text-orange-500'}`}>
                          {card.amount}
                        </span>
                        <ChevronRight className="w-5 h-5 text-gray-400 ml-2" />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Pending Withdrawals */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7"
          >
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-3">
                    <div className="bg-orange-100 p-3 rounded-full">
                      <Database className="w-6 h-6 text-orange-500" />
                    </div>
                    <h2 className="text-2xl font-bold text-gray-800">Pending Withdrawals</h2>
                  </div>
                  <div className="text-sm text-gray-500 flex items-center">
                    <Clock className="w-4 h-4 mr-1" /> Recently Updated
                  </div>
                </div>

                <div className="bg-gray-50 rounded-xl mb-6 overflow-hidden">
                  {transactions.map((transaction, index) => (
                    <div
                      key={transaction.id || index}
                      className="p-4 border-b border-gray-200 last:border-b-0 hover:bg-orange-50 transition-colors"
                    >
                      <div className="flex justify-between items-center">
                        <div>
                          <h3 className="text-gray-800 font-medium">
                            {transaction.user}
                          </h3>
                          <div className="flex items-center gap-2 mt-1">
                            <span className="text-gray-500 text-sm">
                              {transaction.date}
                            </span>
                            {transaction.status && (
                              <>
                                <span className="inline-block w-2 h-2 rounded-full bg-orange-400"></span>
                                <span className="text-orange-500 text-sm">
                                  {transaction.status}
                                </span>
                              </>
                            )}
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-gray-800 font-bold">
                            {transaction.amount}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <Link to="/admin/pendingwithdrawalrequest">
                  <button className="w-full py-3 rounded-lg bg-orange-500 text-white font-medium flex items-center justify-center gap-2 hover:bg-orange-600 transition-colors">
                    View All Pending Withdrawals
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Analytics Dashboard */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-800">Analytics Dashboard</h2>
          </div>
          <div className="bg-white rounded-xl shadow-md overflow-hidden p-6">
            <SummaryCharts />
          </div>
        </motion.div>

        {/* Admin Settings */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-8"
        >
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-800">Admin Settings</h2>
          </div>
          <div className="bg-white rounded-xl shadow-md overflow-hidden p-6">
            <AdminSetting />
          </div>
        </motion.div>

        {/* Quick Actions Section (New) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-800">Quick Actions</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <Link to="/admin/user/block" className="block">
              <div className="bg-white border-b-4 border-orange-500 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 p-6 text-center">
                <div className="bg-orange-100 rounded-full p-4 inline-flex mb-4">
                  <Shield className="w-8 h-8 text-orange-500" />
                </div>
                <h3 className="text-gray-800 font-bold text-lg">User Management</h3>
                <p className="text-gray-500 mt-2">View and manage user accounts</p>
              </div>
            </Link>
            <Link to="/admin/deposite" className="block">
              <div className="bg-white border-b-4 border-orange-500 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 p-6 text-center">
                <div className="bg-orange-100 rounded-full p-4 inline-flex mb-4">
                  <Wallet className="w-8 h-8 text-orange-500" />
                </div>
                <h3 className="text-gray-800 font-bold text-lg">Deposits</h3>
                <p className="text-gray-500 mt-2">Manage pending and completed deposits</p>
              </div>
            </Link>
            <Link to="/admin/pendingwithdrawalrequest" className="block">
              <div className="bg-white border-b-4 border-orange-500 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 p-6 text-center">
                <div className="bg-orange-100 rounded-full p-4 inline-flex mb-4">
                  <DollarSign className="w-8 h-8 text-orange-500" />
                </div>
                <h3 className="text-gray-800 font-bold text-lg">Withdrawals</h3>
                <p className="text-gray-500 mt-2">Process withdrawal requests</p>
              </div>
            </Link>
            <Link to="/admin/income" className="block">
              <div className="bg-white border-b-4 border-orange-500 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 p-6 text-center">
                <div className="bg-orange-100 rounded-full p-4 inline-flex mb-4">
                  <BarChart3 className="w-8 h-8 text-orange-500" />
                </div>
                <h3 className="text-gray-800 font-bold text-lg">Income Reports</h3>
                <p className="text-gray-500 mt-2">View financial reports and analytics</p>
              </div>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}