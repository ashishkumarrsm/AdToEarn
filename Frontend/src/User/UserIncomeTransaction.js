
// import { useParams } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import { useEffect, useState, useMemo } from "react";
// import Loader from "../BaseFile/comman/Loader";
// import {
//   getTransactionById,
//   clearErrors,
//   clearMessage,
// } from "../redux/transactionSlice";

// export default function UserTransactionHistory() {
//   const { table_name, fit } = useParams();
//   const dispatch = useDispatch();
//   const { auth } = useSelector((state) => state.auth);
//   const { transaction, loading, error, message } = useSelector(
//     (state) => state.transaction
//   );
  
//   const [currentPage, setCurrentPage] = useState(1);
//   const [searchTerm, setSearchTerm] = useState("");
//   const [activeTab, setActiveTab] = useState("all");
//   const entriesPerPage = 20;

//   // Fetch transactions on component mount
//   useEffect(() => {
//     if (table_name && auth?.id) {
//       dispatch(getTransactionById({ table_name, user_id: auth.id }));
//     }
//   }, [dispatch, table_name, auth?.id]);

//   // Handle error and message cleanup
//   useEffect(() => {
//     let errorInterval, messageInterval;
    
//     if (error) {
//       errorInterval = setInterval(() => dispatch(clearErrors()), 3000);
//     }
    
//     if (message) {
//       messageInterval = setInterval(() => dispatch(clearMessage()), 3000);
//     }
    
//     return () => {
//       if (errorInterval) clearInterval(errorInterval);
//       if (messageInterval) clearInterval(messageInterval);
//     };
//   }, [error, message, dispatch]);

//   // Get unique transaction types for filtering tabs
//   const transactionTypes = useMemo(() => {
//     if (!transaction?.length) return [];
//     const types = new Set();
    
//     transaction.forEach(item => {
//       const type = table_name === "invest_level_transaction" 
//         ? item?.type 
//         : table_name.split("_")[0];
//       if (type) types.add(type.toLowerCase());
//     });
  
//     return Array.from(types);
//   }, [transaction, table_name]);

//   // Process and filter transactions based on search and active tab
//   const processedTransactions = useMemo(() => {
//     if (!transaction?.length) return [];
    
//     let filteredData = [...transaction].reverse();
    
//     // Apply filter by URL parameter if provided
//     if (fit) {
//       filteredData = filteredData.filter(item => 
//         item?.type?.toLowerCase().includes(fit.toLowerCase())
//       );
//     }
    
//     // Apply active tab filter
//     if (activeTab !== "all") {
//       filteredData = filteredData.filter(item => {
//         const itemType = table_name === "invest_level_transaction" 
//           ? item?.type 
//           : table_name.split("_")[0];
//         return itemType?.toLowerCase() === activeTab.toLowerCase();
//       });
//     }
    
//     // Apply search filter
//     if (searchTerm) {
//       filteredData = filteredData.filter(item => 
//         Object.values(item).some(value => 
//           value && value.toString().toLowerCase().includes(searchTerm.toLowerCase())
//         )
//       );
//     }
    
//     return filteredData;
//   }, [transaction, fit, searchTerm, activeTab, table_name]);

//   // Calculate pagination
//   const totalPages = Math.max(1, Math.ceil(processedTransactions.length / entriesPerPage));
//   const currentTransactions = useMemo(() => {
//     return processedTransactions.slice(
//       (currentPage - 1) * entriesPerPage, 
//       currentPage * entriesPerPage
//     );
//   }, [processedTransactions, currentPage, entriesPerPage]);

//   // Pagination handlers
//   const goToNextPage = () => {
//     if (currentPage < totalPages) setCurrentPage(currentPage + 1);
//   };

//   const goToPreviousPage = () => {
//     if (currentPage > 1) setCurrentPage(currentPage - 1);
//   };

//   // Format currency value
//   const formatCurrency = (value) => {
//     if (!value) return "$0.00";
//     return new Intl.NumberFormat('en-US', {
//       style: 'currency',
//       currency: 'USD',
//       minimumFractionDigits: 2
//     }).format(value);
//   };

