// import React, { useState, useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { getAllDeposite } from "../redux/depositeSlice";
// import { getAllUsers } from "../redux/userSlice";
// import { getAllWithdrawal } from "../redux/withdrawalSlice";
// import Loader from "../BaseFile/comman/Loader";
// import SuccessAlert from "../BaseFile/comman/SuccessAlert";
// import ErrorAlert from "../BaseFile/comman/ErrorAlert";

// export default function AdminReport() {
//   const dispatch = useDispatch();
//   const { allusers } = useSelector((state) => state.allusers);
//   const { allwithdrawal } = useSelector((state) => state.allwithdrawal);
//   const { alldeposite, loading, error, message } = useSelector(
//     (state) => state.alldeposite
//   );

//   const [allUser, setAllUser] = useState();
//   const [searchQuery, setSearchQuery] = useState("");
//   const [currentPage, setCurrentPage] = useState(1); // Current page number
//   const [itemsPerPage] = useState(10); // Number of items per page

//   useEffect(() => {
//     dispatch(getAllUsers());
//     dispatch(getAllWithdrawal());
//     dispatch(getAllDeposite());
//   }, [dispatch]);

//   function findLastEntryByCreatedAt(arr) {
//     return arr?.reduce(
//       (acc, current) => (acc.created_at > current.created_at ? acc : current),
//       {}
//     );
//   }

//   const combinedArray = allusers?.map((user) => {
//     let lastWithdrawal = findLastEntryByCreatedAt(
//       allwithdrawal?.filter((w) => w.user_id === user.id)
//     );
//     let lastDeposit = findLastEntryByCreatedAt(
//       alldeposite?.filter((d) => d.user_id === user.id)
//     );
//     return {
//       id: user?.id,
//       name: user?.username,
//       last_login: user?.last_login,
//       created_at: user?.created_at,
//       updated_at: user?.updated_at,
//       active_plan: user?.active_plan,
//       activation_date: user?.activation_date,
//       last_withdrawal_created_at: lastWithdrawal?.createdAT || null,
//       last_withdrawal_amount: lastWithdrawal?.amount || null,
//       last_deposit_created_at: lastDeposit?.createdAT || null,
//       last_deposit_amount: lastDeposit?.amount || null,
//     };
//   });

//   useEffect(() => {
//     setAllUser(combinedArray);
//     if (searchQuery) {
//       setAllUser(
//         combinedArray?.filter((p) =>
//           p.name?.toLowerCase().includes(searchQuery.toLowerCase())
//         )
//       );
//     }
//   }, [searchQuery, combinedArray]);

//   // Pagination logic
//   const indexOfLastItem = currentPage * itemsPerPage;
//   const indexOfFirstItem = indexOfLastItem - itemsPerPage;
//   const currentData = (searchQuery ? allUser : combinedArray)?.slice(
//     indexOfFirstItem,
//     indexOfLastItem
//   );
//   const totalPages = Math.ceil(
//     (searchQuery ? allUser : combinedArray)?.length / itemsPerPage
//   );

//   const handleSearch = (e) => {
//     setSearchQuery(e.target.value);
//   };

//   const handleNext = () => {
//     if (currentPage < totalPages) setCurrentPage(currentPage + 1);
//   };

//   const handlePrevious = () => {
//     if (currentPage > 1) setCurrentPage(currentPage - 1);
//   };

//   return (
//     <div className="p-4 my-5 lg:mx-3 sm:mx-3">
//       <div className="">
//         <label htmlFor="search" className="sr-only">
//           Search
//         </label>
//         <input
//           id="search"
//           name="search"
//           value={searchQuery}
//           onChange={(e) => handleSearch(e)}
//           type="text"
//           placeholder="Search here..."
//           className="block w-[50vh] px-2 py-2 border border-black/50 rounded-sm  text-base text-gray-900     placeholder:text-gray-900 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-lg sm:leading-6"
//         />
//       </div>
//       {message && <SuccessAlert message={message} />}
//       {error && <ErrorAlert error={error} />}

