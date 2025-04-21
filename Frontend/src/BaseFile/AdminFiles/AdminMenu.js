// import { Children, useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import { signoutadmin } from "../../redux/authSlice";
// import { useNavigate } from "react-router-dom";
// import {
//   Dialog,
//   DialogBackdrop,
//   DialogPanel,
//   Disclosure,
//   DisclosureButton,
//   DisclosurePanel,
//   TransitionChild,
//   Menu,
// } from "@headlessui/react";
// import {
//   Bars3Icon,
//   BellIcon,
//   CalendarIcon,
//   DocumentDuplicateIcon,
//   FolderIcon,
//   HomeIcon,
//   XMarkIcon,
// } from "@heroicons/react/24/outline";

// const Management = [
//   { name: "Unblocked Users", to: "/admin/user/unblock", current: true },
//   { name: "Blocked User", to: "/admin/user/block", current: false },
//   { name: "Active Member", to: "/admin/user/active", current: false },
//   { name: "Inactive Member", to: "/admin/user/inactive", current: false },
//   { name: "All User", to: "/admin/user/all", current: false },
// ];
// const Requests = [
//   {
//     name: "Withdrawal",
//     to: "/admin/pendingwithdrawalrequest",
//     current: true,
//   },

//   {
//     name: "ROI Withdrawal",
//     to: "/admin/roipendingwithdrawalrequest",
//     current: false,
//   },
//   { name: "Deposite", to: "/admin/deposite", current: false },
//   { name: "TopUp", to: "/admin/topup", current: false },
// ];

// const MainMenu = [
//   {
//     name: "Dashboard",
//     to: "/admin/dashboard",
//     icon: HomeIcon,
//     current: true,
//     submenu: [],
//   },
//   {
//     name: "Membership Plans",
//     to: "/admin/membership/plan",
//     icon: FolderIcon,
//     current: false,
//     submenu: [],
//   },
//   {
//     name: "Reports",
//     to: "/admin/reports",
//    icon: IoMdNotifications,
//     current: false,
//     submenu: [],
//   },
//   {
//     name: "Defaulter",
//     to: "/admin/defaulter",
//     icon: CalendarIcon,
//     current: false,
//     submenu: [],
//   },
//   {
//     name: "Support",
//     to: "/admin/support",
//     icon: DocumentDuplicateIcon,
//     current: false,
//     submenu: [],
//   },
// ];

// const User_Interface = [
//   {
//     id: 1,
//     name: "Management",
//     to: "/admin/user/all",
//     initial: "M",
//     current: false,
//     submenu: Management,
//   },
//   {
//     id: 2,
//     name: "Rewards",
//     to: "/admin/rewards",
//     initial: "R",
//     current: false,
//     submenu: [],
//   },
//   // {
//   //   id: 2,
//   //   name: "CTO",
//   //   to: "/admin/cto",
//   //   initial: "R",
//   //   current: false,
//   //   submenu: [],
//   // },
//   {
//     id: 2,
//     name: "Achivers",
//     to: "/admin/achivers",
//     initial: "A",
//     current: false,
//     submenu: [],
//   },
//   {
//     id: 3,
//     name: "Transactions",
//     to: "/admin/pendingwithdrawalrequest",
//     initial: "T",
//     current: false,
//     submenu: Requests,
//   },
//   {
//     id: 3,
//     name: "Income",
//     to: "/admin/income",
//     initial: "I",
//     current: false,
//     submenu: [],
//   },
// ];
// const Settings = [
//   {
//     id: 2,
//     name: "General",
//     to: "/admin/settings",
//     initial: "G",
//     current: false,
//     submenu: [],
//   },
//   {
//     id: 3,
//     name: "create notification",
//     to: "/admin/notification",
//     initial: "C",
//     current: false,
//     submenu: [],
//   },
//   {
//     id: 4,
//     name: "notification list",
//     to: "/admin/notification/list",
//     initial: "N",
//     current: false,
//     submenu: [],
//   },
// ];

// function classNames(...classes) {
//   return classes.filter(Boolean).join(" ");
// }

// export default function AdminMenu({ Children, PageName }) {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const { admin } = useSelector((state) => state.auth);
//   const [sidebarOpen, setSidebarOpen] = useState(false);
//   const [headerMenu, setHeaderMenu] = useState([]);
//   const [currentTab, setCurrentTab] = useState([]);
//   const [currentSubTab, setCurrentSubTab] = useState("Dashboard");

//   function handleHeaderMenu(submenu, name) {
//     console.log(submenu, name);
//     setHeaderMenu(submenu);
//     setCurrentTab(name);
//   }
//   function handlesignout() {
//     dispatch(signoutadmin());
//     navigate("/admin/login");
//   }

