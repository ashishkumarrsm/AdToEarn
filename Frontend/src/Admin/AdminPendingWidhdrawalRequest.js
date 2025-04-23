// import { Link } from "react-router-dom";
// import { useState, useEffect } from "react";
// import { AiFillDelete } from "react-icons/ai";
// import { FaCheck, FaTimes } from "react-icons/fa";
// import { FaEye } from "react-icons/fa6";
// import { GrEdit } from "react-icons/gr";
// import { useDispatch, useSelector } from "react-redux";
// import SuccessAlert from "../BaseFile/comman/SuccessAlert";
// import ErrorAlert from "../BaseFile/comman/ErrorAlert";
// import Scanner from "./Scanner";
// import { useParams } from "react-router-dom";

// import {
//   getAllWithdrawal,
//   deleteWithdrawal,
//   clearErrors,
//   clearMessage,
//   updateWithdrawal,
// } from "../redux/withdrawalSlice";
// import { Confirmation } from "../BaseFile/comman/Confirmation";
// import { getAllUsers } from "../redux/userSlice";
// import BNBTransfer from "./BalanceTransfer";

// export default function AdminPendingWidhdrawalRequest() {
//   const { action } = useParams();
//   const dispatch = useDispatch();
//   const [editMode, setEditMode] = useState(false);
//   const [editableWithdrawal, setEditableWithdrawal] = useState(null);
//   const [allWithdrawalRequest, setAllWithdrawalRequest] = useState([]);
//   const [deleteID, setDeleteID] = useState();
//   const [modalOpen, setModalOpen] = useState(false);
//   const [values, setValues] = useState();
//   const [link, setLink] = useState();
//   const [text, setText] = useState();
//   const [filterquery, setFilterquery] = useState();
//   const [openModel, setOpenModel] = useState(false);

//   const { allwithdrawal, loading, error, message } = useSelector(
//     (state) => state.allwithdrawal
//   );

//   useEffect(() => {
//     dispatch(getAllWithdrawal());
//     setAllWithdrawalRequest(allwithdrawal);
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
//     setAllWithdrawalRequest(
//       allwithdrawal?.filter((p) => p.email?.includes(e.target.value))
//     );
//     setSearchQuery(e.target.value);
//   };

//   const handleDelete = (id) => {
//     setDeleteID(id);
//     setModalOpen(true);
//   };

//   const isClose = () => {
//     setModalOpen(false);
//     setOpenModel(false);
//     setLink(null);
//     setText(null);
//   };

//   const handleEdit = (item) => {
//     setEditableWithdrawal(item);
//     setEditMode(true);
//   };

//   const handleCancelEdit = () => {
//     setEditMode(false);
//     setEditableWithdrawal(null);
//   };

//   const handleChange = (e) => {
//     setValues(e.target.value);
//   };

//   const handleSaveChange = (id) => {
//     if (editableWithdrawal) {
//       dispatch(
//         updateWithdrawal({
//           id: id,
//           status: values,
//           amount: editableWithdrawal?.amount + editableWithdrawal?.deduction,
//           user_id: editableWithdrawal?.user_id,
//         })
//       );
//       setEditMode(false);
//       setEditableWithdrawal(null);
//     }
//   };
//   function handleScan(l, t) {
//     setOpenModel(true);
//     setLink(l);
//     setText(t);
//   }
//   const formatDateTime = (isoString) => {
//     const date = new Date(isoString);
//     const formattedDate = date.toISOString().split("T")[0];
//     const formattedTime = date.toTimeString().split(" ")[0];
//     return `${formattedDate} - ${formattedTime}`;
//   };
//   return (
//     <div className="my-5 lg:mx-3 sm:mx-3 p-4 bg-[#0b90c280]">
//       <div className="sm:flex block gap-4">
//       <div className=" mb-4 sm:mb-0">
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
//           className="block w-[50vh] px-2 py-2 rounded-sm border-0 text-gray-100 bg-[#1a8ab280] shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//         />
//       </div>
//       <div className="">
//         <label htmlFor="filterquery" className="sr-only">
//           Filter
//         </label>
//         <select
//           id="filterquery"
//           name="filterquery"
//           value={filterquery}
//           onChange={(e) => setFilterquery(e.target.value)}
//           className="block w-[50vh] px-2 py-2 rounded-sm border-0 text-gray-100 bg-[#7e66c5b3] shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//         >
//           <option value="" disabled>
//             Select status...
//           </option>
//           <option value="complete">Complete</option>
//           <option value="decline">Decline</option>
//           <option value="pending">Pending</option>
//           <option value="TRN-ADM002">By Admin</option>
//         </select>
//       </div>
//       </div>