//   // Format date
//   const formatDate = (dateString) => {
//     if (!dateString) return "";
//     const date = new Date(dateString);
//     if (isNaN(date.getTime())) return dateString;
    
//     return new Intl.DateTimeFormat('en-US', {
//       year: 'numeric',
//       month: 'short',
//       day: 'numeric',
//       hour: '2-digit',
//       minute: '2-digit'
//     }).format(date);
//   };

//   // Get transaction type and status indicators
//   const getTransactionTypeClass = (item) => {
//     const type = table_name === "invest_level_transaction" 
//       ? item?.type?.toLowerCase() 
//       : table_name.split("_")[0].toLowerCase();
      
//     const typeClasses = {
//       deposit: "bg-green-100 text-green-800",
//       withdraw: "bg-red-100 text-red-800",
//       reward: "bg-purple-100 text-purple-800",
//       referral: "bg-blue-100 text-blue-800",
//       invest: "bg-indigo-100 text-indigo-800",
//       cto: "bg-amber-100 text-amber-800",
//       default: "bg-gray-100 text-gray-800",
//       roi: "bg-gray-100 text-gray-800"
//     };
    
//     return typeClasses[type] || typeClasses.default;
//   };

//   // Check if data is available
//   const noDataAvailable = !loading && currentTransactions.length === 0;

//   return (
//     <div className="p-6 bg-gray-100 min-h-screen">
//       {/* Header Section */}
//       <div className="flex flex-col sm:flex-row justify-between items-center mb-8">
//         <div className="mb-4 sm:mb-0">
//           <h3 className="text-3xl font-bold text-orange-500">Transaction History</h3>
//           <p className="text-gray-600 mt-1">Monitor your financial activities</p>
//         </div>
//         <div className="relative w-full sm:w-64">
//           <input
//             value={searchTerm}
//             onChange={(e) => {
//               setSearchTerm(e.target.value);
//               setCurrentPage(1);
//             }}
//             className="w-full py-2 pl-4 pr-10 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 text-gray-700"
//             placeholder="Search transactions..."
//           />
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             className="absolute top-2 right-3 h-5 w-5 text-orange-500"
//             fill="none"
//             viewBox="0 0 24 24"
//             stroke="currentColor"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth="2"
//               d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
//             />
//           </svg>
//         </div>
//       </div>

//       {/* Alerts Section */}
//       {(error || message) && (
//         <div className="mb-6">
//           {error && (
//             <div className="bg-red-50 border-l-4 border-red-500 text-red-700 p-4 rounded-r-md flex items-center">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 className="h-5 w-5 mr-2"
//                 viewBox="0 0 20 20"
//                 fill="currentColor"
//               >
//                 <path
//                   fillRule="evenodd"
//                   d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
//                   clipRule="evenodd"
//                 />
//               </svg>
//               <span>{error}</span>
//             </div>
//           )}
//           {message && (
//             <div className="bg-green-50 border-l-4 border-green-500 text-green-700 p-4 rounded-r-md flex items-center">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 className="h-5 w-5 mr-2"
//                 viewBox="0 0 20 20"
//                 fill="currentColor"
//               >
//                 <path
//                   fillRule="evenodd"
//                   d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
//                   clipRule="evenodd"
//                 />
//               </svg>
//               <span>{message}</span>
//             </div>
//           )}
//         </div>
//       )}

//       {/* Filter Tabs */}
//       <div className="mb-6 flex flex-wrap gap-2">
//         <button
//           onClick={() => { 
//             setActiveTab("all"); 
//             setCurrentPage(1);
//           }}
//           className={`px-4 py-2 rounded-md font-medium transition-all ${
//             activeTab === "all"
//               ? "bg-orange-500 text-white shadow-md"
//               : "bg-gray-200 text-gray-600 hover:bg-orange-100 hover:text-orange-500"
//           }`}
//         >
//           All
//         </button>
//         {transactionTypes.map((type) => (
//           <button
//             key={type}
//             onClick={() => { 
//               setActiveTab(type); 
//               setCurrentPage(1);
//             }}
//             className={`px-4 py-2 rounded-md font-medium transition-all capitalize ${
//               activeTab === type
//                 ? "bg-orange-500 text-white shadow-md"
//                 : "bg-gray-200 text-gray-600 hover:bg-orange-100 hover:text-orange-500"
//             }`}
//           >
//             {type}
//           </button>
//         ))}
//       </div>

