// import React, { useState, useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import {
//   getAllNotifications,
//   deleteNotification,
// } from "../redux/notificationSlice"; // Redux actions for notifications
// import { Formik, Form, Field, ErrorMessage } from "formik";
// import SuccessAlert from "../BaseFile/comman/SuccessAlert"
// import ErrorAlert from "../BaseFile/comman/ErrorAlert"
// import { configureStore } from "@reduxjs/toolkit";
// import * as Yup from "yup";
// import {Confirmation} from "../BaseFile/comman/Confirmation"
// const NotificationsTable = () => {
//   const dispatch = useDispatch();
//   const { notifications, loading, error, message } = useSelector(
//     (state) => state.notifications
//   );
//   const [open, setOpen] = useState(false);
//   const [deleteID, setDeleteID] = useState(null);

//   useEffect(() => {
//     dispatch(getAllNotifications()); // Fetch notifications on component load
//   }, [dispatch]);

//   const handleDelete = (id) => {
//     setDeleteID(id);
//     setOpen(true);
//   };

//   function isClose(){
//     setOpen(false)
//     setDeleteID(null)
//   }

//   // Validation schema for editing the notification
//   const validationSchema = Yup.object().shape({
//     title: Yup.string().required("Title is required"),
//     message: Yup.string().required("Message is required"),
//     type: Yup.string().oneOf(['info', 'warning', 'error', 'success'], "Invalid type").required("Type is required"),
//     status: Yup.string().oneOf(['unread', 'read'], "Invalid status").required("Status is required"),
//   });

//   return (
//     <div className="p-4 my-5 lg:mx-3 sm:mx-3">
//       {message && <SuccessAlert message={message} />}
//       {error && <ErrorAlert error={error} />}
//       <table className="min-w-full text-sm text-gray-100 bg-black border border-gray-900 border-collapse table-auto">
//         <thead>
//           <tr className="">
//             <th className="px-4 py-2 font-medium text-center border border-gray-400">#</th>
//             <th className="px-4 py-2 font-medium text-left border border-gray-400">Title</th>
//             <th className="px-4 py-2 font-medium text-left border border-gray-400">Message</th>
//             <th className="px-4 py-2 font-medium text-left border border-gray-400">All User</th>
//             <th className="px-4 py-2 font-medium text-left border border-gray-400">Type</th>
//             {/* <th className="px-4 py-2 font-medium text-center border border-gray-400">Actions</th> */}
//           </tr>
//         </thead>
//         <tbody className="">
//           {notifications?.length > 0 ?
//           ( notifications?.map((notification, index) => (
//             <tr
//               key={notification?.notification_id}
//              className="text-gray-100 even:bg-blue-200 even:text:white"
//             >
//               <td className="px-4 py-2 text-sm font-medium text-center border border-gray-400">{index + 1}</td>
//               <td className="px-4 py-2 text-sm font-medium text-justify border border-gray-400">{notification?.title}</td>
//               <td className="px-4 py-2 text-sm font-medium text-justify border border-gray-400">{notification?.message}</td>
//               <td className="px-4 py-2 text-sm font-medium border border-gray-400">{notification?.users ? 'True': 'False'}</td>
//               <td className="px-4 py-2 text-sm font-medium border border-gray-400">{notification?.type}</td>
//               {/* <td className="px-4 py-2 text-sm font-medium text-center border border-gray-400">
//                 <button
//                   onClick={() => handleEdit(notification)}
//                   className="px-3 py-1 text-white bg-yellow-500 rounded hover:bg-yellow-600"
//                 >
//                   Edit
//                 </button>
//                 <button
//                   onClick={() => handleDelete(notification?.id)}
//                   className="py-1 ml-2 text-red-500 rounded hover:text-red-600"
//                   >
//                    <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       fill="none"
//                       viewBox="0 0 24 24"
//                       stroke-width="1.5"
//                       stroke="currentColor"
//                       class="w-5 h-5"
//                     >
//                       <path
//                         stroke-linecap="round"
//                         stroke-linejoin="round"
//                         d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
//                       />
//                     </svg>
//                 </button>
//               </td> */}
//             </tr>
//           ))) : (
//             <tr>
//               <td colSpan={7} className="px-4 py-4 text-base text-center text-gray-900 bg-blue-200">
//                 No notifications found
//                 </td>
//             </tr>
//           )}
//         </tbody>
//       </table>
//       {open && (
//         <Confirmation
//           isClose={isClose}
//           deletefunction={deleteNotification}
//           id={deleteID}
//         />
//       )}
      
//     </div>
//   );
// };

// export default NotificationsTable;





import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllNotifications,
  deleteNotification,
} from "../redux/notificationSlice";
import { Formik, Form, Field, ErrorMessage } from "formik";
import SuccessAlert from "../BaseFile/comman/SuccessAlert";
import ErrorAlert from "../BaseFile/comman/ErrorAlert";
import { configureStore } from "@reduxjs/toolkit";
import * as Yup from "yup";
import { Confirmation } from "../BaseFile/comman/Confirmation";