//   const menus = MainMenu

//   return (
//     <>
//       <div>
//         <div className="">
//           <Dialog
//             open={sidebarOpen}
//             onClose={setSidebarOpen}
//             className="relative z-50 lg:hidden"
//           >
//             <DialogBackdrop
//               transition
//               className="fixed inset-0 bg-gray-900/50  transition-opacity duration-300 ease-linear data-[closed]:opacity-0"
//             />

//             <div className="fixed inset-0 flex">
//               <DialogPanel
//                 transition
//                 className="relative mr-16 flex w-full max-w-xs flex-1 transform transition duration-300 ease-in-out data-[closed]:-translate-x-full"
//               >
//                 <TransitionChild>
//                   <div className="absolute left-full top-0 flex w-16 justify-center pt-5 duration-300 ease-in-out data-[closed]:opacity-0">
//                     <button
//                       type="button"
//                       onClick={() => setSidebarOpen(false)}
//                       className="-m-2.5 p-2.5"
//                     >
//                       <span className="sr-only">Close sidebar</span>
//                       <XMarkIcon
//                         aria-hidden="true"
//                         className="w-6 h-6 text-white"
//                       />
//                     </button>
//                   </div>
//                 </TransitionChild>
//                 {/* Sidebar component, swap this element with another sidebar if you like */}
//                 <div className="flex no-scrollbar overflow-auto grow flex-col gap-y-5 overflow-y-auto bg-black px-6 pb-4 ring-1 ring-white/10 border-r border-gray-800">
//                   <div className="flex items-center shrink-0 border-b  px-4">
//                     <Link to="/">
//                       <div className="flex items-center justify-center w-20 h-20 rounded-full">
//                         <img
//                           alt="teirrax Logo"
//                           src="/teirrax.png"
//                           className="w-auto h-16 rounded-full"
//                         />
//                       </div>
//                     </Link>
//                   </div>
//                   <nav className="flex flex-col flex-1">
//                     <ul
//                       role="list"
//                       className="flex flex-col flex-1 px-6 gap-y-7"
//                     >
//                       <li>
//                         <ul role="list" className="-mx-2 space-y-1">
//                           {menus.map((item) => (
//                             <li key={item.name}>
//                               <Link
//                                 to={
//                                   item?.name == "Refferals"
//                                     ? `/admin/refferaltable/${item?.refferal_code}`
//                                     : item?.to
//                                 }
//                                 onClick={() =>
//                                   handleHeaderMenu(item.submenu, item.name)
//                                 }
//                                 className={classNames(
//                                   item?.name == currentTab
//                                     ? "shadow-lg border-white/50 text-gray-100 border bg-gray-900/50 hover:bg-gray-900/50 hover:text-[#ffeded]"
//                                     : "text-gray-100  ",
//                                   "group flex items-center rounded-r-full px-2 py-2 text-sm font-medium leading-6 "
//                                 )}
//                               >
//                                 <item.icon
//                                   aria-hidden="true"
//                                   className="w-6 h-6 mr-3 shrink-0"
//                                 />
//                                 {item?.name}
//                               </Link>
//                             </li>
//                           ))}
//                         </ul>
//                       </li>
//                       <li>
//                         <div className="text-xs font-semibold leading-6 text-gray-300">
//                           User Interface
//                         </div>
//                         <ul role="list" className="mt-2 -mx-2 space-y-1">
//                           {User_Interface.map((team) => (
//                             <li key={team.name}>
//                               <Link
//                                 onClick={() =>
//                                   handleHeaderMenu(team.submenu, team.name)
//                                 }
//                                 to={team.to}
//                                 className={classNames(
//                                   team.name == currentTab
//                                     ? "shadow-lg border-white/50 text-gray-100 border bg-gray-900/50 hover:bg-gray-900/50 hover:text-[#ffeded]"
//                                     : "text-gray-100  ",
//                                   "group flex items-center rounded-r-full px-2 py-2 text-sm font-medium leading-6 "
//                                 )}
//                               >
//                                 <span className="flex h-6 w-6 shrink-0 mr-3 items-center justify-center rounded-lg border border-gray-700 bg-gray-800 text-[0.625rem] font-medium text-gray-400 group-hover:text-white">
//                                   {team.initial}
//                                 </span>
//                                 <span className="truncate">{team.name}</span>
//                               </Link>
//                             </li>
//                           ))}
//                         </ul>
//                       </li>
//                       <li>
//                         <div className="text-xs font-semibold leading-6 text-gray-300">
//                           Settings
//                         </div>
//                         <ul role="list" className="mt-2 -mx-2 space-y-1">
//                           {Settings.map((team) => (
//                             <li key={team.name}>
//                               <Link
//                                 onClick={() =>
//                                   handleHeaderMenu(team.submenu, team.name)
//                                 }
//                                 to={team.to}
//                                 className={classNames(
//                                   team.name == currentTab
//                                     ? "shadow-lg border-white/50 text-gray-100 border bg-gray-900/50 hover:bg-gray-900/50 hover:text-[#ffeded]"
//                                     : "text-gray-100  ",
//                                   "group flex items-center rounded-r-full px-2 py-2 text-sm font-medium leading-6 "
//                                 )}
//                               >
//                                 <span className="flex h-6 w-6 mr-3 shrink-0 items-center justify-center rounded-lg border border-gray-700 bg-gray-800 text-[0.625rem] font-medium text-gray-400 group-hover:text-white">
//                                   {team.initial}
//                                 </span>
//                                 <span className="truncate">{team.name}</span>
//                               </Link>
//                             </li>
//                           ))}
//                           <li>
//                             <Link
//                               to={`/admin/check/profile/${admin?.id}`}
//                               className={classNames(
//                                 "text-gray-400 hover:bg-gray-800 hover:text-white",
//                                 "group flex gap-x-3 rounded-md p-2 text-lg font-semibold leading-6"
//                               )}
//                             >
//                               <span className="flex h-6 w-6 shrink-0  items-center justify-center rounded-lg border border-gray-700 bg-gray-800 text-[0.625rem] font-medium text-gray-400 group-hover:text-white">
//                                 P
//                               </span>
//                               <span className="truncate text-sm">Profile</span>
//                             </Link>
//                           </li>
//                           <li>
//                             <button
//                               onClick={handlesignout}
//                               className={classNames(
//                                 "text-gray-200 hover:bg-gray-800 hover:text-white",
//                                 "group flex gap-x-3 rounded-md p-2 text-lg font-semibold leading-6"
//                               )}
//                             >
//                               <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border border-gray-700 bg-gray-800 text-[0.625rem] font-medium text-gray-400 group-hover:text-white">
//                                 L
//                               </span>
//                               <span className="truncate text-white text-sm">
//                                 Logout
//                               </span>
//                             </button>
//                           </li>
//                         </ul>
//                       </li>
//                     </ul>
//                   </nav>
//                 </div>
//               </DialogPanel>
//             </div>
//           </Dialog>

