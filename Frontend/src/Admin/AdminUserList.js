

// import { Link } from "react-router-dom";
// import { useState, useEffect } from "react";
// import { AiFillDelete } from "react-icons/ai";
// import { GrView } from "react-icons/gr";
// import { useParams } from "react-router-dom";
// import SuccessAlert from "../BaseFile/comman/SuccessAlert";
// import ErrorAlert from "../BaseFile/comman/ErrorAlert";
// import { RiLoginCircleFill } from "react-icons/ri";
// import { Confirmation } from "../BaseFile/comman/Confirmation";
// import Loader from "../BaseFile/comman/Loader";
// import { FaArrowAltCircleUp, FaArrowCircleDown } from "react-icons/fa";
// import { loginUser } from "../redux/authSlice";
// import { getAllUsers, deleteUsers } from "../redux/userSlice";
// import { clearErrors, clearMessage } from "../redux/withdrawalSlice";
// import AdminCashHandle from "./AdminCashHandle";
// import { useDispatch, useSelector } from "react-redux";
// import { CSVLink } from "react-csv";
// // import Loader from "../BaseFile/comman/Loader";
// export default function AdminUserList() {
//   const { action } = useParams();
//   const dispatch = useDispatch();
//   const { allusers, loading } = useSelector((state) => state.allusers);
//   const { message, error } = useSelector((state) => state.allwithdrawal);
//   const { admin } = useSelector((state) => state.auth);
//   const [allUser, setAllUser] = useState(allusers);
//   const [searchQuery, setSearchQuery] = useState("");
//   const [searchPlanQuery, setSearchPlanQuery] = useState("");
//   const [modalopen, setModalopen] = useState(false);
//   const [deleteID, setdeleteID] = useState();
//   const [cashHandle, setCashHandle] = useState(null);
//   const [userId, setUserId] = useState();
//   const [name, setName] = useState(null);
//   const [balance, setBalance] = useState(null);
//   const [roi, setROI] = useState(null);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [itemsPerPage] = useState(50);
//   const [paginatedUsers, setPaginatedUser] = useState([]);
//   const [totalPages, setTotalPages] = useState(null);
//   useEffect(() => {
//     dispatch(getAllUsers());
//     if (error) {
//       const errorInterval = setInterval(() => {
//         dispatch(clearErrors());
//       }, 3000);
//       return () => clearInterval(errorInterval);
//     }
//     if (message) {
//       const messageInterval = setInterval(() => {
//         dispatch(clearMessage());
//       }, 3000);
//       return () => clearInterval(messageInterval);
//     }
//   }, [dispatch, error, message]);

//   useEffect(() => {
//     if (action === "all") {
//       setAllUser(allusers);
//     } else {
//       setAllUser(
//         allusers?.filter((p) => p.is_active === action || p.status === action)
//       );
//     }
//   }, [action, allusers]);

//   useEffect(() => {
//     setCurrentPage(1);
//   }, [searchQuery]);

//   useEffect(() => {
//     const filteredUsers = allUser
//       ?.filter((item) => item.role !== "admin")
//       ?.filter(
//         (item) =>
//           item.email.toLowerCase().includes(searchQuery.toLowerCase()) || // Ensure case-insensitive matching
//           item.username.toLowerCase().includes(searchQuery.toLowerCase()) || // Ensure case-insensitive matching
//           item.active_plan >= searchQuery // Ensure strict equality for active_plan
//       );

//     // Calculate the total number of pages
//     const calculatedTotalPages = Math.ceil(
//       filteredUsers?.length / itemsPerPage
//     );
//     setTotalPages(calculatedTotalPages);

//     // Slice the filtered users for pagination based on the currentPage
//     const startIndex = (currentPage - 1) * itemsPerPage;
//     const paginatedUsers = filteredUsers?.slice(
//       startIndex,
//       startIndex + itemsPerPage
//     );
//     setPaginatedUser(paginatedUsers);
//   }, [searchQuery, allUser, currentPage, itemsPerPage]); // Correct dependencies

