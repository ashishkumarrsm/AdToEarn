// import { Link } from "react-router-dom";
// import { useState, useEffect } from "react";
// import { AiFillDelete } from "react-icons/ai";
// import { GrView } from "react-icons/gr";
// import { useParams } from "react-router-dom";
// import SuccessAlert from "../BaseFile/comman/SuccessAlert";
// import ErrorAlert from "../BaseFile/comman/ErrorAlert";
// import { Confirmation } from "../BaseFile/comman/Confirmation";
// import Loader from "../BaseFile/comman/Loader";
// import { TbBinaryTree } from "react-icons/tb";
// import {
//   getAllUsers,
//   clearErrors,
//   deleteUsers,
//   clearMessage,
// } from "../redux/userSlice";
// import { useDispatch, useSelector } from "react-redux";

// // Main component
// export default function AdminIncome() {
//   const { action } = useParams(); // Get any params (if needed for actions)
//   const dispatch = useDispatch();

//   // Redux state
//   const { allusers, loading, error, message } = useSelector(
//     (state) => state.allusers
//   );

//   // Local state for search and modal management
//   const [allUser, setAllUser] = useState(allusers);
//   const [searchQuery, setSearchQuery] = useState("");
//   const [modalopen, setModalopen] = useState(false);
//   const [deleteID, setdeleteID] = useState();

//   // Pagination state
//   const [currentPage, setCurrentPage] = useState(1);
//   const [itemsPerPage] = useState(10); // Set number of items per page

//   // IconContainer helper component for uniformity in icon rendering
//   const IconContainer = ({ children }) => (
//     <div className="flex relative z-0 justify-center items-center">{children}</div>
//   );

//   // Fetch data and handle errors/messages on component mount
//   useEffect(() => {
//     dispatch(getAllUsers());
//     setAllUser(allusers);

//     // Clear error after 3 seconds
//     if (error) {
//       const errorInterval = setInterval(() => {
//         dispatch(clearErrors());
//       }, 3000);
//       return () => clearInterval(errorInterval);
//     }

//     // Clear success message after 3 seconds
//     if (message) {
//       const messageInterval = setInterval(() => {
//         dispatch(clearMessage());
//       }, 3000);
//       return () => clearInterval(messageInterval);
//     }
//   }, [dispatch, error, message]);

//   // Handle user search
//   const handleSearch = (e) => {
//     const searchTerm = e.target.value.toLowerCase();
//     setAllUser(
//       allusers?.filter((p) => p.username?.toLowerCase().includes(searchTerm))
//     );
//     setSearchQuery(e.target.value);
//   };

//   // Pagination Calculation
//   const totalPages = Math.ceil((searchQuery ? allUser : allusers)?.length / itemsPerPage);
//   const currentUsers = (searchQuery ? allUser : allusers)?.slice(
//     (currentPage - 1) * itemsPerPage,
//     currentPage * itemsPerPage
//   );

//   const handlePagination = (direction) => {
//     if (direction === "next" && currentPage < totalPages) {
//       setCurrentPage(currentPage + 1);
//     } else if (direction === "prev" && currentPage > 1) {
//       setCurrentPage(currentPage - 1);
//     }
//   };

//   // Modal close function
//   function isClose() {
//     setModalopen(false);
//   }

//   // Handle delete action
//   function handleDelete(id) {
//     setdeleteID(id);
//     if (deleteID) {
//       console.log(id);
//       setModalopen(true);
//     }
//   }

//   console.log(allusers); // Debugging log

//   return (
//     <div className="p-4 my-5 lg:mx-3 sm:mx-3">
//       {/* Search Input */}
//       <div className="px-2 pt-5">
//         <label htmlFor="email" className="sr-only">Search</label>
//         <input
//           id="search"
//           name="search"
//           value={searchQuery}
//           onChange={(e) => handleSearch(e)}
//           type="text"
//           placeholder="search here . . ."
//           className="block w-[50vh] px-2 py-2 rounded-md border-0 text-gray-900  bg-white/50  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-900 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-lg sm:leading-6"
//         />
//       </div>