//       {/* Stats Summary Cards */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
//         {[
//           {
//             title: "Total Transactions",
//             value: transaction?.length || 0,
//             icon: "M12 4v16m8-8H4",
//             colors: "border-orange-500 bg-orange-50",
//           },
//           {
//             title: "Total Earned",
//             value: formatCurrency(
//               transaction?.reduce((acc, item) => acc + (parseFloat(item.amount) || 0), 0) || 0
//             ),
//             icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
//             colors: "border-green-500 bg-green-50",
//           },
//           {
//             title: "Latest Transaction",
//             value: transaction && transaction.length > 0 
//               ? formatCurrency(transaction[transaction.length - 1]?.amount) 
//               : "$0.00",
//             icon: "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6",
//             colors: "border-purple-500 bg-purple-50",
//           },
//           {
//             title: "Filtered Results",
//             value: processedTransactions.length,
//             icon: "M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z",
//             colors: "border-amber-500 bg-amber-50",
//           },
//         ].map((stat, index) => (
//           <div
//             key={index}
//             className={`p-4 rounded-lg shadow-md border-l-4 ${stat.colors}`}
//           >
//             <div className="flex items-center justify-between">
//               <div>
//                 <p className="text-gray-600 text-sm">{stat.title}</p>
//                 <h4 className="text-lg font-bold text-orange-500">{stat.value}</h4>
//               </div>
//               <div className="p-2 bg-white rounded-full">
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   className="h-5 w-5 text-orange-500"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d={stat.icon}
//                   />
//                 </svg>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Table Section */}
//       <div className="bg-white rounded-lg shadow-md overflow-hidden">
//         {loading ? (
//           <div className="flex justify-center items-center h-48">
//             <Loader />
//           </div>
//         ) : (
//           <div className="overflow-x-auto">
//             <table className="w-full">
//               <thead>
//                 <tr className="bg-orange-50 text-orange-500">
//                   <th className="p-3 text-left font-semibold">No.</th>
//                   {table_name !== "cto_transaction" && (
//                     <th className="p-3 text-left font-semibold">ID</th>
//                   )}
//                   <th className="p-3 text-left font-semibold">Amount</th>
//                   <th className="p-3 text-left font-semibold">Type</th>
//                   {table_name !== "reward_transaction" &&
//                     table_name !== "cto_transaction" && (
//                       <>
//                         <th className="p-3 text-left font-semibold">On Amount</th>
//                         <th className="p-3 text-left font-semibold">Percent</th>
//                       </>
//                     )}
//                   <th className="p-3 text-left font-semibold">Date</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {noDataAvailable ? (
//                   <tr>
//                     <td 
//                       colSpan={
//                         table_name !== "reward_transaction" && table_name !== "cto_transaction"
//                           ? table_name !== "cto_transaction" ? 7 : 6
//                           : table_name !== "cto_transaction" ? 5 : 4
//                       } 
//                       className="py-12 text-center text-gray-500"
//                     >
//                       <div className="flex flex-col items-center">
//                         <svg
//                           xmlns="http://www.w3.org/2000/svg"
//                           className="h-10 w-10 text-orange-500 mb-2"
//                           fill="none"
//                           viewBox="0 0 24 24"
//                           stroke="currentColor"
//                         >
//                           <path
//                             strokeLinecap="round"
//                             strokeLinejoin="round"
//                             strokeWidth={1.5}
//                             d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
//                           />
//                         </svg>
//                         <p>No transactions found</p>
//                         <p className="text-sm mt-1">Try adjusting your search or filters</p>
//                       </div>
//                     </td>
//                   </tr>
//                 ) : (
//                   currentTransactions.map((item, index) => (
//                     <tr
//                       key={index}
//                       className="border-t border-gray-200 hover:bg-orange-50"
//                     >
//                       <td className="p-3 text-gray-700">
//                         {(currentPage - 1) * entriesPerPage + index + 1}
//                       </td>
//                       {table_name !== "cto_transaction" && (
//                         <td className="p-3 text-gray-700">{item?.email || '—'}</td>
//                       )}
//                       <td className="p-3">
//                         <span className="font-medium text-orange-500">
//                           {formatCurrency(item?.amount)}
//                         </span>
//                       </td>
//                       <td className="p-3">
//                         <span className={`px-2 py-1 rounded text-xs ${getTransactionTypeClass(item)}`}>
//                           {table_name === "invest_level_transaction"
//                             ? item?.type
//                             : table_name.split("_")[0]}
//                         </span>
//                       </td>
//                       {table_name !== "reward_transaction" &&
//                         table_name !== "cto_transaction" && (
//                           <>
//                             <td className="p-3 text-gray-700">
//                               {formatCurrency(item?.onamount)}
//                             </td>
//                             <td className="p-3 text-gray-700">
//                               {item?.percent ? `${item.percent}%` : '—'}
//                             </td>
//                           </>
//                         )}
//                       <td className="p-3 text-gray-700">
//                         {formatDate(item?.createdAt)}
//                       </td>
//                     </tr>
//                   ))
//                 )}
//               </tbody>
//             </table>
//           </div>
//         )}
//       </div>

