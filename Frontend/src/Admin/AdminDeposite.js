// import { Link } from "react-router-dom";
// import { useState, useEffect } from "react";
// import { AiFillDelete } from "react-icons/ai";
// import { FaCheck, FaTimes } from "react-icons/fa";
// import { FaEye } from "react-icons/fa6";
// import { GrEdit } from "react-icons/gr";
// import { useDispatch, useSelector } from "react-redux";
// import SuccessAlert from "../BaseFile/comman/SuccessAlert";
// import ErrorAlert from "../BaseFile/comman/ErrorAlert";
// import Loader from "../BaseFile/comman/Loader";
// import { useParams } from "react-router-dom";
// import {
//   getAllDeposite,
//   deleteDeposite,
//   clearErrors,
//   clearMessage,
//   updateDeposite,
// } from "../redux/depositeSlice";
// import { Confirmation } from "../BaseFile/comman/Confirmation";
// import { getAllUsers } from "../redux/userSlice";

// export default function AdminDeposite() {
//   const { action } = useParams();
//   const dispatch = useDispatch();
//   const [editMode, setEditMode] = useState(false);
//   const [editableDeposite, setEditableDeposite] = useState(null);
//   const [allDeposite, setAllDeposite] = useState([]);
//   const [deleteID, setDeleteID] = useState();
//   const [modalOpen, setModalOpen] = useState(false);
//   const [filterquery, setFilterquery] = useState();
//   const [values, setValues] = useState();
//   const [previewImage, setPreviewImage] = useState(null);

//   const { alldeposite, loading, error, message } = useSelector(
//     (state) => state.alldeposite
//   );
//   const { allusers } = useSelector((state) => state.allusers);
//   useEffect(() => {
//     dispatch(getAllDeposite());
//     setAllDeposite(alldeposite);
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

//   const [searchQuery, setSearchQuery] = useState("");

//   useEffect(() => {
//     if (action) {
//       setFilterquery(action);
//     }
//   }, [action]);

//   const handleSearch = (e) => {
//     setAllDeposite(
//       alldeposite?.filter((p) => toString(p?.amount).includes(e.target.value))
//     );
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
//     setEditableDeposite(item);
//     setEditMode(true);
//   };

//   const handleCancelEdit = () => {
//     setEditMode(false);
//     setEditableDeposite(null);
//   };

//   const handleChange = (e) => {
//     setValues(e.target.value);
//   };

//   const handleSaveChange = (id) => {
//     if (editableDeposite) {
//       dispatch(
//         updateDeposite({
//           id: id,
//           status: values,
//           amount: editableDeposite?.amount,
//           user_id: editableDeposite?.user_id,
//         })
//       );
//       setEditMode(false);
//       setEditableDeposite(null);
//     }
//   };

//   const handleImageClick = (imageName) => {
//     setPreviewImage(`/uploads/${imageName}`);
//   };