//       {/* Display Success or Error Alerts */}
//       {message && <SuccessAlert message={message} />}
//       {error && <ErrorAlert error={error} />}

//       {/* Table or Loader */}
//       <div className={` ${loading ? "items-center h-[560px]" : "h-full"}`}>
//         {loading ? (
//           <Loader />
//         ) : (
//           <div className="flow-root mt-4">
//             <div className="overflow-x-auto">
//               <div className="inline-block py-2 min-w-full align-middle">
//                 <table className="min-w-full divide-y divide-gray-700 border-collapse">
//                   {/* Table Headings */}
//                   <thead className="text-base leading-6 text-gray-100 bg-black border-b border-gray-300">
//                     <tr>
//                       <th scope="col" className="px-4 py-2 font-medium text-left border-r border-gray-400">Name</th>
//                       <th scope="col" className="px-4 py-2 font-medium text-left border-r border-gray-400 sm:table-cell">Active Plan</th>
//                       <th scope="col" className="px-4 py-2 font-medium text-left border-r border-gray-400 sm:table-cell">Salary</th>
//                       <th scope="col" className="px-4 py-2 font-medium text-right border-r border-gray-400 sm:text-left">Trade</th>
//                       <th scope="col" className="px-4 py-2 font-medium text-right border-r border-gray-400 sm:text-left">Level Day / Total</th>
//                       <th scope="col" className="px-4 py-2 font-medium text-right border-r border-gray-400 sm:text-left">Reward</th>
//                       <th scope="col" className="px-4 py-2 font-medium text-center">Tree</th>
//                     </tr>
//                   </thead>

//                   {/* Table Body */}
//                   <tbody className="text-center divide-y divide-gray-600 text-gray-950">
//                     {currentUsers?.length > 0 ? ( currentUsers?.map((item, index) => (
//                       <tr key={index} className="text-gray-900 border-b border-gray-400 even:bg-blue-200 even:text:white">
//                         <td className="px-4 py-4 text-base font-medium text-left text-gray-900 border-r border-gray-400">
//                           <div className="w-full truncate">{item?.email}</div>
//                         </td>
//                         <td className="px-4 py-4 text-base text-gray-900 border-r border-gray-600">
//                           {item?.active_plan} 
//                         </td>
//                         <td className="px-4 py-4 text-base text-right text-gray-800 border-r border-gray-400">
//                           {item?.total_salary}
//                         </td>
//                         <td className="px-4 py-4 text-base text-right text-gray-900 border-r border-gray-400">
//                           {item?.roi_income_day} / {item?.roi_income}
//                         </td>
//                         <td className="px-4 py-4 text-base text-right text-gray-900 border-r border-gray-400">
//                           {item?.level_month_day} / {item?.level_month}
//                         </td>
//                         <td className="px-4 py-4 text-base text-right text-gray-900 border-r border-gray-400">
//                           {item?.reward}
//                         </td>
//                         <td className="px-4 py-4 text-center">
//                           <Link to={`/admin/refferal/${item?.refferal_code}`}>
//                             <IconContainer>
//                               <TbBinaryTree className="w-4 h-4 cursor-pointer" title="details" />
//                             </IconContainer>
//                           </Link>
//                         </td>
//                       </tr>
//                     ))) : (
//                       <tr className="text-gray-100 border-b border-gray-400">
//                         <td colSpan="7" className="px-4 py-4 text-center text-base bg-[#4b1725ab]">
//                           No users found
//                         </td>
//                       </tr>
//                     )}
//                   </tbody>
//                 </table>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>

//       {/* Pagination Controls */}
//       <div className="flex justify-between p-4">
//         <button
//           onClick={() => handlePagination("prev")}
//           disabled={currentPage === 1}
//           className="px-4 py-2 text-lg text-white bg-indigo-600 rounded"
//         >
//           Previous
//         </button>
//         <div className="text-lg">
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

