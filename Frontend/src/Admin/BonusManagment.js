// import React, { useState, useEffect } from "react";
// import { motion } from "framer-motion";
// import { useDispatch, useSelector } from "react-redux";
// import { fetchBonuses, updateBonus, resetState } from "../redux/bonusSlice";
// import { Formik, Form, Field, ErrorMessage } from "formik";
// import { LoadingModal, SuccessModal, ErrorModal } from "../components/PopModal";

// // Animation variants
// const fadeIn = {
//   hidden: { opacity: 0 },
//   visible: {
//     opacity: 1,
//     transition: { duration: 0.4 },
//   },
// };

// const BonusManagement = () => {
//   const dispatch = useDispatch();
//   const bonusData = useSelector((state) => state.bonuses.bonuses);
//   const { loading, message, error } = useSelector((state) => state.bonuses);
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [selectedBonus, setSelectedBonus] = useState(null);

//   useEffect(() => {
//     dispatch(fetchBonuses());
//   }, [dispatch]);

//   // Format date for display
//   const formatDate = (dateString) => {
//     const date = new Date(dateString);
//     return new Intl.DateTimeFormat("en-US", {
//       year: "numeric",
//       month: "short",
//       day: "numeric",
//       hour: "2-digit",
//       minute: "2-digit",
//     }).format(date);
//   };

//   // Get status badge class based on status
//   const getStatusBadgeClass = (status) => {
//     switch (status.toLowerCase()) {
//       case "approved":
//         return "bg-green-100 text-green-800";
//       case "pending":
//         return "bg-yellow-100 text-yellow-800";
//       case "rejected":
//         return "bg-red-100 text-red-800";
//       default:
//         return "bg-gray-100 text-gray-800";
//     }
//   };

//   // Handle edit button click
//   const handleEdit = (bonus) => {
//     setSelectedBonus(bonus);
//     setIsModalOpen(true);
//   };

//   // Close modal
//   const closeModal = () => {
//     setIsModalOpen(false);
//     setSelectedBonus(null);
//   };

//   // Handle save changes
//   const handleSaveChanges = (values) => {
//     const { id, ...data } = values;
//     // Here you would typically dispatch an action to update the bonus in your Redux store/backend
//     dispatch(updateBonus({ id, data }));

//     // Show success message (you could implement your own toast notification here)
//     setIsModalOpen(false);
//     dispatch(fetchBonuses());

//     // Simple success notification
//     const notification = document.createElement("div");
//     notification.className =
//       "fixed top-4 right-4 bg-green-500 text-white px-6 py-3 rounded-md shadow-lg";
//     notification.textContent = "Bonus updated successfully!";
//     document.body.appendChild(notification);

//     setTimeout(() => {
//       document.body.removeChild(notification);
//       handleClear()
//       window.location.reload()
//     }, 3000);
//   };

//   // Get bonus type formatted for display
//   const formatBonusType = (type) => {
//     switch (type) {
//       case "ad_income":
//         return "Ad Income";
//       case "referral":
//         return "Referral";
//       case "signup":
//         return "Signup";
//       case "achievement":
//         return "Achievement";
//       default:
//         return type;
//     }
//   };
//   function handleClear() {
//     dispatch(resetState());
//   }

//   return (
//     <motion.div
//       className="px-6 py-8 mx-auto max-w-6xl"
//       initial="hidden"
//       animate="visible"
//       variants={fadeIn}
//     >
//       {/* Header */}
//       <div className="mb-8 text-center">
//         <h1 className="mb-2 text-3xl font-bold text-white">
//           Bonus Management
//         </h1>
//         <p className="text-white">
//           View and manage all bonus entries in the system
//         </p>
//       </div>
      