//           <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col ">
//             <div className="flex flex-col pb-10 overflow-auto overflow-y-auto no-scrollbar grow gap-y-2 bg-black">
//               <div className="flex items-center px-4 border-b shrink-0">
//                 <Link to="/" className="">
//                   <div className="flex items-center justify-center w-20 h-20 rounded-full ">
//                     <img
//                       alt="teirrax"
//                       src="/teirrax.png"
//                       className="w-auto h-16 rounded-full"
//                     />
//                   </div>
//                 </Link>
//               </div>
//               <nav className="flex-shrink-0 h-full px-4 mt-2 overflow-y-auto divide-y divide-gray-300">
//                 <ul role="list" className="px-2 space-y-1">
//                   <li>
//                     <ul role="list" className="space-y-1 ">
//                       {menus.map((item) => (
//                         <li key={item?.name}>
//                           <Link
//                             to={
//                               item?.name === "Refferals"
//                                 ? `/admin/refferaltable/${admin?.refferal_code}`
//                                 : item.to
//                             }
//                             onClick={() =>
//                               handleHeaderMenu(item.submenu, item.name)
//                             }
//                             className={classNames(
//                               item.name == currentTab
//                                 ? "shadow-lg border-white/50 text-gray-100 border bg-gray-900/50 hover:bg-gray-900/50 hover:text-[#ffeded]"
//                                 : "text-gray-100  ",
//                               "group flex items-center rounded-r-full px-2 py-2 text-sm font-medium leading-6 "
//                             )}
//                           >
//                             <item.icon
//                               aria-hidden="true"
//                               className="flex-shrink-0 w-6 h-6 mr-3"
//                             />
//                             {item.name}
//                           </Link>
//                         </li>
//                       ))}
//                     </ul>
//                   </li>
//                   <li>
//                     <div className="text-xs font-semibold leading-6 text-gray-100">
//                       User Interface
//                     </div>
//                     <ul role="list" className="mt-2 -mx-2 space-y-1">
//                       {User_Interface.map((team) => (
//                         <li key={team.name}>
//                           <Link
//                             onClick={() =>
//                               handleHeaderMenu(team.submenu, team.name)
//                             }
//                             to={team.to}
//                             className={classNames(
//                               team.name == currentTab
//                                 ? "shadow-lg border-white/50 text-gray-100 border bg-gray-900/50 hover:bg-gray-900/50 hover:text-[#ffeded]"
//                                 : "text-gray-100  ",
//                               "group flex items-center rounded-r-full px-2 py-2 text-sm font-medium leading-6 "
//                             )}
//                           >
//                             <span className="mr-3 flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border border-gray-700 bg-gray-800 text-[0.625rem] font-medium text-gray-400 group-hover:text-white">
//                               {team.initial}
//                             </span>
//                             <span className="truncate">{team.name}</span>
//                           </Link>
//                         </li>
//                       ))}
//                     </ul>
//                   </li>
//                   <li>
//                     <div className="text-xs font-semibold leading-6 text-gray-100">
//                       Settings
//                     </div>
//                     <ul role="list" className="mt-2 -mx-2 space-y-1">
//                       {Settings.map((team) => (
//                         <li key={team.name}>
//                           <Link
//                             onClick={() =>
//                               handleHeaderMenu(team.submenu, team.name)
//                             }
//                             to={team.to}
//                             className={classNames(
//                               team.name == currentTab
//                                 ? "shadow-lg border-white/50 text-gray-100 border bg-gray-900/50 hover:bg-gray-900/50 hover:text-[#ffeded]"
//                                 : "text-gray-100  ",
//                               "group flex items-center rounded-r-full px-2 py-2 text-sm font-medium leading-6 "
//                             )}
//                           >
//                             <span className="mr-3 flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border border-gray-200 bg-gray-800 text-[0.625rem] font-medium text-gray-200 group-hover:text-white">
//                               {team.initial}
//                             </span>
//                             <span className="truncate">{team.name}</span>
//                           </Link>
//                         </li>
//                       ))}
//                       {/* <li>
//                         <Link
//                           to={`/admin/check/profile/${admin?.id}`}
//                           className={classNames(
//                             "text-gray-100  ",
//                             "group flex gap-x-3 rounded-md p-2 text-lg font-semibold leading-6"
//                           )}
//                         >
//                           <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border border-gray-300 bg-gray-800 text-[0.625rem] font-medium text-gray-200 group-hover:text-white">
//                             P
//                           </span>
//                           <span className="text-gray-200 text-sm truncate">
//                             Profile
//                           </span>
//                         </Link>
//                       </li>
//                       <li>
//                         <button
//                           onClick={handlesignout}
//                           className={classNames(
//                             "text-gray-100  ",
//                             "group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6"
//                           )}
//                         >
//                           <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border border-gray-300 bg-gray-800 text-[0.625rem] font-medium text-gray-200 group-hover:text-white">
//                             L
//                           </span>
//                           <span className="truncate text-white text-sm">
//                             Logout
//                           </span>
//                         </button>
//                       </li> */}
//                     </ul>
//                   </li>
//                 </ul>
//               </nav>
//             </div>
//           </div>
//         </div>