//   const handleSearch = (e) => {
//     const searchTerm = e.target.value.toLowerCase();
//     setSearchQuery(searchTerm);
//   };

//   const handleDelete = (id) => {
//     setdeleteID(id);
//     setModalopen(true);
//   };

//   const handleCash = (action, item) => {
//     setCashHandle(action);
//     setName(item?.username);
//     setUserId(item?.id);
//     setBalance(item?.business);
//     // setBalance(item?.business + item?.investment_month + item?.reward + item?.direct_income);

//     setROI(item?.roi_income);
//   };

//   const handleSession = (item) => {
//     const values = { email: item.email, password: item.password };
//     dispatch(loginUser(values));
//     window.open("/user/dashboard", "_blank");
//   };

//   const handlePagination = (direction) => {
//     if (direction === "next" && currentPage < totalPages) {
//       setCurrentPage(currentPage + 1);
//     } else if (direction === "prev" && currentPage > 1) {
//       setCurrentPage(currentPage - 1);
//     }
//   };

//   const headers = [
//     { label: "S. No", key: "index" },
//     { label: "Username", key: "username" },
//     { label: "Active Status", key: "is_active" },
//     { label: "E-Mail", key: "email" },
//     { label: "Active Plan", key: "active_plan" },
//     { label: "Created At", key: "created_at" },
//   ];

//   // const csvData = paginatedUsers?.map((item, index) => ({
//   //   index: index + 1,
//   //   username: item.username || "N/A",
//   //   is_active: item.is_active || "N/A",
//   //   email: item.email || "N/A",
//   //   active_plan: `$${item.active_plan || "0.00"}`,
//   //   created_at: item.created_at
//   //     ? new Date(item.created_at).toLocaleDateString("en-US", {
//   //         year: "numeric",
//   //         month: "short",
//   //         day: "numeric",
//   //       })
//   //     : "N/A",
//   // }));

//   const csvData = paginatedUsers?.length
//     ? paginatedUsers.map((item, index) => ({
//         index: index + 1,
//         username: item.username || "N/A",
//         is_active: item.is_active || "N/A",
//         email: item.email || "N/A",
//         active_plan: `$${item.active_plan || "0.00"}`,
//         created_at: item.created_at
//           ? new Date(item.created_at).toLocaleDateString("en-US", {
//               year: "numeric",
//               month: "short",
//               day: "numeric",
//             })
//           : "N/A",
//       }))
//     : [];

//   return (
//     <div className="p-4 my-5 lg:mx-3 sm:mx-3">
//       <div className="flex justify-between pt-5">
//         <div className="">
//           <label htmlFor="email " className="sr-only">
//             Search using email
//           </label>
//           <input
//             id="search"
//             name="search"
//             value={searchQuery}
//             onChange={handleSearch}
//             type="text"
//             placeholder="search here . . ."
//             className="block w-full md:max-w-lg px-2 py-2 text-gray-900 bg-[#ffffff80] border-0  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-900 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-lg sm:leading-6 rounded-sm"
//           />
//         </div>
//         {/* <CSVLink
//               data={csvData}
//               headers={headers}
//               filename="members_list.csv"
//               className="px-4 py-2 text-white bg-blue-600 rounded hover:bg-blue-700"
//             >
//               Download CSV
//             </CSVLink> */}
//         {csvData.length > 0 && (
//           <CSVLink
//             data={csvData}
//             headers={headers}
//             filename="members_list.csv"
//             className="px-4 py-2 text-white bg-blue-600 rounded hover:bg-blue-700"
//           >
//             Download CSV
//           </CSVLink>
//         )}
//       </div>

//       {message && <SuccessAlert message={message} />}
//       {error && <ErrorAlert error={error} />}