//       <div
//         className={`${
//           loading ? "items-center h-[560px]" : "h-full"
//         } overflow-x-auto`}
//       >
//         {loading ? (
//           <Loader />
//         ) : (
//           <div className="flow-root mt-4">
//             <div className="inline-block min-w-full">
//               <table className="overflow-hidden min-w-full divide-y divide-gray-700">
//                 <thead className="text-lg leading-6 text-gray-100 bg-black border border-b">
//                   <tr>
//                     <th className="py-2 pr-8 pl-2 text-base font-medium border-r sm:pl-6 lg:pl-8">
//                       Name
//                     </th>
//                     <th className="py-2 pr-8 pl-2 text-base font-medium border-r sm:table-cell">
//                       Last Deposit
//                     </th>
//                     <th className="py-2 pr-4 pl-2 text-base font-medium text-right border-r sm:pr-8 sm:text-left lg:pr-20">
//                       Last Withdrawal
//                     </th>
//                     <th className="py-2 pr-4 pl-2 text-base font-medium text-right border-r sm:pr-8 sm:text-left lg:pr-20">
//                       Activation Date
//                     </th>
//                     <th className="py-2 pr-8 pl-2 text-base font-medium border-r md:table-cell lg:pr-20">
//                       Last Update
//                     </th>
//                     <th className="py-2 pr-4 pl-2 text-base font-medium border-r sm:table-cell sm:pr-6 lg:pr-20">
//                       Last Login
//                     </th>
//                     <th className="py-2 pr-4 pl-2 text-base font-medium border-r sm:table-cell sm:pr-6 lg:pr-20">
//                       Created At
//                     </th>
//                   </tr>
//                 </thead>
//                 <tbody className="divide-y divide-white/5">
//                   {currentData?.length > 0 ? 
//                   (currentData?.map((item, index) => (
//                     <tr key={index} className="text-gray-900 even:bg-blue-200 even:text:white">
//                       <td className="py-4 pl-4 border-r border-gray-400 sm:pl-6 lg:pl-8">
//                         <div className="flex items-center">
//                           <div className="text-base font-medium leading-6 truncate">
//                             {item?.name}
//                           </div>
//                         </div>
//                       </td>
//                       <td className="py-4 pl-4 border-r border-gray-400 sm:pl-6 lg:pl-8 sm:table-cell sm:pr-8">
//                         <div className="font-mono text-base leading-6">
//                           {new Date(item?.last_deposit_created_at).toLocaleDateString()}
//                         </div>
//                         <div className="px-2 py-2 text-xs font-medium rounded-md ring-1 ring-inset bg-gray-700/40 ring-white/10">
//                           {item?.last_deposit_amount}
//                         </div>
//                       </td>
//                       <td className="py-4 pl-4 border-r border-gray-400 sm:pl-6 lg:pl-8 sm:table-cell sm:pr-8">
//                         <div className="font-mono text-base leading-6">
//                           {new Date(item?.last_withdrawal_created_at).toLocaleDateString()}
//                         </div>
//                         <div className="px-2 py-2 text-xs font-medium rounded-md ring-1 ring-inset bg-gray-700/40 ring-white/10">
//                           {item?.last_withdrawal_amount}
//                         </div>
//                       </td>
//                       <td className="py-4 pl-4 text-base leading-6 border-r border-gray-400 sm:pl-6 lg:pl-8 md:table-cell">
//                         {item?.activation_date}
//                       </td>
//                       <td className="py-4 pl-4 text-base leading-6 border-r border-gray-400 sm:pl-6 lg:pl-8 md:table-cell">
//                         {new Date(item?.updated_at).toLocaleDateString()}
//                       </td>
//                       <td className="py-4 pl-4 text-base leading-6 border-r border-gray-400 sm:pl-6 lg:pl-8 md:table-cell">
//                         {new Date(item?.last_login).toLocaleDateString()}
//                       </td>
//                       <td className="py-4 pl-4 text-base leading-6 border-r border-gray-400 sm:pl-6 lg:pl-8 md:table-cell">
//                         {new Date(item?.created_at).toLocaleDateString()}
//                       </td>
//                     </tr>
//                   ))) : (
//                     <tr className="text-gray-100">
//                         <td colSpan={7} className="px-4 py-4 text-base text-center text-gray-900 bg-blue-200">
//                         No users found.
//                       </td>
//                     </tr>
//                   )}
//                 </tbody>
//               </table>
//               <div className="flex justify-between p-4">
//                 <button
//                   onClick={handlePrevious}
//                   disabled={currentPage === 1}
//                   className={`px-5 text-lg py-1 rounded-md ${
//                     currentPage === 1
//                       ? "bg-blue-700 text-gray-300 cursor-not-allowed"
//                       : "bg-indigo-600 text-white"
//                   }`}
//                 >
//                   Previous
//                 </button>
//                 <button
//                   onClick={handleNext}
//                   disabled={currentPage === totalPages}
//                   className={`px-5 py-1 text-lg rounded-md ${
//                     currentPage === totalPages
//                       ? "bg-blue-700 text-gray-300 cursor-not-allowed"
//                       : "bg-indigo-600 text-white"
//                   }`}
//                 >
//                   Next
//                 </button>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }








