// import React, { useState, useEffect } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import Loader from "../BaseFile/comman/Loader";
// import { Confirmation } from "../BaseFile/comman/Confirmation";
// import SuccessAlert from "../BaseFile/comman/SuccessAlert";
// import ErrorAlert from "../BaseFile/comman/ErrorAlert";
// import { AiFillDelete } from "react-icons/ai";
// import {
//   getAllAchivers,
//   deleteAchivers,
//   clearErrors,
//   clearMessage,
// } from "../redux/achiversSlice";
// import AddAchiversModel from "./AddAchiversModel";

// const AdminAchiver = () => {
//   const dispatch = useDispatch();
//   const { allachivers, loading, error, message } = useSelector((state) => state.achivers);
//   const [deleteID, setDeleteID] = useState();
//   const [modalOpen, setModalOpen] = useState(false);
//   const [openModel, setOpenModel] = useState(null);
//   const [previewImage, setPreviewImage] = useState(null);

//   useEffect(() => {
//     dispatch(getAllAchivers());
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

//   const isClose = () => {
//     setModalOpen(false);
//   };

//   function modelClose() {
//     setOpenModel(false);
//   }
//   const handleImageClick = (imageName) => {
//     setPreviewImage(`/uploads/achivers/${imageName}`);
//   };

//   const handleClosePreview = () => {
//     setPreviewImage(null);
//   };

//   return (
//     <>
// {message && <SuccessAlert message={message} />}
// {error && <ErrorAlert error={error} />}
// <div className="p-4 my-5 lg:mx-3 sm:mx-3">
//   <div className="flex-col justify-between items-center mb-3 w-full lg:flex sm:flex sm:flex-row lg:pl-3 sm:pl-3">
//     <div className="mb-2 sm:mb-0">
//       <h3 className="text-lg font-semibold text-gray-950">Achivers</h3>
//       <p className="text-lg text-gray-950">Overview of the Achivers.</p>
//     </div>
//     <div className="w-full lg:ml-3 sm:ml-3 sm:w-auto">
//       <div className="flex relative gap-2 max-w-full sm:gap-5 sm:max-w-sm">
//         <div className="relative flex-grow">
//           <input
//             className="py-2 pr-11 pl-3 w-full h-10 text-lg text-gray-900 rounded border shadow-sm transition duration-200 placeholder:text-slate-400 border-slate-200 ease focus:outline-none focus:border-slate-400 hover:border-slate-400 focus:shadow-md"
//             placeholder="Search for..."
//           />
//           <button
//             className="flex absolute top-1 right-1 items-center px-2 my-auto w-8 h-8 rounded"
//             type="button"
//           >
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               fill="none"
//               viewBox="0 0 24 24"
//               strokeWidth="3"
//               stroke="currentColor"
//               className="w-6 h-6 text-slate-200"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
//               />
//             </svg>
//           </button>
//         </div>
//         <button
//           type="button"
//           onClick={() => setOpenModel(true)}
//           className="block px-5 py-2 text-base border text-center text-gray-100 bg-[#1a8ab280] rounded-md shadow-sm hover:bg-[#1d404c80] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
//         >
//           Add
//         </button>
//       </div>
//     </div>
//   </div>

