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
// import BNBTransfer from "./BalanceTransfer";

// import {
//   getAllWithdrawal,
//   deleteWithdrawal,
//   clearErrors,
//   clearMessage,
//   updateROIWithdrawal,
// } from "../redux/withdrawalSlice";
// import { Confirmation } from "../BaseFile/comman/Confirmation";
// import { getAllUsers } from "../redux/userSlice";

// export default function AdminRoiWithReq() {
//   const dispatch = useDispatch();
//   const [editMode, setEditMode] = useState(false);
//   const [editableWithdrawal, setEditableWithdrawal] = useState(null);
//   const [allWithdrawalRequest, setAllWithdrawalRequest] = useState([]);
//   const [deleteID, setDeleteID] = useState();
//   const [modalOpen, setModalOpen] = useState(false);
//   const [filterquery, setFilterquery] = useState();
//   const [values, setValues] = useState();
//   const [openModel, setOpenModel] = useState(false);
//   const [link, setLink] = useState();
//   const [text, setText] = useState();

//   const { allwithdrawal, loading, error, message } = useSelector(
//     (state) => state.allwithdrawal
//   );
//   const { allusers } = useSelector((state) => state.allusers);

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
//         updateROIWithdrawal({
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
//     <div className="p-4">
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
//             className="block w-[50vh] px-2 py-[6px] rounded-sm border-0 text-gray-900   shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-lg sm:leading-6"
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
//             <table className="w-full text-left whitespace-nowrap border-collapse">
//               <thead className="text-base leading-6 text-white bg-black border-b border-gray-300">
//                 <tr>
//                   <th className="px-4 py-3 font-medium border-r border-gray-300">
//                     Name
//                   </th>
//                   <th className="px-4 py-3 font-medium border-r border-gray-300">
//                     Amount
//                   </th>
//                   <th className="px-4 py-3 font-medium border-r border-gray-300">
//                     Deduction
//                   </th>
//                   <th className="px-4 py-3 font-medium border-r border-gray-300">
//                     Total
//                   </th>
//                   <th className="px-4 py-3 font-medium text-right border-r border-gray-300">
//                     Status
//                   </th>
//                   <th className="px-4 py-3 font-medium border-r border-gray-300">
//                     Request/Action
//                   </th>
//                   <th className="px-4 py-3 font-medium">Action</th>
//                 </tr>
//               </thead>
//               <tbody className="divide-y divide-gray-300">
//                 {(searchQuery ? allWithdrawalRequest : allwithdrawal)?.filter(
//                   (item) =>
//                     item?.type == "ROI" &&
//                     (filterquery ? item?.status === filterquery : true)
//                 )?.length > 0 ? (
//                   (searchQuery ? allWithdrawalRequest : allwithdrawal)
//                     ?.filter(
//                       (item) =>
//                         item?.type == "ROI" &&
//                         (filterquery ? item?.status === filterquery : true)
//                     )
//                     ?.map((item, index) => (
//                       <tr key={index} className="border-b border-gray-200">
//                         <td className="py-4 px-4 border-r border-gray-200 text-white lg:w-[200px]">
//                           <span className="block text-[12px]">
//                             {" "}
//                             {item?.email}
//                           </span>