const NotificationsTable = () => {
  const dispatch = useDispatch();
  const { notifications, loading, error, message } = useSelector(
    (state) => state.notifications
  );
  const [open, setOpen] = useState(false);
  const [deleteID, setDeleteID] = useState(null);
  const [activeTab, setActiveTab] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'ascending' });

  useEffect(() => {
    dispatch(getAllNotifications());
  }, [dispatch]);

  const handleDelete = (id) => {
    setDeleteID(id);
    setOpen(true);
  };

  function isClose() {
    setOpen(false);
    setDeleteID(null);
  }

  // Validation schema for editing the notification
  const validationSchema = Yup.object().shape({
    title: Yup.string().required("Title is required"),
    message: Yup.string().required("Message is required"),
    type: Yup.string()
      .oneOf(["info", "warning", "error", "success"], "Invalid type")
      .required("Type is required"),
    status: Yup.string()
      .oneOf(["unread", "read"], "Invalid status")
      .required("Status is required"),
  });

  // Filter notifications based on active tab
  const getFilteredNotifications = () => {
    let filtered = [...(notifications || [])];

    // Filter based on tab
    if (activeTab === "notification") {
      filtered = filtered.filter(item => item.type === "notification");
    } else if (activeTab === "site_popup") {
      filtered = filtered.filter(item => item.type === "site_popup");
    }

    // Filter based on search term
    if (searchTerm) {
      filtered = filtered.filter(
        item =>
          item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          item.message.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Sort if needed
    if (sortConfig.key) {
      filtered.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? 1 : -1;
        }
        return 0;
      });
    }

    return filtered;
  };

  const handleSort = (key) => {
    let direction = 'ascending';
    if (sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
  };

  // Stats about notifications
  const notificationStats = {
    total: notifications?.length || 0,
    notification: notifications?.filter(n => n.type === "notification").length || 0,
    site_popup: notifications?.filter(n => n.type === "site_popup").length || 0,
    allUsers: notifications?.filter(n => n.users === true).length || 0
  };

  // Get class for tab buttons
  const getTabClass = (tabName) => {
    return `px-4 py-2 font-medium rounded-md transition-colors ${
      activeTab === tabName
        ? "bg-orange-500 text-white"
        : "text-gray-700 hover:bg-orange-100"
    }`;
  };

  // Get class for table headers
  const getHeaderClass = (key) => {
    return `px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-orange-50 ${
      sortConfig.key === key ? 'bg-orange-50' : ''
    }`;
  };

  // Get class for sort icons
  const getSortIconClass = (key) => {
    if (sortConfig.key !== key) return "opacity-0";
    return sortConfig.direction === 'ascending' ? "rotate-180" : "";
  };

  const filteredNotifications = getFilteredNotifications();

  return (
    <div className="p-4 my-5 lg:mx-3 sm:mx-3">
      {message && <SuccessAlert message={message} />}
      {error && <ErrorAlert error={error} />}

      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        {/* Dashboard Header */}
        <div className="bg-gradient-to-r from-orange-400 to-orange-600 p-6">
          <h2 className="text-2xl font-bold text-white">Notification Dashboard</h2>
          <p className="text-orange-100 mt-1">
            Manage and monitor all system notifications
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 p-6 bg-gray-50 border-b">
          <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
            <p className="text-gray-500 text-sm">Total Notifications</p>
            <p className="text-2xl font-bold text-gray-800">{notificationStats.total}</p>
            <div className="mt-2 w-full bg-gray-200 rounded-full h-2">
              <div className="bg-orange-500 h-2 rounded-full" style={{ width: '100%' }}></div>
            </div>
          </div>

          <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
            <p className="text-gray-500 text-sm">Standard Notifications</p>
            <p className="text-2xl font-bold text-gray-800">{notificationStats.notification}</p>
            <div className="mt-2 w-full bg-gray-200 rounded-full h-2">
              <div 
                className="bg-orange-500 h-2 rounded-full" 
                style={{ width: `${notificationStats.total ? (notificationStats.notification / notificationStats.total) * 100 : 0}%` }}
              ></div>
            </div>
          </div>

          <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
            <p className="text-gray-500 text-sm">Site Popups</p>
            <p className="text-2xl font-bold text-gray-800">{notificationStats.site_popup}</p>
            <div className="mt-2 w-full bg-gray-200 rounded-full h-2">
              <div 
                className="bg-orange-500 h-2 rounded-full" 
                style={{ width: `${notificationStats.total ? (notificationStats.site_popup / notificationStats.total) * 100 : 0}%` }}
              ></div>
            </div>
          </div>

          <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
            <p className="text-gray-500 text-sm">All Users Notifications</p>
            <p className="text-2xl font-bold text-gray-800">{notificationStats.allUsers}</p>
            <div className="mt-2 w-full bg-gray-200 rounded-full h-2">
              <div 
                className="bg-orange-500 h-2 rounded-full" 
                style={{ width: `${notificationStats.total ? (notificationStats.allUsers / notificationStats.total) * 100 : 0}%` }}
              ></div>
            </div>
          </div>
        </div>

        {/* Filters and Search */}
        <div className="p-6 flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
          <div className="flex space-x-2">
            <button
              className={getTabClass("all")}
              onClick={() => setActiveTab("all")}
            >
              All
            </button>
            <button
              className={getTabClass("notification")}
              onClick={() => setActiveTab("notification")}
            >
              Notifications
            </button>
            <button
              className={getTabClass("site_popup")}
              onClick={() => setActiveTab("site_popup")}
            >
              Site Popups
            </button>
          </div>

          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
              </svg>
            </div>
            <input
              type="text"
              className="pl-10 pr-4 py-2 w-full md:w-64 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
              placeholder="Search notifications..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        {/* Table */}
        <div className="p-6 pt-0">
          <div className="overflow-x-auto">
            <div className="inline-block min-w-full align-middle">
              <div className="overflow-hidden border border-gray-200 rounded-lg">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th
                        scope="col"
                        className={getHeaderClass("id")}
                        onClick={() => handleSort("notification_id")}
                      >
                        <div className="flex items-center">
                          #
                          <svg className={`ml-1 w-3 h-3 transition-transform ${getSortIconClass("notification_id")}`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" d="M5.293 7.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L6.707 7.707a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
                          </svg>
                        </div>
                      </th>
                      <th
                        scope="col"
                        className={getHeaderClass("title")}
                        onClick={() => handleSort("title")}
                      >
                        <div className="flex items-center">
                          Title
                          <svg className={`ml-1 w-3 h-3 transition-transform ${getSortIconClass("title")}`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" d="M5.293 7.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L6.707 7.707a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
                          </svg>
                        </div>
                      </th>
                      <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Message
                      </th>
                      <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        All Users
                      </th>
                      <th
                        scope="col"
                        className={getHeaderClass("type")}
                        onClick={() => handleSort("type")}
                      >
                        <div className="flex items-center">
                          Type
                          <svg className={`ml-1 w-3 h-3 transition-transform ${getSortIconClass("type")}`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" d="M5.293 7.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L6.707 7.707a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
                          </svg>
                        </div>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {filteredNotifications.length > 0 ? (
                      filteredNotifications.map((notification, index) => (
                        <tr
                          key={notification?.notification_id}
                          className="hover:bg-orange-50 transition-colors"
                        >
                          <td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                            {index + 1}
                          </td>
                          <td className="px-4 py-4 text-sm text-gray-900">
                            <div className="font-medium">{notification?.title}</div>
                          </td>
                          <td className="px-4 py-4 text-sm text-gray-500 max-w-xs truncate">
                            {notification?.message}
                          </td>
                          <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">
                            {notification?.users ? (
                              <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                Yes
                              </span>
                            ) : (
                              <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-gray-100 text-gray-800">
                                No
                              </span>
                            )}
                          </td>
                          <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">
                            <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                              notification?.type === "notification"
                                ? "bg-blue-100 text-blue-800"
                                : "bg-purple-100 text-purple-800"
                            }`}>
                              {notification?.type}
                            </span>
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td
                          colSpan={5}
                          className="px-4 py-8 text-sm text-center text-gray-500 bg-white"
                        >
                          <div className="flex flex-col items-center justify-center">
                            <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"></path>
                            </svg>
                            <p className="mt-2 font-medium">No notifications found</p>
                            <p className="text-sm text-gray-400">
                              {searchTerm ? "Try adjusting your search" : "Create a notification to get started"}
                            </p>
                          </div>
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          
          {/* Pagination UI (placeholder) */}
          {filteredNotifications.length > 0 && (
            <div className="flex items-center justify-between mt-4">
              <div className="text-sm text-gray-700">
                Showing <span className="font-medium">1</span> to{" "}
                <span className="font-medium">{filteredNotifications.length}</span> of{" "}
                <span className="font-medium">{filteredNotifications.length}</span> results
              </div>
              <div className="flex space-x-2">
                <button className="px-3 py-1 text-sm rounded-md border border-gray-300 bg-white text-gray-700 hover:bg-gray-50" disabled>
                  Previous
                </button>
                <button className="px-3 py-1 text-sm rounded-md bg-orange-500 text-white hover:bg-orange-600">
                  1
                </button>
                <button className="px-3 py-1 text-sm rounded-md border border-gray-300 bg-white text-gray-700 hover:bg-gray-50" disabled>
                  Next
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {open && (
        <Confirmation
          isClose={isClose}
          deletefunction={deleteNotification}
          id={deleteID}
        />
      )}
    </div>
  );
};

export default NotificationsTable;