//   <div className="flex relative flex-col py-1 mb-4 w-full h-full bg-clip-border rounded-lg shadow-md">
//     {loading ? (
//       <Loader />
//     ) : (
//       <div className="overflow-x-auto">
//         <table className="w-full min-w-max text-left text-gray-100 bg-black border table-auto">
//           <thead>
//             <tr>
//               <th className="p-2 border-b md:p-4 border-slate-700">
//                 <p className="text-xs font-normal leading-none md:text-base">Name</p>
//               </th>
//               <th className="p-2 border-b md:p-4 border-slate-700">
//                 <p className="text-xs font-normal leading-none md:text-base">Description</p>
//               </th>
//               <th className="p-2 border-b md:p-4 border-slate-700">
//                 <p className="text-xs font-normal leading-none md:text-base">Recipt</p>
//               </th>
//               <th className="p-2 border-b md:p-4 border-slate-700">
//                 <p className="text-xs font-normal leading-none md:text-base">Request</p>
//               </th>
//               {/* <th className="p-2 border-b md:p-4 border-slate-700">
//                 <p className="text-xs font-normal leading-none md:text-base">Action</p>
//               </th> */}
//             </tr>
//           </thead>
//           <tbody className="bg-[#0f1b61a8] ">
//             {allachivers?.slice().reverse()?.length > 0 ? ( allachivers?.slice().reverse().map((item, index) => (
//               <tr key={index}  className="text-gray-900 even:bg-blue-200 even:text:white">
//                 <td className="px-3 py-2 text-xs text-gray-300 whitespace-nowrap md:py-4 md:text-base">
//                   ${item?.username}
//                 </td>
//                 <td className="px-3 py-2 text-xs text-gray-300 whitespace-nowrap md:py-4 md:text-base">
//                   {item?.description}
//                 </td>
//                 <td className="px-3 py-2 text-xs text-gray-300 whitespace-nowrap md:py-4 md:text-base">
//                   <div className="flex items-center space-x-2">
//                     {item?.image && (
//                       <button
//                         onClick={() => handleImageClick(item?.image)}
//                         className="text-blue-400 hover:underline"
//                       >
//                         {item?.image?.slice(0, 10)}
//                       </button>
//                     )}
//                   </div>
//                 </td>
//                 <td className="px-3 py-2 text-xs text-gray-300 whitespace-nowrap md:py-4 md:text-base">
//                   {item?.created_at}
//                 </td>
//                 {/* <td className="px-3 py-2 text-xs text-gray-300 whitespace-nowrap cursor-pointer md:py-4 md:text-base">
//                   <AiFillDelete onClick={()=>handleDelete(item?.id)}/>
//                 </td> */}
//               </tr>
//             ))): (
//               <tr>
//                 <td   colSpan="6" className="px-3 py-2 text-xs text-center text-gray-900 whitespace-nowrap bg-blue-200 md:py-4 md:text-base">
//                   No achivers found.
//                 </td>
//               </tr>
//             )}
//           </tbody>
//         </table>
//       </div>
//     )}
//   </div>
// </div>

// {previewImage && (
//   <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#4b1725ab] bg-opacity-70">
//     <div className="relative">
//       <img
//         src={previewImage}
//         alt="Preview"
//         className="max-w-[600px] max-h-[500px] object-contain"
//       />
//       <button
//         onClick={handleClosePreview}
//         className="absolute p-2 text-xl text-gray-950 bg-[#4b1725ab] rounded-full top-2 right-2"
//       >
//         ×
//       </button>
//     </div>
//   </div>
// )}

// {modalOpen && (
//   <Confirmation isClose={isClose} deletefunction={deleteAchivers} id={deleteID} />
// )}

// {openModel && (
//   <AddAchiversModel openModel={openModel} modelClose={modelClose} />
// )}


//     </>
//   );
// };

// export default AdminAchiver;








import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Loader from "../BaseFile/comman/Loader";
import { Confirmation } from "../BaseFile/comman/Confirmation";
import SuccessAlert from "../BaseFile/comman/SuccessAlert";
import ErrorAlert from "../BaseFile/comman/ErrorAlert";
import { AiFillDelete, AiOutlineEye, AiOutlinePlus } from "react-icons/ai";
import { FiSearch } from "react-icons/fi";
import { BsTrophy } from "react-icons/bs";
import { FaUserGraduate } from "react-icons/fa";
import {
  getAllAchivers,
  deleteAchivers,
  clearErrors,
  clearMessage,
} from "../redux/achiversSlice";
import AddAchiversModel from "./AddAchiversModel";

