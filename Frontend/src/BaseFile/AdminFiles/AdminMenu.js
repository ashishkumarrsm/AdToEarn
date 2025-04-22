
// import { Disclosure, Menu, MenuButton, MenuItems } from "@headlessui/react";
// import { FaUserAlt } from "react-icons/fa";
// import {
//   BellIcon,
//   Bars3Icon,
//   XMarkIcon,
//   ChevronLeftIcon,
//   ChevronDownIcon,
//   Bars3CenterLeftIcon,
//   ClockIcon,
//   CreditCardIcon,
//   DocumentChartBarIcon,
//   HomeIcon,
//   ScaleIcon,
//   UserGroupIcon,
// } from "@heroicons/react/24/outline";
// import { TbReportSearch } from "react-icons/tb";
// import { MdNotificationAdd } from "react-icons/md";
// import { FaNotdef } from "react-icons/fa6";
// import { MdManageAccounts } from "react-icons/md";
// import { MdNotificationsPaused } from "react-icons/md";
// import { MdOutlineSupportAgent } from "react-icons/md";
// import { FaDirections } from "react-icons/fa";
// import { FaSquareWebAwesome } from "react-icons/fa6";
// import { GrAchievement } from "react-icons/gr";
// import { SiNginxproxymanager } from "react-icons/si";
// import { TbListDetails } from "react-icons/tb";
// import { GiLevelEndFlag } from "react-icons/gi";
// import { FaUserCheck } from "react-icons/fa";
// import { FaUserTimes } from "react-icons/fa";
// import { FaUsers } from "react-icons/fa";
// import { FcSupport } from "react-icons/fc";
// import { RiPolaroid2Line } from "react-icons/ri";
// import { SiFirewalla } from "react-icons/si";
// import { PiHandWithdrawFill } from "react-icons/pi";
// import { IoMdNotifications } from "react-icons/io";
// import { FaHandHoldingDollar } from "react-icons/fa6";
// import { MdAccountTree } from "react-icons/md";
// import { PiHandDepositFill } from "react-icons/pi";
// import { RiPolaroid2Fill } from "react-icons/ri";
// import { AiOutlineDashboard } from "react-icons/ai";
// import { IoMdLogOut } from "react-icons/io";
// import { FaUserShield } from "react-icons/fa";
// import { RiUserForbidFill } from "react-icons/ri";
// import { MdRecentActors } from "react-icons/md";
// import { useState, useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { signoutadmin } from "../../redux/authSlice";
// import { useNavigate } from "react-router-dom";
// import { Link } from "react-router-dom";
// import { defaulterNotification, getUser } from "../../redux/userSlice";
// import NotificationPopup from "../../User/NotificationPopup";
// import RewardNotification from "../../User/RewardNotification";
// import { FaRegUser } from "react-icons/fa";
// import { Blocks } from "lucide-react";
// export default function UserMenu({ Children, PageName }) {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(true);
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const [activeTab, setActiveTab] = useState("Dashboard");
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const { admin } = useSelector((state) => state.auth);
//   const [sidebarOpen, setSidebarOpen] = useState(false);
//   const [headerMenu, setHeaderMenu] = useState([]);
//   const [defaulternotification, setDefaulterNotification] = useState(false);
//   const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
//   const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
//   const [currentTab, setCurrentTab] = useState([]);
//   // const [currentSubTab, setCurrentSubTab] = useState("Dashboard");
//   const [currentMenu, setCurrentMenu] = useState("Dashboard");
//   function handleHeaderMenu(submenu, name) {
//     console.log(submenu, name);
//     setHeaderMenu(submenu);
//     setCurrentTab(name);
//   }
//   function handlesignout() {
//     dispatch(signoutadmin());
//     navigate("/admin/login");
//   }
//   function isClose() {
//     setDefaulterNotification(false);
//   }