//       <div className="flow-root ">
//         {message && <SuccessAlert message={message} />}
//         {error && <ErrorAlert error={error} />}
//         <div className="overflow-x-auto">
//           <div className="inline-block min-w-full py-2 align-middle">
//             <table className="w-full mt-4 text-left border-collapse whitespace-nowrap text-gray-100 bg-black">
//               <thead className="text-sm leading-6 border-b border-gray-300">
//                 <tr>
//                   <th className="px-4 py-3 font-medium  border-r border-gray-300">
//                     Name
//                   </th>
//                   <th className="px-4 py-3 font-medium  border-r border-gray-300">
//                     Amount
//                   </th>
//                   <th className="px-4 py-3 font-medium  border-r border-gray-300">
//                     Deduction
//                   </th>
//                   <th className="px-4 py-3 font-medium  border-r border-gray-300">
//                     Total
//                   </th>
//                   <th className="px-4 py-3 font-medium  text-right border-r border-gray-300">
//                     Status
//                   </th>
//                   <th className="px-4 py-3 font-medium  border-r border-gray-300">
//                     Request/Action
//                   </th>
//                   <th className="px-4 py-3 font-medium  text-center">
//                     Action
//                   </th>
//                 </tr>
//               </thead>
//               <tbody className="text-2xl divide-y divide-gray-300 bg-[#0f1b61a8]">
//                 {(searchQuery ? allWithdrawalRequest : allwithdrawal)
//                   ?.filter(
//                     (item) =>
//                       item?.type == "working" &&
//                       (filterquery ? item?.status === filterquery : true)
//                   )?.length > 0 ? ((searchQuery ? allWithdrawalRequest : allwithdrawal)
//                   ?.filter(
//                     (item) =>
//                       item?.type == "working" &&
//                       (filterquery ? item?.status === filterquery : true)
//                   )
//                   ?.map((item, index) => (
//                     <tr key={index} className="border-b border-gray-200 text-gray-100 even:bg-[#7e66c5b3] even:text:white">
//                       <td className="py-4 px-4 border-r border-gray-200  lg:w-[200px]">
//                         <span className="block text-[12px]">
//                           {" "}
//                           {item?.email}
//                         </span>

//                         {item?.bep20 && item?.bep20?.length > 5 && (
//                           <>
//                             {item.status === "pending" && (
//                               <BNBTransfer user={item} id={item?.id} />
//                             )}
//                           </>
//                         )}
//                       </td>
//                       <td className="px-4 py-4 border-r border-gray-200">
//                         <div className="font-mono text-sm">${item?.amount}</div>
//                       </td>
//                       <td className="px-4 py-4 border-r border-gray-200">
//                         <div className="font-mono text-sm ">
//                           ${item?.deduction}
//                         </div>
//                       </td>
//                       <td className="px-4 py-4 border-r border-gray-200">
//                         <div className="font-mono text-sm ">
//                           ${item?.amount + item?.deduction}
//                         </div>
//                       </td>
//                       <td className="px-4 py-4 text-right border-r border-gray-200">
//                         <div className="px-2 py-1 text-xs font-medium rounded bg-gray-700/40 ring-1 ring-gray-300">
//                           {editMode && editableWithdrawal?.id === item?.id ? (
//                             <select
//                               id="status"
//                               name="status"
//                               className="w-full px-3 py-1 text-sm bg-gray-200 border-0 rounded-sm shadow focus:outline-none"
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
//                       <td className="px-4 py-4 border-r border-gray-200">
//                         <div className="px-2 py-1 text-xs font-medium rounded bg-gray-700/40 ring-1 ring-gray-300">
//                           {formatDateTime(item?.createdAT)}/{" "}
//                           {formatDateTime(item?.acceptat)}
//                         </div>
//                       </td>
//                       <td className="px-4 py-4">
//                         <div className="flex justify-center space-x-4">
//                           <Link to={`/admin/check/profile/${item?.user_id}`}>
//                             <FaEye className="w-4 h-4 text-green-700 cursor-pointer" />
//                           </Link>
//                           {editMode && editableWithdrawal?.id === item?.id ? (
//                             <>
//                               <FaCheck
//                                 className="w-4 h-4 text-green-700 cursor-pointer"
//                                 onClick={() => handleSaveChange(item?.id)}
//                               />
//                               <FaTimes
//                                 className="w-4 h-4 text-red-700 cursor-pointer"
//                                 onClick={handleCancelEdit}
//                               />
//                             </>
//                           ) : (
//                             <>
//                               {item?.status == "decline" ||
//                               item?.status == "complete" ? (
//                                 ""
//                               ) : (
//                                 <GrEdit
//                                   className="w-4 h-4 text-blue-400 cursor-pointer"
//                                   onClick={() => handleEdit(item)}
//                                 />
//                               )}
//                               {/* <AiFillDelete
//                                 className="w-4 h-4 text-red-400 cursor-pointer"
//                                 onClick={() => handleDelete(item?.id)}
//                               /> */}
//                             </>
//                           )}
//                         </div>
//                       </td>
//                     </tr>
//                   ))): (
//                     <tr>
//                       <td colSpan={7} className="py-4 text-base px-4 text-center text-gray-100 bg-[#4b1725ab]">
//                         No withdrawal requests found
//                       </td>
//                     </tr>
//                   )}
//               </tbody>
//             </table>
//           </div>
//         </div>
//       </div>

