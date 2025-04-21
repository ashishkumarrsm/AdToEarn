// import { useDispatch, useSelector } from "react-redux";
// import { useEffect, useState } from "react";
// import Loader from "../BaseFile/comman/Loader";
// import SuccessAlert from "../BaseFile/comman/SuccessAlert";
// import ErrorAlert from "../BaseFile/comman/ErrorAlert";
// import { AiFillDelete } from "react-icons/ai";
// import { Confirmation } from "../BaseFile/comman/Confirmation";
// import { clearErrors, clearMessage } from "../redux/supportSlice";
// import { getSingleSupport, deleteSupport } from "../redux/supportSlice";
// import UserSupportModel from "./UserSupportModel";
// export default function UserAddSupport() {
//   const dispatch = useDispatch();
//   const { auth } = useSelector((state) => state.auth);
//   const { singlesupport, loading, error, message } = useSelector(
//     (state) => state.allsupport
//   );
//   const [allSupportMessage, setAllSupportMessage] = useState([]);
//   const [deleteID, setDeleteID] = useState();
//   const [modalOpen, setModalOpen] = useState(false);
//   const [searchQuery, setSearchQuery] = useState("");
//   const [openModel, setOpenModel] = useState(null);

//   useEffect(() => {
//     if (auth?.id) {
//       dispatch(getSingleSupport(auth?.id));
//       setAllSupportMessage(singlesupport);
//     }
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
//   }, [dispatch, error, message, auth?.id]);

//   const handleSearch = (e) => {
//     setAllSupportMessage(
//       singlesupport?.filter((p) => p.email?.includes(e.target.value))
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

//   function modelClose() {
//     setOpenModel(false);
//   }
//   return (
//     <>
//       {/* {message && <SuccessAlert message={message} />}
//       {error && <ErrorAlert error={error} />}
//       <div className="mx-5">
//         <div className="flex items-center justify-between w-full pl-3 mb-3">
//           <div>
//             <h3 className="text-lg font-semibold text-slate-300">
//               Get Support
//             </h3>
//             <p className="text-lg text-slate-400">
//               Overview of the current Support.
//             </p>
//           </div>
//           <div className="ml-3">
//             <div className="relative flex w-full max-w-sm gap-5">
//               <div className="relative">
//                 <input
//                   className="w-full h-10 py-2 pl-3 text-lg transition duration-200 bg-transparent bg-gray-900 border rounded shadow-sm pr-11 placeholder:text-slate-400 text-slate-300 border-slate-200 ease focus:outline-none focus:border-slate-400 hover:border-slate-400 focus:shadow-md"
//                   placeholder="Search for invoice..."
//                 />
//                 <button
//                   className="absolute flex items-center w-8 h-8 px-2 my-auto bg-gray-900 rounded right-1 top-1"
//                   type="button"
//                 >
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     strokeWidth="3"
//                     stroke="currentColor"
//                     className="w-8 h-8 text-slate-300"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
//                     />
//                   </svg>
//                 </button>
//               </div>
//               <button
//                 type="button"
//                 onClick={() => setOpenModel(true)}
//                 className="block px-3 py-2 text-lg font-semibold text-center text-white bg-gray-700 rounded-md shadow-sm hover:bg-rose-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
//               >
//                 Support
//               </button>
//             </div>
//           </div>
//         </div>

//         <div className="relative flex flex-col w-full h-full mb-4 text-gray-700 bg-gray-800 rounded-lg shadow-md bg-clip-border">
//           <table className="w-full text-left border table-auto min-w-max">
//             <thead>
//               <tr>
//                 <th className="p-4 bg-gray-800 border-b border-slate-200">
//                   <p className="text-lg font-normal leading-none text-white">
//                     ID
//                   </p>
//                 </th>
//                 <th className="p-4 bg-gray-800 border-b border-slate-200">
//                   <p className="text-lg font-normal leading-none text-white">
//                     Email
//                   </p>
//                 </th>
//                 <th className="p-4 bg-gray-800 border-b border-slate-200">
//                   <p className="text-lg font-normal leading-none text-white">
//                     Title
//                   </p>
//                 </th>
//                 <th className="p-4 bg-gray-800 border-b border-slate-200">
//                   <p className="text-lg font-normal leading-none text-white">
//                     Message
//                   </p>
//                 </th>
//                 <th className="p-4 bg-gray-800 border-b border-slate-200">
//                   <p className="text-lg font-normal leading-none text-white">
//                     Send At
//                   </p>
//                 </th>
//                 <th
//                   scope="col"
//                   className="w-16 p-4 bg-gray-800 border-b border-slate-200"
//                 >
//                   <p className="text-lg font-normal leading-none text-center text-white">
//                     Action
//                   </p>
//                 </th>
//               </tr>
//             </thead>
//             <tbody className="bg-gray-900 hover:bg-black">
//               {allSupportMessage?.map((item, index) => (
//                 <tr key={index} className="even:bg-gray-900">
//                   <td className="py-4 pl-4 pr-3 text-lg font-medium text-gray-400 whitespace-nowrap sm:pl-3">
//                     {item?.id}
//                   </td>
//                   <td className="px-3 py-4 text-lg text-gray-400 whitespace-nowrap">
//                     {item?.email}
//                   </td>
//                   <td className="px-3 py-4 text-lg text-gray-400 whitespace-nowrap">
//                     {item?.status}
//                   </td>
//                   <td className="px-3 py-4 text-lg text-gray-400 whitespace-nowrap">
//                     {item?.title}
//                   </td>
//                   <td className="px-3 py-4 text-lg text-gray-400 whitespace-nowrap">
//                     {item?.message}
//                   </td>
//                   <td className="px-3 py-4 text-lg text-gray-400 whitespace-nowrap">
//                     {item?.createdAt}
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>
//       {modalOpen && (
//         <Confirmation
//           isClose={isClose}
//           deletefunction={deleteSupport}
//           id={deleteID}
//         />
//       )}
//       {openModel && (
//         <UserSupportModel openModel={openModel} modelClose={modelClose} />
//       )} */}


