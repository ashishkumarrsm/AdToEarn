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
//   getAllSupport,
//   deleteSupport,
//   clearErrors,
//   clearMessage,
//   updateSupport,
// } from "../redux/supportSlice";
// import { Confirmation } from "../BaseFile/comman/Confirmation";

// export default function AdminSupport() {
//   const dispatch = useDispatch();
//   const [editMode, setEditMode] = useState(false);
//   const [editableSupport, setEditableSupport] = useState(null);
//   const [allSupportMessage, setAllSupportMessage] = useState([]);
//   const [deleteID, setDeleteID] = useState();
//   const [modalOpen, setModalOpen] = useState(false);
//   const [values, setValues] = useState({});
//   const [searchQuery, setSearchQuery] = useState("");

//   const [currentPage, setCurrentPage] = useState(1);
//   const [itemsPerPage] = useState(10);

//   const { allsupport, loading, error, message } = useSelector(
//     (state) => state.allsupport
//   );

//   useEffect(() => {
//     dispatch(getAllSupport());
//     setAllSupportMessage(allsupport);

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
//   }, [dispatch, error, message, allsupport]);

//   const handleSearch = (e) => {
//     const query = e.target.value;
//     setSearchQuery(query);
//     setCurrentPage(1); // Reset to the first page when searching
//     setAllSupportMessage(
//       allsupport?.filter((p) =>
//         p.email?.toLowerCase().includes(query.toLowerCase())
//       )
//     );
//   };

//   const handleDelete = (id) => {
//     setDeleteID(id);
//     setModalOpen(true);
//   };

//   const isClose = () => {
//     setModalOpen(false);
//   };

//   const handleEdit = (item) => {
//     setEditableSupport(item);
//     setEditMode(true);
//   };