//       {/* Delete Confirmation Modal */}
//       {modalopen && (
//         <Confirmation isClose={isClose} deletefunction={deleteUsers} id={deleteID} />
//       )}
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
import { Confirmation } from "../BaseFile/comman/Confirmation";
import Loader from "../BaseFile/comman/Loader";
import { TbBinaryTree } from "react-icons/tb";
import { FaSearch, FaUserCheck, FaMoneyBillWave, FaChartLine } from "react-icons/fa";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import {
  getAllUsers,
  clearErrors,
  deleteUsers,
  clearMessage,
} from "../redux/userSlice";
import { useDispatch, useSelector } from "react-redux";

// Main component
export default function AdminIncome() {
  const { action } = useParams(); // Get any params (if needed for actions)
  const dispatch = useDispatch();

  // Redux state
  const { allusers, loading, error, message } = useSelector(
    (state) => state.allusers
  );

  // Local state for search and modal management
  const [allUser, setAllUser] = useState(allusers);
  const [searchQuery, setSearchQuery] = useState("");
  const [modalopen, setModalopen] = useState(false);
  const [deleteID, setdeleteID] = useState();
  const [showStats, setShowStats] = useState(false);
  const [statView, setStatView] = useState('salary'); // 'salary', 'trade', or 'reward'

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10); // Set number of items per page

  // IconContainer helper component for uniformity in icon rendering
  const IconContainer = ({ children }) => (
    <div className="flex relative z-0 justify-center items-center">{children}</div>
  );

  // Fetch data and handle errors/messages on component mount
  useEffect(() => {
    dispatch(getAllUsers());
    setAllUser(allusers);

    // Clear error after 3 seconds
    if (error) {
      const errorInterval = setInterval(() => {
        dispatch(clearErrors());
      }, 3000);
      return () => clearInterval(errorInterval);
    }

    // Clear success message after 3 seconds
    if (message) {
      const messageInterval = setInterval(() => {
        dispatch(clearMessage());
      }, 3000);
      return () => clearInterval(messageInterval);
    }
  }, [dispatch, error, message]);

  // Handle user search
  const handleSearch = (e) => {
    const searchTerm = e.target.value.toLowerCase();
    setAllUser(
      allusers?.filter((p) => p.username?.toLowerCase().includes(searchTerm))
    );
    setSearchQuery(e.target.value);
  };

  // Pagination Calculation
  const totalPages = Math.ceil((searchQuery ? allUser : allusers)?.length / itemsPerPage);
  const currentUsers = (searchQuery ? allUser : allusers)?.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePagination = (direction) => {
    if (direction === "next" && currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    } else if (direction === "prev" && currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  // Modal close function
  function isClose() {
    setModalopen(false);
  }

  // Handle delete action
  function handleDelete(id) {
    setdeleteID(id);
    if (deleteID) {
      console.log(id);
      setModalopen(true);
    }
  }

  // Get statistics data for chart
  const getStatsData = () => {
    if (!allusers?.length) return [];
    
    const topUsers = [...allusers]
      .sort((a, b) => {
        if (statView === 'salary') return b.total_salary - a.total_salary;
        if (statView === 'trade') return b.roi_income - a.roi_income;
        return b.reward - a.reward;
      })
      .slice(0, 5);
    
    return topUsers.map(user => ({
      name: user.username || user.email?.split('@')[0] || 'User',
      [statView === 'salary' ? 'Salary' : statView === 'trade' ? 'Trade' : 'Reward']: 
        statView === 'salary' ? Number(user.total_salary) : 
        statView === 'trade' ? Number(user.roi_income) : 
        Number(user.reward)
    }));
  };

  // Get summary statistics
  const getSummaryStats = () => {
    if (!allusers?.length) return { totalUsers: 0, activePlans: 0, totalSalary: 0, avgReward: 0 };
    
    const activePlans = allusers.filter(user => user.active_plan && user.active_plan !== '0').length;
    const totalSalary = allusers.reduce((sum, user) => sum + Number(user.total_salary || 0), 0);
    const totalReward = allusers.reduce((sum, user) => sum + Number(user.reward || 0), 0);
    const avgReward = allusers.length ? (totalReward / allusers.length).toFixed(2) : 0;
    
    return {
      totalUsers: allusers.length,
      activePlans,
      totalSalary,
      avgReward
    };
  };

  const summaryStats = getSummaryStats();

  return (
    <div className="p-6 my-5 lg:mx-3 sm:mx-3 bg-white rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold text-orange-500 mb-6">Admin Income Dashboard</h1>
      
      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg shadow p-4 text-white">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-white text-opacity-70 text-sm">Total Users</p>
              <h3 className="text-2xl font-bold">{summaryStats.totalUsers}</h3>
            </div>
            <div className="bg-white bg-opacity-30 p-3 rounded-full">
              <FaUserCheck className="w-6 h-6" />
            </div>
          </div>
        </div>
        
        <div className="bg-gradient-to-r from-orange-400 to-orange-500 rounded-lg shadow p-4 text-white">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-white text-opacity-70 text-sm">Active Plans</p>
              <h3 className="text-2xl font-bold">{summaryStats.activePlans}</h3>
            </div>
            <div className="bg-white bg-opacity-30 p-3 rounded-full">
              <FaChartLine className="w-6 h-6" />
            </div>
          </div>
        </div>
        
        <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg shadow p-4 text-white">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-white text-opacity-70 text-sm">Total Salary</p>
              <h3 className="text-2xl font-bold">${summaryStats.totalSalary.toLocaleString()}</h3>
            </div>
            <div className="bg-white bg-opacity-30 p-3 rounded-full">
              <FaMoneyBillWave className="w-6 h-6" />
            </div>
          </div>
        </div>
        
        <div className="bg-gradient-to-r from-orange-400 to-orange-500 rounded-lg shadow p-4 text-white">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-white text-opacity-70 text-sm">Avg Reward</p>
              <h3 className="text-2xl font-bold">${summaryStats.avgReward}</h3>
            </div>
            <div className="bg-white bg-opacity-30 p-3 rounded-full">
              <FaMoneyBillWave className="w-6 h-6" />
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-4 mb-6">
        {/* Search Input */}
        <div className="flex-1">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <FaSearch className="w-5 h-5 text-orange-500" />
            </div>
            <input
              id="search"
              name="search"
              value={searchQuery}
              onChange={(e) => handleSearch(e)}
              type="text"
              placeholder="Search users..."
              className="block w-full pl-10 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
            />
          </div>
        </div>
        
        {/* Toggle Statistics Button */}
        <div>
          <button 
            onClick={() => setShowStats(!showStats)}
            className="w-full md:w-auto px-6 py-3 text-white bg-orange-500 rounded-lg hover:bg-orange-600 transition duration-300 font-medium"
          >
            {showStats ? "Hide Statistics" : "Show Statistics"}
          </button>
        </div>
      </div>

      {/* Display Success or Error Alerts */}
      {message && <SuccessAlert message={message} />}
      {error && <ErrorAlert error={error} />}

      {/* Statistics Chart Section */}
      {showStats && (
        <div className="bg-gray-50 rounded-lg shadow p-4 mb-6">
          <div className="mb-4 flex flex-wrap items-center justify-between">
            <h2 className="text-xl font-semibold text-orange-500">Top 5 Users by 
              {statView === 'salary' ? ' Salary' : statView === 'trade' ? ' Trade Income' : ' Reward'}
            </h2>
            <div className="flex space-x-2 mt-2 md:mt-0">
              <button 
                onClick={() => setStatView('salary')}
                className={`px-3 py-1 rounded-lg ${statView === 'salary' ? 'bg-orange-500 text-white' : 'bg-gray-200 text-gray-700'}`}
              >
                Salary
              </button>
              <button 
                onClick={() => setStatView('trade')}
                className={`px-3 py-1 rounded-lg ${statView === 'trade' ? 'bg-orange-500 text-white' : 'bg-gray-200 text-gray-700'}`}
              >
                Trade
              </button>
              <button 
                onClick={() => setStatView('reward')}
                className={`px-3 py-1 rounded-lg ${statView === 'reward' ? 'bg-orange-500 text-white' : 'bg-gray-200 text-gray-700'}`}
              >
                Reward
              </button>
            </div>
          </div>
          
          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={getStatsData()} margin={{ top: 5, right: 30, left: 20, bottom: 20 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar 
                  dataKey={statView === 'salary' ? 'Salary' : statView === 'trade' ? 'Trade' : 'Reward'} 
                  fill="#f97316" 
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      )}

      {/* Table or Loader */}
      <div className={`bg-white rounded-lg shadow ${loading ? "flex items-center justify-center h-96" : ""}`}>
        {loading ? (
          <Loader />
        ) : (
          <div className="flow-root">
            <div className="overflow-x-auto">
              <div className="inline-block min-w-full align-middle">
                <table className="min-w-full divide-y divide-gray-200">
                  {/* Table Headings */}
                  <thead className="bg-gray-50">
                    <tr>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Name
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider sm:table-cell">
                        Active Plan
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider sm:table-cell">
                        Salary
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider sm:text-left">
                        Trade (Day / Total)
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider sm:text-left">
                        Level (Day / Total)
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider sm:text-left">
                        Reward
                      </th>
                      <th scope="col" className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Tree
                      </th>
                    </tr>
                  </thead>

                  {/* Table Body */}
                  <tbody className="bg-white divide-y divide-gray-200">
                    {currentUsers?.length > 0 ? (currentUsers?.map((item, index) => (
                      <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-orange-50'}>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm font-medium text-gray-900 truncate max-w-xs">{item?.email}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap sm:table-cell">
                          <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${
                            item?.active_plan && item.active_plan !== '0' 
                              ? 'bg-green-100 text-green-800' 
                              : 'bg-gray-100 text-gray-800'
                          }`}>
                            {item?.active_plan || 'None'}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap sm:table-cell">
                          <div className="text-sm font-medium text-orange-500">${item?.total_salary}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">
                            ${item?.roi_income_day} / ${item?.roi_income}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">
                            ${item?.level_month_day} / ${item?.level_month}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm font-medium text-orange-500">${item?.reward}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-center">
                          <Link to={`/admin/refferal/${item?.refferal_code}`}>
                            <button className="p-2 text-orange-500 hover:text-orange-700 rounded-full hover:bg-orange-100 transition-colors">
                              <TbBinaryTree className="w-5 h-5" title="View Referral Tree" />
                            </button>
                          </Link>
                        </td>
                      </tr>
                    ))) : (
                      <tr>
                        <td colSpan="7" className="px-6 py-8 text-center text-sm font-medium text-gray-500 bg-gray-50">
                          No users found
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-between items-center p-4 mt-4 bg-gray-50 rounded-lg">
        <button
          onClick={() => handlePagination("prev")}
          disabled={currentPage === 1}
          className={`px-4 py-2 text-sm font-medium rounded-lg ${
            currentPage === 1 
              ? 'bg-gray-200 text-gray-500 cursor-not-allowed' 
              : 'bg-orange-500 text-white hover:bg-orange-600'
          }`}
        >
          Previous
        </button>
        <div className="text-sm font-medium text-gray-700">
          Page {currentPage} of {totalPages || 1}
        </div>
        <button
          onClick={() => handlePagination("next")}
          disabled={currentPage === totalPages || totalPages === 0}
          className={`px-4 py-2 text-sm font-medium rounded-lg ${
            currentPage === totalPages || totalPages === 0
              ? 'bg-gray-200 text-gray-500 cursor-not-allowed' 
              : 'bg-orange-500 text-white hover:bg-orange-600'
          }`}
        >
          Next
        </button>
      </div>

      {/* Delete Confirmation Modal */}
      {modalopen && (
        <Confirmation isClose={isClose} deletefunction={deleteUsers} id={deleteID} />
      )}
    </div>
  );
}