//        <LoadingModal isLoading={loading} />
//       {/* Table */}
//       <div className="overflow-hidden rounded-xl border border-pink-100 shadow-lg bg-white">
//         <div className="overflow-x-auto">
//           <table className="w-full">
//             <thead>
//               <tr className="bg-gradient-to-r from-pink-50 to-purple-50 text-left">
//                 <th className="p-4 font-semibold text-gray-700">ID</th>
//                 <th className="p-4 font-semibold text-gray-700">Amount</th>
//                 <th className="p-4 font-semibold text-gray-700">Bonus Type</th>
//                 <th className="p-4 font-semibold text-gray-700">Directs/Percenatge</th>
//                 <th className="p-4 font-semibold text-gray-700">Created At</th>
//                 <th className="p-4 font-semibold text-gray-700">Actions</th>
//               </tr>
//             </thead>
//             <tbody className="divide-y divide-gray-100">
//               {bonusData.map((bonus,index) => (
//                 <tr
//                   key={bonus.id}
//                   className="hover:bg-gray-50 transition-colors"
//                 >
//                   <td className="p-4 text-gray-800">#{index+1}</td>
//                   <td className="p-4 font-medium text-gray-800">
//                     ${bonus.amount}
//                   </td>
//                   <td className="p-4 text-gray-700">
//                     {formatBonusType(bonus.bonus_type)}
//                   </td>
//                   <td className="p-4 font-medium text-gray-800">
//                     {bonus.direct_members}/{bonus.percentage}%
//                   </td> 
//                   <td className="p-4 text-gray-700">
//                     {formatDate(bonus.created_at)}
//                   </td>
//                   <td className="p-4">
//                     <button
//                       onClick={() => handleEdit(bonus)}
//                       className="px-3 py-1 text-sm font-medium text-white bg-pink-500 rounded-md hover:bg-pink-600 transition-colors focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2"
//                     >
//                       Edit
//                     </button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>

//       {/* Custom Modal */}
//       {isModalOpen && selectedBonus && (
//         <div className="fixed inset-0 z-50 overflow-y-auto">
//           <div className="flex items-center justify-center min-h-screen px-4">
//             {/* Backdrop */}
//             <div
//               className="fixed inset-0 bg-black bg-opacity-30 transition-opacity"
//               onClick={closeModal}
//             ></div>

//             {/* Modal Panel */}
//             <div className="relative bg-white rounded-lg max-w-md w-full mx-auto shadow-xl transform transition-all">
//               <div className="px-6 py-5 border-b border-gray-200">
//                 <h3 className="text-xl font-semibold text-gray-800">
//                   Edit Bonus Entry
//                 </h3>
//                 <button
//                   onClick={closeModal}
//                   className="absolute top-5 right-5 text-gray-400 hover:text-gray-500"
//                 >
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     className="h-5 w-5"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     stroke="currentColor"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth={2}
//                       d="M6 18L18 6M6 6l12 12"
//                     />
//                   </svg>
//                 </button>
//               </div>

//               <Formik
//                 initialValues={{
//                   id: selectedBonus.id,
//                   amount: selectedBonus.amount,
//                   bonus_type: selectedBonus.bonus_type,
//                   direct_members: selectedBonus.direct_members,
//                   percentage: selectedBonus.percentage,
//                   status: selectedBonus.status,
//                 }}
//                 onSubmit={(values) => {
//                   handleSaveChanges(values);
//                 }}
//               >
//                 {({ isSubmitting }) => (
//                   <Form className="px-6 py-4">
//                     <div className="space-y-4">
//                       <div className="flex flex-col space-y-1">
//                         <label
//                           htmlFor="amount"
//                           className="text-sm font-medium text-gray-700"
//                         >
//                           Amount
//                         </label>
//                         <Field
//                           id="amount"
//                           name="amount"
//                           type="number"
//                           step="0.01"
//                           className="border text-black border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500"
//                         />
//                         <ErrorMessage
//                           name="amount"
//                           component="div"
//                           className="text-red-500 text-xs mt-1"
//                         />
//                       </div>
//                       <div className="flex flex-col space-y-1">
//                         <label
//                           htmlFor="direct_members"
//                           className="text-sm font-medium text-gray-700"
//                         >
//                           Directs Members
//                         </label>
//                         <Field
//                           id="direct_members"
//                           name="direct_members"
//                           type="number"
//                           step="0.01"
//                           className="border text-black border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500"
//                         />
//                         <ErrorMessage
//                           name="direct_members"
//                           component="div"
//                           className="text-red-500 text-xs mt-1"
//                         />
//                       </div>
//                       <div className="flex flex-col space-y-1">
//                         <label
//                           htmlFor="percentage"
//                           className="text-sm font-medium text-gray-700"
//                         >
//                           Percentage
//                         </label>
//                         <Field
//                           id="percentage"
//                           name="percentage"
//                           type="number"
//                           step="0.01"
//                           className="border text-black border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500"
//                         />
//                         <ErrorMessage
//                           name="percentage"
//                           component="div"
//                           className="text-red-500 text-xs mt-1"
//                         />
//                       </div>

                  
//                       <div className="flex flex-col space-y-1">
//                         <label
//                           htmlFor="status"
//                           className="text-sm font-medium text-gray-700"
//                         >
//                           Status
//                         </label>
//                         <Field
//                           as="select"
//                           id="status"
//                           name="status"
//                           className="border text-black border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500"
//                         >
//                           <option value="approved">Approved</option>
//                           <option value="pending">Pending</option>
//                           <option value="rejected">Rejected</option>
//                         </Field>
//                         <ErrorMessage
//                           name="status"
//                           component="div"
//                           className="text-red-500 text-xs mt-1"
//                         />
//                       </div>
//                     </div>