//         {/* <div className="lg:pl-72 ">
//           <div className="min-h-full">
//             <div className="z-40 w-full lg:fixed">
//               <Disclosure as="nav" className="bg-[#569182] text-gray-100">
//                 <div className="max-w-full px-4">
//                   <div className="flex items-center justify-between h-16">
//                     <div className="lg:hidden">
//                       <button
//                         type="button"
//                         onClick={() => setSidebarOpen(true)}
//                         className="p-2.5 text-gray-200 hover:text-white"
//                       >
//                         <span className="sr-only">Open sidebar</span>
//                         <Bars3Icon className="w-7 h-7" aria-hidden="true" />
//                       </button>
//                     </div>
//                     <Menu as="div" className="relative z-50">
//                       <Menu.Button className="flex items-center gap-x-2 rounded-md p-2 text-lg font-semibold text-gray-100 bg-gray-800 hover:bg-gray-700">
//                         <span className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-300 bg-gray-800 text-sm font-medium text-gray-200">
//                           P
//                         </span>
//                         <span className="text-sm text-gray-200">Profile</span>
//                       </Menu.Button>

//                       <Menu.Items className="absolute right-0 top-full mt-2 min-w-[150px] rounded-md bg-gray-900 shadow-lg ring-1 ring-white ring-opacity-5 focus:outline-none">
//                         <div className="p-1">
//                           <Menu.Item>
//                             {({ active }) => (
//                               <Link
//                                 to={`/admin/check/profile/${admin?.id}`}
//                                 className={`group flex items-center w-full gap-x-3 rounded-md p-2 text-sm font-semibold text-gray-200 ${
//                                   active ? "bg-gray-700 text-white" : ""
//                                 }`}
//                               >
//                                 Profile
//                               </Link>
//                             )}
//                           </Menu.Item>
//                           <Menu.Item>
//                             {({ active }) => (
//                               <button
//                                 onClick={handlesignout}
//                                 className={`group flex items-center w-full gap-x-3 rounded-md p-2 text-sm font-semibold text-gray-200 ${
//                                   active ? "bg-gray-700 text-white" : ""
//                                 }`}
//                               >
//                                 Logout
//                               </button>
//                             )}
//                           </Menu.Item>
//                         </div>
//                       </Menu.Items>
//                     </Menu>
//                   </div>
//                 </div>
//               </Disclosure>