//  const Settings = [
//   {
//     name: "Create notification",
//     to: "/admin/notification",
//     icon: MdNotificationAdd ,
//     current: false,
//     submenu: [],
//   },
//   {
//     name: "Notification list",
//     to: "/admin/notification/list",
//     icon: MdNotificationsPaused ,
//     current: false,
//     submenu: [] ,
//   },
//   {
//     name: "Support",
//     to: "/admin/support",
//     icon: MdOutlineSupportAgent ,
//     current: false,
//     submenu: [],
//   },
 
//   {
//     name: "Defaulter",
//     to: "/admin/defaulter",
//    icon: FaNotdef,
//     current: false,
//     submenu: [],
//   },
//   {
//     name: "Reports",
//     to: "/admin/reports",
//     icon: TbReportSearch,
//     current: false,
//     submenu: [],
//   },
//  ]

//   const Management = [
//     { name: "Unblocked Users", to: "/admin/user/unblock", icon: FaUserShield, current: true },
//     { name: "Blocked User", to: "/admin/user/block", icon: RiUserForbidFill, current: false },
//     { name: "Active Member", to: "/admin/user/active", icon: FaUserCheck, current: false },
//     { name: "Inactive Member", to: "/admin/user/inactive", icon: FaUserTimes, current: false },
//     { name: "All User", to: "/admin/user/all", icon: FaUsers, current: false },
//   ];

//   const Requests = [
//     // {
//     //   name: "Withdrawal",
//     //   to: "/admin/pendingwithdrawalrequest",
//     //   current: true,
//     // },
//     {
//       name: "Income",
//       to: "/admin/income",
//       icon: FaHandHoldingDollar,
//       current: false,
//       submenu: [],
//     },
//     {
//       id: 2,
//       name: "CTO",
//       to: "/admin/cto",
//       icon: MdRecentActors,
//       current: false,
//       submenu: [],
//     },
//     {
//       name: "ROI Withdrawal",
//       to: "/admin/roipendingwithdrawalrequest",
//       current: false,
//       icon: RiPolaroid2Fill,
//     },
//     { name: "Deposite", to: "/admin/deposite",  icon: PiHandDepositFill, current: false },
//     { name: "TopUp", to: "/admin/topup",  icon: RiPolaroid2Line, current: false },
//   ];
//   const Achivers =[
//     {
//       name: "Rewards",
//       to: "/admin/rewards",
//       icon: FaSquareWebAwesome,
//       current: false,
//       submenu: [],
//     },
//   ]

//   const MainMenu = [
//     {
//       name: "Dashboard",
//       to: "/admin/dashboard",
//       icon: AiOutlineDashboard,
//       current: true,
//       submenu: [],
//     },
//     {
//       name: "Membership Plans",
//       to: "/admin/membership/plan",
//       icon: MdAccountTree,
//       current: false,
//       submenu: [],
//     },
  
    
   
//     {
//       name: "Management",
//       to: "/admin/user/all",
//       icon: SiNginxproxymanager,
//       current: false,
//       submenu: Management,
//     },
//     {
//       name: "Bonus Manager",
//       to: "/admin/bonus-manager",
//       icon: Blocks,
//       current: false,
//       submenu: [],
//     },
   
//     {
//       name: "Achivers",
//       to: "/admin/achivers",
//       icon: GrAchievement,
//       current: false,
//       submenu: Achivers,
//     },
//     {
//       name: "Withdrawal",
//       to: "/admin/pendingwithdrawalrequest",
//       icon: PiHandWithdrawFill ,
//       current: false,
//       submenu: Requests,
//     },
    
   
//     {
//       name: "Settings",
//       to: "/admin/settings",
//       icon: MdManageAccounts,
//       current: false,
//       submenu: Settings,
//     },
//   ];


//   const menus = MainMenu;