//       <div className={` ${loading ? "items-center h-[560px]" : "h-full"}`}>
//         {loading ? (
//           <Loader />
//         ) : (
//           <div className="flow-root mt-4">
//             <div className="overflow-x-auto">
//               <div className="py-2">
//                 <table className="w-full border border-gray-300 divide-y divide-gray-700">
//                   <thead className="text-base leading-6 text-gray-100 bg-black border-b border-white/10">
//                     <tr>
//                       <th className="px-2 ml-4 font-medium text-left border border-gray-300">
//                         S.No
//                       </th>
//                       <th className="px-2 ml-4 font-medium text-left border border-gray-300">
//                         E-mail
//                       </th>
//                       <th className="px-2 py-4 font-medium text-center border border-gray-300">
//                         Wallet
//                       </th>
//                       <th className="px-2 py-4 font-medium text-center border border-gray-300">
//                         A-Wallet
//                       </th>
//                       <th className="px-2 py-4 font-medium text-center border border-gray-300">
//                         Account Status
//                       </th>
//                       <th className="px-2 py-4 font-medium text-center border border-gray-300">
//                         Package Status
//                       </th>
//                       <th className="px-2 py-4 text-center border border-gray-300">
//                         Created at
//                       </th>
//                       <th className="px-2 py-4 text-center border border-gray-300">
//                         Action
//                       </th>
//                     </tr>
//                   </thead>
//                   <tbody className="text-gray-900 bg-white">
//                     {paginatedUsers?.map((item, index) => (
//                       <tr
//                         key={index}
//                         className="text-gray-900 transition-colors duration-200 even:bg-blue-200 even:text:white"
//                       >
//                         <td className="px-4 py-4 text-center border border-gray-300">
//                           <div className="text-lg">
//                             {(currentPage - 1) * 50 + index + 1}
//                           </div>
//                         </td>
//                         <td className="px-4 py-4 text-left border border-gray-300">
//                           <div className="gap-x-4 justify-center tems-center">
//                             <div className="w-full text-lg font-medium leading-6 truncate">
//                               {item?.email}
//                               <button
//                                 onClick={() => {
//                                   navigator.clipboard.writeText(
//                                     item?.refferal_code || ""
//                                   );
//                                   alert("Copied to clipboard!");
//                                 }}
//                                 className="focus:outline-none text-white bg-indigo-600 ml-1 px-4 py-[2px] rounded-full text-[10px]"
//                               >
//                                 {item?.refferal_code}
//                               </button>
//                             </div>
//                           </div>
//                         </td>
//                         <td className="px-4 py-4 border border-gray-300">
//                           <div className="flex justify-between">
//                             {/* {admin.role ==='subadmin' && */}
//                             <button
//                               onClick={() => handleCash("credit", item)}
//                               className="p-2 bg-green-600 rounded transition-all duration-200 hover:bg-green-500"
//                             >
//                               <FaArrowAltCircleUp />
//                             </button>
//                             {/* } */}
//                             <div>${item?.business}</div>
//                             {/* {admin.role  ==='subadmin' && */}
//                             <button
//                               onClick={() => handleCash("debit", item)}
//                               className="p-2 bg-red-600 rounded transition-all duration-200 hover:bg-red-500"
//                             >
//                               <FaArrowCircleDown />
//                             </button>
//                             {/* } */}
//                           </div>
//                         </td>
//                         <td className="px-4 py-4 text-center border border-gray-300">
//                           <div className="text-lg">{item?.active_plan}</div>
//                         </td>
//                         <td className="px-4 py-4 text-center border border-gray-300">
//                           {item?.status === "block" ? (
//                             <div className="flex gap-2 items-center">
//                               <div className="w-1.5 h-1.5 bg-red-800 rounded-full" />
//                               Blocked
//                             </div>
//                           ) : (
//                             <div className="flex gap-2 items-center">
//                               <div className="w-1.5 h-1.5 bg-green-800 rounded-full" />
//                               Unblocked
//                             </div>
//                           )}
//                         </td>
//                         <td className="px-4 py-4 text-center border border-gray-300">
//                           {item?.is_active === "active" ? (
//                             <div className="flex gap-2 items-center">
//                               <div className="w-1.5 h-1.5 bg-green-800 rounded-full" />
//                               Activated
//                             </div>
//                           ) : (
//                             <div className="flex gap-2 items-center">
//                               <div className="w-1.5 h-1.5 bg-red-800 rounded-full" />
//                               Not Activated
//                             </div>
//                           )}
//                         </td>
//                         <td className="px-4 py-4 text-center border border-gray-300">
//                           <div className="text-lg">
//                             {new Date(item?.created_at).toLocaleDateString()}
//                           </div>
//                         </td>
//                         <td className="px-4 py-4 text-center border border-gray-300">
//                           <div className="flex justify-center items-center space-x-2">
//                             <button onClick={() => handleSession(item)}>
//                               <RiLoginCircleFill />
//                             </button>
//                             <Link to={`/admin/check/profile/${item?.id}`}>
//                               <GrView />
//                             </Link>
//                             {/* <button onClick={() => handleDelete(item?.id)}>
//                               <AiFillDelete />
//                             </button> */}
//                           </div>
//                         </td>
//                       </tr>
//                     ))}
//                   </tbody>
//                 </table>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>