//       {modalOpen && (
//         <Confirmation
//           isClose={isClose}
//           deletefunction={deleteWithdrawal}
//           id={deleteID}
//         />
//       )}

//       {link && (
//         <Scanner
//           openModel={openModel}
//           link={link}
//           text={text}
//           isClose={isClose}
//         />
//       )}
//     </div>
//   );
// }




import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { AiFillDelete } from "react-icons/ai";
import { FaCheck, FaTimes } from "react-icons/fa";
import { FaEye } from "react-icons/fa6";
import { GrEdit } from "react-icons/gr";
import { useDispatch, useSelector } from "react-redux";
import SuccessAlert from "../BaseFile/comman/SuccessAlert";
import ErrorAlert from "../BaseFile/comman/ErrorAlert";
import Scanner from "./Scanner";
import { useParams } from "react-router-dom";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

import {
  getAllWithdrawal,
  deleteWithdrawal,
  clearErrors,
  clearMessage,
  updateWithdrawal,
} from "../redux/withdrawalSlice";
import { Confirmation } from "../BaseFile/comman/Confirmation";
import { getAllUsers } from "../redux/userSlice";
import BNBTransfer from "./BalanceTransfer";

export default function AdminPendingWidhdrawalRequest() {
  const { action } = useParams();
  const dispatch = useDispatch();
  const [editMode, setEditMode] = useState(false);
  const [editableWithdrawal, setEditableWithdrawal] = useState(null);
  const [allWithdrawalRequest, setAllWithdrawalRequest] = useState([]);
  const [deleteID, setDeleteID] = useState();
  const [modalOpen, setModalOpen] = useState(false);
  const [values, setValues] = useState();
  const [link, setLink] = useState();
  const [text, setText] = useState();
  const [filterquery, setFilterquery] = useState();
  const [openModel, setOpenModel] = useState(false);
  const [showStats, setShowStats] = useState(false);

  const { allwithdrawal, loading, error, message } = useSelector(
    (state) => state.allwithdrawal
  );

  useEffect(() => {
    dispatch(getAllWithdrawal());
    setAllWithdrawalRequest(allwithdrawal);
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
    setAllWithdrawalRequest(
      allwithdrawal?.filter((p) => p.email?.includes(e.target.value))
    );
    setSearchQuery(e.target.value);
  };

  const handleDelete = (id) => {
    setDeleteID(id);
    setModalOpen(true);
  };

  const isClose = () => {
    setModalOpen(false);
    setOpenModel(false);
    setLink(null);
    setText(null);
  };

  const handleEdit = (item) => {
    setEditableWithdrawal(item);
    setEditMode(true);
  };

  const handleCancelEdit = () => {
    setEditMode(false);
    setEditableWithdrawal(null);
  };

  const handleChange = (e) => {
    setValues(e.target.value);
  };

  const handleSaveChange = (id) => {
    if (editableWithdrawal) {
      dispatch(
        updateWithdrawal({
          id: id,
          status: values,
          amount: editableWithdrawal?.amount + editableWithdrawal?.deduction,
          user_id: editableWithdrawal?.user_id,
        })
      );
      setEditMode(false);
      setEditableWithdrawal(null);
    }
  };
  
  function handleScan(l, t) {
    setOpenModel(true);
    setLink(l);
    setText(t);
  }
  
  const formatDateTime = (isoString) => {
    const date = new Date(isoString);
    const formattedDate = date.toISOString().split("T")[0];
    const formattedTime = date.toTimeString().split(" ")[0];
    return `${formattedDate} - ${formattedTime}`;
  };

  // Create data for statistics graph
  const getStatsData = () => {
    const statusCounts = {
      pending: 0,
      complete: 0,
      decline: 0,
      inprogress: 0,
    };

    allwithdrawal?.forEach(item => {
      if (item?.type === "working" && statusCounts[item?.status] !== undefined) {
        statusCounts[item?.status]++;
      }
    });

    return [
      { name: "Pending", count: statusCounts.pending, fill: "#f97316" },
      { name: "Complete", count: statusCounts.complete, fill: "#22c55e" },
      { name: "Declined", count: statusCounts.decline, fill: "#ef4444" },
      { name: "In Progress", count: statusCounts.inprogress, fill: "#3b82f6" },
    ];
  };

  const filteredWithdrawals = (searchQuery ? allWithdrawalRequest : allwithdrawal)
    ?.filter(
      (item) =>
        item?.type == "working" &&
        (filterquery ? item?.status === filterquery : true)
    );

  return (
    <div className="my-5 lg:mx-3 sm:mx-3 p-6 bg-gray-100 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-orange-500 mb-6">Withdrawal Request Management</h2>
      
      {message && <SuccessAlert message={message} />}
      {error && <ErrorAlert error={error} />}
      
      <div className="mb-6">
        <div className="flex flex-col md:flex-row gap-4 mb-4">
          <div className="flex-1">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg className="w-4 h-4 text-orange-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                </svg>
              </div>
              <input
                id="search"
                name="search"
                value={searchQuery}
                onChange={handleSearch}
                type="text"
                placeholder="Search by email..."
                className="block w-full p-3 pl-10 text-sm border border-gray-300 rounded-lg bg-white focus:ring-orange-500 focus:border-orange-500"
              />
            </div>
          </div>
          <div className="flex-1">
            <select
              id="filterquery"
              name="filterquery"
              value={filterquery}
              onChange={(e) => setFilterquery(e.target.value)}
              className="block w-full p-3 text-sm border border-gray-300 rounded-lg bg-white focus:ring-orange-500 focus:border-orange-500"
            >
              <option value="" disabled>
                Filter by status...
              </option>
              <option value="complete">Complete</option>
              <option value="decline">Decline</option>
              <option value="pending">Pending</option>
              <option value="TRN-ADM002">By Admin</option>
            </select>
          </div>
          <div>
            <button 
              onClick={() => setShowStats(!showStats)}
              className="w-full md:w-auto px-5 py-3 text-sm font-medium text-white bg-orange-500 rounded-lg hover:bg-orange-600 focus:ring-4 focus:ring-orange-300"
            >
              {showStats ? "Hide Statistics" : "Show Statistics"}
            </button>
          </div>
        </div>

        {showStats && (
          <div className="bg-white p-4 rounded-lg shadow mb-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Withdrawal Request Statistics</h3>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={getStatsData()} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="count" fill="#f97316" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        )}
      </div>
      
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  User
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Amount
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Deduction
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Total
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Request/Action
                </th>
                <th scope="col" className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredWithdrawals?.length > 0 ? (
                filteredWithdrawals.map((item, index) => (
                  <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex flex-col">
                        <span className="text-sm font-medium text-gray-900">{item?.email}</span>
                        {item?.bep20 && item?.bep20?.length > 5 && item.status === "pending" && (
                          <div className="mt-1">
                            <BNBTransfer user={item} id={item?.id} />
                          </div>
                        )}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-orange-500">${item?.amount}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-700">${item?.deduction}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-orange-500">${item?.amount + item?.deduction}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {editMode && editableWithdrawal?.id === item?.id ? (
                        <select
                          id="status"
                          name="status"
                          className="block w-full px-3 py-2 text-sm bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500"
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
                            'bg-blue-100 text-blue-800'}`
                        }>
                          {item?.status}
                        </span>
                      )}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-xs text-gray-500">
                        <div>Request: {formatDateTime(item?.createdAT)}</div>
                        <div>Action: {formatDateTime(item?.acceptat)}</div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-center">
                      <div className="flex items-center justify-center space-x-3">
                        <Link to={`/admin/check/profile/${item?.user_id}`} className="text-orange-500 hover:text-orange-700">
                          <FaEye className="w-5 h-5" title="View Profile" />
                        </Link>
                        
                        {editMode && editableWithdrawal?.id === item?.id ? (
                          <>
                            <button 
                              onClick={() => handleSaveChange(item?.id)}
                              className="text-green-500 hover:text-green-700"
                              title="Save Changes"
                            >
                              <FaCheck className="w-5 h-5" />
                            </button>
                            <button 
                              onClick={handleCancelEdit}
                              className="text-red-500 hover:text-red-700"
                              title="Cancel Edit"
                            >
                              <FaTimes className="w-5 h-5" />
                            </button>
                          </>
                        ) : (
                          <>
                            {item?.status !== "decline" && item?.status !== "complete" && (
                              <button 
                                onClick={() => handleEdit(item)}
                                className="text-orange-500 hover:text-orange-700"
                                title="Edit Status"
                              >
                                <GrEdit className="w-5 h-5" />
                              </button>
                            )}
                          </>
                        )}
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={7} className="px-6 py-10 text-center text-sm font-medium text-gray-500 bg-gray-50">
                    No withdrawal requests found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {modalOpen && (
        <Confirmation
          isClose={isClose}
          deletefunction={deleteWithdrawal}
          id={deleteID}
        />
      )}

      {link && (
        <Scanner
          openModel={openModel}
          link={link}
          text={text}
          isClose={isClose}
        />
      )}
    </div>
  );
}