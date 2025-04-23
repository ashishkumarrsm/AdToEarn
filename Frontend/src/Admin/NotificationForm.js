// import React, { useEffect, useState } from "react";
// import { Formik, Form, Field, ErrorMessage } from "formik";
// import * as Yup from "yup";
// import { useDispatch, useSelector } from "react-redux";
// import {
//   createNotification,
//   resetState,
//   addBanner,
// } from "../redux/notificationSlice";
// import Spinner from "../BaseFile/comman/Spinner";
// import { getAllUsers } from "../redux/userSlice";
// import SuccessAlert from "../BaseFile/comman/SuccessAlert";
// import ErrorAlert from "../BaseFile/comman/ErrorAlert";
// // Validation schema
// const validationSchema = Yup.object().shape({
//   title: Yup.string().required("Title is required"),
//   message: Yup.string().required("Message is required"),
//   users: Yup.boolean(),
//   type: Yup.string()
//     .oneOf(["notification", "site_popup"], "Invalid type")
//     .required("Type is required"),
// });

// const NotificationForm = () => {
//   const dispatch = useDispatch();
//   const { allusers } = useSelector((state) => state.allusers);
//   const [searchResults, setSearchResults] = useState([]);
//   const [selectedUsers, setSelectedUsers] = useState([]); // Track selected users
//   const [open, setOpen] = useState(false);
//   const [openError, setOpenError] = useState(false);
//   const [file, setFile] = useState(null);

//   const { loading, error, message } = useSelector(
//     (state) => state.notifications
//   );

//   useEffect(() => {
//     if (message) {
//       setOpen(true);
//     }
//     if (error) {
//       setOpenError(true);
//     }
//   }, [message, error]);

//   useEffect(() => {
//     dispatch(getAllUsers());
//   }, [dispatch]);

//   const handleUserSearch = (searchTerm) => {
//     if (searchTerm) {
//       const filteredUsers = allusers?.filter((user) =>
//         user.email.toLowerCase().includes(searchTerm.toLowerCase())
//       );
//       setSearchResults(filteredUsers);
//     } else {
//       setSearchResults([]);
//     }
//   };

//   const handleUserSelect = (user) => {
//     if (selectedUsers.includes(user.id)) {
//       setSelectedUsers(selectedUsers.filter((id) => id !== user.id)); // Remove user if already selected
//     } else {
//       setSelectedUsers([...selectedUsers, user.id]); // Add user to selection
//     }
//   };

//   const handleFileChange = (event) => {
//     const selectedFile = event.target.files[0];
//     if (!selectedFile) {
//       console.log("Select a file");
//       return;
//     }
//     setFile(selectedFile);
//     const formData = new FormData();
//     formData.append("image", selectedFile);
//     console.log("File appended to formData");

//     dispatch(addBanner(formData))
//       .then((response) => {
//         console.log("Banner added successfully", response);
//       })
//       .catch((error) => {
//         console.error("Error adding banner:", error);
//       });
//   };
//   return (
//     <>
//       {message && <SuccessAlert message={message} />}
//       {error && <ErrorAlert error={error} />}
//       <div className="grid items-center p-4 px-4 pb-4 mx-auto my-4 w-7xl lg:mx-3 sm:mx-3">
//         <div className="grid grid-cols-1">
//           <div className="p-5 text-gray-900 rounded-sm border border-gray-400 shadow-md bg-white/50 shadow-gray-300">
//             <h2 className="mb-4 text-2xl font-medium">Create Notification</h2>
//             <Formik
//               initialValues={{
//                 title: "",
//                 message: "",
//                 users: true,
//                 type: "notification",
//               }}
//               validationSchema={validationSchema}
//               onSubmit={(values, { resetForm }) => {
//                 // Prepare values including selected user IDs
//                 const notificationData = {
//                   ...values,
//                   recipients: selectedUsers,
//                 };
//                 console.log(notificationData);
//                 dispatch(createNotification(notificationData));
//                 // resetForm();
//               }}
//             >
//               {({ errors, touched, setFieldValue, values }) => (
//                 <Form className="">
//                   <div className="grid grid-cols-2 gap-4">
//                     <div className="mb-4">
//                       <label className="block mb-1 text-base font-semibold text-gray-900">
//                         Title
//                       </label>
//                       <Field
//                         name="title"
//                         as="input"
//                         placeholder="Enter Title"
//                         className="block p-2 w-full text-lg text-gray-900 rounded-md border border-gray-300 placeholder:text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
//                       />
//                       <ErrorMessage
//                         name="title"
//                         component="div"
//                         className="mt-1 text-base text-red-600"
//                       />
//                     </div>
//                     <div className="mb-4">
//                       <label className="block mb-1 text-base font-semibold text-gray-900">
//                         Upload Banner
//                       </label>
//                       <div className="">
//                         <input
//                           id="file"
//                           type="file"
//                           name="image"
//                           onChange={handleFileChange}
//                           className="  cursor-pointer w-full p-[5px] border border-gray-300 placeholder:text-gray-400  rounded-md text-lg bg-white "
//                         />
//                       </div>
//                     </div>
//                   </div>