// {message && <SuccessAlert message={message} />}
// {error && <ErrorAlert error={error} />}
// <div className="m-3 p-4 relative z-10 bg-gray-800 text-white">
// <div className="absolute inset-0 bg-black opacity-20"></div>
//   <div className="flex-col items-center justify-between w-full mb-3 lg:flex md:flex-row">
//     <div className="">
//       <h3 className="text-lg font-semibold  ">Get Support</h3>
//       <p className="text-lg ">Overview of the current Support.</p>
//     </div>
//     <div className=" flex flex-col items-start gap-3 mt-3 md:mt-0 md:flex-row md:items-center">
//       <div className="relative w-full md:w-72">
//         <input
//            className="w-full h-10 py-2 pl-3 text-lg transition duration-200 border rounded shadow-sm text-gray-900  pr-11 placeholder:text-slate-900  border-slate-200 ease focus:outline-none focus:border-slate-400 hover:border-slate-100 focus:shadow-md"
//           placeholder="Search..."
//         />
//         <button
//           className="absolute flex items-center justify-center w-8 h-8 text-gray-900 rounded right-1 top-1"
//           type="button"
//         >
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             viewBox="0 0 24 24"
//             strokeWidth="3"
//             stroke="currentColor"
//             className="w-5 h-5 text-white"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
//             />
//           </svg>
//         </button>
//       </div>
//       <button
//         type="button"
//         onClick={() => setOpenModel(true)}
//         className="w-full px-3 py-2 text-lg font-semibold text-center text-white bg-blue-500 rounded shadow-sm md:w-auto hover:bg-blue-700 focus:outline-none"
//       >
//         Support
//       </button>
//     </div>
//   </div>

//   <div className="relative flex flex-col w-full h-full mb-4 overflow-x-auto text-gray-200 shadow-md bg-clip-border">
//     <table className="w-full min-w-full text-left border table-auto text-gray-100">
//       <thead className="text-gray-100 bg-blue-500">
//         <tr>
//           <th className="p-4 text-base font-normal leading-none border-b border-slate-200">ID</th>
//           <th className="p-4 text-base font-normal leading-none border-b border-slate-200">Email</th>
//           <th className="p-4 text-base font-normal leading-none border-b border-slate-200">Title</th>
//           <th className="p-4 text-base font-normal leading-none border-b e border-slate-200">Message</th>
//           <th className="p-4 text-base font-normal leading-none text-center border-b border-slate-200">Send At</th>
//           {/* <th className="w-16 p-4 text-base font-normal leading-none text-center text-white border-b border-slate-200">Action</th> */}
//         </tr>
//       </thead>
//       <tbody className="text-gray-900 bg-white">
//         {allSupportMessage?.length > 0 ? (
//         allSupportMessage?.map((item, index) => (
//           <tr key={index} className="text-gray-900 even:bg-gray-800 even:text-gray-900">
//             <td className="py-4 pl-4 pr-3 text-base font-medium whitespace-nowrap">{item?.id}</td>
//             <td className="px-3 py-4 text-base whitespace-nowrap">{item?.email}</td>
//             <td className="px-3 py-4 text-base whitespace-nowrap">{item?.title}</td>
//             <td className="px-3 py-4 text-base whitespace-nowrap">{item?.message}</td>
//             <td className="px-3 py-4 text-base text-center whitespace-nowrap">{item?.createdAt
//                             ? new Date(item?.createdAt).toLocaleDateString(
//                                 "en-US",
//                                 {
//                                   year: "numeric",
//                                   month: "short",
//                                   day: "numeric",
//                                 }
//                               )
//                             : "N/A"}</td>
//             {/* <td className="px-3 py-4 text-base text-center text-gray-400 whitespace-nowrap">
             
//             </td> */}
//           </tr>
//         )) ): (
//           <tr>
//               <td
//                 colSpan={6} 
//                 className="py-4 text-base font-medium text-center  whitespace-nowrap text-gray-900 bg-gray-800"
//               >
//                 No data available
//               </td>
//             </tr>
//         )}
//       </tbody>
//     </table>
//   </div>
// </div>