//               <header className="text-gray-100  bg-[#5e3dc9]">
//                 <div className="px-4 py-0 border-t-2 border-b-2 border-green-300 max-w-7xl sm:px-6 lg:px-8">
//                   <nav aria-label="Breadcrumb" className="flex text-base ">
//                     <div className="flex items-center gap-2">
//                       <svg
//                         fill="currentColor"
//                         viewBox="0 0 24 44"
//                         preserveAspectRatio="none"
//                         aria-hidden="true"
//                         className="flex-shrink-0 w-6 h-full text-green-200"
//                       >
//                         <path d="M.293 0l22 22-22 22h1.414l22-22-22-22H.293z" />
//                       </svg>
//                       Admin / {PageName}
//                     </div>

//                   </nav>
//                 </div>
//               </header>
//             </div>
//             <main className="lg:pt-28 -z-10 bg-blue-900/50">
//               <div className="flex items-center w-full ">
//                 <div className="pl-6 sm:block">
//                   <div className="">
//                     <nav aria-label="Tabs" className="flex w-full gap-x-5">
//                       {headerMenu.map((tab) => (
//                         <Link
//                           key={tab.name}
//                           to={tab.to}
//                           onClick={() => setCurrentSubTab(tab.name)}
//                           aria-current={tab.current ? "page" : undefined}
//                           className={classNames(
//                             tab.name == currentSubTab
//                               ? "border-indigo-200 text-indigo-300"
//                               : "border-transparent text-gray-300 hover:border-gray-300 hover:text-gray-700",
//                             " border-b-2 px-1 py-4 text-center gap-3 lg:text-lg text-[10px]"
//                           )}
//                         >
//                           {tab.name}
//                         </Link>
//                       ))}
//                     </nav>
//                   </div>
//                 </div>
//               </div>
//               <div
//                 className="relative min-h-screen flex flex-col gap-5 overflow-y-auto"
//                 style={{
//                   backgroundImage:
//                     "url('https://img.freepik.com/free-photo/3d-rendering-financial-neon-bull_23-2151691899.jpg?ga=GA1.1.1673403856.1719407260&semt=ais_authors_boost')",
//                   backgroundSize: "cover",
//                   backgroundPosition: "center",
//                 }}
//               >
//                 <div className="relative z-10">{Children}</div>
//               </div>
//             </main>
//           </div>
//         </div> */}
//             <div className="lg:pl-72">
//       <div className="min-h-full">
//         {/* Navbar Section */}
//         <div className="z-40 w-full lg:fixed">
//         <Disclosure as="nav" className="bg-[#569182] text-gray-100">
//   <div className="max-w-full">
//     <div className="flex items-center justify-between lg:justify-end  h-16">
//       {/* Sidebar Toggle Button */}
//       <div className="lg:hidden">
//         <button
//           type="button"
//           onClick={() => setSidebarOpen(true)}
//           className="p-2.5 text-gray-200 hover:text-white"
//         >
//           <span className="sr-only">Open sidebar</span>
//           <Bars3Icon className="w-7 h-7" aria-hidden="true" />
//         </button>
//       </div>

//       {/* Profile Dropdown */}
//       <Menu as="div" className="relative z-50">
//         <Menu.Button className="flex items-center gap-x-2 p-2 rounded-md text-lg font-semibold text-gray-100 bg-gray-800 hover:bg-gray-700">
//           <span className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-300 bg-gray-800 text-sm font-medium text-gray-200">
//             P
//           </span>
//           <span className="text-sm text-gray-200">Profile</span>
//         </Menu.Button>