//                   <div className="mb-4">
//                     <label className="block mb-1 text-base font-semibold text-gray-900">
//                       Message
//                     </label>
//                     <Field
//                       name="message"
//                       as="textarea"
//                       className="block p-3 w-full text-gray-200 rounded-md border border-gray-300 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
//                       rows="4"
//                     />
//                     <ErrorMessage
//                       name="message"
//                       component="div"
//                       className="mt-1 text-lg text-red-600"
//                     />
//                   </div>

//                   <div className="flex items-center mb-4">
//                     <Field
//                       type="checkbox"
//                       name="users"
//                       checked={values.users}
//                       className="mr-2"
//                       onChange={(e) => {
//                         const isChecked = e.target.checked;
//                         setFieldValue("users", isChecked);
//                         if (isChecked) {
//                           setSelectedUsers([]); // Clear selected users when checked
//                         }
//                       }}
//                     />
//                     <label className="text-base font-medium text-gray-900">All Users</label>
//                   </div>

//                   {!errors.users && !values.users && (
//                     <div className="mb-4">
//                       <label className="block mb-1 text-lg font-semibold text-gray-300">
//                         Search User
//                       </label>
//                       <input
//                         type="text"
//                         placeholder="Search user"
//                         onChange={(e) => handleUserSearch(e.target.value)}
//                         className="block p-3 w-full rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
//                       />
//                       {searchResults.length > 0 && (
//                         <div className="p-2 mt-2 bg-gray-100 rounded-md border border-gray-300">
//                           {searchResults.map((user) => (
//                             <div
//                               key={user.id}
//                               className="flex items-center mb-2"
//                             >
//                               <Field
//                                 type="checkbox"
//                                 name="userId"
//                                 checked={selectedUsers.includes(user.id)}
//                                 onChange={() => handleUserSelect(user)}
//                                 className="mr-2 w-4 h-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500"
//                               />
//                               <label className="text-gray-300">
//                                 {user.username}{" "}
//                               </label>
//                             </div>
//                           ))}
//                         </div>
//                       )}
//                     </div>
//                   )}

//                   {/* Show selected users */}
//                   {selectedUsers.length > 0 && (
//                     <div className="mb-4">
//                       <label className="block mb-1 text-lg font-semibold text-gray-700">
//                         Selected Users:
//                       </label>
//                       <div className="p-2 bg-gray-50 rounded-md border border-gray-300">
//                         {selectedUsers.map((userId) => {
//                           const user = allusers.find((u) => u.id === userId);
//                           return user ? (
//                             <span
//                               key={userId}
//                               className="px-2 py-1 mr-2 text-blue-800 bg-blue-100 rounded"
//                             >
//                               {user.username}
//                             </span>
//                           ) : null;
//                         })}
//                       </div>
//                     </div>
//                   )}
//                   <div className="flex justify-end">
//                     <button
//                       type="submit"
//                       disabled={loading}
//                       className={` py-2 px-6 rounded-md text-white font-medium ${
//                         loading
//                           ? "bg-blue-300 opacity-70 cursor-not-allowed"
//                           : "bg-blue-700 border transition duration-200 hover:bg-blue-600 border-white/50"
//                       }`}
//                     >
//                       {loading ? <Spinner /> : "Create"}
//                     </button>
//                   </div>
//                 </Form>
//               )}
//             </Formik>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default NotificationForm;