//   const handleCancelEdit = () => {
//     setEditMode(false);
//     setEditableSupport(null);
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setValues((prevState) => ({
//       ...prevState,
//       [name]: value,
//     }));
//   };

//   const handleSaveChange = (id) => {
//     if (editableSupport) {
//       dispatch(updateSupport({ id: id, updatedData: values }));
//       setEditMode(false);
//       setEditableSupport(null);
//     }
//   };

//   // Pagination logic
//   const indexOfLastItem = currentPage * itemsPerPage;
//   const indexOfFirstItem = indexOfLastItem - itemsPerPage;
//   const currentData = (searchQuery ? allSupportMessage : allsupport)?.slice(
//     indexOfFirstItem,
//     indexOfLastItem
//   );
//   const totalPages = Math.ceil(
//     (searchQuery ? allSupportMessage : allsupport)?.length / itemsPerPage
//   );

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
//           onChange={handleSearch}
//           type="text"
//           placeholder="search here . . ."
//          className="block w-[50vh] px-2 py-2 rounded-sm border-0 text-gray-900 text-sm shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-900 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//         />
//       </div>

//       <div className="flow-root mt-3">
//         {message && <SuccessAlert message={message} />}
//         {error && <ErrorAlert error={error} />}

//         <div className="overflow-x-auto">
//           <div className="inline-block py-2 min-w-full align-middle">
//             <table className="min-w-full text-left whitespace-nowrap border-collapse table-auto">
//               <thead className="text-base leading-6 text-gray-100 bg-black border-r border-gray-100">
//                 <tr>
//                   <th className="py-2 pl-4 font-medium border border-gray-400 sm:pl-6 lg:pl-8">ID</th>
//                   <th className="py-2 pr-4 pl-2 font-medium border border-gray-400 sm:table-cell sm:pr-8">Email</th>
//                   <th className="py-2 pr-4 pl-2 font-medium text-left border border-gray-400 sm:pr-8">Title</th>
//                   <th className="py-2 pr-4 pl-2 font-medium text-left border border-gray-400 sm:pr-8">Message</th>
//                   <th className="py-2 pr-4 pl-2 font-medium text-left border border-gray-400 sm:pr-8">Status</th>
//                   <th className="py-2 pr-4 pl-2 font-medium text-left border border-gray-400 sm:pr-8">Date</th>
//                   <th className="py-2 pr-4 pl-2 font-medium border border-gray-400 sm:table-cell sm:pr-6 lg:pr-8">Action</th>
//                 </tr>
//               </thead>
//               <tbody className="border border-gray-400 divide-y divide-gray-700">
//                 {currentData?.length > 0 ? ( currentData?.map((item, index) => (
//                   <tr key={index}>
//                     <td className="py-4 pl-4 text-gray-100 border-r border-gray-400 sm:pl-6 lg:pl-8 even:bg-blue-200 even:text:white">
//                       <div className="text-lg font-medium">{item?.id}</div>
//                     </td>
//                     <td className="py-4 pr-4 pl-2 border-r border-gray-400 sm:table-cell sm:pr-8">
//                       <div className="text-lg">{item?.email}</div>
//                     </td>
//                     <td className="py-4 pr-4 pl-2 border-r border-gray-400 sm:pr-8">
//                       <div className="text-lg">{item?.title}</div>
//                     </td>
//                     <td className="py-4 pr-4 pl-2 border-r border-gray-400 sm:pr-8">
//                       <div className="text-lg">{item?.message}</div>
//                     </td>
//                     <td className="py-4 pr-4 pl-2 border-r border-gray-400 sm:pr-8">
//                       {editMode && editableSupport?.id === item?.id ? (
//                         <select
//                           id="status"
//                           name="status"
//                           className="block px-3 py-1 w-full text-base bg-gray-200 rounded-sm border-0 shadow focus:outline-none"
//                           onChange={handleChange}
//                           defaultValue={item?.status}
//                         >
//                           <option value="pending">Pending</option>
//                           <option value="inprogress">In Progress</option>
//                           <option value="decline">Decline</option>
//                           <option value="complete">Complete</option>
//                         </select>
//                       ) : (
//                         <div className="text-lg">{item?.status}</div>
//                       )}
//                     </td>
//                     <td className="py-4 pr-4 pl-2 border-r border-gray-400 sm:pr-8">
//                       <div className="text-lg">{new Date(item?.createdAt).toLocaleDateString()}</div>
//                     </td>
//                     <td className="py-4 pr-4 pl-2 border-r border-gray-400">
//                       <div className="flex justify-start space-x-4">
//                         <Link to={`/user/profile/${item?.user_id}`}>
//                           <FaEye className="w-4 h-4 text-blue-700 cursor-pointer" title="View Profile" />
//                         </Link>
//                         {editMode && editableSupport?.id === item?.id ? (
//                           <>
//                             <FaCheck className="w-4 h-4 text-blue-700 cursor-pointer" onClick={() => handleSaveChange(item?.id)} title="Submit Changes" />
//                             <FaTimes className="w-4 h-4 text-red-700 cursor-pointer" onClick={handleCancelEdit} title="Cancel" />
//                           </>
//                         ) : (
//                           <>
//                             <AiFillDelete className="w-4 h-4 text-red-300 cursor-pointer" onClick={() => handleDelete(item?.id)} title="Delete" />
//                             <GrEdit className="w-4 h-4 text-blue-300 cursor-pointer" onClick={() => handleEdit(item)} title="Edit" />
//                           </>
//                         )}
//                       </div>
//                     </td>
//                   </tr>
//                 ))) : (
//                   <td colSpan={7} className="px-4 py-3 text-base text-center text-gray-900 bg-blue-200">
//                         No Support data found
//                       </td>
//                 )}
//               </tbody>
//             </table>
//           </div>
//         </div>

//         {/* Pagination Buttons */}
//         <div className="flex justify-between py-4">
//           <button
//             onClick={handlePrevious}
//             disabled={currentPage === 1}
//             className={`px-5 py-1 text-base rounded-md ${
//               currentPage === 1
//                 ? "bg-blue-700 text-gray-300 cursor-not-allowed"
//                 : "bg-indigo-600 text-white"
//             }`}
//           >
//             Previous
//           </button>
//           <button
//             onClick={handleNext}
//             disabled={currentPage === totalPages}
//             className={`px-5 py-1 text-base rounded-md ${
//               currentPage === totalPages
//                 ? "bg-blue-700 text-gray-300 cursor-not-allowed"
//                 : "bg-indigo-600 text-white"
//             }`}
//           >
//             Next
//           </button>
//         </div>
//       </div>

//       {modalOpen && (
//         <Confirmation
//           isClose={isClose}
//           deletefunction={deleteSupport}
//           id={deleteID}
//         />
//       )}
//     </div>
//   );
// }









import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { 
  getAllSupport, 
  deleteSupport, 
  clearErrors, 
  clearMessage, 
  updateSupport 
} from "../redux/supportSlice";
import { Confirmation } from "../BaseFile/comman/Confirmation";
import SuccessAlert from "../BaseFile/comman/SuccessAlert";
import ErrorAlert from "../BaseFile/comman/ErrorAlert";

// Icons
import { FiTrash2, FiEdit, FiEye, FiCheckCircle, FiXCircle } from "react-icons/fi";
import { HiOutlineChartBar } from "react-icons/hi";
import { BsEnvelope, BsPeople } from "react-icons/bs";

export default function AdminSupport() {
  const dispatch = useDispatch();
  const [editMode, setEditMode] = useState(false);
  const [editableSupport, setEditableSupport] = useState(null);
  const [allSupportMessage, setAllSupportMessage] = useState([]);
  const [deleteID, setDeleteID] = useState();
  const [modalOpen, setModalOpen] = useState(false);
  const [values, setValues] = useState({});
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);

  const { allsupport, loading, error, message } = useSelector(
    (state) => state.allsupport
  );

  useEffect(() => {
    dispatch(getAllSupport());
    setAllSupportMessage(allsupport);

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
  }, [dispatch, error, message, allsupport]);

  const handleSearch = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    setCurrentPage(1); // Reset to the first page when searching
    
    const filteredData = allsupport?.filter((p) =>
      p.email?.toLowerCase().includes(query.toLowerCase())
    );
    setAllSupportMessage(filteredData);
  };

  const handleDelete = (id) => {
    setDeleteID(id);
    setModalOpen(true);
  };

  const isClose = () => {
    setModalOpen(false);
  };

  const handleEdit = (item) => {
    setEditableSupport(item);
    setEditMode(true);
    setValues({
      status: item.status
    });
  };

  const handleCancelEdit = () => {
    setEditMode(false);
    setEditableSupport(null);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSaveChange = (id) => {
    if (editableSupport) {
      dispatch(updateSupport({ id: id, updatedData: values }));
      setEditMode(false);
      setEditableSupport(null);
    }
  };

  const handleStatusFilter = (status) => {
    setStatusFilter(status);
    setCurrentPage(1);
    
    if (status === "all") {
      setAllSupportMessage(allsupport);
    } else {
      setAllSupportMessage(
        allsupport?.filter((item) => item.status === status)
      );
    }
  };

  // Get stats for dashboard
  const getStatusCount = (status) => {
    return allsupport?.filter(item => item.status === status)?.length || 0;
  };

  // Pagination logic with filters
  const filteredData = (() => {
    let data = allsupport || [];
    
    if (searchQuery) {
      data = data.filter(p => 
        p.email?.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    
    if (statusFilter !== "all") {
      data = data.filter(p => p.status === statusFilter);
    }
    
    return data;
  })();

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentData = filteredData.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const handlePrevious = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const getStatusBadgeColor = (status) => {
    switch(status) {
      case "pending": return "bg-yellow-100 text-yellow-800";
      case "inprogress": return "bg-blue-100 text-blue-800";
      case "complete": return "bg-green-100 text-green-800";
      case "decline": return "bg-red-100 text-red-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="px-6 py-8 bg-gray-50 min-h-screen">
      {message && <SuccessAlert message={message} />}
      {error && <ErrorAlert error={error} />}
      
      {/* Dashboard Stats */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-orange-500 mb-6">Support Management</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-white rounded-lg shadow p-6 border-l-4 border-orange-500">
            <div className="flex items-center">
              <div className="p-3 rounded-full bg-orange-100 mr-4">
                <BsEnvelope className="h-6 w-6 text-orange-500" />
              </div>
              <div>
                <p className="text-sm text-gray-500 font-medium">Total Tickets</p>
                <p className="text-2xl font-bold text-gray-700">{allsupport?.length || 0}</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow p-6 border-l-4 border-yellow-400">
            <div className="flex items-center">
              <div className="p-3 rounded-full bg-yellow-100 mr-4">
                <HiOutlineChartBar className="h-6 w-6 text-yellow-500" />
              </div>
              <div>
                <p className="text-sm text-gray-500 font-medium">Pending</p>
                <p className="text-2xl font-bold text-gray-700">{getStatusCount("pending")}</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow p-6 border-l-4 border-blue-500">
            <div className="flex items-center">
              <div className="p-3 rounded-full bg-blue-100 mr-4">
                <BsPeople className="h-6 w-6 text-blue-500" />
              </div>
              <div>
                <p className="text-sm text-gray-500 font-medium">In Progress</p>
                <p className="text-2xl font-bold text-gray-700">{getStatusCount("inprogress")}</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow p-6 border-l-4 border-green-500">
            <div className="flex items-center">
              <div className="p-3 rounded-full bg-green-100 mr-4">
                <FiCheckCircle className="h-6 w-6 text-green-500" />
              </div>
              <div>
                <p className="text-sm text-gray-500 font-medium">Completed</p>
                <p className="text-2xl font-bold text-gray-700">{getStatusCount("complete")}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Search and Filter */}
      <div className="bg-white rounded-lg shadow mb-6">
        <div className="p-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="w-full md:w-1/2">
              <label htmlFor="search" className="block text-sm font-medium text-gray-700 mb-1">
                Search by Email
              </label>
              <div className="relative">
                <input
                  id="search"
                  name="search"
                  value={searchQuery}
                  onChange={handleSearch}
                  type="text"
                  placeholder="Search emails..."
                  className="block w-full px-4 py-2 rounded-lg border border-gray-300 text-gray-900 text-sm shadow-sm focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                />
                <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                  <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
              </div>
            </div>
            
            <div className="w-full md:w-1/2">
              <label htmlFor="statusFilter" className="block text-sm font-medium text-gray-700 mb-1">
                Filter by Status
              </label>
              <select
                id="statusFilter"
                className="block w-full px-4 py-2 rounded-lg border border-gray-300 text-gray-900 text-sm shadow-sm focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                value={statusFilter}
                onChange={(e) => handleStatusFilter(e.target.value)}
              >
                <option value="all">All Statuses</option>
                <option value="pending">Pending</option>
                <option value="inprogress">In Progress</option>
                <option value="complete">Complete</option>
                <option value="decline">Declined</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      
      {/* Table */}
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-orange-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-orange-500 uppercase tracking-wider">ID</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-orange-500 uppercase tracking-wider">Email</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-orange-500 uppercase tracking-wider">Title</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-orange-500 uppercase tracking-wider">Message</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-orange-500 uppercase tracking-wider">Status</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-orange-500 uppercase tracking-wider">Date</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-orange-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {currentData?.length > 0 ? (
                currentData.map((item, index) => (
                  <tr key={index} className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {item?.id}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                      {item?.email}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                      {item?.title}
                    </td>
                    <td className="px-6 py-4 max-w-xs truncate text-sm text-gray-700">
                      {item?.message}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {editMode && editableSupport?.id === item?.id ? (
                        <select
                          id="status"
                          name="status"
                          className="block px-3 py-1 w-full text-sm rounded-md border-gray-300 focus:ring-orange-500 focus:border-orange-500"
                          onChange={handleChange}
                          defaultValue={item?.status}
                        >
                          <option value="pending">Pending</option>
                          <option value="inprogress">In Progress</option>
                          <option value="decline">Decline</option>
                          <option value="complete">Complete</option>
                        </select>
                      ) : (
                        <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusBadgeColor(item?.status)}`}>
                          {item?.status}
                        </span>
                      )}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                      {new Date(item?.createdAt).toLocaleDateString()}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex space-x-3">
                        {editMode && editableSupport?.id === item?.id ? (
                          <>
                            <button
                              onClick={() => handleSaveChange(item?.id)}
                              className="text-green-600 hover:text-green-900"
                              title="Save Changes"
                            >
                              <FiCheckCircle className="w-5 h-5" />
                            </button>
                            <button
                              onClick={handleCancelEdit}
                              className="text-red-600 hover:text-red-900"
                              title="Cancel"
                            >
                              <FiXCircle className="w-5 h-5" />
                            </button>
                          </>
                        ) : (
                          <>
                            <Link to={`/user/profile/${item?.user_id}`} className="text-blue-600 hover:text-blue-900" title="View Profile">
                              <FiEye className="w-5 h-5" />
                            </Link>
                            <button
                              onClick={() => handleEdit(item)}
                              className="text-orange-500 hover:text-orange-700"
                              title="Edit"
                            >
                              <FiEdit className="w-5 h-5" />
                            </button>
                            <button
                              onClick={() => handleDelete(item?.id)}
                              className="text-red-600 hover:text-red-900"
                              title="Delete"
                            >
                              <FiTrash2 className="w-5 h-5" />
                            </button>
                          </>
                        )}
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={7} className="px-6 py-4 text-center text-sm text-gray-500">
                    No support tickets found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
        
        {/* Pagination */}
        <div className="bg-white px-6 py-4 border-t border-gray-200 flex items-center justify-between">
          <div className="flex-1 flex justify-between">
            <button
              onClick={handlePrevious}
              disabled={currentPage === 1}
              className={`relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md ${
                currentPage === 1
                  ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                  : "bg-white text-orange-500 hover:bg-orange-50"
              }`}
            >
              Previous
            </button>
            <div className="text-sm text-gray-700">
              <span>Page {currentPage} of {totalPages || 1}</span>
              <span className="ml-2">({filteredData.length} items)</span>
            </div>
            <button
              onClick={handleNext}
              disabled={currentPage === totalPages || totalPages === 0}
              className={`relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md ${
                currentPage === totalPages || totalPages === 0
                  ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                  : "bg-white text-orange-500 hover:bg-orange-50"
              }`}
            >
              Next
            </button>
          </div>
        </div>
      </div>
      
      {/* Support Status Chart (simplified visual representation) */}
      <div className="mt-8 bg-white rounded-lg shadow p-6">
        <h2 className="text-lg font-medium text-gray-900 mb-4">Support Status Overview</h2>
        <div className="flex items-center justify-center h-32">
          {["pending", "inprogress", "complete", "decline"].map((status) => {
            const count = getStatusCount(status);
            const total = allsupport?.length || 1;
            const percentage = (count / total) * 100;
            
            let color;
            switch(status) {
              case "pending": color = "bg-yellow-500"; break;
              case "inprogress": color = "bg-blue-500"; break;
              case "complete": color = "bg-green-500"; break;
              case "decline": color = "bg-red-500"; break;
              default: color = "bg-gray-500";
            }
            
            return (
              <div key={status} className="flex flex-col items-center mx-2 flex-1">
                <div className="w-full bg-gray-200 rounded-full h-2.5 mb-2">
                  <div 
                    className={`${color} h-2.5 rounded-full`} 
                    style={{ width: `${percentage}%` }}
                  ></div>
                </div>
                <div className="h-24 w-full max-w-xs bg-gray-100 rounded-lg relative">
                  <div 
                    className={`absolute bottom-0 w-full ${color} rounded-b-lg transition-all duration-500`} 
                    style={{ height: `${percentage}%` }}
                  ></div>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="text-2xl font-bold text-gray-700">{count}</span>
                    <span className="text-xs text-gray-500 capitalize">{status}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      
      {modalOpen && (
        <Confirmation
          isClose={isClose}
          deletefunction={deleteSupport}
          id={deleteID}
        />
      )}
    </div>
  );
}