//                           {item?.bep20 && item?.bep20?.length > 5 && (
//                             <>
//                               {/* <div className="flex gap-2 items-center text-[12px]">
//                               <span className="block"> {item?.bep20}</span> */}
//                               {/* <button onClick={()=>handleScan(item?.bep20, 'bep20')} className="px-3 py-1 bg-indigo-500 hover:bg-indigo-600 text-[12px] rounded-md">
//                                 Scan
//                               </button> */}
//                               {item.status === "pending" && (
//                                 <BNBTransfer user={item} id={item?.id} />
//                               )}
//                               {/* </div> */}
//                             </>
//                           )}
//                         </td>
//                         <td className="px-4 py-4 border-r border-gray-200">
//                           <div className="font-mono text-lg text-gray-400">
//                             ${item?.amount}
//                           </div>
//                         </td>
//                         <td className="px-4 py-4 border-r border-gray-200">
//                           <div className="font-mono text-lg text-gray-400">
//                             ${item?.deduction}
//                           </div>
//                         </td>
//                         <td className="px-4 py-4 border-r border-gray-200">
//                           <div className="font-mono text-lg text-gray-400">
//                             ${item?.amount + item?.deduction}
//                           </div>
//                         </td>
//                         <td className="px-4 py-4 text-right border-r border-gray-200">
//                           <div className="px-2 py-1 text-xs font-medium text-gray-400 rounded ring-1 ring-gray-300 bg-gray-700/40">
//                             {editMode && editableWithdrawal?.id === item?.id ? (
//                               <select
//                                 id="status"
//                                 name="status"
//                                 className="px-3 py-1 w-full text-lg text-gray-600 bg-gray-200 rounded-sm border-0 shadow focus:outline-none"
//                                 onChange={handleChange}
//                                 defaultValue={item?.status}
//                               >
//                                 <option value="pending">Pending</option>
//                                 <option value="inprogress">In Progress</option>
//                                 <option value="decline">Decline</option>
//                                 <option value="complete">Complete</option>
//                               </select>
//                             ) : (
//                               item?.status
//                             )}
//                           </div>
//                         </td>
//                         <td className="px-4 py-4 border-r border-gray-200">
//                           <div className="px-2 py-1 text-xs font-medium text-gray-400 rounded ring-1 ring-gray-300 bg-gray-700/40">
//                             {formatDateTime(item?.createdAT)}/{" "}
//                             {formatDateTime(item?.acceptat)}
//                           </div>
//                         </td>
//                         <td className="px-4 py-4">
//                           <div className="flex space-x-4">
//                             <Link to={`/admin/check/profile/${item?.user_id}`}>
//                               <FaEye className="w-4 h-4 text-green-700 cursor-pointer" />
//                             </Link>
//                             {editMode && editableWithdrawal?.id === item?.id ? (
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
//                                 {item?.status == "decline" ||
//                                 item?.status == "complete" ? (
//                                   ""
//                                 ) : (
//                                   <GrEdit
//                                     className="w-4 h-4 text-blue-400 cursor-pointer"
//                                     onClick={() => handleEdit(item)}
//                                   />
//                                 )}
//                                 {/* <AiFillDelete
//                                 className="w-4 h-4 text-red-400 cursor-pointer"
//                                 onClick={() => handleDelete(item?.id)}
//                               /> */}
//                               </>
//                             )}
//                           </div>
//                         </td>
//                       </tr>
//                     ))
//                 ) : (
//                   <tr>
//                     <td
//                       colSpan={7}
//                       className="px-4 py-4 text-base text-center text-gray-900 bg-blue-200"
//                     >
//                       No Roi withdrawal requests found
//                     </td>
//                   </tr>
//                 )}
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
import { FaCheck, FaTimes, FaFilter, FaCalendarAlt, FaChartBar } from "react-icons/fa";
import { FaEye, FaMagnifyingGlass, FaMoneyBillTransfer } from "react-icons/fa6";
import { GrEdit } from "react-icons/gr";
import { TbReportMoney } from "react-icons/tb";
import { IoWalletOutline } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import SuccessAlert from "../BaseFile/comman/SuccessAlert";
import ErrorAlert from "../BaseFile/comman/ErrorAlert";
import Scanner from "./Scanner";
import BNBTransfer from "./BalanceTransfer";

import {
  getAllWithdrawal,
  deleteWithdrawal,
  clearErrors,
  clearMessage,
  updateROIWithdrawal,
} from "../redux/withdrawalSlice";
import { Confirmation } from "../BaseFile/comman/Confirmation";
import { getAllUsers } from "../redux/userSlice";