//   return (
//     <div className="flex h-screen ">
//       {/* Sidebar */}
//       <aside
//         className={`fixed top-0 left-0 h-full bg-gradient-to-br from-indigo-800 via-indigo-700 to-purple-600  text-white transition-all duration-300 z-50
//           ${
//             isMobileMenuOpen
//               ? "w-64 translate-x-0"
//               : isSidebarOpen
//               ? "w-64"
//               : "md:w-16"
//           }
//           ${
//             isMobileMenuOpen
//               ? "translate-x-0"
//               : "-translate-x-full md:translate-x-0"
//           }`}
//       >
//         <div className="flex items-center justify-between px-4 py-3 ">
//           <Link to="/">
//             <img src="/adtofuture.png" className="w-10" alt="Logo" />
//           </Link>
//           <button
//             onClick={toggleMobileMenu}
//             className="md:hidden text-white p-2"
//           >
//             <XMarkIcon className="w-6 h-6" />
//           </button>
//         </div>

//         {/* Sidebar Toggle Button */}
//         <button
//           onClick={toggleSidebar}
//           className="absolute top-[50px] -right-3.5 p-2 text-white bg-gradient-to-br from-indigo-800 via-indigo-700 to-purple-600 rounded-full transition-all duration-300 hidden md:block"
//         >
//           <ChevronLeftIcon
//             className={`w-4 h-4 transition-transform ${
//               isSidebarOpen ? "rotate-0" : "rotate-180"
//             }`}
//           />
//         </button>

//         {/* Menu Items */}
//         <div className="flex flex-col overflow-y-auto h-full p-2 ">
//           <ul className="flex flex-col space-y-3">
//             {menus?.map((menu, index) => {
//               const isActive = activeTab === menu.name;
//               return (
//                 <Disclosure key={index} as="div" className="">
//                   {({ open }) => (
//                     <>
//                       <Link to={menu.to}>
//                         <Disclosure.Button
//                           className={`flex items-center text-lg rounded-r-full   w-full text-white transition-all duration-300 ${
//                             isSidebarOpen ? "p-3" : "p-3 justify-center"
//                           } ${isActive ? "bg-purple-500" : ""}`}
//                           onClick={() => setActiveTab(menu.name)}
//                         >
//                           {menu?.icon && <menu.icon className="w-6 h-6" />}
//                           {(isSidebarOpen || isMobileMenuOpen) && (
//                             <span className="ml-3">{menu.name}</span>
//                           )}
//                           {(isSidebarOpen || isMobileMenuOpen) &&
//                             menu.submenu.length > 0 && (
//                               <ChevronDownIcon
//                                 className={`w-5 h-5 ml-auto transition-transform ${
//                                   open ? "rotate-180" : "rotate-0"
//                                 }`}
//                               />
//                             )}
//                         </Disclosure.Button>
//                         {open && (isSidebarOpen || isMobileMenuOpen) && (
//                           <Disclosure.Panel className="pl-4">
//                             <ul>
//                               {menu?.submenu.map((submenu, subIndex) => (
//                                 <li
//                                   key={subIndex}
//                                   className={`p-2 rounded cursor-pointer ${
//                                     activeTab === submenu.name
//                                       ? "bg-gradient-to-br from-indigo-800 via-indigo-700 to-purple-600 text-white"
//                                       : ""
//                                   }`}
//                                   onClick={() => setActiveTab(submenu.name)}
//                                 >
//                                   <Link
//                                     to={submenu.to}
//                                     className="w-full  flex items-center"
//                                   >
//                                     {submenu.icon && (
//                                       <submenu.icon className="w-5 h-5 inline-block mr-4" />
//                                     )}
//                                     {submenu.name}
//                                   </Link>
//                                 </li>
//                               ))}
//                             </ul>
//                           </Disclosure.Panel>
//                         )}
//                       </Link>
//                     </>
//                   )}
//                 </Disclosure>
//               );
//             })}
//           </ul>
//         </div>
//       </aside>
//       <div
//         className={`flex flex-col flex-1 transition-all duration-300 overflow-x-hidden overflow-y-auto ${
//           isSidebarOpen || isMobileMenuOpen ? "md:ml-64" : "md:ml-16"
//         }`}
//       >
//         {/* Header */}
//         <header className=" flex justify-between  items-center w-full bg-gradient-to-br from-indigo-800 via-indigo-700 to-purple-600 shadow-md dark:bg-gray-900 dark:border-gray-700">
//         <button
//             onClick={toggleMobileMenu}
//             className="md:hidden text-gray-100 dark:text-gray-400 hover:bg-gradient-to-br from-indigo-800 via-indigo-700 to-purple-600 dark:hover:bg-gray-700 p-2 rounded-md"
//           >
//             <Bars3Icon className="w-6 h-6" />
//           </button>
//           <div className="flex flex-col flex-1 item-center">
//             <nav
//               aria-label="Breadcrumb"
//               className="flex border-b md:justify-between justify-end  px-4 py-2 "
//             >
//               <div className="flex items-center gap-2 sm:text-lg text-base text-gray-100">
              