//       {modalopen && (
//         <Confirmation
//           isClose={() => setModalopen(false)}
//           deletefunction={deleteUsers}
//           id={deleteID}
//         />
//       )}
//       {cashHandle && (
//         <AdminCashHandle
//           HandleCashmodel={() => setCashHandle(null)}
//           cashHandle={cashHandle}
//           userId={userId}
//           name={name}
//           balance={balance}
//           roi={roi}
//         />
//       )}

//       {/* Pagination Controls */}
//       <div className="flex justify-between py-4">
//         <button
//           onClick={() => handlePagination("prev")}
//           disabled={currentPage === 1}
//           className="px-4 py-2 text-lg text-white bg-green-600 rounded"
//         >
//           Previous
//         </button>
//         <div className="text-lg text-white">
//           Page {currentPage} of {totalPages}
//         </div>
//         <button
//           onClick={() => handlePagination("next")}
//           disabled={currentPage === totalPages}
//           className="px-4 py-2 text-lg text-white bg-indigo-600 rounded"
//         >
//           Next
//         </button>
//       </div>
//     </div>
//   );
// }


import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { AiFillDelete } from "react-icons/ai";
import { GrView } from "react-icons/gr";
import { useParams } from "react-router-dom";
import SuccessAlert from "../BaseFile/comman/SuccessAlert";
import ErrorAlert from "../BaseFile/comman/ErrorAlert";
import { RiLoginCircleFill } from "react-icons/ri";
import { Confirmation } from "../BaseFile/comman/Confirmation";
import Loader from "../BaseFile/comman/Loader";
import { FaArrowAltCircleUp, FaArrowCircleDown, FaSearch, FaDownload, FaUsers, FaUserCheck, FaUserTimes, FaWallet } from "react-icons/fa";
import { loginUser } from "../redux/authSlice";
import { getAllUsers, deleteUsers } from "../redux/userSlice";
import { clearErrors, clearMessage } from "../redux/withdrawalSlice";
import AdminCashHandle from "./AdminCashHandle";
import { useDispatch, useSelector } from "react-redux";
import { CSVLink } from "react-csv";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export default function AdminUserList() {
  const { action } = useParams();
  const dispatch = useDispatch();
  const { allusers, loading } = useSelector((state) => state.allusers);
  const { message, error } = useSelector((state) => state.allwithdrawal);
  const { admin } = useSelector((state) => state.auth);
  const [allUser, setAllUser] = useState(allusers);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchPlanQuery, setSearchPlanQuery] = useState("");
  const [modalopen, setModalopen] = useState(false);
  const [deleteID, setdeleteID] = useState();
  const [cashHandle, setCashHandle] = useState(null);
  const [userId, setUserId] = useState();
  const [name, setName] = useState(null);
  const [balance, setBalance] = useState(null);
  const [roi, setROI] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(50);
  const [paginatedUsers, setPaginatedUser] = useState([]);
  const [totalPages, setTotalPages] = useState(null);
  const [showStats, setShowStats] = useState(true);

  useEffect(() => {
    dispatch(getAllUsers());
    if (error) {
      const errorInterval = setInterval(() => {
        dispatch(clearErrors());
      }, 3000);
      return () => clearInterval(errorInterval);
    }
    if (message) {
      const messageInterval = setInterval(() => {
        dispatch(clearMessage());
      }, 3000);
      return () => clearInterval(messageInterval);
    }
  }, [dispatch, error, message]);

  useEffect(() => {
    if (action === "all") {
      setAllUser(allusers);
    } else {
      setAllUser(
        allusers?.filter((p) => p.is_active === action || p.status === action)
      );
    }
  }, [action, allusers]);

  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery]);

  useEffect(() => {
    const filteredUsers = allUser
      ?.filter((item) => item.role !== "admin")
      ?.filter(
        (item) =>
          item.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.username.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.active_plan >= searchQuery
      );

    const calculatedTotalPages = Math.ceil(
      filteredUsers?.length / itemsPerPage
    );
    setTotalPages(calculatedTotalPages);

    const startIndex = (currentPage - 1) * itemsPerPage;
    const paginatedUsers = filteredUsers?.slice(
      startIndex,
      startIndex + itemsPerPage
    );
    setPaginatedUser(paginatedUsers);
  }, [searchQuery, allUser, currentPage, itemsPerPage]);

  const handleSearch = (e) => {
    const searchTerm = e.target.value.toLowerCase();
    setSearchQuery(searchTerm);
  };

  const handleDelete = (id) => {
    setdeleteID(id);
    setModalopen(true);
  };

  const handleCash = (action, item) => {
    setCashHandle(action);
    setName(item?.username);
    setUserId(item?.id);
    setBalance(item?.business);
    setROI(item?.roi_income);
  };

  const handleSession = (item) => {
    const values = { email: item.email, password: item.password };
    dispatch(loginUser(values));
    window.open("/user/dashboard", "_blank");
  };

  const handlePagination = (direction) => {
    if (direction === "next" && currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    } else if (direction === "prev" && currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const headers = [
    { label: "S. No", key: "index" },
    { label: "Username", key: "username" },
    { label: "Active Status", key: "is_active" },
    { label: "E-Mail", key: "email" },
    { label: "Active Plan", key: "active_plan" },
    { label: "Created At", key: "created_at" },
  ];

  const csvData = paginatedUsers?.length
    ? paginatedUsers.map((item, index) => ({
        index: index + 1,
        username: item.username || "N/A",
        is_active: item.is_active || "N/A",
        email: item.email || "N/A",
        active_plan: `$${item.active_plan || "0.00"}`,
        created_at: item.created_at
          ? new Date(item.created_at).toLocaleDateString("en-US", {
              year: "numeric",
              month: "short",
              day: "numeric",
            })
          : "N/A",
      }))
    : [];

  // Generate analytics data
  const activeUsers = paginatedUsers?.filter(user => user.is_active === "active").length || 0;
  const inactiveUsers = paginatedUsers?.length - activeUsers || 0;
  const blockedUsers = paginatedUsers?.filter(user => user.status === "block").length || 0;
  
  const statsData = [
    { name: 'Active Users', value: activeUsers },
    { name: 'Inactive Users', value: inactiveUsers },
    { name: 'Blocked Users', value: blockedUsers },
  ];

  return (
    <div className="p-4 my-5 bg-gray-50 rounded-lg shadow-md">
      {/* Stats Overview Section */}
      {showStats && (
        <div className="mb-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold text-gray-800">User Analytics</h2>
            <button 
              onClick={() => setShowStats(!showStats)} 
              className="px-4 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600 transition-all duration-200"
            >
              {showStats ? "Hide Stats" : "Show Stats"}
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
            <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-orange-500">
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-gray-500 mb-1">Total Users</p>
                  <h3 className="text-2xl font-bold">{paginatedUsers?.length || 0}</h3>
                </div>
                <div className="p-3 bg-orange-100 rounded-full">
                  <FaUsers className="text-orange-500 text-xl" />
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-green-500">
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-gray-500 mb-1">Active Users</p>
                  <h3 className="text-2xl font-bold">{activeUsers}</h3>
                </div>
                <div className="p-3 bg-green-100 rounded-full">
                  <FaUserCheck className="text-green-500 text-xl" />
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-red-500">
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-gray-500 mb-1">Inactive Users</p>
                  <h3 className="text-2xl font-bold">{inactiveUsers}</h3>
                </div>
                <div className="p-3 bg-red-100 rounded-full">
                  <FaUserTimes className="text-red-500 text-xl" />
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-blue-500">
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-gray-500 mb-1">Blocked Users</p>
                  <h3 className="text-2xl font-bold">{blockedUsers}</h3>
                </div>
                <div className="p-3 bg-blue-100 rounded-full">
                  <FaWallet className="text-blue-500 text-xl" />
                </div>
              </div>
            </div>
          </div>
          
          {/* Chart visualization */}
          <div className="bg-white p-4 rounded-lg shadow-sm h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={statsData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="value" fill="#f97316" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      )}

      {/* Header Section */}
      <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-4">
          <h1 className="text-2xl font-bold text-gray-800">User Management</h1>
          
          <div className="flex flex-wrap gap-4 items-center">
            <div className="relative">
              <input
                id="search"
                name="search"
                value={searchQuery}
                onChange={handleSearch}
                type="text"
                placeholder="Search by email or username..."
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all"
              />
              <FaSearch className="absolute left-3 top-3 text-gray-400" />
            </div>
            
            {csvData.length > 0 && (
              <CSVLink
                data={csvData}
                headers={headers}
                filename="members_list.csv"
                className="flex items-center gap-2 px-4 py-2 text-white bg-orange-500 rounded-lg hover:bg-orange-600 transition-all"
              >
                <FaDownload /> Export CSV
              </CSVLink>
            )}
            
            <button 
              onClick={() => setShowStats(!showStats)} 
              className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-all duration-200 lg:hidden"
            >
              {showStats ? "Hide Stats" : "Show Stats"}
            </button>
          </div>
        </div>
      </div>

      {/* Alerts Section */}
      <div className="my-4">
        {message && <SuccessAlert message={message} />}
        {error && <ErrorAlert error={error} />}
      </div>

      {/* Table Section */}
      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        <div className={`${loading ? "flex items-center justify-center h-[560px]" : "h-full"}`}>
          {loading ? (
            <Loader />
          ) : (
            <div className="flow-root">
              <div className="overflow-x-auto">
                <table className="w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-4 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">S.No</th>
                      <th className="px-6 py-4 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">E-mail</th>
                      <th className="px-6 py-4 text-center text-sm font-medium text-gray-500 uppercase tracking-wider">Wallet</th>
                      <th className="px-6 py-4 text-center text-sm font-medium text-gray-500 uppercase tracking-wider">A-Wallet</th>
                      <th className="px-6 py-4 text-center text-sm font-medium text-gray-500 uppercase tracking-wider">Account Status</th>
                      <th className="px-6 py-4 text-center text-sm font-medium text-gray-500 uppercase tracking-wider">Package Status</th>
                      <th className="px-6 py-4 text-center text-sm font-medium text-gray-500 uppercase tracking-wider">Created at</th>
                      <th className="px-6 py-4 text-center text-sm font-medium text-gray-500 uppercase tracking-wider">Action</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {paginatedUsers?.map((item, index) => (
                      <tr key={index} className="hover:bg-gray-50 transition-colors">
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          {(currentPage - 1) * 50 + index + 1}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex flex-col">
                            <span className="text-sm font-medium text-gray-900">{item?.email}</span>
                            <div className="flex items-center mt-1">
                              <button
                                onClick={() => {
                                  navigator.clipboard.writeText(item?.refferal_code || "");
                                  alert("Copied to clipboard!");
                                }}
                                className="px-2 py-1 bg-orange-100 text-orange-500 text-xs rounded-full hover:bg-orange-200 transition-all"
                              >
                                {item?.refferal_code}
                              </button>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center justify-between">
                            <button
                              onClick={() => handleCash("credit", item)}
                              className="p-2 text-white bg-green-500 rounded-full hover:bg-green-600 transition-all"
                            >
                              <FaArrowAltCircleUp />
                            </button>
                            <span className="text-sm font-medium mx-2">${item?.business}</span>
                            <button
                              onClick={() => handleCash("debit", item)}
                              className="p-2 text-white bg-red-500 rounded-full hover:bg-red-600 transition-all"
                            >
                              <FaArrowCircleDown />
                            </button>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-center font-medium text-gray-900">
                          {item?.active_plan}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-center">
                          {item?.status === "block" ? (
                            <span className="px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">
                              Blocked
                            </span>
                          ) : (
                            <span className="px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                              Unblocked
                            </span>
                          )}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-center">
                          {item?.is_active === "active" ? (
                            <span className="px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                              Activated
                            </span>
                          ) : (
                            <span className="px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">
                              Not Activated
                            </span>
                          )}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-center">
                          {new Date(item?.created_at).toLocaleDateString()}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-center">
                          <div className="flex justify-center space-x-3">
                            <button 
                              onClick={() => handleSession(item)}
                              className="text-orange-500 hover:text-orange-600 transition-all"
                              title="Login as User"
                            >
                              <RiLoginCircleFill size={20} />
                            </button>
                            <Link 
                              to={`/admin/check/profile/${item?.id}`}
                              className="text-blue-500 hover:text-blue-600 transition-all"
                              title="View Profile"
                            >
                              <GrView size={20} />
                            </Link>
                            {/* <button 
                              onClick={() => handleDelete(item?.id)}
                              className="text-red-500 hover:text-red-600 transition-all"
                              title="Delete User"
                            >
                              <AiFillDelete size={20} />
                            </button> */}
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-between items-center mt-6 bg-white p-4 rounded-lg shadow-sm">
        <button
          onClick={() => handlePagination("prev")}
          disabled={currentPage === 1}
          className={`px-4 py-2 rounded-md ${
            currentPage === 1
              ? "bg-gray-200 text-gray-500 cursor-not-allowed"
              : "bg-orange-500 text-white hover:bg-orange-600"
          } transition-all`}
        >
          Previous
        </button>
        <div className="text-base font-medium text-gray-700">
          Page {currentPage} of {totalPages || 1}
        </div>
        <button
          onClick={() => handlePagination("next")}
          disabled={currentPage === totalPages}
          className={`px-4 py-2 rounded-md ${
            currentPage === totalPages
              ? "bg-gray-200 text-gray-500 cursor-not-allowed"
              : "bg-orange-500 text-white hover:bg-orange-600"
          } transition-all`}
        >
          Next
        </button>
      </div>

      {/* Modals */}
      {modalopen && (
        <Confirmation
          isClose={() => setModalopen(false)}
          deletefunction={deleteUsers}
          id={deleteID}
        />
      )}
      {cashHandle && (
        <AdminCashHandle
          HandleCashmodel={() => setCashHandle(null)}
          cashHandle={cashHandle}
          userId={userId}
          name={name}
          balance={balance}
          roi={roi}
        />
      )}
    </div>
  );
}