//   const handleClosePreview = () => {
//     setPreviewImage(null);
//   };
//   const formatDateTime = (isoString) => {
//     const date = new Date(isoString);
//     const formattedDate = date.toISOString().split("T")[0];
//     const formattedTime = date.toTimeString().split(" ")[0];
//     return `${formattedDate} - ${formattedTime}`;
//   };
//   return (
//     <>
//       {loading ? (
//         <Loader />
//       ) : (
//         <div className="p-4 text-gray-200">
//           <div className="block gap-4 sm:flex">
//             <div className="mb-4 sm:mb-0">
//               <label htmlFor="search" className="sr-only">
//                 Search
//               </label>
//               <input
//                 id="search"
//                 name="search"
//                 value={searchQuery}
//                 onChange={handleSearch}
//                 type="number"
//                 placeholder="Search amount here..."
//                 className="block w-full md:w-[50vh] px-2 py-2 rounded-sm  border-0 text-gray-900 shadow-sm ring-1 ring-inset placeholder:text-gray-900 ring-gray-300  focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-lg sm:leading-6"
//               />
//             </div>
//             <div className="">
//               <label htmlFor="filterquery" className="sr-only">
//                 Filter
//               </label>
//               <select
//                 id="filterquery"
//                 name="filterquery"
//                 value={filterquery}
//                 onChange={(e) => setFilterquery(e.target.value)}
//                 className="block w-[50vh] px-2 py-[6px] rounded-sm border-0 text-gray-900  shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-lg sm:leading-6"
//               >
//                 <option value="" disabled>
//                   Select status...
//                 </option>
//                 <option value="complete">Complete</option>
//                 <option value="decline">Decline</option>
//                 <option value="pending">Pending</option>
//                 <option value="TRN-ADM002">By Admin</option>
//               </select>
//             </div>
//           </div>
//           <div className="flow-root mt-4">
//             {message && <SuccessAlert message={message} />}
//             {error && <ErrorAlert error={error} />}
//             <div className="overflow-x-auto">
//               <table className="z-10 mt-6 w-full text-left border-collapse">
//                 <thead className="text-base leading-6 bg-black border border-gray-300">
//                   <tr>
//                     <th
//                       scope="col"
//                       className="py-2 pl-2 font-medium border-r border-gray-300"
//                     >
//                       Name
//                     </th>
//                     <th
//                       scope="col"
//                       className="py-2 pl-2 font-medium border-r border-gray-300"
//                     >
//                       Amount
//                     </th>
//                     <th
//                       scope="col"
//                       className="py-2 pl-2 font-medium border-r border-gray-300"
//                     >
//                       Status
//                     </th>
//                     <th
//                       scope="col"
//                       className="py-2 pl-2 font-medium border-r border-gray-300"
//                     >
//                       Receipt
//                     </th>
//                     <th
//                       scope="col"
//                       className="py-2 pl-2 font-medium border-r border-gray-300"
//                     >
//                       Request
//                     </th>
//                     <th scope="col" className="py-2 pl-2 font-medium">
//                       Actions
//                     </th>
//                   </tr>
//                 </thead>
//                 <tbody className="text-lg text-gray-900 divide-y divide-gray-300">
//                   {(searchQuery ? allDeposite : alldeposite)
//                     ?.filter((item) =>
//                       filterquery ? item?.status === filterquery : true
//                     )
//                     ?.slice()
//                     .reverse()?.length > 0 ? ( (searchQuery ? allDeposite : alldeposite)
//                     ?.filter((item) =>
//                       filterquery ? item?.status === filterquery : true
//                     )
//                     ?.slice()
//                     .reverse()
//                     .map((item, index) => (
//                       <tr key={index} className="border-b border-gray-200 even:bg-blue-200">
//                         <td className="py-4 pl-2 border-r border-gray-200">
//                           <Link
//                             to={`/admin/check/profile/${item?._id}`}
//                             className="text-lg font-medium leading-6 truncate"
//                           >
//                             {
//                               allusers?.find(
//                                 (user) => user?.id === item?.user_id
//                               )?.email
//                             }
//                           </Link>
//                         </td>
//                         <td className="py-4 pl-2 border-r border-gray-200">
//                           <div className="font-mono text-lg">
//                             ${item?.amount}
//                           </div>
//                         </td>
//                         <td className="py-4 pl-2 border-r border-gray-200">
//                           {editMode && editableDeposite?.id === item?.id ? (
//                             <select
//                               className="px-3 py-1 w-full text-lg bg-gray-200 rounded-sm border-0"
//                               onChange={handleChange}
//                               defaultValue={item?.status}
//                             >
//                               <option value="pending">Pending</option>
//                               <option value="inprogress">In Progress</option>
//                               <option value="decline">Decline</option>
//                               <option value="complete">Complete</option>
//                             </select>
//                           ) : (
//                             <div className="px-2 py-1 text-xs rounded-md t">
//                               {item?.status}
//                             </div>
//                           )}
//                         </td>
//                         <td className="py-4 pl-2 border-r border-gray-200">
//                           {item?.image_name && (
//                             <button
//                               onClick={() => handleImageClick(item?.image_name)}
//                               className="text-blue-400 hover:underline"
//                             >
//                               {item?.image_name?.slice(0, 10)}
//                             </button>
//                           )}
//                         </td>
//                         <td className="py-4 pr-4 pl-2 border-r border-gray-200 sm:table-cell sm:pr-8">
//                           <div className="px-2 py-1 text-xs font-medium rounded-md">
//                             {formatDateTime(item?.createdAT)} /
//                             {formatDateTime(item?.acceptat)}
//                           </div>
//                         </td>
//                         <td className="py-4 pl-2">
//                           <div className="flex items-center space-x-2">
//                             {editMode && editableDeposite?.id === item?.id ? (
//                               <>
//                                 <FaCheck
//                                   className="w-4 h-4 text-green-700 cursor-pointer"
//                                   onClick={() => handleSaveChange(item?.id)}
//                                 />
//                                 <FaTimes
//                                   className="w-4 h-4 text-red-700 cursor-pointer"
//                                   onClick={handleCancelEdit}
//                                 />
//                               </>
//                             ) : (
//                               <>
//                                 {/* <AiFillDelete
//                                   className="w-4 h-4 text-red-400 cursor-pointer"
//                                   onClick={() => handleDelete(item?.id)}
//                                 /> */}
//                                 <GrEdit
//                                   className="w-4 h-4 text-blue-400 cursor-pointer"
//                                   onClick={() => handleEdit(item)}
//                                 />
//                               </>
//                             )}
//                             <Link to={`/user/profile/${item?.user_id}`}>
//                               <FaEye className="w-4 h-4 text-green-700 cursor-pointer" />
//                             </Link>
//                           </div>
//                         </td>
//                       </tr>
//                     ))) : (
//                       <tr>
//                       <td colSpan={7} className="py-4 text-base px-4 text-center text-gray-100 bg-[#4b1725ab]">
//                         No Deposit data found
//                       </td>
//                     </tr>
//                     )}
//                 </tbody>
//               </table>
//             </div>
//           </div>
//           {previewImage && (
//             <div className="flex fixed inset-0 justify-center items-center bg-black bg-opacity-70">
//               <div className="relative">
//                 <img
//                   src={previewImage}
//                   alt="Preview"
//                   className="object-contain max-w-full max-h-screen"
//                 />
//                 <button
//                   onClick={handleClosePreview}
//                   className="absolute top-2 right-2 p-2 text-xl text-gray-900 bg-black rounded-full"
//                 >
//                   ×
//                 </button>
//               </div>
//             </div>
//           )}
//           {modalOpen && (
//             <Confirmation
//               isClose={isClose}
//               id={deleteID}
//               deletefunction={deleteDeposite}
//             />
//           )}
//         </div>
//       )}
//     </>
//   );
// }