//       {/* Pagination Section */}
//       {!loading && processedTransactions.length > 0 && (
//         <div className="flex flex-col sm:flex-row justify-between items-center mt-6 gap-4">
//           <div className="text-gray-600">
//             Showing {(currentPage - 1) * entriesPerPage + 1} to {Math.min(currentPage * entriesPerPage, processedTransactions.length)} of {processedTransactions.length} entries
//           </div>
//           <div className="flex items-center gap-2">
//             <button
//               onClick={goToPreviousPage}
//               disabled={currentPage === 1}
//               className={`px-3 py-1 rounded-md ${
//                 currentPage === 1
//                   ? "bg-gray-200 text-gray-400 cursor-not-allowed"
//                   : "bg-orange-500 text-white hover:bg-orange-600"
//               }`}
//             >
//               Prev
//             </button>
//             {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
//               let pageToShow;
//               if (totalPages <= 5) {
//                 pageToShow = i + 1;
//               } else if (currentPage <= 3) {
//                 pageToShow = i + 1;
//               } else if (currentPage >= totalPages - 2) {
//                 pageToShow = totalPages - 4 + i;
//               } else {
//                 pageToShow = currentPage - 2 + i;
//               }
//               return (
//                 <button
//                   key={i}
//                   onClick={() => setCurrentPage(pageToShow)}
//                   className={`px-3 py-1 rounded-md ${
//                     currentPage === pageToShow
//                       ? "bg-orange-500 text-white"
//                       : "bg-gray-200 text-gray-600 hover:bg-orange-100"
//                   }`}
//                 >
//                   {pageToShow}
//                 </button>
//               );
//             })}
//             {totalPages > 5 && currentPage < totalPages - 2 && (
//               <>
//                 <span className="px-2 text-gray-600">...</span>
//                 <button
//                   onClick={() => setCurrentPage(totalPages)}
//                   className="px-3 py-1 rounded-md bg-gray-200 text-gray-600 hover:bg-orange-100"
//                 >
//                   {totalPages}
//                 </button>
//               </>
//             )}
//             <button
//               onClick={goToNextPage}
//               disabled={currentPage === totalPages}
//               className={`px-3 py-1 rounded-md ${
//                 currentPage === totalPages
//                   ? "bg-gray-200 text-gray-400 cursor-not-allowed"
//                   : "bg-orange-500 text-white hover:bg-orange-600"
//               }`}
//             >
//               Next
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState, useMemo } from "react";
import Loader from "../BaseFile/comman/Loader";
import {
  getTransactionById,
  clearErrors,
  clearMessage,
} from "../redux/transactionSlice";

