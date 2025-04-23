// import React, { useState, useEffect } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import SuccessAlert from "../BaseFile/comman/SuccessAlert";
// import ErrorAlert from "../BaseFile/comman/ErrorAlert";
// import { CiDollar } from "react-icons/ci";
// import {
//   getctoList,
//   checkCto,
//   deleteCto,
//   clearErrors,
//   clearMessage,
// } from "../redux/ctoSlice";
// import PayctoModel from "./PayctoModel";
// import { AiFillDelete } from "react-icons/ai";
// import Loader from "../BaseFile/comman/Loader";
// import { Confirmation } from "../BaseFile/comman/Confirmation";
// const AdminCto = () => {
//   const dispatch = useDispatch();
//   const { allcto, loading, message, error } = useSelector((state) => state.cto);
//   const [deleteID, setDeleteID] = useState();
//   const [payId, setPayId] = useState();
//   const [modalOpen, setModalOpen] = useState(false);
//   const [openModel, setOpenModel] = useState(null);


//   useEffect(() => {
//     dispatch(getctoList());
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

//   const handleDelete = (id) => {
//     setDeleteID(id);
//     setModalOpen(true);
//   };
//   const handlePay = (id) => {
//     setPayId(id);
//     setOpenModel(true);
//   };
//   const isClose = () => {
//     setModalOpen(false);
//   };

//   return (
//     <>
//          {message && <SuccessAlert message={message} />}
//          {error && <ErrorAlert error={error} />}
//       <div className="p-4">
//         <div className="flex justify-between items-center pl-3 mb-3 w-full">
//           <div>
//             <h3 className="text-lg font-medium">
//               Pyemnt Settings Detail
//             </h3>
//             <p className="text-lg">
//               Overview of the Cto History.
//             </p>
          
//           </div>
//           <div className="flex gap-3 justify-center ml-3">
//           <button className="px-5 py-2 text-white rounded-sm border bg-blue-800/50 border-white/50 hover:bg-blue-800" onClick={()=>dispatch(checkCto())}>
//               CheckCto
//             </button>
//             <div className="flex relative gap-5 items-center w-full max-w-sm">
//               <div className="relative">
//                 <input
//                   className="py-2 pr-11 pl-3 w-full h-10 text-lg rounded border shadow-sm transition duration-200 border-white/50 placeholder:text-slate-900 text-slate-200 border-slate-200 ease focus:outline-none focus:border-slate-400 hover:border-slate-400 focus:shadow-md"
//                   placeholder="Search for invoice..."
//                 />
//                 <button
//                   className="flex absolute top-1 right-1 items-center px-2 my-auto w-8 h-8 rounded"
//                   type="button"
//                 >
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     strokeWidth="3"
//                     stroke="currentColor"
//                     className="w-8 h-8 text-slate-900"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
//                     />
//                   </svg>
//                 </button>
//               </div>
             
//             </div>
//           </div>
//         </div>