const AdminAchiver = () => {
  const dispatch = useDispatch();
  const { allachivers, loading, error, message } = useSelector((state) => state.achivers);
  const [deleteID, setDeleteID] = useState();
  const [modalOpen, setModalOpen] = useState(false);
  const [openModel, setOpenModel] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    dispatch(getAllAchivers());
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

  const isClose = () => {
    setModalOpen(false);
  };

  function modelClose() {
    setOpenModel(false);
  }
  
  const handleImageClick = (imageName) => {
    setPreviewImage(`/uploads/achivers/${imageName}`);
  };

  const handleClosePreview = () => {
    setPreviewImage(null);
  };

  // Get stats for dashboard
  const achieversCount = allachivers?.length || 0;
  const recentAchieverCount = allachivers?.filter(
    item => new Date(item.created_at) > new Date(Date.now() - 7 * 24 * 60 * 60 * 1000)
  ).length || 0;

  // Filter achievers based on search term
  const filteredAchievers = allachivers?.filter(achiever => 
    achiever.username?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    achiever.description?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      {message && <SuccessAlert message={message} />}
      {error && <ErrorAlert error={error} />}
      
      <div className="p-6 my-5 bg-gray-50 rounded-xl shadow-sm">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
          <div className="mb-4 md:mb-0">
            <h3 className="text-2xl font-bold text-gray-800 flex items-center">
              <BsTrophy className="mr-2 text-orange-500" />
              Achievers Dashboard
            </h3>
            <p className="text-gray-600 mt-1">Manage and monitor top achievers</p>
          </div>
          
          <button
            type="button"
            onClick={() => setOpenModel(true)}
            className="flex items-center px-5 py-2.5 text-base font-medium text-white bg-orange-500 rounded-lg shadow-md hover:bg-orange-600 transition-all duration-200"
          >
            <AiOutlinePlus className="mr-2" />
            Add New Achiever
          </button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-200">
            <div className="flex items-center">
              <div className="p-3 rounded-full bg-orange-100 text-orange-500">
                <FaUserGraduate size={24} />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-500">Total Achievers</p>
                <h4 className="text-2xl font-bold text-gray-800">{achieversCount}</h4>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-200">
            <div className="flex items-center">
              <div className="p-3 rounded-full bg-orange-100 text-orange-500">
                <BsTrophy size={24} />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-500">Recent Achievers</p>
                <h4 className="text-2xl font-bold text-gray-800">{recentAchieverCount}</h4>
              </div>
            </div>
          </div>
        </div>

        {/* Search and Filter Section */}
        <div className="mb-6">
          <div className="relative max-w-md">
            <input
              className="w-full pl-10 pr-4 py-2.5 text-gray-700 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              placeholder="Search achievers..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <FiSearch className="text-gray-400" />
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          {loading ? (
            <div className="p-12 flex justify-center">
              <Loader />
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                      Name
                    </th>
                    <th scope="col" className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                      Description
                    </th>
                    <th scope="col" className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                      Receipt
                    </th>
                    <th scope="col" className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                      Request Date
                    </th>
                    <th scope="col" className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {filteredAchievers?.slice().reverse()?.length > 0 ? (
                    filteredAchievers?.slice().reverse().map((item, index) => (
                      <tr key={index} className="hover:bg-gray-50 transition-colors duration-150">
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800">
                          {item?.username}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                          {item?.description}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                          {item?.image && (
                            <button
                              onClick={() => handleImageClick(item?.image)}
                              className="text-orange-500 hover:text-orange-600 flex items-center"
                            >
                              <AiOutlineEye className="mr-1" />
                              {item?.image?.slice(0, 10)}...
                            </button>
                          )}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                          {item?.created_at}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                          <button 
                            onClick={() => handleDelete(item?.id)}
                            className="text-red-500 hover:text-red-700 transition-colors duration-150"
                          >
                            <AiFillDelete size={18} />
                          </button>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="5" className="px-6 py-12 text-center text-gray-500 whitespace-nowrap">
                        No achievers found. Try adding new achievers or changing your search criteria.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          )}
        </div>

        {/* Pagination could be added here in the future */}
      </div>

      {/* Image Preview Modal */}
      {previewImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75">
          <div className="relative bg-white p-2 rounded-lg max-w-3xl max-h-[80vh]">
            <img
              src={previewImage}
              alt="Achievement Preview"
              className="max-w-full max-h-[70vh] object-contain"
            />
            <button
              onClick={handleClosePreview}
              className="absolute top-2 right-2 w-8 h-8 flex items-center justify-center rounded-full bg-orange-500 text-white hover:bg-orange-600 focus:outline-none transition-colors duration-150"
            >
              ×
            </button>
          </div>
        </div>
      )}

      {/* Confirmation Modal */}
      {modalOpen && (
        <Confirmation isClose={isClose} deletefunction={deleteAchivers} id={deleteID} />
      )}

      {/* Add Achiever Modal */}
      {openModel && (
        <AddAchiversModel openModel={openModel} modelClose={modelClose} />
      )}
    </>
  );
};

export default AdminAchiver;