import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllDeposite } from "../redux/depositeSlice";
import { getAllUsers } from "../redux/userSlice";
import { getAllWithdrawal } from "../redux/withdrawalSlice";
import Loader from "../BaseFile/comman/Loader";
import SuccessAlert from "../BaseFile/comman/SuccessAlert";
import ErrorAlert from "../BaseFile/comman/ErrorAlert";
import { FiUser, FiDollarSign, FiActivity, FiCalendar } from "react-icons/fi";
import { BsArrowDownCircle, BsArrowUpCircle } from "react-icons/bs";

export default function AdminReport() {
  const dispatch = useDispatch();
  const { allusers } = useSelector((state) => state.allusers);
  const { allwithdrawal } = useSelector((state) => state.allwithdrawal);
  const { alldeposite, loading, error, message } = useSelector(
    (state) => state.alldeposite
  );

  const [allUser, setAllUser] = useState();
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1); // Current page number
  const [itemsPerPage] = useState(10); // Number of items per page
  const [sortField, setSortField] = useState("name");
  const [sortDirection, setSortDirection] = useState("asc");

  useEffect(() => {
    dispatch(getAllUsers());
    dispatch(getAllWithdrawal());
    dispatch(getAllDeposite());
  }, [dispatch]);

  function findLastEntryByCreatedAt(arr) {
    return arr?.reduce(
      (acc, current) => (acc.created_at > current.created_at ? acc : current),
      {}
    );
  }

  const combinedArray = allusers?.map((user) => {
    let lastWithdrawal = findLastEntryByCreatedAt(
      allwithdrawal?.filter((w) => w.user_id === user.id)
    );
    let lastDeposit = findLastEntryByCreatedAt(
      alldeposite?.filter((d) => d.user_id === user.id)
    );
    return {
      id: user?.id,
      name: user?.username,
      last_login: user?.last_login,
      created_at: user?.created_at,
      updated_at: user?.updated_at,
      active_plan: user?.active_plan,
      activation_date: user?.activation_date,
      last_withdrawal_created_at: lastWithdrawal?.createdAT || null,
      last_withdrawal_amount: lastWithdrawal?.amount || null,
      last_deposit_created_at: lastDeposit?.createdAT || null,
      last_deposit_amount: lastDeposit?.amount || null,
    };
  });

  useEffect(() => {
    setAllUser(combinedArray);
    if (searchQuery) {
      setAllUser(
        combinedArray?.filter((p) =>
          p.name?.toLowerCase().includes(searchQuery.toLowerCase())
        )
      );
    }
  }, [searchQuery, combinedArray]);

  const handleSort = (field) => {
    const isAsc = sortField === field && sortDirection === "asc";
    setSortDirection(isAsc ? "desc" : "asc");
    setSortField(field);
  };

  const sortedData = React.useMemo(() => {
    if (!allUser) return [];
    
    const sortableData = [...allUser];
    
    return sortableData.sort((a, b) => {
      // Handle null values
      if (a[sortField] === null) return 1;
      if (b[sortField] === null) return -1;
      
      if (sortField.includes('amount')) {
        return sortDirection === "asc" 
          ? parseFloat(a[sortField]) - parseFloat(b[sortField])
          : parseFloat(b[sortField]) - parseFloat(a[sortField]);
      }
      
      if (sortField.includes('date') || sortField.includes('created_at') || 
          sortField.includes('updated_at') || sortField.includes('login')) {
        return sortDirection === "asc" 
          ? new Date(a[sortField]) - new Date(b[sortField])
          : new Date(b[sortField]) - new Date(a[sortField]);
      }
      
      // Default string comparison
      return sortDirection === "asc"
        ? a[sortField]?.localeCompare(b[sortField])
        : b[sortField]?.localeCompare(a[sortField]);
    });
  }, [allUser, sortField, sortDirection]);

  // Pagination logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentData = sortedData?.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(sortedData?.length / itemsPerPage);

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1); // Reset to first page on new search
  };

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const handlePrevious = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  // Summary calculations for dashboard cards
  const calculateTotalDeposits = () => {
    return alldeposite?.reduce((sum, deposit) => sum + parseFloat(deposit.amount || 0), 0);
  };

  const calculateTotalWithdrawals = () => {
    return allwithdrawal?.reduce((sum, withdrawal) => sum + parseFloat(withdrawal.amount || 0), 0);
  };

  const getRecentUsers = () => {
    const sortedUsers = [...(allusers || [])].sort((a, b) => 
      new Date(b.created_at) - new Date(a.created_at)
    );
    return sortedUsers.slice(0, 5);
  };

  // Function to format currency
  const formatCurrency = (value) => {
    if (!value) return "$0";
    return `$${parseFloat(value).toFixed(2)}`;
  };

  // Generate monthly activity data for the graph
  const getMonthlyActivityData = () => {
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const currentYear = new Date().getFullYear();
    const data = Array(12).fill().map((_, i) => ({
      month: monthNames[i],
      deposits: 0,
      withdrawals: 0
    }));

    // Count deposits by month
    alldeposite?.forEach(deposit => {
      const date = new Date(deposit.createdAT);
      if (date.getFullYear() === currentYear) {
        data[date.getMonth()].deposits += parseFloat(deposit.amount || 0);
      }
    });

    // Count withdrawals by month
    allwithdrawal?.forEach(withdrawal => {
      const date = new Date(withdrawal.createdAT);
      if (date.getFullYear() === currentYear) {
        data[date.getMonth()].withdrawals += parseFloat(withdrawal.amount || 0);
      }
    });

    return data;
  };

  const monthlyData = getMonthlyActivityData();
  
  // Find the maximum value for scaling the graph
  const maxValue = Math.max(
    ...monthlyData.map(d => Math.max(d.deposits, d.withdrawals))
  );

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="p-6">
        {message && <SuccessAlert message={message} />}
        {error && <ErrorAlert error={error} />}

        {/* Dashboard Header */}
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-orange-500">User Activity Reports</h1>
          <p className="text-gray-600">Overview of all user transactions and activities</p>
        </div>

        {/* Stats Overview Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          <div className="bg-white p-6 rounded-lg shadow">
            <div className="flex items-center">
              <div className="p-3 rounded-full bg-orange-100 mr-4">
                <FiUser className="text-orange-500 text-xl" />
              </div>
              <div>
                <p className="text-sm text-gray-500">Total Users</p>
                <p className="text-2xl font-bold text-gray-800">{allusers?.length || 0}</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow">
            <div className="flex items-center">
              <div className="p-3 rounded-full bg-green-100 mr-4">
                <BsArrowDownCircle className="text-green-500 text-xl" />
              </div>
              <div>
                <p className="text-sm text-gray-500">Total Deposits</p>
                <p className="text-2xl font-bold text-gray-800">{formatCurrency(calculateTotalDeposits())}</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow">
            <div className="flex items-center">
              <div className="p-3 rounded-full bg-red-100 mr-4">
                <BsArrowUpCircle className="text-red-500 text-xl" />
              </div>
              <div>
                <p className="text-sm text-gray-500">Total Withdrawals</p>
                <p className="text-2xl font-bold text-gray-800">{formatCurrency(calculateTotalWithdrawals())}</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow">
            <div className="flex items-center">
              <div className="p-3 rounded-full bg-blue-100 mr-4">
                <FiActivity className="text-blue-500 text-xl" />
              </div>
              <div>
                <p className="text-sm text-gray-500">Net Balance</p>
                <p className="text-2xl font-bold text-gray-800">
                  {formatCurrency(calculateTotalDeposits() - calculateTotalWithdrawals())}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Activity Graph */}
        <div className="bg-white p-6 rounded-lg shadow mb-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Monthly Activity</h2>
          <div className="h-64 flex items-end space-x-2 overflow-auto">
            {monthlyData.map((data, index) => (
              <div key={index} className="flex-1 flex flex-col items-center">
                <div className="w-full flex flex-col items-center space-y-1">
                  <div 
                    className="w-full bg-green-100 hover:bg-green-200 transition-all rounded-t"
                    style={{ 
                      height: `${(data.deposits / maxValue) * 100}%`,
                      minHeight: data.deposits > 0 ? '4px' : '0'
                    }}
                    title={`Deposits: ${formatCurrency(data.deposits)}`}
                  ></div>
                  <div 
                    className="w-full bg-red-100 hover:bg-red-200 transition-all rounded-t"
                    style={{ 
                      height: `${(data.withdrawals / maxValue) * 100}%`,
                      minHeight: data.withdrawals > 0 ? '4px' : '0'
                    }}
                    title={`Withdrawals: ${formatCurrency(data.withdrawals)}`}
                  ></div>
                </div>
                <div className="text-xs text-gray-500 mt-2">{data.month}</div>
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-4 space-x-4">
            <div className="flex items-center">
              <div className="w-3 h-3 bg-green-100 mr-2"></div>
              <span className="text-xs text-gray-600">Deposits</span>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 bg-red-100 mr-2"></div>
              <span className="text-xs text-gray-600">Withdrawals</span>
            </div>
          </div>
        </div>

        {/* Search and Filters */}
        <div className="bg-white p-4 rounded-lg shadow mb-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-2 md:space-y-0">
            <div className="w-full md:w-1/3">
              <label htmlFor="search" className="block text-sm font-medium text-gray-700 mb-1">
                Search Users
              </label>
              <div className="relative">
                <input
                  id="search"
                  name="search"
                  value={searchQuery}
                  onChange={handleSearch}
                  type="text"
                  placeholder="Search by username..."
                  className="block w-full px-4 py-2 rounded-md border border-gray-300 shadow-sm focus:ring-orange-500 focus:border-orange-500"
                />
                <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                  <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
              </div>
            </div>

            <div className="text-sm text-gray-500 flex items-center">
              <span>{sortedData?.length || 0} users found</span>
              <span className="mx-2">•</span>
              <span>Page {currentPage} of {totalPages || 1}</span>
            </div>
          </div>
        </div>

        {/* User Data Table */}
        <div className="bg-white rounded-lg shadow mb-6">
          {loading ? (
            <div className="flex items-center justify-center h-64">
              <Loader />
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-orange-50">
                  <tr>
                    <th 
                      className="px-6 py-3 text-left text-xs font-medium text-orange-500 uppercase tracking-wider cursor-pointer"
                      onClick={() => handleSort("name")}
                    >
                      <div className="flex items-center">
                        <span>Name</span>
                        {sortField === "name" && (
                          <span className="ml-1">
                            {sortDirection === "asc" ? "↑" : "↓"}
                          </span>
                        )}
                      </div>
                    </th>
                    <th 
                      className="px-6 py-3 text-left text-xs font-medium text-orange-500 uppercase tracking-wider cursor-pointer"
                      onClick={() => handleSort("last_deposit_amount")}
                    >
                      <div className="flex items-center">
                        <span>Last Deposit</span>
                        {sortField === "last_deposit_amount" && (
                          <span className="ml-1">
                            {sortDirection === "asc" ? "↑" : "↓"}
                          </span>
                        )}
                      </div>
                    </th>
                    <th 
                      className="px-6 py-3 text-left text-xs font-medium text-orange-500 uppercase tracking-wider cursor-pointer"
                      onClick={() => handleSort("last_withdrawal_amount")}
                    >
                      <div className="flex items-center">
                        <span>Last Withdrawal</span>
                        {sortField === "last_withdrawal_amount" && (
                          <span className="ml-1">
                            {sortDirection === "asc" ? "↑" : "↓"}
                          </span>
                        )}
                      </div>
                    </th>
                    <th 
                      className="px-6 py-3 text-left text-xs font-medium text-orange-500 uppercase tracking-wider cursor-pointer"
                      onClick={() => handleSort("activation_date")}
                    >
                      <div className="flex items-center">
                        <span>Activation Date</span>
                        {sortField === "activation_date" && (
                          <span className="ml-1">
                            {sortDirection === "asc" ? "↑" : "↓"}
                          </span>
                        )}
                      </div>
                    </th>
                    <th 
                      className="px-6 py-3 text-left text-xs font-medium text-orange-500 uppercase tracking-wider cursor-pointer"
                      onClick={() => handleSort("updated_at")}
                    >
                      <div className="flex items-center">
                        <span>Last Update</span>
                        {sortField === "updated_at" && (
                          <span className="ml-1">
                            {sortDirection === "asc" ? "↑" : "↓"}
                          </span>
                        )}
                      </div>
                    </th>
                    <th 
                      className="px-6 py-3 text-left text-xs font-medium text-orange-500 uppercase tracking-wider cursor-pointer"
                      onClick={() => handleSort("last_login")}
                    >
                      <div className="flex items-center">
                        <span>Last Login</span>
                        {sortField === "last_login" && (
                          <span className="ml-1">
                            {sortDirection === "asc" ? "↑" : "↓"}
                          </span>
                        )}
                      </div>
                    </th>
                    <th 
                      className="px-6 py-3 text-left text-xs font-medium text-orange-500 uppercase tracking-wider cursor-pointer"
                      onClick={() => handleSort("created_at")}
                    >
                      <div className="flex items-center">
                        <span>Created At</span>
                        {sortField === "created_at" && (
                          <span className="ml-1">
                            {sortDirection === "asc" ? "↑" : "↓"}
                          </span>
                        )}
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {currentData?.length > 0 ? (
                    currentData.map((item, index) => (
                      <tr 
                        key={index} 
                        className={`hover:bg-orange-50 transition-colors ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}
                      >
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="flex-shrink-0 h-8 w-8 flex items-center justify-center rounded-full bg-orange-100 text-orange-500">
                              {item?.name?.charAt(0)?.toUpperCase() || "U"}
                            </div>
                            <div className="ml-4">
                              <div className="text-sm font-medium text-gray-900">
                                {item?.name || "Unknown User"}
                              </div>
                              <div className="text-xs text-gray-500">
                                ID: {item?.id}
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          {item?.last_deposit_created_at ? (
                            <div>
                              <div className="text-sm text-gray-900">
                                {formatCurrency(item?.last_deposit_amount)}
                              </div>
                              <div className="text-xs text-gray-500">
                                {new Date(item?.last_deposit_created_at).toLocaleDateString()}
                              </div>
                            </div>
                          ) : (
                            <span className="text-xs text-gray-500">No deposits</span>
                          )}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          {item?.last_withdrawal_created_at ? (
                            <div>
                              <div className="text-sm text-gray-900">
                                {formatCurrency(item?.last_withdrawal_amount)}
                              </div>
                              <div className="text-xs text-gray-500">
                                {new Date(item?.last_withdrawal_created_at).toLocaleDateString()}
                              </div>
                            </div>
                          ) : (
                            <span className="text-xs text-gray-500">No withdrawals</span>
                          )}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">
                            {item?.activation_date ? (
                              item.activation_date
                            ) : (
                              <span className="text-xs text-gray-500">Not activated</span>
                            )}
                          </div>
                          {item?.active_plan && (
                            <div className="text-xs text-gray-500">
                              Plan: {item.active_plan}
                            </div>
                          )}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">
                            {item?.updated_at ? new Date(item.updated_at).toLocaleDateString() : "N/A"}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">
                            {item?.last_login ? new Date(item.last_login).toLocaleDateString() : "N/A"}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">
                            {item?.created_at ? new Date(item.created_at).toLocaleDateString() : "N/A"}
                          </div>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan={7} className="px-6 py-4 text-sm text-center text-gray-500 bg-gray-50">
                        No users found.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          )}

          {/* Pagination Controls */}
          <div className="px-6 py-4 bg-white border-t border-gray-200 flex items-center justify-between flex-wrap">
            <button
              onClick={handlePrevious}
              disabled={currentPage === 1}
              className={`px-4 py-2 text-sm rounded-md ${
                currentPage === 1
                  ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                  : "bg-orange-50 text-orange-500 hover:bg-orange-100"
              }`}
            >
              Previous
            </button>
            
            <div className="flex items-center">
              {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                // Logic to show pages around current page
                let pageNum;
                if (totalPages <= 5) {
                  pageNum = i + 1;
                } else if (currentPage <= 3) {
                  pageNum = i + 1;
                } else if (currentPage >= totalPages - 2) {
                  pageNum = totalPages - 4 + i;
                } else {
                  pageNum = currentPage - 2 + i;
                }
                
                return (
                  <button
                    key={pageNum}
                    onClick={() => setCurrentPage(pageNum)}
                    className={`mx-1 px-3 py-1 text-sm rounded-md ${
                      currentPage === pageNum
                        ? "bg-orange-500 text-white"
                        : "bg-white text-gray-700 hover:bg-orange-50"
                    }`}
                  >
                    {pageNum}
                  </button>
                );
              })}
            </div>
            
            <button
              onClick={handleNext}
              disabled={currentPage === totalPages || totalPages === 0}
              className={`px-4 py-2 text-sm rounded-md ${
                currentPage === totalPages || totalPages === 0
                  ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                  : "bg-orange-50 text-orange-500 hover:bg-orange-100"
              }`}
            >
              Next
            </button>
          </div>
        </div>

        {/* Recent Users Section */}
        <div className="bg-white rounded-lg shadow p-6 mb-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Recently Added Users</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {getRecentUsers().map((user, index) => (
              <div key={index} className="bg-orange-50 p-4 rounded-lg">
                <div className="flex items-center space-x-3">
                  <div className="flex-shrink-0 h-10 w-10 flex items-center justify-center rounded-full bg-orange-100 text-orange-500 font-bold">
                    {user?.username?.charAt(0)?.toUpperCase() || "U"}
                  </div>
                  <div>
                    <div className="text-sm font-medium text-gray-900">{user?.username}</div>
                    <div className="text-xs text-gray-500">
                      {new Date(user?.created_at).toLocaleDateString()}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}