//         <div className={`${loading ? "items-center h-[260px]" : "h-full"}`}>
//           {loading ? (
//             <Loader />
//           ) : (
//             <div className="">
//               <div className="flow-root">
//                 <div className="overflow-x-auto">
//                   <div className="inline-block py-2 min-w-full align-middle sm:px-2">
//                     <h2 className="text-lg font-medium">
//                     Cto List History
//                     </h2>
//                     <table className="z-10 mt-3 w-full text-left whitespace-nowrap">
//                       <thead className="text-base leading-6 text-white bg-black border-b border-white/10">
//                         <tr>
//                           <th
//                             scope="col"
//                             className="hidden py-2 pr-8 pl-2 font-medium sm:table-cell"
//                           >
//                             Name
//                           </th>
//                           <th
//                             scope="col"
//                             className="hidden py-2 pr-8 pl-0 font-medium sm:table-cell"
//                           >
//                             Email
//                           </th>
//                           <th
//                             scope="col"
//                             className="hidden py-2 pr-8 pl-0 font-medium sm:table-cell"
//                           >
//                             Paid
//                           </th>
//                           <th
//                             scope="col"
//                             className="py-2 pr-4 pl-0 font-medium text-right sm:pr-8 sm:text-left lg:pr-20"
//                           >
//                             Gift
//                           </th>
//                           <th
//                             scope="col"
//                             className="py-2 pr-4 pl-0 font-medium text-right sm:pr-8 sm:text-left lg:pr-20"
//                           >
//                             Status
//                           </th>
//                           <th
//                             scope="col"
//                             className="py-2 pr-4 pl-0 font-medium text-right sm:pr-8 sm:text-left lg:pr-20"
//                           >
//                             Category
//                           </th>
//                           <th
//                             scope="col"
//                             className="py-2 pr-4 pl-0 font-medium text-right sm:pr-8 sm:text-left lg:pr-20"
//                           >
//                             Amount
//                           </th>
//                           <th
//                             scope="col"
//                             className="py-2 pr-4 pl-0 font-medium text-right sm:pr-8 sm:text-left lg:pr-20"
//                           >
//                             Monthly
//                           </th>
//                           <th
//                             scope="col"
//                             className="hidden py-2 pr-4 pl-0 font-medium sm:table-cell sm:pr-3"
//                           >
//                             Action
//                           </th>
//                         </tr>
//                       </thead>
//                       <tbody className="divide-y divide-white/5">
//                       {allcto?.length > 0 ? (allcto?.map((item,index)=>(
//                           <tr key={index} className="even:bg-blue-200 even:text:white">
//                             <td className="hidden py-4 pr-4 pl-0 sm:table-cell sm:pr-8">
//                               <div className="">
//                                 <div className="font-mono text-lg leading-6">
//                                   {item?.username}
//                                 </div>
//                               </div>
//                             </td>
//                             <td className="hidden py-4 pr-4 pl-0 sm:table-cell sm:pr-8">
//                               <div className="">
//                                 <div className="font-mono text-lg leading-6">
//                                   {item?.useremail}
//                                 </div>
//                               </div>
//                             </td>{" "}
//                             <td className="hidden py-4 pr-4 pl-0 sm:table-cell sm:pr-8">
//                               <div className="">
//                                 <div className="font-mono text-lg leading-6">
//                                   {item?.paid}
//                                 </div>
//                               </div>
//                             </td>
//                               <td className="hidden py-4 pr-4 pl-0 sm:table-cell sm:pr-8">
//                                 <div className="">
//                                   <div className="font-mono text-lg leading-6">
//                                     {item?.gift}
//                                   </div>
//                                 </div>
//                               </td>
//                               <td className="hidden py-4 pr-4 pl-0 sm:table-cell sm:pr-8">
//                                 <div className="">
//                                   <div className="font-mono text-lg leading-6">
//                                     {item?.status}
//                                   </div>
//                                 </div>
//                               </td>
//                               <td className="hidden py-4 pr-4 pl-0 sm:table-cell sm:pr-8">
//                                 <div className="">
//                                   <div className="font-mono text-lg leading-6">
//                                     {item?.category}
//                                   </div>
//                                 </div>
//                               </td>
//                             <td className="hidden py-4 pr-4 pl-0 sm:table-cell">
//                               <div className="">
//                                 <div className="px-2 py-1 text-xs font-medium rounded-md ring-1 ring-inset bg-gray-700/40 ring-white/10">
//                                   {item?.amount}
//                                 </div>
//                               </div>
//                             </td>
//                             <td className="hidden py-4 pr-4 pl-0 sm:table-cell">
//                               <div className="">
//                                 <div className="px-2 py-1 text-xs font-medium rounded-md ring-1 ring-inset bg-gray-700/40 ring-white/10">
//                                   {item?.monthly_amount}
//                                 </div>
//                               </div>
//                             </td>
//                             <td className="py-4 pr-4 pl-0 text-lg leading-6 text-right sm:table-cell sm:pr-3">
//                               <div className="flex z-0 space-x-4">
//                                 <>
//                                   <AiFillDelete
//                                     className="w-4 h-4 text-red-400 cursor-pointer"
//                                     onClick={() => handleDelete(item?.id)}
//                                     title="Delete"
//                                   />
//                                   <CiDollar
//                                     className="w-4 h-4 text-red-400 cursor-pointer"
//                                     onClick={() => handlePay(item?.id)}
//                                     title="Pay"
//                                   />
//                                 </>
//                               </div>
//                             </td>
//                           </tr>
//                           ))) : (
//                             <tr>
//                            <td colSpan={9} className="px-4 py-2 text-base text-center text-gray-900 bg-blue-200">
//                                 No data found.
//                               </td>
//                             </tr>
//                           )}
//                       </tbody>
//                     </table>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           )}
//         </div>
//         {modalOpen && (
//           <Confirmation
//             isClose={isClose}
//             deletefunction={deleteCto}
//             id={deleteID}
//           />
//         )}
//         {openModel && (
//           <PayctoModel
//           openModel={openModel}
//             isClose={()=>setOpenModel(false)}
//             payid={payId}
//           />
//         )}
      