//                     <Link
//                       to="/"
//                       className="text-gray-100 hover:text-gray-200/85"
//                     >
//                       <HomeIcon
//                         aria-hidden="true"
//                         className="flex-shrink-0 w-6 sm:w-8 h-6 sm:h-8"
//                       />
//                       <span className="sr-only">Home</span>
//                     </Link>
             
//                     <svg
//                   fill="none"
//                   viewBox="0 0 24 44"
//                   preserveAspectRatio="none"
//                   aria-hidden="true"
//                   className="flex-shrink-0 w-6 h-full text-blue-300"
//                 >
//                   <path
//                     d="M4 8L16 22L4 36"
//                     stroke="currentColor"
//                     strokeWidth="3"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                   />
//                   <path
//                     d="M10 8L22 22L10 36"
//                     stroke="currentColor"
//                     strokeWidth="3"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     opacity="0.5"
//                   />
//                 </svg>
//                   Admin
//                   <svg
//                   fill="none"
//                   viewBox="0 0 24 44"
//                   preserveAspectRatio="none"
//                   aria-hidden="true"
//                   className="flex-shrink-0 w-6 h-full text-blue-300"
//                 >
//                   <path
//                     d="M4 8L16 22L4 36"
//                     stroke="currentColor"
//                     strokeWidth="3"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                   />
//                   <path
//                     d="M10 8L22 22L10 36"
//                     stroke="currentColor"
//                     strokeWidth="3"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     opacity="0.5"
//                   />
//                 </svg>
//                    {PageName}
//                 </div>
         
//               <Menu as="div" className="relative inline-block text-left">
//             <Menu.Button className="flex items-center justify-center ml-3 sm:ml-0 p-3 text-sm font-medium rounded-full text-white bg-gradient-to-br from-blue-700 to-indigo-800 hover:from-blue-600 hover:to-indigo-700 shadow-md transition-all duration-200 border border-blue-500/30">
//             <FaUserAlt aria-hidden="true" className="size-4 text-blue-100" />

//                 </Menu.Button>

//                 <Menu.Items className="absolute right-0 z-50 mt-2 min-w-48 max-w-96 break-all origin-top-right rounded-sm bg-black py-1 shadow-lg ring-1 focus:outline-none">
                 

//                   <div className="mt-3 space-y-1 px-2">
//                     <Link to={`/admin/check/profile/${admin?.id}`}>
//                     <button
//                     className={`group flex w-full text-blue-100 items-center px-4 py-2 text-sm font-medium rounded-md transition-all duration-200 ${
//                       currentMenu === "Profile"
//                         ? "bg-purple-800/50 text-white"
//                         : "hover:bg-pruple-800/30 hover:text-white"
//                     }`}
//                   >
//                     <FaRegUser className="mr-2 h-4 w-4" />
//                     Profile
//                   </button>
//                     </Link>
//                     <button
//                    onClick={handlesignout}
//                   className="flex w-full items-center font-medium text-left px-4 py-2 text-sm text-blue-300 hover:bg-pruple-800/30 hover:text-white rounded-md transition-all duration-200"
//                 >
//                   <IoMdLogOut className="mr-2 h-5 w-5 text-blue-300" />
//                   Logout
//                 </button>
//                   </div>
//                 </Menu.Items>
//               </Menu>
//             </nav>
//           </div>
//         </header>
//         <main className="flex-1 bg-orange-50 p-4 text-gray-900">
//           <div className="mx-auto w-full">
//             {/* <h1 className="text-2xl font-semibold mb-4 ">{PageName}</h1> */}
//             {Children}
//           </div>
//         </main>
//       </div>
//     </div>
//   );
// }