export default function UserTransactionHistory() {
  const { table_name, fit } = useParams();
  const dispatch = useDispatch();
  const { auth } = useSelector((state) => state.auth);
  const { transaction, loading, error, message } = useSelector(
    (state) => state.transaction
  );
  
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [activeTab, setActiveTab] = useState("all");
  const entriesPerPage = 20;

  // Fetch transactions on component mount
  useEffect(() => {
    if (table_name && auth?.id) {
      dispatch(getTransactionById({ table_name, user_id: auth.id }));
    }
  }, [dispatch, table_name, auth?.id]);

  // Handle error and message cleanup
  useEffect(() => {
    let errorInterval = null;
    let messageInterval = null;
    
    if (error) {
      errorInterval = setInterval(() => dispatch(clearErrors()), 3000);
    }
    
    if (message) {
      messageInterval = setInterval(() => dispatch(clearMessage()), 3000);
    }
    
    return () => {
      if (errorInterval) clearInterval(errorInterval);
      if (messageInterval) clearInterval(messageInterval);
    };
  }, [error, message, dispatch]);

  // Get unique transaction types for filtering tabs
  const transactionTypes = useMemo(() => {
    if (!transaction?.length) return [];
    const types = new Set();
    
    transaction.forEach(item => {
      const type = table_name === "invest_level_transaction" 
        ? item?.type 
        : table_name.split("_")[0];
      if (type) types.add(type.toLowerCase());
    });
  
    return Array.from(types);
  }, [transaction, table_name]);

  // Process and filter transactions based on search and active tab
  const processedTransactions = useMemo(() => {
    if (!transaction?.length) return [];
    
    let filteredData = [...transaction].reverse();
    
    // Apply filter by URL parameter if provided
    if (fit) {
      filteredData = filteredData.filter(item => 
        item?.type?.toLowerCase().includes(fit.toLowerCase())
      );
    }
    
    // Apply active tab filter
    if (activeTab !== "all") {
      filteredData = filteredData.filter(item => {
        const itemType = table_name === "invest_level_transaction" 
          ? item?.type 
          : table_name.split("_")[0];
        return itemType?.toLowerCase() === activeTab.toLowerCase();
      });
    }
    
    // Apply search filter
    if (searchTerm) {
      filteredData = filteredData.filter(item => 
        Object.values(item).some(value => 
          value && value.toString().toLowerCase().includes(searchTerm.toLowerCase())
        )
      );
    }
    
    return filteredData;
  }, [transaction, fit, searchTerm, activeTab, table_name]);

  // Calculate pagination
  const totalPages = Math.max(1, Math.ceil(processedTransactions.length / entriesPerPage));
  const currentTransactions = useMemo(() => {
    return processedTransactions.slice(
      (currentPage - 1) * entriesPerPage, 
      currentPage * entriesPerPage
    );
  }, [processedTransactions, currentPage, entriesPerPage]);

  // Pagination handlers
  const goToNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const goToPreviousPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  // Format currency value
  const formatCurrency = (value) => {
    if (!value) return "$0.00";
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2
    }).format(value);
  };

  // Format date
  const formatDate = (dateString) => {
    if (!dateString) return "";
    const date = new Date(dateString);
    if (isNaN(date.getTime())) return dateString;
    
    return new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    }).format(date);
  };

  // Get transaction type and status indicators
  const getTransactionTypeClass = (item) => {
    const type = table_name === "invest_level_transaction" 
      ? item?.type?.toLowerCase() 
      : table_name.split("_")[0].toLowerCase();
      
    const typeClasses = {
      deposit: "bg-green-100 text-green-800",
      withdraw: "bg-red-100 text-red-800",
      reward: "bg-purple-100 text-purple-800",
      referral: "bg-blue-100 text-blue-800",
      invest: "bg-indigo-100 text-indigo-800",
      cto: "bg-amber-100 text-amber-800",
      default: "bg-gray-100 text-gray-800",
      roi: "bg-gray-100 text-gray-800"
    };
    
    return typeClasses[type] || typeClasses.default;
  };

  // Check if data is available
  const noDataAvailable = !loading && currentTransactions.length === 0;

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      {/* Header Section */}
      <div className="flex flex-col sm:flex-row justify-between items-center mb-8">
        <div className="mb-4 sm:mb-0">
          <h3 className="text-3xl font-bold text-orange-500">Transaction History</h3>
          <p className="text-gray-600 mt-1">Monitor your financial activities</p>
        </div>
        <div className="relative w-full sm:w-64">
          <input
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              setCurrentPage(1);
            }}
            className="w-full py-2 pl-4 pr-10 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 text-gray-700"
            placeholder="Search transactions..."
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="absolute top-2 right-3 h-5 w-5 text-orange-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
      </div>

      {/* Alerts Section */}
      {(error || message) && (
        <div className="mb-6">
          {error && (
            <div className="bg-red-50 border-l-4 border-red-500 text-red-700 p-4 rounded-r-md flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-2"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                  clipRule="evenodd"
                />
              </svg>
              <span>{error}</span>
            </div>
          )}
          {message && (
            <div className="bg-green-50 border-l-4 border-green-500 text-green-700 p-4 rounded-r-md flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-2"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span>{message}</span>
            </div>
          )}
        </div>
      )}

      {/* Filter Tabs */}
      <div className="mb-6 flex flex-wrap gap-2">
        <button
          onClick={() => { 
            setActiveTab("all"); 
            setCurrentPage(1);
          }}
          className={`px-4 py-2 rounded-md font-medium transition-all ${
            activeTab === "all"
              ? "bg-orange-500 text-white shadow-md"
              : "bg-gray-200 text-gray-600 hover:bg-orange-100 hover:text-orange-500"
          }`}
        >
          All
        </button>
        {transactionTypes.map((type) => (
          <button
            key={type}
            onClick={() => { 
              setActiveTab(type); 
              setCurrentPage(1);
            }}
            className={`px-4 py-2 rounded-md font-medium transition-all capitalize ${
              activeTab === type
                ? "bg-orange-500 text-white shadow-md"
                : "bg-gray-200 text-gray-600 hover:bg-orange-100 hover:text-orange-500"
            }`}
          >
            {type}
          </button>
        ))}
      </div>

      {/* Stats Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {[
          {
            title: "Total Transactions",
            value: transaction?.length || 0,
            icon: "M12 4v16m8-8H4",
            colors: "border-orange-500 bg-orange-50",
          },
          {
            title: "Total Earned",
            value: formatCurrency(
              transaction?.reduce((acc, item) => acc + (parseFloat(item.amount) || 0), 0) || 0
            ),
            icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
            colors: "border-green-500 bg-green-50",
          },
          {
            title: "Latest Transaction",
            value: transaction && transaction.length > 0 
              ? formatCurrency(transaction[transaction.length - 1]?.amount) 
              : "$0.00",
            icon: "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6",
            colors: "border-purple-500 bg-purple-50",
          },
          {
            title: "Filtered Results",
            value: processedTransactions.length,
            icon: "M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z",
            colors: "border-amber-500 bg-amber-50",
          },
        ].map((stat, index) => (
          <div
            key={index}
            className={`p-4 rounded-lg shadow-md border-l-4 ${stat.colors}`}
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm">{stat.title}</p>
                <h4 className="text-lg font-bold text-orange-500">{stat.value}</h4>
              </div>
              <div className="p-2 bg-white rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-orange-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d={stat.icon}
                  />
                </svg>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Table Section */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        {loading ? (
          <div className="flex justify-center items-center h-48">
            <Loader />
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-orange-50 text-orange-500">
                  <th className="p-3 text-left font-semibold">No.</th>
                  {table_name !== "cto_transaction" && (
                    <th className="p-3 text-left font-semibold">ID</th>
                  )}
                  <th className="p-3 text-left font-semibold">Amount</th>
                  <th className="p-3 text-left font-semibold">Type</th>
                  {table_name !== "reward_transaction" &&
                    table_name !== "cto_transaction" && (
                      <>
                        <th className="p-3 text-left font-semibold">On Amount</th>
                        <th className="p-3 text-left font-semibold">Percent</th>
                      </>
                    )}
                  <th className="p-3 text-left font-semibold">Date</th>
                </tr>
              </thead>
              <tbody>
                {noDataAvailable ? (
                  <tr>
                    <td 
                      colSpan={
                        table_name !== "reward_transaction" && table_name !== "cto_transaction"
                          ? table_name !== "cto_transaction" ? 7 : 6
                          : table_name !== "cto_transaction" ? 5 : 4
                      } 
                      className="py-12 text-center text-gray-500"
                    >
                      <div className="flex flex-col items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-10 w-10 text-orange-500 mb-2"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1.5}
                            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                          />
                        </svg>
                        <p>No transactions found</p>
                        <p className="text-sm mt-1">Try adjusting your search or filters</p>
                      </div>
                    </td>
                  </tr>
                ) : (
                  currentTransactions.map((item, index) => (
                    <tr
                      key={index}
                      className="border-t border-gray-200 hover:bg-orange-50"
                    >
                      <td className="p-3 text-gray-700">
                        {(currentPage - 1) * entriesPerPage + index + 1}
                      </td>
                      {table_name !== "cto_transaction" && (
                        <td className="p-3 text-gray-700">{item?.email || '—'}</td>
                      )}
                      <td className="p-3">
                        <span className="font-medium text-orange-500">
                          {formatCurrency(item?.amount)}
                        </span>
                      </td>
                      <td className="p-3">
                        <span className={`px-2 py-1 rounded text-xs ${getTransactionTypeClass(item)}`}>
                          {table_name === "invest_level_transaction"
                            ? item?.type
                            : table_name.split("_")[0]}
                        </span>
                      </td>
                      {table_name !== "reward_transaction" &&
                        table_name !== "cto_transaction" && (
                          <>
                            <td className="p-3 text-gray-700">
                              {formatCurrency(item?.onamount)}
                            </td>
                            <td className="p-3 text-gray-700">
                              {item?.percent ? `${item.percent}%` : '—'}
                            </td>
                          </>
                        )}
                      <td className="p-3 text-gray-700">
                        {formatDate(item?.createdAt)}
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Pagination Section */}
      {!loading && processedTransactions.length > 0 && (
        <div className="flex flex-col sm:flex-row justify-between items-center mt-6 gap-4">
          <div className="text-gray-600">
            Showing {(currentPage - 1) * entriesPerPage + 1} to {Math.min(currentPage * entriesPerPage, processedTransactions.length)} of {processedTransactions.length} entries
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={goToPreviousPage}
              disabled={currentPage === 1}
              className={`px-3 py-1 rounded-md ${
                currentPage === 1
                  ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                  : "bg-orange-500 text-white hover:bg-orange-600"
              }`}
            >
              Prev
            </button>
            {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
              let pageToShow;
              if (totalPages <= 5) {
                pageToShow = i + 1;
              } else if (currentPage <= 3) {
                pageToShow = i + 1;
              } else if (currentPage >= totalPages - 2) {
                pageToShow = totalPages - 4 + i;
              } else {
                pageToShow = currentPage - 2 + i;
              }
              return (
                <button
                  key={i}
                  onClick={() => setCurrentPage(pageToShow)}
                  className={`px-3 py-1 rounded-md ${
                    currentPage === pageToShow
                      ? "bg-orange-500 text-white"
                      : "bg-gray-200 text-gray-600 hover:bg-orange-100"
                  }`}
                >
                  {pageToShow}
                </button>
              );
            })}
            {totalPages > 5 && currentPage < totalPages - 2 && (
              <>
                <span className="px-2 text-gray-600">...</span>
                <button
                  onClick={() => setCurrentPage(totalPages)}
                  className="px-3 py-1 rounded-md bg-gray-200 text-gray-600 hover:bg-orange-100"
                >
                  {totalPages}
                </button>
              </>
            )}
            <button
              onClick={goToNextPage}
              disabled={currentPage === totalPages}
              className={`px-3 py-1 rounded-md ${
                currentPage === totalPages
                  ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                  : "bg-orange-500 text-white hover:bg-orange-600"
              }`}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
