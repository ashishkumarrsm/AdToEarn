// import { Link } from "react-router-dom";
// import { useState, useEffect } from "react";
// import { AiFillDelete } from "react-icons/ai";
// import { FaCheck, FaTimes } from "react-icons/fa";
// import { FaEye } from "react-icons/fa6";
// import { GrEdit } from "react-icons/gr";
// import { useDispatch, useSelector } from "react-redux";
// import SuccessAlert from "../BaseFile/comman/SuccessAlert";
// import ErrorAlert from "../BaseFile/comman/ErrorAlert";
// import {
//   getAllTopup,
//   deleteTopup,
//   clearErrors,
//   clearMessage,
//   updateTopup,
// } from "../redux/topupSlice";
// import { getAllUsers } from "../redux/userSlice";
// import { Confirmation } from "../BaseFile/comman/Confirmation";

// export default function AdminTopup() {
//   const dispatch = useDispatch();
//   const [editMode, setEditMode] = useState(false);
//   const [editableTopup, setEditableTopup] = useState(null);
//   const [allTopup, setallTopup] = useState([]);
//   const [deleteID, setDeleteID] = useState();
//   const [modalOpen, setModalOpen] = useState(false);
//   const [values, setValues] = useState({});
//   const [previewImage, setPreviewImage] = useState(null);
//   const [filterquery, setFilterquery] = useState();
//   const { alltopup, loading, error, message } = useSelector(
//     (state) => state.alltopup
//   );
//   const { allusers } = useSelector((state) => state.allusers);

//   useEffect(() => {
//     dispatch(getAllTopup());
//     dispatch(getAllUsers());
//     setallTopup(alltopup);
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

//   const [searchQuery, setSearchQuery] = useState("");

//   const handleSearch = (e) => {
//     setallTopup(alltopup?.filter((p) => p.amount?.includes(e.target.value)));
//     setSearchQuery(e.target.value);
//   };

//   const handleDelete = (id) => {
//     setDeleteID(id);
//     setModalOpen(true);
//   };

//   const isClose = () => {
//     setModalOpen(false);
//   };

//   const handleEdit = (item) => {
//     setEditableTopup(item);
//     setEditMode(true);
//   };