import { Disclosure, Menu } from "@headlessui/react";
import { FaUserAlt } from "react-icons/fa";
import {
  BellIcon,
  Bars3Icon,
  XMarkIcon,
  ChevronLeftIcon,
  ChevronDownIcon,
  HomeIcon,
} from "@heroicons/react/24/outline";
import { TbReportSearch } from "react-icons/tb";
import { MdNotificationAdd } from "react-icons/md";
import { FaNotdef } from "react-icons/fa6";
import { MdManageAccounts } from "react-icons/md";
import { MdNotificationsPaused } from "react-icons/md";
import { MdOutlineSupportAgent } from "react-icons/md";
import { FaSquareWebAwesome } from "react-icons/fa6";
import { GrAchievement } from "react-icons/gr";
import { SiNginxproxymanager } from "react-icons/si";
import { GiLevelEndFlag } from "react-icons/gi";
import { FaUserCheck } from "react-icons/fa";
import { FaUserTimes } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import { RiPolaroid2Line } from "react-icons/ri";
import { SiFirewalla } from "react-icons/si";
import { PiHandWithdrawFill } from "react-icons/pi";
import { IoMdNotifications } from "react-icons/io";
import { FaHandHoldingDollar } from "react-icons/fa6";
import { MdAccountTree } from "react-icons/md";
import { PiHandDepositFill } from "react-icons/pi";
import { RiPolaroid2Fill } from "react-icons/ri";
import { AiOutlineDashboard } from "react-icons/ai";
import { IoMdLogOut } from "react-icons/io";
import { FaUserShield } from "react-icons/fa";
import { RiUserForbidFill } from "react-icons/ri";
import { MdRecentActors } from "react-icons/md";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signoutadmin } from "../../redux/authSlice";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { FaRegUser } from "react-icons/fa";
import { Blocks } from "lucide-react";