import React, { useEffect, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import {
  createNotification,
  resetState,
  addBanner,
} from "../redux/notificationSlice";
import Spinner from "../BaseFile/comman/Spinner";
import { getAllUsers } from "../redux/userSlice";
import SuccessAlert from "../BaseFile/comman/SuccessAlert";
import ErrorAlert from "../BaseFile/comman/ErrorAlert";

// Validation schema
const validationSchema = Yup.object().shape({
  title: Yup.string().required("Title is required"),
  message: Yup.string().required("Message is required"),
  users: Yup.boolean(),
  type: Yup.string()
    .oneOf(["notification", "site_popup"], "Invalid type")
    .required("Type is required"),
});

const NotificationForm = () => {
  const dispatch = useDispatch();
  const { allusers } = useSelector((state) => state.allusers);
  const [searchResults, setSearchResults] = useState([]);
  const [selectedUsers, setSelectedUsers] = useState([]);
  const [open, setOpen] = useState(false);
  const [openError, setOpenError] = useState(false);
  const [file, setFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [activeTab, setActiveTab] = useState("content");

  const { loading, error, message } = useSelector(
    (state) => state.notifications
  );

  useEffect(() => {
    if (message) {
      setOpen(true);
    }
    if (error) {
      setOpenError(true);
    }
  }, [message, error]);

  useEffect(() => {
    dispatch(getAllUsers());
  }, [dispatch]);

  const handleUserSearch = (searchTerm) => {
    if (searchTerm) {
      const filteredUsers = allusers?.filter((user) =>
        user.email.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setSearchResults(filteredUsers);
    } else {
      setSearchResults([]);
    }
  };

  const handleUserSelect = (user) => {
    if (selectedUsers.includes(user.id)) {
      setSelectedUsers(selectedUsers.filter((id) => id !== user.id));
    } else {
      setSelectedUsers([...selectedUsers, user.id]);
    }
  };

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    if (!selectedFile) {
      console.log("Select a file");
      return;
    }
    
    // Create preview URL
    setPreviewUrl(URL.createObjectURL(selectedFile));
    
    setFile(selectedFile);
    const formData = new FormData();
    formData.append("image", selectedFile);
    console.log("File appended to formData");

    dispatch(addBanner(formData))
      .then((response) => {
        console.log("Banner added successfully", response);
      })
      .catch((error) => {
        console.error("Error adding banner:", error);
      });
  };

  // Helper for badge style
  const getBadgeStyle = (activeTab, tabName) => {
    return activeTab === tabName 
      ? "bg-orange-500 text-white" 
      : "bg-white text-gray-700 hover:bg-orange-100";
  };

  return (
    <>
      {message && <SuccessAlert message={message} />}
      {error && <ErrorAlert error={error} />}
      
      <div className="w-full mx-auto my-8 px-4">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="bg-gradient-to-r from-orange-400 to-orange-600 p-6">
            <h2 className="text-2xl font-bold text-white">Create Notification</h2>
            <p className="text-orange-100 mt-1">Send notifications to your users with custom content</p>
          </div>
          
          <div className="flex border-b">
            <button 
              onClick={() => setActiveTab("content")}
              className={`px-6 py-3 font-medium transition-colors duration-200 ${getBadgeStyle(activeTab, "content")}`}
            >
              Content
            </button>
            <button 
              onClick={() => setActiveTab("audience")}
              className={`px-6 py-3 font-medium transition-colors duration-200 ${getBadgeStyle(activeTab, "audience")}`}
            >
              Audience
            </button>
            <button 
              onClick={() => setActiveTab("preview")}
              className={`px-6 py-3 font-medium transition-colors duration-200 ${getBadgeStyle(activeTab, "preview")}`}
            >
              Preview
            </button>
          </div>
          
          <Formik
            initialValues={{
              title: "",
              message: "",
              users: true,
              type: "notification",
            }}
            validationSchema={validationSchema}
            onSubmit={(values, { resetForm }) => {
              const notificationData = {
                ...values,
                recipients: selectedUsers,
              };
              console.log(notificationData);
              dispatch(createNotification(notificationData));
            }}
          >
            {({ errors, touched, setFieldValue, values }) => (
              <Form className="p-6">
                {activeTab === "content" && (
                  <div className="space-y-6">
                    <div>
                      <label className="block mb-2 text-sm font-medium text-gray-700">
                        Notification Type
                      </label>
                      <div className="flex gap-4">
                        <label className="flex items-center">
                          <Field
                            type="radio"
                            name="type"
                            value="notification"
                            className="mr-2 text-orange-500 focus:ring-orange-500"
                          />
                          <span>Standard Notification</span>
                        </label>
                        <label className="flex items-center">
                          <Field
                            type="radio"
                            name="type"
                            value="site_popup"
                            className="mr-2 text-orange-500 focus:ring-orange-500"
                          />
                          <span>Site Popup</span>
                        </label>
                      </div>
                      <ErrorMessage
                        name="type"
                        component="div"
                        className="mt-1 text-sm text-red-600"
                      />
                    </div>
                  
                    <div>
                      <label className="block mb-2 text-sm font-medium text-gray-700">
                        Title
                      </label>
                      <Field
                        name="title"
                        as="input"
                        placeholder="Enter a compelling title"
                        className="block w-full px-4 py-3 text-gray-700 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                      />
                      <ErrorMessage
                        name="title"
                        component="div"
                        className="mt-1 text-sm text-red-600"
                      />
                    </div>

                    <div>
                      <label className="block mb-2 text-sm font-medium text-gray-700">
                        Message
                      </label>
                      <Field
                        name="message"
                        as="textarea"
                        placeholder="Enter your notification message"
                        className="block w-full px-4 py-3 text-gray-700 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                        rows="5"
                      />
                      <ErrorMessage
                        name="message"
                        component="div"
                        className="mt-1 text-sm text-red-600"
                      />
                    </div>

                    <div>
                      <label className="block mb-2 text-sm font-medium text-gray-700">
                        Upload Banner
                      </label>
                      <div className="flex items-center space-x-4">
                        <div className="flex-1">
                          <input
                            id="file"
                            type="file"
                            name="image"
                            onChange={handleFileChange}
                            className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-orange-50 file:text-orange-700 hover:file:bg-orange-100"
                          />
                        </div>
                        {previewUrl && (
                          <div className="h-16 w-16 rounded-md border overflow-hidden">
                            <img 
                              src={previewUrl} 
                              alt="Preview" 
                              className="h-full w-full object-cover"
                            />
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                )}
                
                {activeTab === "audience" && (
                  <div className="space-y-6">
                    <div className="p-4 bg-orange-50 rounded-md">
                      <div className="flex items-center">
                        <div className="flex-1">
                          <h3 className="font-medium text-orange-800">Who should receive this notification?</h3>
                          <p className="text-sm text-orange-700 mt-1">
                            Choose whether to send to all users or select specific recipients
                          </p>
                        </div>
                        <div className="flex items-center">
                          <Field
                            type="checkbox"
                            name="users"
                            checked={values.users}
                            className="w-5 h-5 text-orange-500 rounded border-gray-300 focus:ring-orange-500"
                            onChange={(e) => {
                              const isChecked = e.target.checked;
                              setFieldValue("users", isChecked);
                              if (isChecked) {
                                setSelectedUsers([]);
                              }
                            }}
                          />
                          <label className="ml-2 text-gray-700 font-medium">All Users</label>
                        </div>
                      </div>
                    </div>

                    {!errors.users && !values.users && (
                      <div className="space-y-4">
                        <div>
                          <label className="block mb-2 text-sm font-medium text-gray-700">
                            Search Users
                          </label>
                          <input
                            type="text"
                            placeholder="Search by email"
                            onChange={(e) => handleUserSearch(e.target.value)}
                            className="block w-full px-4 py-3 text-gray-700 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                          />
                        </div>

                        {searchResults.length > 0 && (
                          <div className="bg-white rounded-md border border-gray-200 max-h-60 overflow-y-auto">
                            {searchResults.map((user) => (
                              <div
                                key={user.id}
                                className="flex items-center px-4 py-3 border-b last:border-b-0 hover:bg-orange-50"
                              >
                                <div className="w-8 h-8 rounded-full bg-orange-100 text-orange-500 flex items-center justify-center mr-3">
                                  {user.username?.charAt(0) || "U"}
                                </div>
                                <div className="flex-1">
                                  <p className="font-medium">{user.username}</p>
                                  <p className="text-sm text-gray-500">{user.email}</p>
                                </div>
                                <Field
                                  type="checkbox"
                                  name="userId"
                                  checked={selectedUsers.includes(user.id)}
                                  onChange={() => handleUserSelect(user)}
                                  className="w-5 h-5 text-orange-500 rounded border-gray-300 focus:ring-orange-500"
                                />
                              </div>
                            ))}
                          </div>
                        )}

                        {selectedUsers.length > 0 && (
                          <div>
                            <label className="block mb-2 text-sm font-medium text-gray-700">
                              Selected Recipients ({selectedUsers.length})
                            </label>
                            <div className="p-3 bg-gray-50 rounded-md border border-gray-200 flex flex-wrap gap-2">
                              {selectedUsers.map((userId) => {
                                const user = allusers.find((u) => u.id === userId);
                                return user ? (
                                  <span
                                    key={userId}
                                    className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-orange-100 text-orange-800"
                                  >
                                    {user.username}
                                    <button
                                      type="button"
                                      className="ml-1.5 text-orange-600 hover:text-orange-800"
                                      onClick={() => handleUserSelect(user)}
                                    >
                                      ×
                                    </button>
                                  </span>
                                ) : null;
                              })}
                            </div>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                )}
                
                {activeTab === "preview" && (
                  <div className="space-y-6">
                    <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                      <div className="max-w-md mx-auto">
                        <div className="bg-white rounded-lg shadow-md overflow-hidden">
                          {previewUrl && (
                            <div className="w-full h-40 bg-gray-200">
                              <img 
                                src={previewUrl} 
                                alt="Banner" 
                                className="w-full h-full object-cover"
                              />
                            </div>
                          )}
                          <div className="p-4">
                            <h3 className="text-lg font-bold text-gray-800">
                              {values.title || "Notification Title"}
                            </h3>
                            <p className="mt-2 text-gray-600">
                              {values.message || "Your notification message will appear here."}
                            </p>
                            <div className="mt-4 flex justify-end">
                              <span className="text-xs text-gray-500">
                                Recipients: {values.users ? "All Users" : `${selectedUsers.length} selected users`}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="p-4 bg-blue-50 rounded-md border border-blue-100">
                      <h3 className="font-medium text-blue-800">Notification Analytics</h3>
                      <div className="mt-3 grid grid-cols-3 gap-4">
                        <div className="p-3 bg-white rounded-md shadow-sm border border-gray-100">
                          <p className="text-sm text-gray-500">Estimated Reach</p>
                          <p className="text-xl font-bold text-gray-800">
                            {values.users ? allusers?.length || 0 : selectedUsers.length}
                          </p>
                        </div>
                        <div className="p-3 bg-white rounded-md shadow-sm border border-gray-100">
                          <p className="text-sm text-gray-500">Avg. Open Rate</p>
                          <p className="text-xl font-bold text-gray-800">68%</p>
                        </div>
                        <div className="p-3 bg-white rounded-md shadow-sm border border-gray-100">
                          <p className="text-sm text-gray-500">Avg. Response</p>
                          <p className="text-xl font-bold text-gray-800">24%</p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                
                <div className="mt-8 flex justify-end">
                  {activeTab !== "content" && (
                    <button
                      type="button"
                      onClick={() => setActiveTab(activeTab === "audience" ? "content" : "audience")}
                      className="px-6 py-2.5 mr-3 bg-white text-orange-500 border border-orange-500 rounded-md hover:bg-orange-50 transition-colors duration-200"
                    >
                      Previous
                    </button>
                  )}
                  
                  {activeTab !== "preview" ? (
                    <button
                      type="button"
                      onClick={() => setActiveTab(activeTab === "content" ? "audience" : "preview")}
                      className="px-6 py-2.5 bg-orange-500 text-white rounded-md hover:bg-orange-600 transition-colors duration-200"
                    >
                      Next
                    </button>
                  ) : (
                    <button
                      type="submit"
                      disabled={loading}
                      className={`px-6 py-2.5 rounded-md text-white font-medium ${
                        loading
                          ? "bg-orange-300 opacity-70 cursor-not-allowed"
                          : "bg-orange-500 hover:bg-orange-600 transition-colors duration-200"
                      }`}
                    >
                      {loading ? <Spinner /> : "Send Notification"}
                    </button>
                  )}
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </>
  );
};

export default NotificationForm;