//       </div>
//     </>
//   );
// };

// export default AdminCto;











import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import SuccessAlert from "../BaseFile/comman/SuccessAlert";
import ErrorAlert from "../BaseFile/comman/ErrorAlert";
import { CiDollar } from "react-icons/ci";
import { AiFillDelete } from "react-icons/ai";
import { FaSearch, FaUserCog, FaChartLine, FaHistory } from "react-icons/fa";
import { BiAnalyse } from "react-icons/bi";
import {
  getctoList,
  checkCto,
  deleteCto,
  clearErrors,
  clearMessage,
} from "../redux/ctoSlice";
import PayctoModel from "./PayctoModel";
import Loader from "../BaseFile/comman/Loader";
import { Confirmation } from "../BaseFile/comman/Confirmation";

const AdminCto = () => {
  const dispatch = useDispatch();
  const { allcto, loading, message, error } = useSelector((state) => state.cto);
  const [deleteID, setDeleteID] = useState();
  const [payId, setPayId] = useState();
  const [modalOpen, setModalOpen] = useState(false);
  const [openModel, setOpenModel] = useState(null);
  const [activeTab, setActiveTab] = useState("list");
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    dispatch(getctoList());
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

  const handleDelete = (id) => {
    setDeleteID(id);
    setModalOpen(true);
  };

  const handlePay = (id) => {
    setPayId(id);
    setOpenModel(true);
  };

  const isClose = () => {
    setModalOpen(false);
  };

  // Calculate statistics for the dashboard
  const totalAmount = allcto?.reduce((sum, item) => sum + parseFloat(item?.amount || 0), 0) || 0;
  const totalPaid = allcto?.filter(item => item?.status === "paid")?.length || 0;
  const totalPending = allcto?.filter(item => item?.status === "pending")?.length || 0;
  const totalGifts = allcto?.reduce((sum, item) => sum + parseFloat(item?.gift || 0), 0) || 0;

  // Filter data based on search term
  const filteredData = allcto?.filter(item => 
    item?.username?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item?.useremail?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item?.category?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Sample data for the chart (using existing data)
  const chartData = allcto?.reduce((acc, item) => {
    const category = item?.category || "Uncategorized";
    if (!acc[category]) {
      acc[category] = 0;
    }
    acc[category] += parseFloat(item?.amount || 0);
    return acc;
  }, {});

  return (
    <>
      {message && <SuccessAlert message={message} />}
      {error && <ErrorAlert error={error} />}
      
      <div className="p-4 bg-gray-50 min-h-screen">
        {/* Header Section */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <h3 className="text-2xl font-bold text-gray-800">
                <span className="text-orange-500">CTO</span> Payment Dashboard
              </h3>
              <p className="text-gray-600">
                Comprehensive overview of CTO payment history and analytics
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
              <button 
                className="px-5 py-2 text-white rounded-md border bg-orange-500 hover:bg-orange-600 transition-all shadow-md flex items-center justify-center"
                onClick={() => dispatch(checkCto())}
              >
                <BiAnalyse className="mr-2" /> Check CTO Status
              </button>
              
              <div className="relative w-full sm:w-64">
                <input
                  className="py-2 pr-10 pl-10 w-full h-10 text-gray-700 rounded-md border border-gray-300 shadow-sm transition duration-200 ease focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
                  placeholder="Search..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <FaSearch className="absolute top-3 left-3 text-gray-400" />
              </div>
            </div>
          </div>
          
          {/* Stats Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
            <div className="bg-gradient-to-r from-orange-500 to-orange-400 p-4 rounded-lg text-white shadow-lg">
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-sm opacity-80">Total Amount</p>
                  <p className="text-2xl font-bold">${totalAmount.toFixed(2)}</p>
                </div>
                <div className="p-3 bg-white bg-opacity-30 rounded-full">
                  <FaChartLine className="text-xl" />
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-blue-500 to-blue-400 p-4 rounded-lg text-white shadow-lg">
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-sm opacity-80">Total Paid</p>
                  <p className="text-2xl font-bold">{totalPaid}</p>
                </div>
                <div className="p-3 bg-white bg-opacity-30 rounded-full">
                  <CiDollar className="text-xl" />
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-green-500 to-green-400 p-4 rounded-lg text-white shadow-lg">
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-sm opacity-80">Total Pending</p>
                  <p className="text-2xl font-bold">{totalPending}</p>
                </div>
                <div className="p-3 bg-white bg-opacity-30 rounded-full">
                  <FaHistory className="text-xl" />
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-purple-500 to-purple-400 p-4 rounded-lg text-white shadow-lg">
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-sm opacity-80">Total Gifts</p>
                  <p className="text-2xl font-bold">${totalGifts.toFixed(2)}</p>
                </div>
                <div className="p-3 bg-white bg-opacity-30 rounded-full">
                  <FaUserCog className="text-xl" />
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Tabs Navigation */}
        <div className="bg-white rounded-lg shadow-md mb-6">
          <div className="flex border-b">
            <button 
              className={`px-6 py-3 font-medium text-sm flex items-center ${activeTab === 'list' ? 'border-b-2 border-orange-500 text-orange-500' : 'text-gray-500 hover:text-orange-500'}`}
              onClick={() => setActiveTab('list')}
            >
              <FaHistory className="mr-2" /> CTO History
            </button>
            <button 
              className={`px-6 py-3 font-medium text-sm flex items-center ${activeTab === 'analytics' ? 'border-b-2 border-orange-500 text-orange-500' : 'text-gray-500 hover:text-orange-500'}`}
              onClick={() => setActiveTab('analytics')}
            >
              <FaChartLine className="mr-2" /> Analytics
            </button>
          </div>
        </div>
        
        {/* Content Area */}
        <div className="bg-white rounded-lg shadow-md p-6">
          {loading ? (
            <div className="flex justify-center items-center h-64">
              <Loader />
            </div>
          ) : (
            <>
              {activeTab === 'list' && (
                <div className="overflow-x-auto">
                  <h2 className="text-xl font-semibold mb-4 text-gray-800">
                    <span className="text-orange-500">CTO</span> Payment History
                  </h2>
                  <table className="min-w-full divide-y divide-gray-200 shadow-sm rounded-lg overflow-hidden">
                    <thead className="bg-orange-500 text-white">
                      <tr>
                        <th scope="col" className="px-6 py-3 text-left text-sm font-medium uppercase tracking-wider">
                          Name
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-sm font-medium uppercase tracking-wider">
                          Email
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-sm font-medium uppercase tracking-wider">
                          Paid
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-sm font-medium uppercase tracking-wider">
                          Gift
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-sm font-medium uppercase tracking-wider">
                          Status
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-sm font-medium uppercase tracking-wider">
                          Category
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-sm font-medium uppercase tracking-wider">
                          Amount
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-sm font-medium uppercase tracking-wider">
                          Monthly
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-sm font-medium uppercase tracking-wider">
                          Action
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {filteredData?.length > 0 ? (
                        filteredData.map((item, index) => (
                          <tr key={index} className={`${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'} hover:bg-orange-50 transition-colors`}>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800">
                              {item?.username}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                              {item?.useremail}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                              {item?.paid}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                              {item?.gift}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                                item?.status === 'paid' 
                                  ? 'bg-green-100 text-green-800' 
                                  : 'bg-yellow-100 text-yellow-800'
                              }`}>
                                {item?.status}
                              </span>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                              {item?.category}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <span className="px-2 py-1 text-xs font-medium bg-orange-100 text-orange-800 rounded-md">
                                ${item?.amount}
                              </span>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <span className="px-2 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded-md">
                                ${item?.monthly_amount}
                              </span>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              <div className="flex items-center space-x-4">
                                <button 
                                  onClick={() => handleDelete(item?.id)}
                                  className="text-red-500 hover:text-red-700 transition-colors"
                                  title="Delete"
                                >
                                  <AiFillDelete className="w-5 h-5" />
                                </button>
                                <button 
                                  onClick={() => handlePay(item?.id)}
                                  className="text-orange-500 hover:text-orange-700 transition-colors"
                                  title="Pay"
                                >
                                  <CiDollar className="w-5 h-5" />
                                </button>
                              </div>
                            </td>
                          </tr>
                        ))
                      ) : (
                        <tr>
                          <td colSpan={9} className="px-6 py-4 text-sm text-center text-gray-500 bg-gray-50">
                            No data found.
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              )}
              
              {activeTab === 'analytics' && (
                <div>
                  <h2 className="text-xl font-semibold mb-6 text-gray-800">
                    <span className="text-orange-500">CTO</span> Analytics
                  </h2>
                  
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {/* Chart visualization */}
                    <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
                      <h3 className="text-lg font-medium mb-4 text-gray-700">
                        Amount by Category
                      </h3>
                      <div className="h-64">
                        {/* Graph-like structure for categories */}
                        <div className="flex flex-col h-full justify-end space-y-2">
                          {Object.keys(chartData).map((category, index) => {
                            const maxValue = Math.max(...Object.values(chartData));
                            const percentage = (chartData[category] / maxValue) * 100;
                            
                            return (
                              <div key={index} className="flex items-center">
                                <div className="w-24 truncate text-sm text-gray-600">
                                  {category}
                                </div>
                                <div className="flex-1 ml-2">
                                  <div 
                                    className="h-8 bg-orange-500 rounded-r-lg relative" 
                                    style={{ width: `${percentage}%` }}
                                  >
                                    <span className="absolute inset-y-0 right-0 flex items-center pr-2 text-white font-medium text-xs">
                                      ${chartData[category].toFixed(2)}
                                    </span>
                                  </div>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                    
                    {/* Status Distribution */}
                    <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
                      <h3 className="text-lg font-medium mb-4 text-gray-700">
                        Payment Status Distribution
                      </h3>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="bg-green-50 p-4 rounded-lg border border-green-100">
                          <div className="text-3xl font-bold text-green-600">{totalPaid}</div>
                          <div className="text-sm text-green-800 mt-1">Paid Transactions</div>
                          <div className="mt-2 h-2 w-full bg-green-200 rounded-full">
                            <div 
                              className="h-2 bg-green-600 rounded-full" 
                              style={{ 
                                width: `${allcto?.length ? (totalPaid / allcto.length) * 100 : 0}%` 
                              }} 
                            />
                          </div>
                        </div>
                        
                        <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-100">
                          <div className="text-3xl font-bold text-yellow-600">{totalPending}</div>
                          <div className="text-sm text-yellow-800 mt-1">Pending Transactions</div>
                          <div className="mt-2 h-2 w-full bg-yellow-200 rounded-full">
                            <div 
                              className="h-2 bg-yellow-600 rounded-full" 
                              style={{ 
                                width: `${allcto?.length ? (totalPending / allcto.length) * 100 : 0}%` 
                              }} 
                            />
                          </div>
                        </div>
                      </div>
                      
                      <div className="mt-6">
                        <h4 className="text-md font-medium mb-2 text-gray-700">
                          Top Categories
                        </h4>
                        <div className="space-y-2">
                          {Object.entries(chartData)
                            .sort((a, b) => b[1] - a[1])
                            .slice(0, 3)
                            .map(([category, amount], index) => (
                              <div key={index} className="flex justify-between items-center p-2 bg-gray-50 rounded">
                                <span className="text-sm font-medium text-gray-700">{category}</span>
                                <span className="text-sm text-orange-500 font-bold">${amount.toFixed(2)}</span>
                              </div>
                            ))
                          }
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </div>
      
      {modalOpen && (
        <Confirmation
          isClose={isClose}
          deletefunction={deleteCto}
          id={deleteID}
        />
      )}
      
      {openModel && (
        <PayctoModel
          openModel={openModel}
          isClose={() => setOpenModel(false)}
          payid={payId}
        />
      )}
    </>
  );
};

export default AdminCto;