// {modalOpen && (
//   <Confirmation
//     isClose={isClose}
//     deletefunction={deleteSupport}
//     id={deleteID}
//   />
// )}
// {openModel && (
//   <UserSupportModel openModel={openModel} modelClose={modelClose} />
// )}

//     </>
//   );
// }




import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import Loader from "../BaseFile/comman/Loader";
import SuccessAlert from "../BaseFile/comman/SuccessAlert";
import ErrorAlert from "../BaseFile/comman/ErrorAlert";
import { AiFillDelete } from "react-icons/ai";
import { Confirmation } from "../BaseFile/comman/Confirmation";
import { clearErrors, clearMessage } from "../redux/supportSlice";
import { getSingleSupport, deleteSupport } from "../redux/supportSlice";
import UserSupportModel from "./UserSupportModel";

export default function UserAddSupport() {
  const dispatch = useDispatch();
  const { auth } = useSelector((state) => state.auth);
  const { singlesupport, loading, error, message } = useSelector(
    (state) => state.allsupport
  );
  const [searchQuery, setSearchQuery] = useState("");
  const [deleteID, setDeleteID] = useState();
  const [modalOpen, setModalOpen] = useState(false);
  const [openModel, setOpenModel] = useState(false);

  useEffect(() => {
    if (auth?.id) {
      dispatch(getSingleSupport(auth?.id));
    }
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
  }, [dispatch, error, message, auth?.id]);

  // Filter support messages based on search query
  const filteredSupportMessages = singlesupport
    ? singlesupport.filter((item) =>
        Object.values(item).some(
          (value) =>
            value &&
            value.toString().toLowerCase().includes(searchQuery.toLowerCase())
        )
      )
    : [];

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

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      {/* Alerts */}
      {message && <SuccessAlert message={message} />}
      {error && <ErrorAlert error={error} />}
      <Loader isLoading={loading} />

      {/* Header Section */}
      <div className="flex flex-col sm:flex-row justify-between items-center mb-8">
        <div className="mb-4 sm:mb-0">
          <h3 className="text-3xl font-bold text-orange-500">Support Requests</h3>
          <p className="text-gray-600 mt-1">Manage your support tickets</p>
        </div>
        <div className="relative w-full sm:w-64">
          <input
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full py-2 pl-4 pr-10 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 text-gray-700"
            placeholder="Search support tickets..."
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
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>
        </div>
      </div>

      {/* Action Button */}
      <div className="flex justify-end mb-6">
        <button
          onClick={() => setOpenModel(true)}
          className="px-4 py-2 bg-orange-500 text-white rounded-md font-semibold hover:bg-orange-600 transition focus:outline-none focus:ring-2 focus:ring-orange-500"
        >
          Create Support Ticket
        </button>
      </div>

      {/* Table Section */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        {loading ? (
          <div className="flex justify-center items-center h-48">
            <Loader />
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead className="bg-orange-50 text-orange-500">
                <tr>
                  <th className="p-4 text-sm font-semibold">ID</th>
                  <th className="p-4 text-sm font-semibold">Email</th>
                  <th className="p-4 text-sm font-semibold">Title</th>
                  <th className="p-4 text-sm font-semibold">Message</th>
                  <th className="p-4 text-sm font-semibold">Send At</th>
                  <th className="p-4 text-sm font-semibold text-center">Action</th>
                </tr>
              </thead>
              <tbody>
                {filteredSupportMessages.length > 0 ? (
                  filteredSupportMessages.map((item, index) => (
                    <tr
                      key={index}
                      className="border-t border-gray-200 hover:bg-orange-50"
                    >
                      <td className="p-4 text-gray-700 text-sm">
                        {item?.id || "—"}
                      </td>
                      <td className="p-4 text-gray-700 text-sm">
                        {item?.email || "—"}
                      </td>
                      <td className="p-4 text-gray-700 text-sm">
                        {item?.title || "—"}
                      </td>
                      <td className="p-4 text-gray-700 text-sm">
                        {item?.message || "—"}
                      </td>
                      <td className="p-4 text-gray-700 text-sm">
                        {item?.createdAt
                          ? new Date(item.createdAt).toLocaleDateString("en-US", {
                              year: "numeric",
                              month: "short",
                              day: "numeric",
                            })
                          : "N/A"}
                      </td>
                      <td className="p-4 text-center">
                        <button
                          onClick={() => handleDelete(item?.id)}
                          className="text-red-500 hover:text-red-600"
                        >
                          <AiFillDelete className="h-5 w-5" />
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td
                      colSpan={6}
                      className="py-12 text-center text-gray-500 text-sm"
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
                        <p>No support tickets found</p>
                        <p className="text-xs mt-1">
                          Try adjusting your search or create a new ticket
                        </p>
                        </div>
                      </td>
                    </tr>
                  )}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Modals */}
      {modalOpen && (
        <Confirmation
          isClose={isClose}
          deletefunction={deleteSupport}
          id={deleteID}
        />
      )}
      {openModel && (
        <UserSupportModel openModel={openModel} modelClose={modelClose} />
      )}
    </div>
  );
}