//   const handleCancelEdit = () => {
//     setEditMode(false);
//     setEditableTopup(null);
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setValues((prevState) => ({
//       ...prevState,
//       [name]: value,
//     }));
//   };

//   const handleSaveChange = (id) => {
//     if (editableTopup) {
//       dispatch(updateTopup({ id: id, updatedData: values }));
//       setEditMode(false);
//       setEditableTopup(null);
//     }
//   };

//   const handleImageClick = (imageName) => {
//     setPreviewImage(`/uploads/${imageName}`);
//   };

//   const handleClosePreview = () => {
//     setPreviewImage(null);
//   };

//   return (
//     <div className="p-4 my-5 lg:mx-3 sm:mx-3">
//       <div className="block gap-4 sm:flex">
//         <div className="mb-4 sm:mb-0">
//           <label htmlFor="search" className="sr-only">
//             Search
//           </label>
//           <input
//             id="search"
//             name="search"
//             value={searchQuery}
//             onChange={handleSearch}
//             type="text"
//             placeholder="search here . . ."
//             className="block w-[50vh] px-2 py-2 rounded-sm  border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-900 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-lg sm:leading-6"
//           />
//         </div>
//         <div className="">
//           <label htmlFor="filterquery" className="sr-only">
//             Filter
//           </label>
//           <select
//             id="filterquery"
//             name="filterquery"
//             value={filterquery}
//             onChange={(e) => setFilterquery(e.target.value)}
//             className="block w-[50vh] px-2 py-[6px] rounded-sm  border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-lg sm:leading-6"
//           >
//             <option value="" disabled>
//               Select status...
//             </option>
//             <option value="complete">Complete</option>
//             <option value="decline">Decline</option>
//             <option value="pending">Pending</option>
//             <option value="TRN-ADM002">By Admin</option>
//           </select>
//         </div>
//       </div>
//       <div className="flow-root mt-4">
//         {message && <SuccessAlert message={message} />}
//         {error && <ErrorAlert error={error} />}
//         <div className="overflow-x-auto">
//           <div className="inline-block py-2 min-w-full align-middle">
//             <table className="z-10 mt-6 w-full text-left whitespace-nowrap border border-gray-200">
//               <thead className="text-base leading-6 text-white bg-black border-b border-white/10">
//                 <tr>
//                   <th
//                     scope="col"
//                     className="py-2 pl-4 font-medium border border-gray-700 sm:pl-6 lg:pl-8"
//                   >
//                     ID
//                   </th>
//                   <th
//                     scope="col"
//                     className="hidden py-2 pr-8 pl-2 font-medium border border-gray-700 sm:table-cell"
//                   >
//                     Topup By
//                   </th>
//                   <th
//                     scope="col"
//                     className="py-2 pr-4 pl-2 font-medium text-right border border-gray-700 sm:pr-8 sm:text-left lg:pr-20"
//                   >
//                     Topup To
//                   </th>
//                   <th
//                     scope="col"
//                     className="py-2 pr-4 pl-2 font-medium text-right border border-gray-700 sm:pr-8 sm:text-left lg:pr-20"
//                   >
//                     Amount
//                   </th>
//                   <th
//                     scope="col"
//                     className="py-2 pr-4 pl-2 font-medium text-right border border-gray-700 sm:pr-8 sm:text-left lg:pr-20"
//                   >
//                     Status
//                   </th>

//                   <th
//                     scope="col"
//                     className="py-2 pr-4 pl-2 font-medium text-right border border-gray-700 sm:pr-8 sm:text-left lg:pr-20"
//                   >
//                     Created At
//                   </th>
//                   <th
//                     scope="col"
//                     className="hidden py-2 pr-4 pl-2 font-medium border border-gray-700 sm:table-cell sm:pr-6 lg:pr-8"
//                   >
//                     Action
//                   </th>
//                 </tr>
//               </thead>
//               <tbody className="divide-y divide-white/5">
//                 {(searchQuery ? allTopup : alltopup)
//                   ?.filter((item) =>
//                     filterquery ? item?.status === filterquery : true
//                   )?.length > 0 ? ((searchQuery ? allTopup : alltopup)
//                   ?.filter((item) =>
//                     filterquery ? item?.status === filterquery : true
//                   )
//                   ?.map((item, index) => (
//                     <tr
//                       key={index}
//                       className="transition-colors duration-200 even:bg-blue-200"
//                     >
//                       <td className="py-4 pl-4 border border-gray-700 sm:pl-6 lg:pl-8">
//                         <div className="flex items-center">
//                           <div className="text-lg font-medium leading-6 text-gray-900 truncate">
//                             {item?.id}
//                           </div>
//                         </div>
//                       </td>
//                       <td className="hidden py-4 pr-4 pl-2 border border-gray-700 sm:table-cell sm:pr-8">
//                         <div className="font-mono text-lg leading-6 text-gray-900 cursor-pointer">
//                           <Link to={`/admin/check/profile/${item?.userby_id}`}>
//                             {
//                               allusers?.find(
//                                 (user) => user?.id === item?.userby_id
//                               )?.username
//                             }
//                           </Link>
//                         </div>
//                       </td>
//                       <td className="hidden py-4 pr-4 pl-2 border border-gray-700 sm:table-cell sm:pr-8">
//                         <div className="font-mono text-lg leading-6 text-gray-900 cursor-pointer">
//                           <Link to={`/admin/check/profile/${item?.userto_id}`}>
//                             {
//                               allusers?.find(
//                                 (user) => user?.id === item?.userto_id
//                               )?.username
//                             }
//                           </Link>
//                         </div>
//                       </td>
//                       <td className="hidden py-4 pr-4 pl-2 border border-gray-700 sm:table-cell sm:pr-8">
//                         <div className="font-mono text-lg leading-6 text-gray-900">
//                           ${item?.amount}
//                         </div>
//                       </td>
//                       <td className="hidden py-4 pr-4 pl-2 border border-gray-700 sm:table-cell sm:pr-8">
//                         <div className="px-2 py-1 text-xs font-medium text-gray-900 rounded-md ring-1 ring-inset bg-gray-400/40 ring-white/10">
//                           {editMode &&
//                           editableTopup &&
//                           editableTopup.id === item?.id ? (
//                             <select
//                               id="status"
//                               name="status"
//                               className="px-3 py-1 w-full text-lg text-gray-900 bg-gray-200 rounded-sm border-0 shadow focus:outline-none"
//                               onChange={handleChange}
//                               defaultValue={item?.status}
//                             >
//                               <option value="pending">Pending</option>
//                               <option value="inprogress">In Progress</option>
//                               <option value="decline">Decline</option>
//                               <option value="complete">Complete</option>
//                             </select>
//                           ) : (
//                             item?.status
//                           )}
//                         </div>
//                       </td>

//                       <td className="hidden py-4 pr-4 pl-2 border border-gray-700 sm:table-cell sm:pr-6 lg:pr-8">
//                         <div className="font-mono text-lg text-gray-900">
//                           {new Date(item?.createdAT).toLocaleDateString()}
//                         </div>
//                       </td>
//                       <td className="py-4 pr-4 pl-2 border border-gray-700 sm:pr-8">
//                         <div className="flex justify-end items-center space-x-2">
//                           {editMode &&
//                           editableTopup &&
//                           editableTopup.id === item?.id ? (
//                             <>
//                               <button
//                                 onClick={() => handleSaveChange(item?.id)}
//                                 className="p-1 text-white bg-green-700 rounded-full hover:bg-green-500 focus:outline-none"
//                               >
//                                 <FaCheck />
//                               </button>
//                               <button
//                                 onClick={handleCancelEdit}
//                                 className="p-1 text-white bg-red-700 rounded-full hover:bg-red-500 focus:outline-none"
//                               >
//                                 <FaTimes />
//                               </button>
//                             </>
//                           ) : (
//                             <>
//                               <button
//                                 onClick={() => handleEdit(item)}
//                                 className="p-1 text-black bg-blue-400 rounded-full hover:bg-blue-300 focus:outline-none"
//                               >
//                                 <GrEdit />
//                               </button>
//                               {/* <button
//                                 onClick={() => handleDelete(item?.id)}
//                                 className="p-1 text-white bg-red-700 rounded-full hover:bg-red-500 focus:outline-none"
//                               >
//                                 <AiFillDelete />
//                               </button> */}
//                             </>
//                           )}
//                         </div>
//                       </td>
//                     </tr>
//                   ))) : (
//                     <tr>
//                      <td colSpan={7} className="px-4 py-4 text-base text-center text-gray-100 bg-blue-200">
//                         No data found.
//                       </td>
//                     </tr>
//                   )}
//               </tbody>
//             </table>

//             {previewImage && (
//               <div className="flex fixed inset-0 z-50 justify-center items-center bg-black bg-opacity-75">
//                 <div className="relative">
//                   <img
//                     src={previewImage}
//                     alt="Preview"
//                     className="max-h-[80vh] max-w-[80vw]"
//                   />
//                   <button
//                     onClick={handleClosePreview}
//                     className="absolute top-2 right-2 p-2 text-white bg-red-700 rounded-full hover:bg-red-500 focus:outline-none"
//                   >
//                     <FaTimes />
//                   </button>
//                 </div>
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//       {modalOpen && (
//         <Confirmation
//           isClose={isClose}
//           deletefunction={deleteTopup}
//           id={deleteID}
//         />
//       )}
//     </div>
//   );
// }














import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { AiFillDelete } from "react-icons/ai";
import { FaCheck, FaTimes, FaSearch, FaFilter } from "react-icons/fa";
import { FaEye, FaMoneyBillTransfer, FaArrowRightArrowLeft } from "react-icons/fa6";
import { GrEdit } from "react-icons/gr";
import { MdOutlineDashboard, MdAttachMoney, MdPendingActions } from "react-icons/md";
import { BiTransfer } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import SuccessAlert from "../BaseFile/comman/SuccessAlert";
import ErrorAlert from "../BaseFile/comman/ErrorAlert";
import {
  getAllTopup,
  deleteTopup,
  clearErrors,
  clearMessage,
  updateTopup,
} from "../redux/topupSlice";
import { getAllUsers } from "../redux/userSlice";
import { Confirmation } from "../BaseFile/comman/Confirmation";
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export default function AdminTopup() {
  const dispatch = useDispatch();
  const [editMode, setEditMode] = useState(false);
  const [editableTopup, setEditableTopup] = useState(null);
  const [allTopup, setallTopup] = useState([]);
  const [deleteID, setDeleteID] = useState();
  const [modalOpen, setModalOpen] = useState(false);
  const [values, setValues] = useState({});
  const [previewImage, setPreviewImage] = useState(null);
  const [filterquery, setFilterquery] = useState("");
  const [showStats, setShowStats] = useState(true);
  const [activeTab, setActiveTab] = useState("all");
  const [viewMode, setViewMode] = useState("table");
  
  const { alltopup, loading, error, message } = useSelector(
    (state) => state.alltopup
  );
  const { allusers } = useSelector((state) => state.allusers);

  useEffect(() => {
    dispatch(getAllTopup());
    dispatch(getAllUsers());
    setallTopup(alltopup);
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

  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e) => {
    setallTopup(alltopup?.filter((p) => p.amount?.includes(e.target.value)));
    setSearchQuery(e.target.value);
  };

  const handleDelete = (id) => {
    setDeleteID(id);
    setModalOpen(true);
  };

  const isClose = () => {
    setModalOpen(false);
  };

  const handleEdit = (item) => {
    setEditableTopup(item);
    setEditMode(true);
  };

  const handleCancelEdit = () => {
    setEditMode(false);
    setEditableTopup(null);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSaveChange = (id) => {
    if (editableTopup) {
      dispatch(updateTopup({ id: id, updatedData: values }));
      setEditMode(false);
      setEditableTopup(null);
    }
  };

  const handleImageClick = (imageName) => {
    setPreviewImage(`/uploads/${imageName}`);
  };

  const handleClosePreview = () => {
    setPreviewImage(null);
  };

  // Calculate stats for dashboard
  const calculateStats = () => {
    if (!alltopup) return { total: 0, pending: 0, completed: 0, declined: 0, totalAmount: 0 };
    
    const total = alltopup.length;
    const pending = alltopup.filter(item => item.status === "pending").length;
    const completed = alltopup.filter(item => item.status === "complete").length;
    const declined = alltopup.filter(item => item.status === "decline").length;
    const totalAmount = alltopup.reduce((sum, item) => sum + parseFloat(item.amount || 0), 0);
    
    return { total, pending, completed, declined, totalAmount };
  };

  const stats = calculateStats();

  // Prepare data for chart
  const statusChartData = [
    { name: 'Pending', value: stats.pending, color: '#F59E0B' },
    { name: 'Completed', value: stats.completed, color: '#10B981' },
    { name: 'Declined', value: stats.declined, color: '#EF4444' },
  ];

  // Group top-ups by date for the bar chart
  const prepareBarChartData = () => {
    if (!alltopup) return [];
    
    const dateMap = {};
    alltopup.forEach(item => {
      const date = new Date(item.createdAT).toLocaleDateString();
      if (!dateMap[date]) {
        dateMap[date] = 0;
      }
      dateMap[date] += parseFloat(item.amount || 0);
    });
    
    return Object.keys(dateMap).map(date => ({
      date,
      amount: dateMap[date]
    })).slice(-7); // Last 7 days
  };

  const barChartData = prepareBarChartData();

  // Filter data based on tab
  const getFilteredData = () => {
    let filteredData = (searchQuery ? allTopup : alltopup) || [];
    
    if (filterquery) {
      filteredData = filteredData.filter(item => item?.status === filterquery);
    }
    
    if (activeTab !== "all") {
      filteredData = filteredData.filter(item => item?.status === activeTab);
    }
    
    return filteredData;
  };

  const filteredData = getFilteredData();

  return (
    <div className="min-h-screen  text-gray-900 p-6">
      {/* Dashboard Header */}
      <div className="mb-6">
        <div className="flex justify-between items-center mb-6 flex-wrap gap-4">
          <h1 className="text-2xl font-bold text-orange-500 flex items-center">
            <MdOutlineDashboard className="mr-2" /> Topup Management Dashboard
          </h1>
          <div className="flex space-x-2">
            <button 
              onClick={() => setViewMode("table")}
              className={`px-4 py-2 rounded-md ${viewMode === "table" ? "bg-orange-500 text-white" : "bg-gray-700 text-gray-300"}`}
            >
              Table View
            </button>
            <button 
              onClick={() => setViewMode("cards")}
              className={`px-4 py-2 rounded-md ${viewMode === "cards" ? "bg-orange-500 text-white" : "bg-gray-700 text-gray-300"}`}
            >
              Card View
            </button>
          </div>
        </div>
        
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          <div className="bg-orange-100 p-4 rounded-lg shadow-md border-l-4 border-orange-500">
            <div className="flex justify-between">
              <div>
                <p className="text-gray-800 text-sm">Total Topups</p>
                <p className="text-2xl font-bold">{stats.total}</p>
              </div>
              <div className="bg-orange-500/20 p-3 rounded-full">
                <BiTransfer className="text-orange-500 text-xl" />
              </div>
            </div>
          </div>
          
          <div className="bg-orange-100 p-4 rounded-lg shadow-md border-l-4 border-green-500">
            <div className="flex justify-between">
              <div>
                <p className="text-gray-800 text-sm">Total Amount</p>
                <p className="text-2xl font-bold">${stats.totalAmount.toFixed(2)}</p>
              </div>
              <div className="bg-green-500/20 p-3 rounded-full">
                <MdAttachMoney className="text-green-500 text-xl" />
              </div>
            </div>
          </div>
          
          <div className="bg-orange-100 p-4 rounded-lg shadow-md border-l-4 border-yellow-500">
            <div className="flex justify-between">
              <div>
                <p className="text-gray-800 text-sm">Pending</p>
                <p className="text-2xl font-bold">{stats.pending}</p>
              </div>
              <div className="bg-yellow-500/20 p-3 rounded-full">
                <MdPendingActions className="text-yellow-500 text-xl" />
              </div>
            </div>
          </div>
          
          <div className="bg-orange-100 p-4 rounded-lg shadow-md border-l-4 border-blue-500">
            <div className="flex justify-between">
              <div>
                <p className="text-gray-800 text-sm">Completed</p>
                <p className="text-2xl font-bold">{stats.completed}</p>
              </div>
              <div className="bg-blue-500/20 p-3 rounded-full">
                <FaCheck className="text-blue-500 text-xl" />
              </div>
            </div>
          </div>
        </div>
        
        {/* Toggle Charts Button */}
        <button 
          onClick={() => setShowStats(!showStats)}
          className="flex items-center px-4 py-2 mb-6 bg-orange-100 text-orange-500 rounded-md hover:bg-gray-700 transition-colors"
        >
          {showStats ? "Hide Charts" : "Show Charts"}
        </button>
        
        {/* Charts Section */}
        {showStats && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
            <div className="bg-orange-100 p-4 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-4 text-orange-500">Status Distribution</h2>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={statusChartData}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={80}
                      fill="#8884d8"
                      paddingAngle={5}
                      dataKey="value"
                      label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                    >
                      {statusChartData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip 
                      formatter={(value) => [`${value} topups`, 'Count']}
                      contentStyle={{ backgroundColor: '#1F2937', borderColor: '#374151', borderRadius: '0.375rem' }}
                    />
                    <Legend />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>
            
            <div className="bg-orange-100 p-4 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-4 text-orange-500">Recent Topup Amounts</h2>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={barChartData}>
                    <XAxis dataKey="date" stroke="#F97316" />
                    <YAxis stroke="#F97316" />
                    <Tooltip 
                      formatter={(value) => [`$${value}`, 'Amount']}
                      contentStyle={{ backgroundColor: '#1F2937', borderColor: '#374151', borderRadius: '0.375rem' }}
                    />
                    <Bar dataKey="amount" fill="#F97316" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        )}
      </div>
      
      {/* Filter Tabs */}
      <div className="flex mb-4 border-b border-gray-700 overflow-auto">
        <button
          className={`px-4 py-2 font-medium ${activeTab === "all" ? "text-orange-500 border-b-2 border-orange-500" : "text-gray-800"}`}
          onClick={() => setActiveTab("all")}
        >
          All Topups
        </button>
        <button
          className={`px-4 py-2 font-medium ${activeTab === "pending" ? "text-orange-500 border-b-2 border-orange-500" : "text-gray-800"}`}
          onClick={() => setActiveTab("pending")}
        >
          Pending
        </button>
        <button
          className={`px-4 py-2 font-medium ${activeTab === "complete" ? "text-orange-500 border-b-2 border-orange-500" : "text-gray-800"}`}
          onClick={() => setActiveTab("complete")}
        >
          Completed
        </button>
        <button
          className={`px-4 py-2 font-medium ${activeTab === "decline" ? "text-orange-500 border-b-2 border-orange-500" : "text-gray-800"}`}
          onClick={() => setActiveTab("decline")}
        >
          Declined
        </button>
      </div>
      
      {/* Search and Filter Controls */}
      <div className="bg-orange-100 p-4 rounded-lg shadow-md mb-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="search" className="block text-sm font-medium text-gray-800 mb-1">
              Search Topups
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <FaSearch className="text-orange-500" />
              </div>
              <input
                id="search"
                name="search"
                value={searchQuery}
                onChange={handleSearch}
                type="text"
                placeholder="Search by amount..."
                className="block w-full pl-10 pr-3 py-2 bg-orange-50 border-0 rounded-md text-gray-900 focus:ring-2 focus:ring-orange-500 placeholder-gray-400"
              />
            </div>
          </div>
          
          <div>
            <label htmlFor="filterquery" className="block text-sm font-medium text-gray-800 mb-1">
              Filter by Status
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <FaFilter className="text-orange-500" />
              </div>
              <select
                id="filterquery"
                name="filterquery"
                value={filterquery}
                onChange={(e) => setFilterquery(e.target.value)}
                className="block w-full pl-10 pr-3 py-2 bg-orange-50 border-0 rounded-md text-gray-900 focus:ring-2 focus:ring-orange-500"
              >
                <option value="">All Statuses</option>
                <option value="complete">Complete</option>
                <option value="decline">Decline</option>
                <option value="pending">Pending</option>
                <option value="TRN-ADM002">By Admin</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      
      {/* Alerts */}
      {message && <SuccessAlert message={message} />}
      {error && <ErrorAlert error={error} />}
      
      {/* Display Data */}
      {viewMode === "table" ? (
        /* Table View */
        <div className="bg-orange-100 rounded-lg shadow-md overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-700">
              <thead className="bg-gray-900 ">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-orange-500 uppercase tracking-wider">ID</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-orange-500 uppercase tracking-wider">Topup By</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-orange-500 uppercase tracking-wider">Topup To</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-orange-500 uppercase tracking-wider">Amount</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-orange-500 uppercase tracking-wider">Status</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-orange-500 uppercase tracking-wider">Created At</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-orange-500 uppercase tracking-wider">Action</th>
                </tr>
              </thead>
              <tbody className="bg-orange-100 divide-y divide-gray-700">
                {filteredData.length > 0 ? (
                  filteredData.map((item, index) => (
                    <tr key={index} className={index % 2 === 0 ? 'bg-orange-100' : 'bg-gray-750'}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">
                        <div className="text-gray-200">{item?.id}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <Link 
                          to={`/admin/check/profile/${item?.userby_id}`}
                          className="text-orange-500 hover:text-orange-400"
                        >
                          {allusers?.find((user) => user?.id === item?.userby_id)?.username || "Unknown"}
                        </Link>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <Link 
                          to={`/admin/check/profile/${item?.userto_id}`}
                          className="text-orange-500 hover:text-orange-400"
                        >
                          {allusers?.find((user) => user?.id === item?.userto_id)?.username || "Unknown"}
                        </Link>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="font-mono text-green-400">${item?.amount}</span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {editMode && editableTopup && editableTopup.id === item?.id ? (
                          <select
                            id="status"
                            name="status"
                            className="w-full px-3 py-1 bg-orange-50 text-gray-900 rounded border border-gray-600 focus:outline-none focus:ring-2 focus:ring-orange-500"
                            onChange={handleChange}
                            defaultValue={item?.status}
                          >
                            <option value="pending">Pending</option>
                            <option value="inprogress">In Progress</option>
                            <option value="decline">Decline</option>
                            <option value="complete">Complete</option>
                          </select>
                        ) : (
                          <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium
                            ${item?.status === 'complete' ? 'bg-green-100 text-green-800' : 
                            item?.status === 'decline' ? 'bg-red-100 text-red-800' :
                            item?.status === 'pending' ? 'bg-yellow-100 text-yellow-800' : 
                            'bg-blue-100 text-blue-800'}`}>
                            {item?.status}
                          </span>
                        )}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {new Date(item?.createdAT).toLocaleDateString()}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center space-x-2">
                          {editMode && editableTopup && editableTopup.id === item?.id ? (
                            <>
                              <button
                                onClick={() => handleSaveChange(item?.id)}
                                className="p-1.5 bg-green-600 text-white rounded-full hover:bg-green-700 focus:outline-none"
                              >
                                <FaCheck size={14} />
                              </button>
                              <button
                                onClick={handleCancelEdit}
                                className="p-1.5 bg-red-600 text-white rounded-full hover:bg-red-700 focus:outline-none"
                              >
                                <FaTimes size={14} />
                              </button>
                            </>
                          ) : (
                            <button
                              onClick={() => handleEdit(item)}
                              className="p-1.5 bg-orange-500 text-white rounded-full hover:bg-orange-600 focus:outline-none"
                              title="Edit"
                            >
                              <GrEdit size={14} className="text-white" />
                            </button>
                          )}
                        </div>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={7} className="px-6 py-8 text-center text-gray-800">
                      <div className="flex flex-col items-center">
                        <FaMoneyBillTransfer className="h-12 w-12 text-gray-500 mb-3" />
                        <p className="text-lg font-medium">No topup data found</p>
                        <p className="text-sm text-gray-500">Try adjusting your search or filter</p>
                      </div>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        /* Card View */
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredData.length > 0 ? (
            filteredData.map((item, index) => (
              <div key={index} className="bg-orange-100 rounded-lg shadow-md overflow-hidden">
                <div className="p-4 border-b border-gray-700 flex justify-between items-center">
                  <span className="text-sm font-medium text-gray-800">ID: {item?.id}</span>
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium
                    ${item?.status === 'complete' ? 'bg-green-100 text-green-800' : 
                    item?.status === 'decline' ? 'bg-red-100 text-red-800' :
                    item?.status === 'pending' ? 'bg-yellow-100 text-yellow-800' : 
                    'bg-blue-100 text-blue-800'}`}>
                    {item?.status}
                  </span>
                </div>
                <div className="p-4">
                  <div className="flex items-center justify-center mb-4 text-4xl font-bold text-green-400">
                    ${item?.amount}
                  </div>
                  
                  <div className="flex justify-between mb-2">
                    <div className="flex items-center">
                      <span className="text-gray-800 mr-2">From:</span>
                      <Link 
                        to={`/admin/check/profile/${item?.userby_id}`}
                        className="text-orange-500 hover:text-orange-400"
                      >
                        {allusers?.find((user) => user?.id === item?.userby_id)?.username || "Unknown"}
                      </Link>
                    </div>
                    <FaArrowRightArrowLeft className="text-orange-500" />
                    <div className="flex items-center">
                      <span className="text-gray-800 mr-2">To:</span>
                      <Link 
                        to={`/admin/check/profile/${item?.userto_id}`}
                        className="text-orange-500 hover:text-orange-400"
                      >
                        {allusers?.find((user) => user?.id === item?.userto_id)?.username || "Unknown"}
                      </Link>
                    </div>
                  </div>
                  
                  <div className="text-sm text-gray-800 mb-4">
                    Date: {new Date(item?.createdAT).toLocaleDateString()}
                  </div>
                  
                  {editMode && editableTopup && editableTopup.id === item?.id ? (
                    <div className="flex flex-col space-y-2">
                      <select
                        id="status"
                        name="status"
                        className="w-full px-3 py-2 bg-gray-700 text-white rounded border border-gray-600 focus:outline-none focus:ring-2 focus:ring-orange-500"
                        onChange={handleChange}
                        defaultValue={item?.status}
                      >
                        <option value="pending">Pending</option>
                        <option value="inprogress">In Progress</option>
                        <option value="decline">Decline</option>
                        <option value="complete">Complete</option>
                      </select>
                      
                      <div className="flex space-x-2 mt-2">
                        <button
                          onClick={() => handleSaveChange(item?.id)}
                          className="flex-1 bg-green-600 text-white py-2 rounded hover:bg-green-700 focus:outline-none flex items-center justify-center"
                        >
                          <FaCheck className="mr-2" /> Save
                        </button>
                        <button
                          onClick={handleCancelEdit}
                          className="flex-1 bg-red-600 text-white py-2 rounded hover:bg-red-700 focus:outline-none flex items-center justify-center"
                        >
                          <FaTimes className="mr-2" /> Cancel
                        </button>
                      </div>
                    </div>
                  ) : (
                    <button
                      onClick={() => handleEdit(item)}
                      className="w-full bg-orange-500 text-white py-2 rounded hover:bg-orange-600 focus:outline-none flex items-center justify-center"
                    >
                      <GrEdit className="mr-2" /> Edit Status
                    </button>
                  )}
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full bg-orange-100 rounded-lg p-8 text-center">
              <FaMoneyBillTransfer className="h-16 w-16 text-gray-500 mx-auto mb-4" />
              <p className="text-xl font-medium text-gray-300">No topup data found</p>
              <p className="text-sm text-gray-500 mt-2">Try adjusting your search or filter</p>
            </div>
          )}
        </div>
      )}
      
      {/* Preview Image Modal */}
      {previewImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75">
          <div className="relative bg-gray-900 p-1 rounded-lg shadow-lg">
            <img
              src={previewImage}
              alt="Preview"
              className="max-h-[80vh] max-w-[80vw] object-contain"
            />
            <button
              onClick={handleClosePreview}
              className="absolute top-2 right-2 p-2 bg-red-600 text-white rounded-full hover:bg-red-700 focus:outline-none"
            >
              <FaTimes />
            </button>
          </div>
        </div>
      )}
      
      {/* Confirmation Modal */}
      {modalOpen && (
        <Confirmation
          isClose={isClose}
          deletefunction={deleteTopup}
          id={deleteID}
        />
      )}
    </div>
  );
}