//         <Menu.Items className="absolute right-0 top-full mt-2 min-w-[150px] rounded-md bg-gray-900 shadow-lg ring-1 ring-white ring-opacity-5 focus:outline-none">
//           <div className="p-1">
//             <Menu.Item>
//               {({ active }) => (
//                 <Link
//                   to={`/admin/check/profile/${admin?.id}`}
//                   className={`group flex items-center w-full gap-x-3 p-2 text-sm font-semibold rounded-md text-gray-200 ${
//                     active ? "bg-gray-700 text-white" : ""
//                   }`}
//                 >
//                   Profile
//                 </Link>
//               )}
//             </Menu.Item>
//             <Menu.Item>
//               {({ active }) => (
//                 <button
//                   onClick={handlesignout}
//                   className={`group flex items-center w-full gap-x-3 p-2 text-sm font-semibold rounded-md text-gray-200 ${
//                     active ? "bg-gray-700 text-white" : ""
//                   }`}
//                 >
//                   Logout
//                 </button>
//               )}
//             </Menu.Item>
//           </div>
//         </Menu.Items>
//       </Menu>
//     </div>
//   </div>
// </Disclosure>

//           {/* Breadcrumb Header */}
//           <header className="text-gray-100 bg-[#5e3dc9] border-t-2 border-b-2 border-green-300">
//             <div className="px-4 py-0 max-w-7xl sm:px-6 lg:px-8">
//               <nav aria-label="Breadcrumb" className="flex text-base">
//                 <div className="flex items-center gap-2">
//                   <svg
//                     fill="currentColor"
//                     viewBox="0 0 24 44"
//                     preserveAspectRatio="none"
//                     aria-hidden="true"
//                     className="flex-shrink-0 w-6 h-full text-green-200"
//                   >
//                     <path d="M.293 0l22 22-22 22h1.414l22-22-22-22H.293z" />
//                   </svg>
//                   Admin
//                   <svg
//                     fill="currentColor"
//                     viewBox="0 0 24 44"
//                     preserveAspectRatio="none"
//                     aria-hidden="true"
//                     className="flex-shrink-0 w-6 h-full text-green-200"
//                   >
//                     <path d="M.293 0l22 22-22 22h1.414l22-22-22-22H.293z" />
//                   </svg>
//                    {PageName}
//                 </div>
//               </nav>
//             </div>
//           </header>
//         </div>
//         {/* Main Content Section */}
//         <main className="lg:pt-28 bg-blue-900/50">
//           <div className="flex items-center w-full">
//             <div className="pl-6 sm:block">
//               <nav aria-label="Tabs" className="flex w-full gap-x-5">
//                 {headerMenu.map((tab) => (
//                   <Link
//                     key={tab.name}
//                     to={tab.to}
//                     onClick={() => setCurrentSubTab(tab.name)}
//                     aria-current={tab.current ? "page" : undefined}
//                     className={`border-b-2 px-1 py-4 text-center gap-3 lg:text-lg text-[10px] ${
//                       tab.name === currentSubTab
//                         ? "border-indigo-200 text-indigo-300"
//                         : "border-transparent text-gray-300 hover:border-gray-300 hover:text-gray-700"
//                     }`}
//                   >
//                     {tab.name}
//                   </Link>
//                 ))}
//               </nav>
//             </div>
//           </div>
//           {/* Content Area */}
//           <div
//             className="relative min-h-screen flex flex-col gap-5 overflow-y-auto bg-cover bg-center"
//             style={{
//               backgroundImage:
//                 "url('https://img.freepik.com/free-photo/3d-rendering-financial-neon-bull_23-2151691899.jpg?ga=GA1.1.1673403856.1719407260&semt=ais_authors_boost')",
//             }}
//           >
//             <div className="relative z-10">{Children}</div>
//           </div>
//         </main>
//       </div>
//     </div>
//       </div>
//     </>
//   );
// }