import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { AiFillDelete } from "react-icons/ai";
import { FaCheck, FaTimes, FaFilter } from "react-icons/fa";
import { FaEye, FaMoneyBillWave } from "react-icons/fa6";
import { GrEdit } from "react-icons/gr";
import { MdDashboard, MdAttachMoney } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import SuccessAlert from "../BaseFile/comman/SuccessAlert";
import ErrorAlert from "../BaseFile/comman/ErrorAlert";
import Loader from "../BaseFile/comman/Loader";
import { useParams } from "react-router-dom";
import {
  getAllDeposite,
  deleteDeposite,
  clearErrors,
  clearMessage,
  updateDeposite,
} from "../redux/depositeSlice";
import { Confirmation } from "../BaseFile/comman/Confirmation";
import { getAllUsers } from "../redux/userSlice";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

export default function AdminDeposite() {
  const { action } = useParams();
  const dispatch = useDispatch();
  const [editMode, setEditMode] = useState(false);
  const [editableDeposite, setEditableDeposite] = useState(null);
  const [allDeposite, setAllDeposite] = useState([]);
  const [deleteID, setDeleteID] = useState();
  const [modalOpen, setModalOpen] = useState(false);
  const [filterquery, setFilterquery] = useState();
  const [values, setValues] = useState();
  const [previewImage, setPreviewImage] = useState(null);
  const [showStats, setShowStats] = useState(false);

  const { alldeposite, loading, error, message } = useSelector(
    (state) => state.alldeposite
  );
  const { allusers } = useSelector((state) => state.allusers);
  
  useEffect(() => {
    dispatch(getAllDeposite());
    setAllDeposite(alldeposite);
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

  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    if (action) {
      setFilterquery(action);
    }
  }, [action]);

  const handleSearch = (e) => {
    setAllDeposite(
      alldeposite?.filter((p) => toString(p?.amount).includes(e.target.value))
    );
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
    setEditableDeposite(item);
    setEditMode(true);
  };

  const handleCancelEdit = () => {
    setEditMode(false);
    setEditableDeposite(null);
  };

  const handleChange = (e) => {
    setValues(e.target.value);
  };

  const handleSaveChange = (id) => {
    if (editableDeposite) {
      dispatch(
        updateDeposite({
          id: id,
          status: values,
          amount: editableDeposite?.amount,
          user_id: editableDeposite?.user_id,
        })
      );
      setEditMode(false);
      setEditableDeposite(null);
    }
  };

  const handleImageClick = (imageName) => {
    setPreviewImage(`/uploads/${imageName}`);
  };

  const handleClosePreview = () => {
    setPreviewImage(null);
  };
  
  const formatDateTime = (isoString) => {
    const date = new Date(isoString);
    const formattedDate = date.toISOString().split("T")[0];
    const formattedTime = date.toTimeString().split(" ")[0];
    return `${formattedDate} - ${formattedTime}`;
  };

  // Calculate statistics for the dashboard
  const calculateStats = () => {
    if (!alldeposite) return null;

    const totalDeposits = alldeposite.length;
    const totalAmount = alldeposite.reduce((sum, deposit) => sum + Number(deposit.amount || 0), 0);
    const pendingDeposits = alldeposite.filter(d => d.status === "pending").length;
    const completedDeposits = alldeposite.filter(d => d.status === "complete").length;
    const declinedDeposits = alldeposite.filter(d => d.status === "decline").length;

    return {
      totalDeposits,
      totalAmount,
      pendingDeposits,
      completedDeposits,
      declinedDeposits
    };
  };

  const stats = calculateStats();

  // Prepare data for chart
  const prepareChartData = () => {
    if (!alldeposite) return [];
    
    // Group by status
    const statusCounts = {
      pending: { name: 'Pending', value: 0 },
      complete: { name: 'Complete', value: 0 },
      decline: { name: 'Declined', value: 0 },
      inprogress: { name: 'In Progress', value: 0 }
    };
    
    alldeposite.forEach(deposit => {
      if (statusCounts[deposit.status]) {
        statusCounts[deposit.status].value++;
      }
    });
    
    return Object.values(statusCounts);
  };

  const chartData = prepareChartData();

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="p-4 min-h-screen text-gray-900">
          {message && <SuccessAlert message={message} />}
          {error && <ErrorAlert error={error} />}
          
          {/* Dashboard Stats Section */}
          <div className="mb-6">
            <h1 className="text-2xl font-bold mb-4 text-orange-500 flex items-center">
              <MdDashboard className="mr-2" /> Deposit Management Dashboard
            </h1>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
              <div className="bg-orange-100 p-4 rounded-lg shadow-md border-l-4 border-orange-500">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-sm text-gray-800">Total Deposits</p>
                    <p className="text-2xl font-bold text-gray-900">{stats?.totalDeposits || 0}</p>
                  </div>
                  <div className="bg-orange-500 p-3 rounded-full">
                    <FaMoneyBillWave className="text-gray-900 text-xl" />
                  </div>
                </div>
              </div>
              
              <div className="bg-orange-100 p-4 rounded-lg shadow-md border-l-4 border-green-500">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-sm text-gray-800">Total Amount</p>
                    <p className="text-2xl font-bold text-gray-900">${stats?.totalAmount.toFixed(2) || 0}</p>
                  </div>
                  <div className="bg-green-500 p-3 rounded-full">
                    <MdAttachMoney className="text-gray-900 text-xl" />
                  </div>
                </div>
              </div>
              
              <div className="bg-orange-100 p-4 rounded-lg shadow-md border-l-4 border-blue-500">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-sm text-gray-800">Pending</p>
                    <p className="text-2xl font-bold text-gray-900">{stats?.pendingDeposits || 0}</p>
                  </div>
                  <div className="bg-blue-500 p-3 rounded-full">
                    <FaFilter className="text-gray-900 text-xl" />
                  </div>
                </div>
              </div>
              
              <div className="bg-orange-100 p-4 rounded-lg shadow-md border-l-4 border-purple-500">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-sm text-gray-800">Completed</p>
                    <p className="text-2xl font-bold text-gray-900">{stats?.completedDeposits || 0}</p>
                  </div>
                  <div className="bg-purple-500 p-3 rounded-full">
                    <FaCheck className="text-gray-900 text-xl" />
                  </div>
                </div>
              </div>
            </div>

            {/* Toggle Chart Button */}
            <button 
              onClick={() => setShowStats(!showStats)} 
              className="mb-4 bg-orange-100 hover:bg-gray-700 text-orange-500 py-2 px-4 rounded-md transition duration-200 flex items-center"
            >
              {showStats ? "Hide Stats" : "Show Stats"} 
            </button>

            {/* Chart Section */}
            {showStats && (
              <div className="bg-orange-100 p-4 rounded-lg shadow-md mb-6">
                <h2 className="text-lg font-semibold mb-4 text-orange-500">Deposit Status Overview</h2>
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={chartData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                      <XAxis dataKey="name" stroke="#f97316" />
                      <YAxis stroke="#f97316" />
                      <Tooltip 
                        contentStyle={{ backgroundColor: '#1f2937', border: '1px solid #374151', borderRadius: '8px' }}
                        labelStyle={{ color: '#f97316' }}
                      />
                      <Bar dataKey="value" fill="#f97316" radius={[4, 4, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>
            )}
          </div>
          
          {/* Search and Filter Section */}
          <div className="bg-orange-100 p-4 rounded-lg shadow-md mb-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="search" className="block text-sm font-medium text-gray-800 mb-1">
                  Search by Amount
                </label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-orange-500">
                    <MdAttachMoney />
                  </span>
                  <input
                    id="search"
                    name="search"
                    value={searchQuery}
                    onChange={handleSearch}
                    type="number"
                    placeholder="Enter amount..."
                    className="block w-full pl-10 pr-3 py-2 rounded-md bg-orange-50 border-gray-600 placeholder-gray-400 text-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="filterquery" className="block text-sm font-medium text-gray-800 mb-1">
                  Filter by Status
                </label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-orange-500">
                    <FaFilter />
                  </span>
                  <select
                    id="filterquery"
                    name="filterquery"
                    value={filterquery || ""}
                    onChange={(e) => setFilterquery(e.target.value)}
                    className="block w-full pl-10 pr-3 py-2 rounded-md bg-orange-50 border-gray-600 placeholder-gray-400 text-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
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
          
          {/* Table Section */}
          <div className="bg-orange-100 rounded-lg shadow-md overflow-hidden">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-700">
                <thead className="bg-gray-900">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-orange-500 uppercase tracking-wider">
                      Name
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-orange-500 uppercase tracking-wider">
                      Amount
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-orange-500 uppercase tracking-wider">
                      Status
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-orange-500 uppercase tracking-wider">
                      Receipt
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-orange-500 uppercase tracking-wider">
                      Request Time
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-orange-500 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-orange-100 divide-y divide-gray-700">
                  {(searchQuery ? allDeposite : alldeposite)
                    ?.filter((item) =>
                      filterquery ? item?.status === filterquery : true
                    )
                    ?.slice()
                    .reverse()?.length > 0 ? ((searchQuery ? allDeposite : alldeposite)
                    ?.filter((item) =>
                      filterquery ? item?.status === filterquery : true
                    )
                    ?.slice()
                    .reverse()
                    .map((item, index) => (
                      <tr 
                        key={index} 
                        className={`${index % 2 === 0 ? 'bg-orange-100' : 'bg-orange-50'} hover:bg-orange-50 transition-colors duration-150`}
                      >
                        <td className="px-6 py-4 whitespace-nowrap">
                          <Link
                            to={`/admin/check/profile/${item?._id}`}
                            className="text-orange-500 hover:text-orange-400 font-medium"
                          >
                            {allusers?.find((user) => user?.id === item?.user_id)?.email || "Unknown User"}
                          </Link>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="font-mono text-lg text-green-400">
                            ${item?.amount}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          {editMode && editableDeposite?.id === item?.id ? (
                            <select
                              className="w-full px-3 py-1 bg-gray-700 text-gray-900 rounded border border-gray-600 focus:outline-none focus:ring-2 focus:ring-orange-500"
                              onChange={handleChange}
                              defaultValue={item?.status}
                            >
                              <option value="pending">Pending</option>
                              <option value="inprogress">In Progress</option>
                              <option value="decline">Decline</option>
                              <option value="complete">Complete</option>
                            </select>
                          ) : (
                            <span className={`px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full 
                              ${item?.status === 'complete' ? 'bg-green-100 text-green-800' : 
                              item?.status === 'decline' ? 'bg-red-100 text-red-800' :
                              item?.status === 'pending' ? 'bg-yellow-100 text-yellow-800' : 
                              'bg-blue-100 text-blue-800'}`}>
                              {item?.status}
                            </span>
                          )}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          {item?.image_name && (
                            <button
                              onClick={() => handleImageClick(item?.image_name)}
                              className="text-orange-500 hover:text-orange-400 underline flex items-center"
                            >
                              <FaEye className="mr-1" />
                              {item?.image_name?.slice(0, 10)}...
                            </button>
                          )}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          <div className="flex flex-col">
                            <span>Created: {formatDateTime(item?.createdAT)}</span>
                            <span>Updated: {formatDateTime(item?.acceptat)}</span>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center space-x-3">
                            {editMode && editableDeposite?.id === item?.id ? (
                              <>
                                <button 
                                  onClick={() => handleSaveChange(item?.id)}
                                  className="p-1 bg-green-600 rounded hover:bg-green-700 transition-colors"
                                >
                                  <FaCheck className="w-4 h-4 text-gray-900" />
                                </button>
                                <button 
                                  onClick={handleCancelEdit}
                                  className="p-1 bg-red-600 rounded hover:bg-red-700 transition-colors"
                                >
                                  <FaTimes className="w-4 h-4 text-gray-900" />
                                </button>
                              </>
                            ) : (
                              <>
                                <button 
                                  onClick={() => handleEdit(item)}
                                  className="p-1 bg-orange-600 rounded hover:bg-orange-700 transition-colors"
                                  title="Edit Status"
                                >
                                  <GrEdit className="w-4 h-4 text-gray-900" />
                                </button>
                                <Link 
                                  to={`/user/profile/${item?.user_id}`}
                                  className="p-1 bg-blue-600 rounded hover:bg-blue-700 transition-colors"
                                  title="View User Profile"
                                >
                                  <FaEye className="w-4 h-4 text-gray-900" />
                                </Link>
                              </>
                            )}
                          </div>
                        </td>
                      </tr>
                    ))) : (
                      <tr>
                        <td colSpan={6} className="px-6 py-8 text-center text-gray-800 bg-orange-100">
                          <div className="flex flex-col items-center justify-center">
                            <FaMoneyBillWave className="w-12 h-12 text-gray-600 mb-2" />
                            <p className="text-lg">No deposit data found</p>
                            <p className="text-sm text-gray-500">Try changing your filters or search criteria</p>
                          </div>
                        </td>
                      </tr>
                    )}
                </tbody>
              </table>
            </div>
          </div>
          
          {/* Image Preview Modal */}
          {previewImage && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75">
              <div className="relative bg-gray-900 p-1 rounded-lg shadow-xl max-w-4xl max-h-screen">
                <img
                  src={previewImage}
                  alt="Receipt Preview"
                  className="object-contain max-w-full max-h-[80vh]"
                />
                <button
                  onClick={handleClosePreview}
                  className="absolute top-2 right-2 p-2 bg-orange-100 text-gray-900 rounded-full hover:bg-gray-700 transition-colors"
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
              id={deleteID}
              deletefunction={deleteDeposite}
            />
          )}
        </div>
      )}
    </>
  );
}