export default function AdminRoiWithReq() {
  const dispatch = useDispatch();
  const [editMode, setEditMode] = useState(false);
  const [editableWithdrawal, setEditableWithdrawal] = useState(null);
  const [allWithdrawalRequest, setAllWithdrawalRequest] = useState([]);
  const [deleteID, setDeleteID] = useState();
  const [modalOpen, setModalOpen] = useState(false);
  const [filterquery, setFilterquery] = useState("");
  const [values, setValues] = useState();
  const [openModel, setOpenModel] = useState(false);
  const [link, setLink] = useState();
  const [text, setText] = useState();
  const [activeTab, setActiveTab] = useState("all");

  const { allwithdrawal, loading, error, message } = useSelector(
    (state) => state.allwithdrawal
  );
  const { allusers } = useSelector((state) => state.allusers);

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

  const handleSearch = (e) => {
    setAllWithdrawalRequest(
      allwithdrawal?.filter((p) => p.email?.toLowerCase().includes(e.target.value.toLowerCase()))
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
        updateROIWithdrawal({
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

  // Filter data based on active tab and search query
  const filteredWithdrawals = (searchQuery ? allWithdrawalRequest : allwithdrawal)?.filter(
    (item) =>
      item?.type == "ROI" &&
      (filterquery ? item?.status === filterquery : true) &&
      (activeTab === "all" || item?.status === activeTab)
  );

  // Calculate statistics
  const totalWithdrawals = filteredWithdrawals?.length || 0;
  const pendingWithdrawals = filteredWithdrawals?.filter(item => item?.status === "pending")?.length || 0;
  const completedWithdrawals = filteredWithdrawals?.filter(item => item?.status === "complete")?.length || 0;
  const declinedWithdrawals = filteredWithdrawals?.filter(item => item?.status === "decline")?.length || 0;

  const totalAmount = filteredWithdrawals?.reduce((sum, item) => sum + (item?.amount || 0), 0) || 0;
  const totalDeduction = filteredWithdrawals?.reduce((sum, item) => sum + (item?.deduction || 0), 0) || 0;
  const totalNet = filteredWithdrawals?.reduce((sum, item) => sum + ((item?.amount || 0) + (item?.deduction || 0)), 0) || 0;

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {message && <SuccessAlert message={message} />}
      {error && <ErrorAlert error={error} />}

      {/* Header Section */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800">
          <span className="text-orange-500">ROI</span> Withdrawal Requests
        </h1>
        <p className="text-gray-600 mt-1">
          Manage and track return on investment withdrawal requests
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <div className="bg-white rounded-lg shadow p-4 border-l-4 border-orange-500">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-sm text-gray-500">Total Requests</p>
              <p className="text-2xl font-bold text-gray-800">{totalWithdrawals}</p>
            </div>
            <div className="bg-orange-100 p-3 rounded-full">
              <TbReportMoney className="text-orange-500 text-xl" />
            </div>
          </div>
          <div className="mt-2 h-1 w-full bg-gray-200 rounded">
            <div className="h-1 bg-orange-500 rounded" style={{ width: '100%' }}></div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-4 border-l-4 border-blue-500">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-sm text-gray-500">Pending</p>
              <p className="text-2xl font-bold text-gray-800">{pendingWithdrawals}</p>
            </div>
            <div className="bg-blue-100 p-3 rounded-full">
              <IoWalletOutline className="text-blue-500 text-xl" />
            </div>
          </div>
          <div className="mt-2 h-1 w-full bg-gray-200 rounded">
            <div 
              className="h-1 bg-blue-500 rounded" 
              style={{ width: `${totalWithdrawals ? (pendingWithdrawals / totalWithdrawals) * 100 : 0}%` }}
            ></div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-4 border-l-4 border-green-500">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-sm text-gray-500">Completed</p>
              <p className="text-2xl font-bold text-gray-800">{completedWithdrawals}</p>
            </div>
            <div className="bg-green-100 p-3 rounded-full">
              <FaMoneyBillTransfer className="text-green-500 text-xl" />
            </div>
          </div>
          <div className="mt-2 h-1 w-full bg-gray-200 rounded">
            <div 
              className="h-1 bg-green-500 rounded" 
              style={{ width: `${totalWithdrawals ? (completedWithdrawals / totalWithdrawals) * 100 : 0}%` }}
            ></div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-4 border-l-4 border-red-500">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-sm text-gray-500">Declined</p>
              <p className="text-2xl font-bold text-gray-800">{declinedWithdrawals}</p>
            </div>
            <div className="bg-red-100 p-3 rounded-full">
              <FaTimes className="text-red-500 text-xl" />
            </div>
          </div>
          <div className="mt-2 h-1 w-full bg-gray-200 rounded">
            <div 
              className="h-1 bg-red-500 rounded" 
              style={{ width: `${totalWithdrawals ? (declinedWithdrawals / totalWithdrawals) * 100 : 0}%` }}
            ></div>
          </div>
        </div>
      </div>

      {/* Amount Summary */}
      <div className="bg-white p-4 rounded-lg shadow mb-6">
        <h2 className="text-lg font-semibold text-gray-800 mb-3">Amount Summary</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-orange-50 p-4 rounded-lg">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Total Amount</p>
                <p className="text-2xl font-bold text-orange-500">${totalAmount.toFixed(2)}</p>
              </div>
              <div className="p-2 bg-orange-100 rounded-full">
                <FaChartBar className="text-orange-500" />
              </div>
            </div>
          </div>
          
          <div className="bg-orange-50 p-4 rounded-lg">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Total Deduction</p>
                <p className="text-2xl font-bold text-orange-500">${totalDeduction.toFixed(2)}</p>
              </div>
              <div className="p-2 bg-orange-100 rounded-full">
                <FaChartBar className="text-orange-500" />
              </div>
            </div>
          </div>
          
          <div className="bg-orange-50 p-4 rounded-lg">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Total Net</p>
                <p className="text-2xl font-bold text-orange-500">${totalNet.toFixed(2)}</p>
              </div>
              <div className="p-2 bg-orange-100 rounded-full">
                <FaChartBar className="text-orange-500" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Status Distribution Graph */}
      <div className="bg-white p-4 rounded-lg shadow mb-6">
        <h2 className="text-lg font-semibold text-gray-800 mb-3">Status Distribution</h2>
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex-1">
            <div className="flex items-center mb-2">
              <div className="w-3 h-3 bg-orange-500 rounded-full mr-2"></div>
              <span className="text-sm text-gray-600">Pending ({pendingWithdrawals})</span>
            </div>
            <div className="flex items-center mb-2">
              <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
              <span className="text-sm text-gray-600">Completed ({completedWithdrawals})</span>
            </div>
            <div className="flex items-center mb-2">
              <div className="w-3 h-3 bg-red-500 rounded-full mr-2"></div>
              <span className="text-sm text-gray-600">Declined ({declinedWithdrawals})</span>
            </div>
          </div>
          <div className="flex-1">
            <div className="h-8 flex rounded-md overflow-hidden">
              <div 
                className="bg-orange-500" 
                style={{ width: `${totalWithdrawals ? (pendingWithdrawals / totalWithdrawals) * 100 : 0}%` }}
              ></div>
              <div 
                className="bg-green-500" 
                style={{ width: `${totalWithdrawals ? (completedWithdrawals / totalWithdrawals) * 100 : 0}%` }}
              ></div>
              <div 
                className="bg-red-500" 
                style={{ width: `${totalWithdrawals ? (declinedWithdrawals / totalWithdrawals) * 100 : 0}%` }}
              ></div>
            </div>
          </div>
        </div>
      </div>

      {/* Filters and Search */}
      <div className="bg-white p-4 rounded-lg shadow mb-6">
        <div className="flex flex-col md:flex-row gap-4">
          {/* Status Tabs */}
          <div className="flex overflow-x-auto pb-2 md:pb-0 gap-2">
            <button 
              onClick={() => setActiveTab("all")}
              className={`px-4 py-2 rounded-md font-medium text-sm whitespace-nowrap ${
                activeTab === "all" 
                  ? "bg-orange-500 text-white" 
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              All Requests
            </button>
            <button 
              onClick={() => setActiveTab("pending")}
              className={`px-4 py-2 rounded-md font-medium text-sm whitespace-nowrap ${
                activeTab === "pending" 
                  ? "bg-orange-500 text-white" 
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              Pending
            </button>
            <button 
              onClick={() => setActiveTab("complete")}
              className={`px-4 py-2 rounded-md font-medium text-sm whitespace-nowrap ${
                activeTab === "complete" 
                  ? "bg-orange-500 text-white" 
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              Completed
            </button>
            <button 
              onClick={() => setActiveTab("decline")}
              className={`px-4 py-2 rounded-md font-medium text-sm whitespace-nowrap ${
                activeTab === "decline" 
                  ? "bg-orange-500 text-white" 
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              Declined
            </button>
          </div>

          <div className="flex flex-1 flex-col sm:flex-row gap-4">
            {/* Search Field */}
            <div className="relative flex-1">
              <input
                id="search"
                name="search"
                value={searchQuery}
                onChange={handleSearch}
                type="text"
                placeholder="Search by email..."
                className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-md focus:ring-orange-500 focus:border-orange-500"
              />
              <FaMagnifyingGlass className="absolute left-3 top-3 text-gray-400" />
            </div>

            {/* Filter Dropdown */}
            <div className="relative flex-1">
              <select
                id="filterquery"
                name="filterquery"
                value={filterquery}
                onChange={(e) => setFilterquery(e.target.value)}
                className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-md appearance-none focus:ring-orange-500 focus:border-orange-500"
              >
                <option value="">All statuses</option>
                <option value="complete">Complete</option>
                <option value="decline">Decline</option>
                <option value="pending">Pending</option>
                <option value="TRN-ADM002">By Admin</option>
              </select>
              <FaFilter className="absolute left-3 top-3 text-gray-400" />
            </div>
          </div>
        </div>
      </div>

      {/* Table Section */}
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-orange-500">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                  User Details
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                  Amount ($)
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                  Deduction ($)
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                  Total ($)
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                  Request/Action Time
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredWithdrawals?.length > 0 ? (
                filteredWithdrawals.map((item, index) => (
                  <tr 
                    key={index} 
                    className={`${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'} hover:bg-orange-50 transition-colors`}
                  >
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">{item?.email}</div>
                      {item?.bep20 && item?.bep20?.length > 5 && (
                        <div className="mt-1">
                          {item.status === "pending" && (
                            <BNBTransfer user={item} id={item?.id} />
                          )}
                        </div>
                      )}
                    </td>

                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">{item?.amount}</div>
                    </td>

                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">{item?.deduction}</div>
                    </td>

                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">
                        {item?.amount + item?.deduction}
                      </div>
                    </td>

                    <td className="px-6 py-4 whitespace-nowrap">
                      {editMode && editableWithdrawal?.id === item?.id ? (
                        <select
                          id="status"
                          name="status"
                          className="px-3 py-1 w-full text-sm text-gray-700 bg-white border border-gray-300 rounded focus:ring-orange-500 focus:border-orange-500"
                          onChange={handleChange}
                          defaultValue={item?.status}
                        >
                          <option value="pending">Pending</option>
                          <option value="inprogress">In Progress</option>
                          <option value="decline">Decline</option>
                          <option value="complete">Complete</option>
                        </select>
                      ) : (
                        <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full 
                          ${item?.status === 'complete' ? 'bg-green-100 text-green-800' : 
                          item?.status === 'decline' ? 'bg-red-100 text-red-800' : 
                          'bg-orange-100 text-orange-800'}`}>
                          {item?.status}
                        </span>
                      )}
                    </td>

                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex flex-col text-xs text-gray-500">
                        <div className="flex items-center">
                          <FaCalendarAlt className="mr-1 text-orange-500" /> 
                          <span>Req: {formatDateTime(item?.createdAT)}</span>
                        </div>
                        <div className="flex items-center mt-1">
                          <FaCalendarAlt className="mr-1 text-orange-500" /> 
                          <span>Act: {formatDateTime(item?.acceptat)}</span>
                        </div>
                      </div>
                    </td>

                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      <div className="flex items-center space-x-3">
                        <Link 
                          to={`/admin/check/profile/${item?.user_id}`}
                          className="text-blue-600 hover:text-blue-900"
                          title="View Profile"
                        >
                          <FaEye className="w-5 h-5" />
                        </Link>
                        
                        {editMode && editableWithdrawal?.id === item?.id ? (
                          <>
                            <button
                              onClick={() => handleSaveChange(item?.id)}
                              className="text-green-600 hover:text-green-900"
                              title="Save Changes"
                            >
                              <FaCheck className="w-5 h-5" />
                            </button>
                            <button
                              onClick={handleCancelEdit}
                              className="text-red-600 hover:text-red-900"
                              title="Cancel"
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
                  <td colSpan={7} className="px-6 py-4 text-sm text-center text-gray-500 bg-gray-50">
                    No ROI withdrawal requests found
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