export default function UserMenu({ Children, PageName }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("Dashboard");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { admin } = useSelector((state) => state.auth);
  const [headerMenu, setHeaderMenu] = useState([]);
  const [defaulternotification, setDefaulterNotification] = useState(false);
  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const [currentTab, setCurrentTab] = useState([]);
  const [currentMenu, setCurrentMenu] = useState("Dashboard");

  function handleHeaderMenu(submenu, name) {
    console.log(submenu, name);
    setHeaderMenu(submenu);
    setCurrentTab(name);
  }
  
  function handlesignout() {
    dispatch(signoutadmin());
    navigate("/admin/login");
  }
  
  function isClose() {
    setDefaulterNotification(false);
  }

 const Settings = [
  {
    name: "Create notification",
    to: "/admin/notification",
    icon: MdNotificationAdd,
    current: false,
    submenu: [],
  },
  {
    name: "Notification list",
    to: "/admin/notification/list",
    icon: MdNotificationsPaused,
    current: false,
    submenu: [],
  },
  {
    name: "Support",
    to: "/admin/support",
    icon: MdOutlineSupportAgent,
    current: false,
    submenu: [],
  },
  {
    name: "Defaulter",
    to: "/admin/defaulter",
    icon: FaNotdef,
    current: false,
    submenu: [],
  },
  {
    name: "Reports",
    to: "/admin/reports",
    icon: TbReportSearch,
    current: false,
    submenu: [],
  },
 ]

  const Management = [
    { name: "Unblocked Users", to: "/admin/user/unblock", icon: FaUserShield, current: true },
    { name: "Blocked User", to: "/admin/user/block", icon: RiUserForbidFill, current: false },
    { name: "Active Member", to: "/admin/user/active", icon: FaUserCheck, current: false },
    { name: "Inactive Member", to: "/admin/user/inactive", icon: FaUserTimes, current: false },
    { name: "All User", to: "/admin/user/all", icon: FaUsers, current: false },
  ];

  const Requests = [
    {
      name: "Income",
      to: "/admin/income",
      icon: FaHandHoldingDollar,
      current: false,
      submenu: [],
    },
    {
      id: 2,
      name: "CTO",
      to: "/admin/cto",
      icon: MdRecentActors,
      current: false,
      submenu: [],
    },
    {
      name: "ROI Withdrawal",
      to: "/admin/roipendingwithdrawalrequest",
      current: false,
      icon: RiPolaroid2Fill,
    },
    { name: "Deposite", to: "/admin/deposite", icon: PiHandDepositFill, current: false },
    { name: "TopUp", to: "/admin/topup", icon: RiPolaroid2Line, current: false },
  ];
  
  const Achivers = [
    {
      name: "Rewards",
      to: "/admin/rewards",
      icon: FaSquareWebAwesome,
      current: false,
      submenu: [],
    },
  ]

  const MainMenu = [
    {
      name: "Dashboard",
      to: "/admin/dashboard",
      icon: AiOutlineDashboard,
      current: true,
      submenu: [],
    },
    {
      name: "Membership Plans",
      to: "/admin/membership/plan",
      icon: MdAccountTree,
      current: false,
      submenu: [],
    },
    {
      name: "Management",
      to: "/admin/user/all",
      icon: SiNginxproxymanager,
      current: false,
      submenu: Management,
    },
    {
      name: "Bonus Manager",
      to: "/admin/bonus-manager",
      icon: Blocks,
      current: false,
      submenu: [],
    },
    {
      name: "Achivers",
      to: "/admin/achivers",
      icon: GrAchievement,
      current: false,
      submenu: Achivers,
    },
    {
      name: "Withdrawal",
      to: "/admin/pendingwithdrawalrequest",
      icon: PiHandWithdrawFill,
      current: false,
      submenu: Requests,
    },
    {
      name: "Settings",
      to: "/admin/settings",
      icon: MdManageAccounts,
      current: false,
      submenu: Settings,
    },
  ];

  const menus = MainMenu;

  // Added stats for dashboard overview section
  const quickStats = [
    { label: "Total Users", value: "5,294", change: "+12%", icon: FaUsers },
    { label: "Revenue", value: "$187,429", change: "+8.2%", icon: FaHandHoldingDollar },
    { label: "Pending Requests", value: "48", change: "-3%", icon: MdNotificationsPaused },
    { label: "Active Plans", value: "732", change: "+5.7%", icon: MdAccountTree },
  ];

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full bg-white text-gray-800 shadow-lg transition-all duration-300 z-50
          ${isMobileMenuOpen ? "w-64 translate-x-0" : isSidebarOpen ? "w-64" : "md:w-20"}
          ${isMobileMenuOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}`}
      >
        <div className="flex items-center justify-between px-4 py-5 border-b border-gray-100">
          <Link to="/" className="flex items-center justify-center">
            {isSidebarOpen ? (
              <div className="flex items-center space-x-2">
                <img src="/adtoEarn.png" className="w-10" alt="Logo" />
                <span className="text-orange-500 font-bold text-xl">AdToEarn</span>
              </div>
            ) : (
              <img src="/adtoEarn.png" className="w-10" alt="Logo" />
            )}
          </Link>
          <button onClick={toggleMobileMenu} className="md:hidden text-gray-500 p-2">
            <XMarkIcon className="w-6 h-6" />
          </button>
        </div>

        {/* Sidebar Toggle Button */}
        <button
          onClick={toggleSidebar}
          className="absolute top-[50px] -right-3 p-1.5 text-white bg-orange-500 rounded-full shadow-md transition-all duration-300 hidden md:block"
        >
          <ChevronLeftIcon
            className={`w-4 h-4 transition-transform ${
              isSidebarOpen ? "rotate-0" : "rotate-180"
            }`}
          />
        </button>

        {/* Menu Items */}
        <div className="flex flex-col overflow-y-auto h-[calc(100%-80px)] py-4">
          <ul className="flex flex-col space-y-1 px-3">
            {menus?.map((menu, index) => {
              const isActive = activeTab === menu.name;
              return (
                <Disclosure key={index} as="div" className="mb-1">
                  {({ open }) => (
                    <>
                      <Link to={menu.to}>
                        <Disclosure.Button
                          className={`flex items-center text-base rounded-lg w-full transition-all duration-200 
                            ${isSidebarOpen ? "px-4 py-3" : "p-3 justify-center"} 
                            ${isActive 
                              ? "bg-orange-50 text-orange-500 font-medium" 
                              : "text-gray-600 hover:bg-orange-50 hover:text-orange-500"}`}
                          onClick={() => setActiveTab(menu.name)}
                        >
                          {menu?.icon && (
                            <menu.icon className={`w-5 h-5 ${isActive ? "text-orange-500" : "text-gray-500"}`} />
                          )}
                          
                          {(isSidebarOpen || isMobileMenuOpen) && (
                            <span className="ml-3 font-medium">{menu.name}</span>
                          )}
                          
                          {(isSidebarOpen || isMobileMenuOpen) && menu.submenu.length > 0 && (
                            <ChevronDownIcon
                              className={`w-5 h-5 ml-auto transition-transform ${
                                open ? "rotate-180" : "rotate-0"
                              }`}
                            />
                          )}
                        </Disclosure.Button>
                        
                        {open && (isSidebarOpen || isMobileMenuOpen) && (
                          <Disclosure.Panel className="pl-4 mt-1">
                            <ul className="border-l-2 border-orange-200 ml-2">
                              {menu?.submenu.map((submenu, subIndex) => (
                                <li
                                  key={subIndex}
                                  className={`py-2 px-4 my-1 rounded-r-lg cursor-pointer transition-all duration-200
                                    ${activeTab === submenu.name
                                      ? "bg-orange-100 text-orange-500 border-l-2 border-orange-500 -ml-[2px]"
                                      : "text-gray-600 hover:bg-orange-50 hover:text-orange-500"
                                    }`}
                                  onClick={() => setActiveTab(submenu.name)}
                                >
                                  <Link to={submenu.to} className="w-full flex items-center">
                                    {submenu.icon && (
                                      <submenu.icon className={`w-4 h-4 inline-block mr-3 ${activeTab === submenu.name ? "text-orange-500" : "text-gray-500"}`} />
                                    )}
                                    <span className="text-sm">{submenu.name}</span>
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </Disclosure.Panel>
                        )}
                      </Link>
                    </>
                  )}
                </Disclosure>
              );
            })}
          </ul>
          
          {/* Bottom Actions */}
          {isSidebarOpen && (
            <div className="mt-auto px-4 py-4 border-t border-gray-100">
              <button 
                onClick={handlesignout}
                className="flex items-center justify-center w-full px-4 py-2 text-sm text-red-500 hover:bg-red-50 rounded-lg transition-all duration-200"
              >
                <IoMdLogOut className="w-5 h-5 mr-3" />
                <span>Logout</span>
              </button>
            </div>
          )}
        </div>
      </aside>
      
      <div
        className={`flex flex-col flex-1 transition-all duration-300 overflow-x-hidden ${
          isSidebarOpen || isMobileMenuOpen ? "md:ml-64" : "md:ml-20"
        }`}
      >
        {/* Header */}
        <header className="bg-white border-b border-gray-100 shadow-sm sticky top-0 z-10">
          <div className="flex items-center justify-between px-4 py-3">
            <div className="flex items-center">
              <button
                onClick={toggleMobileMenu}
                className="md:hidden text-gray-600 hover:text-orange-500 p-2 rounded-md"
              >
                <Bars3Icon className="w-6 h-6" />
              </button>
              
              <nav aria-label="Breadcrumb" className="flex items-center ml-2">
                <div className="flex items-center gap-2 text-sm font-medium">
                  <Link to="/" className="text-gray-500 hover:text-orange-500">
                    <HomeIcon className="w-5 h-5" />
                    <span className="sr-only">Home</span>
                  </Link>
                  
                  <svg
                    fill="none"
                    viewBox="0 0 24 24"
                    className="w-4 h-4 text-gray-400"
                  >
                    <path
                      d="M9 5l7 7-7 7"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  
                  <span className="text-gray-500">Admin</span>
                  
                  <svg
                    fill="none"
                    viewBox="0 0 24 24"
                    className="w-4 h-4 text-gray-400"
                  >
                    <path
                      d="M9 5l7 7-7 7"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  
                  <span className="text-orange-500 font-medium">{PageName}</span>
                </div>
              </nav>
            </div>
            
            <div className="flex items-center space-x-3">
              {/* Notifications */}
              <button className="relative p-2 text-gray-600 hover:text-orange-500 rounded-full hover:bg-orange-50 transition-all duration-200">
                <BellIcon className="w-6 h-6" />
                <span className="absolute top-0 right-0 inline-flex items-center justify-center w-4 h-4 text-xs font-bold text-white bg-orange-500 rounded-full">3</span>
              </button>
              
              {/* User Menu */}
              <Menu as="div" className="relative inline-block text-left">
                <Menu.Button className="flex items-center space-x-2 p-2 text-gray-600 hover:text-orange-500 rounded-full hover:bg-orange-50 transition-all duration-200">
                  <div className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center text-orange-500">
                    <FaUserAlt className="w-4 h-4" />
                  </div>
                  {isSidebarOpen && (
                    <span className="text-sm font-medium hidden sm:block">{admin?.name || "Admin"}</span>
                  )}
                </Menu.Button>

                <Menu.Items className="absolute right-0 z-50 mt-2 w-56 origin-top-right rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <div className="py-2 px-3 border-b border-gray-100">
                    <p className="text-sm font-medium text-gray-700">{admin?.name || "Admin User"}</p>
                    <p className="text-xs text-gray-500">{admin?.email || "admin@example.com"}</p>
                  </div>
                  
                  <div className="py-1">
                    <Link to={`/admin/check/profile/${admin?.id}`}>
                      <button className="flex w-full items-center px-4 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-500">
                        <FaRegUser className="mr-2 h-4 w-4" />
                        Profile
                      </button>
                    </Link>
                    
                    <button
                      onClick={handlesignout}
                      className="flex w-full items-center px-4 py-2 text-sm text-red-600 hover:bg-red-50"
                    >
                      <IoMdLogOut className="mr-2 h-4 w-4" />
                      Logout
                    </button>
                  </div>
                </Menu.Items>
              </Menu>
            </div>
          </div>
        </header>
        
        {/* Dashboard Stats Overview (Only show on Dashboard page) */}
        {PageName === "Dashboard" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4 bg-white border-b border-gray-100">
            {quickStats.map((stat, index) => (
              <div key={index} className="bg-white p-4 rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-all duration-200">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-500">{stat.label}</p>
                    <h3 className="text-xl font-bold text-gray-800 mt-1">{stat.value}</h3>
                    <span className={`text-xs font-medium ${stat.change.includes('+') ? 'text-green-500' : 'text-red-500'}`}>
                      {stat.change} from last month
                    </span>
                  </div>
                  <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center">
                    <stat.icon className="w-6 h-6 text-orange-500" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
        
        {/* Main Content */}
        <main className="flex-1 p-4 overflow-y-auto">
          <div className="mx-auto w-full">
            {/* Add a page title with styling */}
            <div className="mb-6">
              <h1 className="text-2xl font-bold text-gray-800">
                <span className="border-b-2 border-orange-500 pb-1">{PageName}</span>
              </h1>
            </div>
            
            {/* Content container with subtle styling */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
              {Children}
            </div>
          </div>
        </main>
        
        {/* Footer */}
        <footer className="bg-white border-t border-gray-100 py-4 px-6 text-center text-sm text-gray-500">
          <p>© {new Date().getFullYear()} AdToEarn. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
}