import { Disclosure, Menu, MenuButton, MenuItems } from "@headlessui/react";
import { FaUserAlt } from "react-icons/fa";
import {
  BellIcon,
  Bars3Icon,
  XMarkIcon,
  ChevronLeftIcon,
  ChevronDownIcon,
  Bars3CenterLeftIcon,
  ClockIcon,
  CreditCardIcon,
  DocumentChartBarIcon,
  HomeIcon,
  ScaleIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";
import { TbReportSearch } from "react-icons/tb";
import { MdNotificationAdd } from "react-icons/md";
import { FaNotdef } from "react-icons/fa6";
import { MdManageAccounts } from "react-icons/md";
import { MdNotificationsPaused } from "react-icons/md";
import { MdOutlineSupportAgent } from "react-icons/md";
import { FaDirections } from "react-icons/fa";
import { FaSquareWebAwesome } from "react-icons/fa6";
import { GrAchievement } from "react-icons/gr";
import { SiNginxproxymanager } from "react-icons/si";
import { TbListDetails } from "react-icons/tb";
import { GiLevelEndFlag } from "react-icons/gi";
import { FaUserCheck } from "react-icons/fa";
import { FaUserTimes } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import { FcSupport } from "react-icons/fc";
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
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signoutadmin } from "../../redux/authSlice";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { defaulterNotification, getUser } from "../../redux/userSlice";
import NotificationPopup from "../../User/NotificationPopup";
import RewardNotification from "../../User/RewardNotification";
import { FaRegUser } from "react-icons/fa";
import { Blocks } from "lucide-react";
export default function UserMenu({ Children, PageName }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("Dashboard");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { admin } = useSelector((state) => state.auth);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [headerMenu, setHeaderMenu] = useState([]);
  const [defaulternotification, setDefaulterNotification] = useState(false);
  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const [currentTab, setCurrentTab] = useState([]);
  // const [currentSubTab, setCurrentSubTab] = useState("Dashboard");
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
    icon: MdNotificationAdd ,
    current: false,
    submenu: [],
  },
  {
    name: "Notification list",
    to: "/admin/notification/list",
    icon: MdNotificationsPaused ,
    current: false,
    submenu: [] ,
  },
  {
    name: "Support",
    to: "/admin/support",
    icon: MdOutlineSupportAgent ,
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
    // {
    //   name: "Withdrawal",
    //   to: "/admin/pendingwithdrawalrequest",
    //   current: true,
    // },
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
    { name: "Deposite", to: "/admin/deposite",  icon: PiHandDepositFill, current: false },
    { name: "TopUp", to: "/admin/topup",  icon: RiPolaroid2Line, current: false },
  ];
  const Achivers =[
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
      icon: PiHandWithdrawFill ,
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

  return (
    <div className="flex h-screen ">
      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full bg-gradient-to-br from-indigo-800 via-indigo-700 to-purple-600  text-white transition-all duration-300 z-50
          ${
            isMobileMenuOpen
              ? "w-64 translate-x-0"
              : isSidebarOpen
              ? "w-64"
              : "md:w-16"
          }
          ${
            isMobileMenuOpen
              ? "translate-x-0"
              : "-translate-x-full md:translate-x-0"
          }`}
      >
        <div className="flex items-center justify-between px-4 py-3 ">
          <Link to="/">
            <img src="/adtofuture.png" className="w-10" alt="Logo" />
          </Link>
          <button
            onClick={toggleMobileMenu}
            className="md:hidden text-white p-2"
          >
            <XMarkIcon className="w-6 h-6" />
          </button>
        </div>

        {/* Sidebar Toggle Button */}
        <button
          onClick={toggleSidebar}
          className="absolute top-[50px] -right-3.5 p-2 text-white bg-gradient-to-br from-indigo-800 via-indigo-700 to-purple-600 rounded-full transition-all duration-300 hidden md:block"
        >
          <ChevronLeftIcon
            className={`w-4 h-4 transition-transform ${
              isSidebarOpen ? "rotate-0" : "rotate-180"
            }`}
          />
        </button>

        {/* Menu Items */}
        <div className="flex flex-col overflow-y-auto h-full p-2 ">
          <ul className="flex flex-col space-y-3">
            {menus?.map((menu, index) => {
              const isActive = activeTab === menu.name;
              return (
                <Disclosure key={index} as="div" className="">
                  {({ open }) => (
                    <>
                      <Link to={menu.to}>
                        <Disclosure.Button
                          className={`flex items-center text-lg rounded-r-full   w-full text-white transition-all duration-300 ${
                            isSidebarOpen ? "p-3" : "p-3 justify-center"
                          } ${isActive ? "bg-purple-500" : ""}`}
                          onClick={() => setActiveTab(menu.name)}
                        >
                          {menu?.icon && <menu.icon className="w-6 h-6" />}
                          {(isSidebarOpen || isMobileMenuOpen) && (
                            <span className="ml-3">{menu.name}</span>
                          )}
                          {(isSidebarOpen || isMobileMenuOpen) &&
                            menu.submenu.length > 0 && (
                              <ChevronDownIcon
                                className={`w-5 h-5 ml-auto transition-transform ${
                                  open ? "rotate-180" : "rotate-0"
                                }`}
                              />
                            )}
                        </Disclosure.Button>
                        {open && (isSidebarOpen || isMobileMenuOpen) && (
                          <Disclosure.Panel className="pl-4">
                            <ul>
                              {menu?.submenu.map((submenu, subIndex) => (
                                <li
                                  key={subIndex}
                                  className={`p-2 rounded cursor-pointer ${
                                    activeTab === submenu.name
                                      ? "bg-gradient-to-br from-indigo-800 via-indigo-700 to-purple-600 text-white"
                                      : ""
                                  }`}
                                  onClick={() => setActiveTab(submenu.name)}
                                >
                                  <Link
                                    to={submenu.to}
                                    className="w-full  flex items-center"
                                  >
                                    {submenu.icon && (
                                      <submenu.icon className="w-5 h-5 inline-block mr-4" />
                                    )}
                                    {submenu.name}
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
        </div>
      </aside>
      <div
        className={`flex flex-col flex-1 transition-all duration-300 overflow-x-hidden overflow-y-auto ${
          isSidebarOpen || isMobileMenuOpen ? "md:ml-64" : "md:ml-16"
        }`}
      >
        {/* Header */}
        <header className=" flex justify-between  items-center w-full bg-gradient-to-br from-indigo-800 via-indigo-700 to-purple-600 shadow-md dark:bg-gray-900 dark:border-gray-700">
        <button
            onClick={toggleMobileMenu}
            className="md:hidden text-gray-100 dark:text-gray-400 hover:bg-gradient-to-br from-indigo-800 via-indigo-700 to-purple-600 dark:hover:bg-gray-700 p-2 rounded-md"
          >
            <Bars3Icon className="w-6 h-6" />
          </button>
          <div className="flex flex-col flex-1 item-center">
            <nav
              aria-label="Breadcrumb"
              className="flex border-b md:justify-between justify-end  px-4 py-2 "
            >
              <div className="flex items-center gap-2 sm:text-lg text-base text-gray-100">
              
                    <Link
                      to="/"
                      className="text-gray-100 hover:text-gray-200/85"
                    >
                      <HomeIcon
                        aria-hidden="true"
                        className="flex-shrink-0 w-6 sm:w-8 h-6 sm:h-8"
                      />
                      <span className="sr-only">Home</span>
                    </Link>
             
                    <svg
                  fill="none"
                  viewBox="0 0 24 44"
                  preserveAspectRatio="none"
                  aria-hidden="true"
                  className="flex-shrink-0 w-6 h-full text-blue-300"
                >
                  <path
                    d="M4 8L16 22L4 36"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M10 8L22 22L10 36"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    opacity="0.5"
                  />
                </svg>
                  Admin
                  <svg
                  fill="none"
                  viewBox="0 0 24 44"
                  preserveAspectRatio="none"
                  aria-hidden="true"
                  className="flex-shrink-0 w-6 h-full text-blue-300"
                >
                  <path
                    d="M4 8L16 22L4 36"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M10 8L22 22L10 36"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    opacity="0.5"
                  />
                </svg>
                   {PageName}
                </div>
         
              <Menu as="div" className="relative inline-block text-left">
            <Menu.Button className="flex items-center justify-center ml-3 sm:ml-0 p-3 text-sm font-medium rounded-full text-white bg-gradient-to-br from-blue-700 to-indigo-800 hover:from-blue-600 hover:to-indigo-700 shadow-md transition-all duration-200 border border-blue-500/30">
            <FaUserAlt aria-hidden="true" className="size-4 text-blue-100" />

                </Menu.Button>

                <Menu.Items className="absolute right-0 z-50 mt-2 min-w-48 max-w-96 break-all origin-top-right rounded-sm bg-black py-1 shadow-lg ring-1 focus:outline-none">
                 

                  <div className="mt-3 space-y-1 px-2">
                    <Link to={`/admin/check/profile/${admin?.id}`}>
                    <button
                    className={`group flex w-full text-blue-100 items-center px-4 py-2 text-sm font-medium rounded-md transition-all duration-200 ${
                      currentMenu === "Profile"
                        ? "bg-purple-800/50 text-white"
                        : "hover:bg-pruple-800/30 hover:text-white"
                    }`}
                  >
                    <FaRegUser className="mr-2 h-4 w-4" />
                    Profile
                  </button>
                    </Link>
                    <button
                   onClick={handlesignout}
                  className="flex w-full items-center font-medium text-left px-4 py-2 text-sm text-blue-300 hover:bg-pruple-800/30 hover:text-white rounded-md transition-all duration-200"
                >
                  <IoMdLogOut className="mr-2 h-5 w-5 text-blue-300" />
                  Logout
                </button>
                  </div>
                </Menu.Items>
              </Menu>
            </nav>
          </div>
        </header>
        <main className="flex-1 bg-black p-4 text-white">
          <div className="mx-auto w-full">
            {/* <h1 className="text-2xl font-semibold mb-4 ">{PageName}</h1> */}
            {Children}
          </div>
        </main>
      </div>
    </div>
  );
}