//                     <div className="mt-6 flex justify-end space-x-3">
//                       <button
//                         type="button"
//                         onClick={closeModal}
//                         className="px-4 py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-gray-400"
//                       >
//                         Cancel
//                       </button>
//                       <button
//                         type="submit"
//                         disabled={isSubmitting}
//                         className="px-4 py-2 bg-pink-500 text-white rounded-md hover:bg-pink-600 font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-pink-500"
//                       >
//                         {isSubmitting ? "Saving..." : "Save Changes"}
//                       </button>
//                     </div>
//                   </Form>
//                 )}
//               </Formik>
//             </div>
//           </div>
//         </div>
//       )}
//     </motion.div>
//   );
// };

// export default BonusManagement;













import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { fetchBonuses, updateBonus, resetState } from "../redux/bonusSlice";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { LoadingModal, SuccessModal, ErrorModal } from "../components/PopModal";
import { 
  FaEdit, 
  FaChartLine, 
  FaCoins, 
  FaUsers, 
  FaPercentage, 
  FaCalendarAlt,
  FaArrowUp,
  FaArrowDown
} from "react-icons/fa";

// Animation variants
const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.4 },
  },
};

const BonusManagement = () => {
  const dispatch = useDispatch();
  const bonusData = useSelector((state) => state.bonuses.bonuses);
  const { loading, message, error } = useSelector((state) => state.bonuses);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedBonus, setSelectedBonus] = useState(null);
  const [sortField, setSortField] = useState(null);
  const [sortDirection, setSortDirection] = useState("asc");
  const [showStats, setShowStats] = useState(true);

  useEffect(() => {
    dispatch(fetchBonuses());
  }, [dispatch]);

  useEffect(() => {
    if (message || error) {
      const timer = setTimeout(() => {
        handleClear();
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [message, error]);

  // Format date for display
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    }).format(date);
  };

  // Handle edit button click
  const handleEdit = (bonus) => {
    setSelectedBonus(bonus);
    setIsModalOpen(true);
  };

  // Close modal
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedBonus(null);
  };

  // Handle save changes
  const handleSaveChanges = (values) => {
    const { id, ...data } = values;
    dispatch(updateBonus({ id, data }));
    setIsModalOpen(false);
    dispatch(fetchBonuses());

    // Simple success notification
    const notification = document.createElement("div");
    notification.className =
      "fixed top-4 right-4 bg-orange-500 text-white px-6 py-3 rounded-md shadow-lg";
    notification.textContent = "Bonus updated successfully!";
    document.body.appendChild(notification);

    setTimeout(() => {
      document.body.removeChild(notification);
      handleClear();
      window.location.reload();
    }, 3000);
  };

  // Get bonus type formatted for display
  const formatBonusType = (type) => {
    switch (type) {
      case "ad_income":
        return "Ad Income";
      case "referral":
        return "Referral";
      case "signup":
        return "Signup";
      case "achievement":
        return "Achievement";
      default:
        return type;
    }
  };

  function handleClear() {
    dispatch(resetState());
  }

  // Sort functions
  const handleSort = (field) => {
    if (sortField === field) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortField(field);
      setSortDirection("asc");
    }
  };

  const sortedBonusData = [...bonusData].sort((a, b) => {
    if (!sortField) return 0;
    
    const aValue = a[sortField];
    const bValue = b[sortField];
    
    if (typeof aValue === 'number') {
      return sortDirection === "asc" ? aValue - bValue : bValue - aValue;
    }
    
    // For strings (including dates)
    const comparison = String(aValue).localeCompare(String(bValue));
    return sortDirection === "asc" ? comparison : -comparison;
  });

  // Calculate statistics
  const totalAmount = bonusData.reduce((sum, bonus) => sum + parseFloat(bonus.amount || 0), 0);
  const averageAmount = bonusData.length ? (totalAmount / bonusData.length).toFixed(2) : 0;
  const maxAmount = bonusData.length ? Math.max(...bonusData.map(b => parseFloat(b.amount || 0))).toFixed(2) : 0;
  const minAmount = bonusData.length ? Math.min(...bonusData.map(b => parseFloat(b.amount || 0))).toFixed(2) : 0;

  // Count bonus types
  const bonusTypeCount = bonusData.reduce((acc, bonus) => {
    const type = bonus.bonus_type;
    acc[type] = (acc[type] || 0) + 1;
    return acc;
  }, {});

  // Prepare data for chart (we'll display it as divs with proportional width)
  const chartData = Object.entries(bonusTypeCount).map(([type, count]) => ({
    type: formatBonusType(type),
    count,
    percentage: Math.round((count / bonusData.length) * 100)
  }));

  return (
    <motion.div
      className="px-6 py-8 mx-auto w-full"
      initial="hidden"
      animate="visible"
      variants={fadeIn}
    >
      {/* Header */}
      <div className="mb-8 flex flex-col md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="mb-2 text-3xl font-bold text-orange-500">
            Bonus Management
          </h1>
          <p className="text-gray-600">
            View and manage all bonus entries in the system
          </p>
        </div>
        <div className="mt-4 md:mt-0">
          <button
            onClick={() => setShowStats(!showStats)}
            className="px-4 py-2 bg-orange-500 text-white rounded-lg transition-colors hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
          >
            {showStats ? "Hide Statistics" : "Show Statistics"}
          </button>
        </div>
      </div>
      
      <LoadingModal isLoading={loading} />
      {message && <SuccessModal message={message} onClose={handleClear} />}
      {error && <ErrorModal error={error} onClose={handleClear} />}
      
      {/* Statistics Section */}
      {showStats && (
        <div className="mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-white rounded-lg p-6 shadow-md border-l-4 border-orange-500">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-500 mb-1">Total Bonus Value</p>
                  <p className="text-2xl font-semibold text-gray-800">${totalAmount.toFixed(2)}</p>
                </div>
                <div className="bg-orange-100 p-3 rounded-full">
                  <FaCoins className="text-orange-500 text-xl" />
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-md border-l-4 border-blue-500">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-500 mb-1">Average Bonus</p>
                  <p className="text-2xl font-semibold text-gray-800">${averageAmount}</p>
                </div>
                <div className="bg-blue-100 p-3 rounded-full">
                  <FaChartLine className="text-blue-500 text-xl" />
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-md border-l-4 border-green-500">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-500 mb-1">Highest Bonus</p>
                  <p className="text-2xl font-semibold text-gray-800">${maxAmount}</p>
                </div>
                <div className="bg-green-100 p-3 rounded-full">
                  <FaArrowUp className="text-green-500 text-xl" />
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-md border-l-4 border-red-500">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-500 mb-1">Lowest Bonus</p>
                  <p className="text-2xl font-semibold text-gray-800">${minAmount}</p>
                </div>
                <div className="bg-red-100 p-3 rounded-full">
                  <FaArrowDown className="text-red-500 text-xl" />
                </div>
              </div>
            </div>
          </div>
          
          {/* Bonus Type Distribution Chart */}
          <div className="bg-white rounded-lg mt-6 p-6 shadow-md">
            <h3 className="font-semibold text-gray-800 mb-4">Bonus Type Distribution</h3>
            <div className="space-y-3">
              {chartData.map((item) => (
                <div key={item.type} className="space-y-1">
                  <div className="flex justify-between text-sm">
                    <span>{item.type}</span>
                    <span className="font-medium">{item.count} ({item.percentage}%)</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div 
                      className="bg-orange-500 h-2.5 rounded-full" 
                      style={{ width: `${item.percentage}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
      
      {/* Table */}
      <div className="bg-white rounded-lg overflow-hidden shadow-md">
        <div className="p-6 border-b border-gray-100">
          <h2 className="text-xl font-semibold text-gray-800">Bonus Entries</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-50 text-left border-b">
                <th 
                  className="p-4 font-medium text-gray-600"
                  onClick={() => handleSort('id')}
                >
                  <div className="flex items-center cursor-pointer">
                    ID
                    {sortField === 'id' && (
                      sortDirection === 'asc' ? 
                        <FaArrowUp className="ml-1 text-orange-500 text-xs" /> : 
                        <FaArrowDown className="ml-1 text-orange-500 text-xs" />
                    )}
                  </div>
                </th>
                <th 
                  className="p-4 font-medium text-gray-600"
                  onClick={() => handleSort('amount')}
                >
                  <div className="flex items-center cursor-pointer">
                    <FaCoins className="mr-2 text-orange-500" />
                    Amount
                    {sortField === 'amount' && (
                      sortDirection === 'asc' ? 
                        <FaArrowUp className="ml-1 text-orange-500 text-xs" /> : 
                        <FaArrowDown className="ml-1 text-orange-500 text-xs" />
                    )}
                  </div>
                </th>
                <th 
                  className="p-4 font-medium text-gray-600"
                  onClick={() => handleSort('bonus_type')}
                >
                  <div className="flex items-center cursor-pointer">
                    <FaUsers className="mr-2 text-orange-500" />
                    Bonus Type
                    {sortField === 'bonus_type' && (
                      sortDirection === 'asc' ? 
                        <FaArrowUp className="ml-1 text-orange-500 text-xs" /> : 
                        <FaArrowDown className="ml-1 text-orange-500 text-xs" />
                    )}
                  </div>
                </th>
                <th className="p-4 font-medium text-gray-600">
                  <div className="flex items-center">
                    <FaPercentage className="mr-2 text-orange-500" />
                    Directs/Percentage
                  </div>
                </th>
                <th 
                  className="p-4 font-medium text-gray-600"
                  onClick={() => handleSort('created_at')}
                >
                  <div className="flex items-center cursor-pointer">
                    <FaCalendarAlt className="mr-2 text-orange-500" />
                    Created At
                    {sortField === 'created_at' && (
                      sortDirection === 'asc' ? 
                        <FaArrowUp className="ml-1 text-orange-500 text-xs" /> : 
                        <FaArrowDown className="ml-1 text-orange-500 text-xs" />
                    )}
                  </div>
                </th>
                <th className="p-4 font-medium text-gray-600">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {sortedBonusData.map((bonus, index) => (
                <tr
                  key={bonus.id}
                  className="hover:bg-orange-50 transition-colors"
                >
                  <td className="p-4 text-gray-800">#{index+1}</td>
                  <td className="p-4 font-medium text-gray-800">
                    ${bonus.amount}
                  </td>
                  <td className="p-4 text-gray-700">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-orange-100 text-orange-800">
                      {formatBonusType(bonus.bonus_type)}
                    </span>
                  </td>
                  <td className="p-4 font-medium text-gray-800">
                    {bonus.direct_members}/{bonus.percentage}%
                  </td> 
                  <td className="p-4 text-gray-700">
                    {formatDate(bonus.created_at)}
                  </td>
                  <td className="p-4">
                    <button
                      onClick={() => handleEdit(bonus)}
                      className="inline-flex items-center px-3 py-1.5 text-sm font-medium text-white bg-orange-500 rounded-md hover:bg-orange-600 transition-colors focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
                    >
                      <FaEdit className="mr-1.5" /> Edit
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Edit Modal */}
      {isModalOpen && selectedBonus && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-gray-600 bg-opacity-50">
          <div className="flex items-center justify-center min-h-screen px-4">
            {/* Modal Panel */}
            <div className="relative bg-white rounded-lg max-w-md w-full mx-auto shadow-xl">
              <div className="px-6 py-4 border-b border-gray-200 bg-orange-50">
                <h3 className="text-xl font-semibold text-gray-800">
                  Edit Bonus Entry
                </h3>
                <button
                  onClick={closeModal}
                  className="absolute top-4 right-4 text-gray-400 hover:text-gray-500"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>

              <Formik
                initialValues={{
                  id: selectedBonus.id,
                  amount: selectedBonus.amount,
                  bonus_type: selectedBonus.bonus_type,
                  direct_members: selectedBonus.direct_members,
                  percentage: selectedBonus.percentage,
                  status: selectedBonus.status,
                }}
                onSubmit={(values) => {
                  handleSaveChanges(values);
                }}
              >
                {({ isSubmitting }) => (
                  <Form className="px-6 py-4">
                    <div className="space-y-4">
                      <div className="flex flex-col space-y-1">
                        <label
                          htmlFor="amount"
                          className="text-sm font-medium text-gray-700"
                        >
                          Amount
                        </label>
                        <div className="relative">
                          <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-500">
                            $
                          </span>
                          <Field
                            id="amount"
                            name="amount"
                            type="number"
                            step="0.01"
                            className="pl-8 block w-full border text-black border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                          />
                        </div>
                        <ErrorMessage
                          name="amount"
                          component="div"
                          className="text-red-500 text-xs mt-1"
                        />
                      </div>
                      <div className="flex flex-col space-y-1">
                        <label
                          htmlFor="direct_members"
                          className="text-sm font-medium text-gray-700"
                        >
                          Direct Members
                        </label>
                        <Field
                          id="direct_members"
                          name="direct_members"
                          type="number"
                          step="1"
                          className="block w-full border text-black border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                        />
                        <ErrorMessage
                          name="direct_members"
                          component="div"
                          className="text-red-500 text-xs mt-1"
                        />
                      </div>
                      <div className="flex flex-col space-y-1">
                        <label
                          htmlFor="percentage"
                          className="text-sm font-medium text-gray-700"
                        >
                          Percentage
                        </label>
                        <div className="relative">
                          <Field
                            id="percentage"
                            name="percentage"
                            type="number"
                            step="0.01"
                            className="block w-full border text-black border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                          />
                          <span className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-500">
                            %
                          </span>
                        </div>
                        <ErrorMessage
                          name="percentage"
                          component="div"
                          className="text-red-500 text-xs mt-1"
                        />
                      </div>

                      <div className="flex flex-col space-y-1">
                        <label
                          htmlFor="status"
                          className="text-sm font-medium text-gray-700"
                        >
                          Status
                        </label>
                        <Field
                          as="select"
                          id="status"
                          name="status"
                          className="block w-full border text-black border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                        >
                          <option value="approved">Approved</option>
                          <option value="pending">Pending</option>
                          <option value="rejected">Rejected</option>
                        </Field>
                        <ErrorMessage
                          name="status"
                          component="div"
                          className="text-red-500 text-xs mt-1"
                        />
                      </div>
                    </div>

                    <div className="mt-6 flex justify-end space-x-3">
                      <button
                        type="button"
                        onClick={closeModal}
                        className="px-4 py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-gray-400"
                      >
                        Cancel
                      </button>
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="px-4 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600 font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-orange-500"
                      >
                        {isSubmitting ? "Saving..." : "Save Changes"}
                      </button>
                    </div>
                  </Form>
                )}
              </Formik>
            </div>
          </div>
        </div>
      )}
    </motion.div>
  );
};

export default BonusManagement;