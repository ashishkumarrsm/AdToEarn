// import { useParams } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import { useEffect, useState } from "react";
// import Loader from "../BaseFile/comman/Loader"
// import SuccessAlert from "../BaseFile/comman/SuccessAlert"
// import ErrorAlert from "../BaseFile/comman/ErrorAlert"
// import { getUser, updateUsers,clearErrors, clearMessage } from "../redux/userSlice";
// export default function AdminUserCheck() {
//   const { id } = useParams();
//   const dispatch = useDispatch();
//   const { singleuser, loading, error, message } = useSelector(
//     (state) => state.allusers
//   );
//   const [editUser, setEditUser] = useState([]);

//   useEffect(() => {
//     dispatch(getUser(id));
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
//   }, [dispatch, error, message, clearErrors, clearMessage, id]);
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setEditUser((prevState) => ({
//       ...prevState,
//       [name]: value,
//     }));
//   };

//   const handleSaveChanges = () => {

//     const updatedData = {
//       ...editUser,
//       updated_at: new Date().toISOString(),
//     };
//     dispatch(
//       updateUsers({
//         id: id,
//         updatedData: updatedData,
//       }
//     )
//     );
//   };
//   return (
//     <>
//       <div
//         className={`${
//           loading ? "items-center h-[560px]" : "h-full"
//         }`}
//       >
//         {loading ? (
//           <Loader />
//         ) : (
//           <>
//           <div className="my-3 space-y-4">
//           <div className="">
//             <div className="">
//               <div className="overflow-hidden mx-auto max-w-7xl text-gray-900 bg-white rounded-sm border border-gray-300 shadow-md shadow-gray-200">
//               <h2 className="px-6 py-3 mb-2 text-xl font-semibold capitalize bg-gray-200">
//                     {singleuser?.username} Detail
//                   </h2>
//                 <div className="px-6 py-4">
//                 {message && <SuccessAlert message={message} />}
//                 {error && <ErrorAlert error={error} />}
                  
//                   <div className="lg:flex lg:space-x-4">
//                     <div className="flex gap-8 lg:w-1/2">
//                       <div className="font-medium text-gray-900">
//                         Last Login
//                       </div>
//                       <div className="text-gray-900">
//                         {singleuser?.last_login || " - "}
//                       </div>
//                     </div>
//                     <div className="flex gap-8 lg:w-1/2">
//                       <div className="font-medium text-gray-900">
//                         Created At
//                       </div>
//                       <div className="text-gray-900">
//                         {singleuser?.created_at || " - "}
//                       </div>
//                     </div>
//                   </div>
//                   <div className="mt-2 lg:flex lg:space-x-4">
//                     <div className="flex gap-8 lg:w-1/2">
//                       <div className="font-medium text-gray-900">Verify At</div>
//                       <div className="text-gray-900">
//                         {singleuser?.verify_at || " - "}
//                       </div>
//                     </div>
//                     <div className="flex gap-8 lg:w-1/2">
//                       <div className="font-medium text-gray-900">
//                         Updated At
//                       </div>
//                       <div className="text-gray-900">
//                         {singleuser?.updated_at || " - "}
//                       </div>
//                     </div>
//                   </div>
//                   <div className="mt-2 lg:flex lg:space-x-4">
//                     <div className="flex gap-8 lg:w-1/2">
//                       <div className="font-medium text-gray-900">Reffer By</div>
//                       <div className="text-gray-900">
//                         {singleuser?.reffer_by || " - "}
//                       </div>
//                     </div>
//                   </div>
//                   <div className="mt-2 lg:flex lg:space-x-4">

//                     <div className="flex gap-8 lg:w-1/2">
//                       <div className="font-medium text-gray-900">
//                         Activation Date
//                       </div>
//                       <div className="text-gray-900">
//                         {singleuser?.activation_date || " - "}
//                       </div>
//                     </div>
//                     <div className="flex gap-8 lg:w-1/2">
//                       <div className="font-medium text-gray-900">
//                         Paid Member
//                       </div>
//                       <div className="text-gray-900">
//                         {singleuser?.paid_member || " - "}
//                       </div>
//                     </div>
//                   </div>

//                   <div className="mt-2 lg:flex lg:space-x-4">
//                   <div className="flex gap-8 lg:w-1/2">
//                       <div className="font-medium text-gray-900">
//                         level_month / month
//                       </div>
//                       <div className="text-gray-900">
//                         {singleuser?.level_month || " - "}
//                       </div>
//                     </div> 
//                     <div className="flex gap-8 lg:w-1/2">
//                       <div className="font-medium text-gray-900">
//                         ROI/day
//                       </div>
//                       <div className="text-gray-900">
//                         {singleuser?.roi_day || " - "}
//                       </div>
//                     </div>
//                     </div>


//                   <div className="mt-2 lg:flex lg:space-x-4">
//                     <div className="flex gap-8 lg:w-1/2">
//                       <div className="font-medium text-gray-900">
//                         Refferal Code
//                       </div>
//                       <div className="text-gray-900">
//                         {singleuser?.refferal_code || " - "}
//                       </div>
//                     </div>
                    
//                     <div className="flex gap-8 lg:w-1/2">
//                       <div className="font-medium text-gray-900">
//                         Total Team
//                       </div>
//                       <div className="text-gray-900">
//                         {singleuser?.total_team || " - "}
//                       </div>
//                     </div>
//                   </div>

//                   <div className="mt-2 lg:flex lg:space-x-4">
                    

//                     <div className="flex gap-8 lg:w-1/2">
//                       <div className="font-medium text-gray-900">
//                         BEP20 Address
//                       </div>
//                       <div className="text-gray-900">
//                         {singleuser?.bep20 || " - "}
//                       </div>
//                     </div>

//                     <div className="flex gap-8 lg:w-1/2">
//                       <div className="font-medium text-gray-900">
//                         TRC20 Address
//                       </div>
//                       <div className="text-gray-900">
//                         {singleuser?.trc20 || " - "}
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             </div>
//             {/* <div className="h-[2px] bg-black w-full " /> */}
//             <div className="mb-4">
              
//               <div className="overflow-hidden mx-auto max-w-7xl bg-white rounded border border-gray-300 shadow">
//               <h2 className="px-6 py-3 mb-2 text-xl font-semibold capitalize bg-gray-200">
//                     Editable Details
//                   </h2>
//               {message && <SuccessAlert message={message} />}
//               {error && <ErrorAlert error={error} />}
//                 <div className="px-6 py-4">
                 
//                   <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
//                     <div className="mb-4">
//                       <label className="block text-sm font-medium text-black">
//                         Username
//                       </label>
//                       <input
//                         type="text"
//                         name="username"
//                         className="block p-2 mt-1 w-full text-black rounded-md border shadow-sm bg-gray-200/50 border-white/50 focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
//                         defaultValue={singleuser?.username}
//                         onChange={handleChange}
//                       />
//                     </div>
//                     <div className="mb-4">
//                       <label className="block text-sm font-medium text-black">
//                         Email
//                       </label>
//                       <input
//                         type="email"
//                         name="email"
//                         className="block p-2 mt-1 w-full text-black rounded-md border shadow-sm bg-gray-200/50 border-white/50 focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
//                         defaultValue={singleuser?.email}
//                         onChange={handleChange}
//                       />
//                     </div>
//                     <div className="mb-4">
//                       <label className="block text-sm font-medium text-black">
//                         Password
//                       </label>
//                       <input
//                         type="text"
//                         name="password"
//                         className="block p-2 mt-1 w-full text-black rounded-md border shadow-sm bg-gray-200/50 border-white/50 focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
//                         defaultValue={singleuser?.password}
//                         onChange={handleChange}
//                       />
//                     </div>
//                     <div className="mb-4">
//                       <label className="block text-sm font-medium text-black">
//                         Role
//                       </label>
//                       <select
//                         name="role"
//                         className="block p-2 mt-1 w-full text-black rounded-md border shadow-sm bg-gray-200/50 border-white/50 focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
//                         defaultValue={singleuser?.role}
//                         onChange={handleChange}
//                       >
//                         <option value="user">User</option>
//                         <option value="admin">Admin</option>
//                       </select>
//                     </div>
//                     <div className="mb-4">
//                       <label className="block text-sm font-medium text-black">
//                         Status
//                       </label>
//                       <select
//                         name="status"
//                         className="block p-2 mt-1 w-full text-black rounded-md border shadow-sm bg-gray-200/50 border-white/50 focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
//                         defaultValue={singleuser?.status}
//                         onChange={handleChange}
//                       >
//                         <option value="unblock">unblock</option>
//                         <option value="block">Block</option>
//                       </select>
//                     </div>
//                     <div className="mb-4">
//                       <label className="block text-sm font-medium text-black">
//                         Is Active
//                       </label>
//                       <select
//                         name="is_active"
//                         className="block p-2 mt-1 w-full text-black rounded-md border shadow-sm bg-gray-200/50 border-white/50 focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
//                         defaultValue={singleuser?.is_active}
//                         onChange={handleChange}
//                       >
//                         <option value="active">Active</option>
//                         <option value="inactive">Inactive</option>
//                       </select>
//                     </div>
//                     <div className="mb-4">
//                       <label className="block text-sm font-medium text-black">
//                         Roi Status
//                       </label>
//                       <select
//                         name="roi_status"
//                         className="block p-2 mt-1 w-full text-black rounded-md border shadow-sm bg-gray-200/50 border-white/50 focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
//                         defaultValue={singleuser?.roi_status}
//                         onChange={handleChange}
//                       >
//                         <option value="open">Open</option>
//                         <option value="close">Close</option>
//                       </select>
//                     </div>
//                     <div className="mb-4">
//                       <label className="block text-sm font-medium text-black">
//                         level status
//                       </label>
//                       <select
//                         name="level_status"
//                         className="block p-2 mt-1 w-full text-black rounded-md border shadow-sm bg-gray-200/50 border-white/50 focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
//                         defaultValue={singleuser?.level_status}
//                         onChange={handleChange}
//                       >
//                         <option value="open">Open</option>
//                         <option value="close">Close</option>
//                       </select>
//                     </div>
//                     <div className="mb-4">
//                       <label className="block text-sm font-medium text-black">
//                         Address
//                       </label>
//                       <input
//                         type="text"
//                         name="address"
//                         className="block p-2 mt-1 w-full text-black rounded-md border shadow-sm bg-gray-200/50 border-white/50 focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
//                         defaultValue={singleuser?.address || ""}
//                         onChange={handleChange}
//                       />
//                     </div>
//                     <div className="mb-4">
//                       <label className="block text-sm font-medium text-black">
//                         Business
//                       </label>
//                       <input
//                         type="number"
//                         name="business"
//                         className="block p-2 mt-1 w-full text-black rounded-md border shadow-sm bg-gray-200/50 border-white/50 focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
//                         defaultValue={singleuser?.business || ""}
//                         onChange={handleChange}
//                       />
//                     </div>
//                     <div className="mb-4">
//                       <label className="block text-sm font-medium text-black">
//                         Business Balance
//                       </label>
//                       <input
//                         type="number"
//                         name="business_balance"
//                         className="block p-2 mt-1 w-full text-black rounded-md border shadow-sm bg-gray-200/50 border-white/50 focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
//                         defaultValue={singleuser?.business_balance || ""}
//                         onChange={handleChange}
//                       />
//                     </div>
//                     <div className="mb-4">
//                       <label className="block text-sm font-medium text-black">
//                         Full Name
//                       </label>
//                       <input
//                         type="text"
//                         name="fullname"
//                         className="block p-2 mt-1 w-full text-black rounded-md border shadow-sm bg-gray-200/50 border-white/50 focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
//                         defaultValue={singleuser?.fullname || ""}
//                         onChange={handleChange}
//                       />
//                     </div>
//                     <div className="mb-4">
//                       <label className="block text-sm font-medium text-black">
//                         Phone
//                       </label>
//                       <input
//                         type="number"
//                         name="phone"
//                         className="block p-2 mt-1 w-full text-black rounded-md border shadow-sm bg-gray-200/50 border-white/50 focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
//                         defaultValue={singleuser?.phone || ""}
//                         onChange={handleChange}
//                       />
//                     </div>
//                     {/* <div className="mb-4">
//                       <label className="block text-sm font-medium text-black">
//                         Forming ROI Status
//                       </label>
//                       <input
//                         type="number"
//                         name="forming_roi_status"
//                         className="block mt-1 w-full rounded-md shadow-sm border-white/50 focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
//                         defaultValue={singleuser?.forming_roi_status || ""}
//                         onChange={handleChange}
//                       />
//                     </div> */}
//                     {/* <div className="mb-4">
//                       <label className="block text-sm font-medium text-black">
//                         level_month Status
//                       </label>
//                       <input
//                         type="number"
//                         name="level_month_status"
//                         className="block mt-1 w-full rounded-md shadow-sm border-white/50 focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
//                         defaultValue={singleuser?.level_month_status || ""}
//                         onChange={handleChange}
//                       />
//                     </div> */}
//                     {/* <div className="mb-4">
//                       <label className="block text-sm font-medium text-black">
//                         Zero Pin
//                       </label>
//                       <input
//                         type="number"
//                         name="zero_pin"
//                         className="block mt-1 w-full rounded-md shadow-sm border-white/50 focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
//                         defaultValue={singleuser?.zero_pin}
//                         onChange={handleChange}
//                       />
//                     </div> */}
//                     <div className="mb-4">
//                       <label className="block text-sm font-medium text-black">
//                         Refferal By
//                       </label>
//                       <input
//                         type="text"
//                         name="reffer_by"
//                         className="block p-2 mt-1 w-full text-black rounded-md border shadow-sm bg-gray-200/50 border-white/50 focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
//                         defaultValue={singleuser?.reffer_by}
//                         onChange={handleChange}
//                       />
//                     </div>
//                   </div>
//                   <div className="flex justify-end mt-6">
//                     <button
//                       className="px-4 py-2 text-white bg-indigo-600 rounded hover:bg-indigo-700 focus:outline-none focus:bg-indigo-600"
//                       onClick={handleSaveChanges}
//                     >
//                       Save Changes
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             </div>


//             <div className="h-[20px]">
              
//             </div>
//           </div>
//           </>
//         )}
//       </div>
//     </>
//   );
// }











import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import Loader from "../BaseFile/comman/Loader";
import SuccessAlert from "../BaseFile/comman/SuccessAlert";
import ErrorAlert from "../BaseFile/comman/ErrorAlert";
import { getUser, updateUsers, clearErrors, clearMessage } from "../redux/userSlice";

export default function AdminUserCheck() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { singleuser, loading, error, message } = useSelector(
    (state) => state.allusers
  );
  const [editUser, setEditUser] = useState([]);

  useEffect(() => {
    dispatch(getUser(id));
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
  }, [dispatch, error, message, clearErrors, clearMessage, id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditUser((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSaveChanges = () => {
    const updatedData = {
      ...editUser,
      updated_at: new Date().toISOString(),
    };
    dispatch(
      updateUsers({
        id: id,
        updatedData: updatedData,
      })
    );
  };

  // Function to format dates for better readability
  const formatDate = (dateString) => {
    if (!dateString) return " - ";
    const date = new Date(dateString);
    return date.toLocaleString();
  };

  return (
    <div className={`bg-gray-50 min-h-screen ${loading ? "flex items-center justify-center" : ""}`}>
      {loading ? (
        <Loader />
      ) : (
        <div className="container mx-auto py-8 px-4">
          {/* User Overview Section */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-orange-500 mb-2">User Management</h1>
            <div className="h-1 w-24 bg-orange-500 mb-6"></div>
            
            <div className="bg-white rounded-lg shadow-lg overflow-hidden border-t-4 border-orange-500">
              <div className="flex justify-between items-center bg-gradient-to-r from-orange-500 to-orange-400 px-6 py-4">
                <h2 className="text-xl font-semibold text-white">
                  {singleuser?.username} Profile
                </h2>
                <div className="flex items-center">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    singleuser?.status === "block" ? "bg-red-100 text-red-800" : "bg-green-100 text-green-800"
                  }`}>
                    {singleuser?.status || "Unknown"}
                  </span>
                </div>
              </div>
              
              <div className="px-6 py-4">
                {message && <SuccessAlert message={message} />}
                {error && <ErrorAlert error={error} />}
                
                {/* User Stats Overview */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  <div className="bg-orange-50 p-4 rounded-lg border border-orange-100">
                    <p className="text-sm text-orange-500 font-medium">Member Status</p>
                    <p className="text-2xl font-bold">{singleuser?.paid_member || "Free"}</p>
                    <p className="text-xs text-gray-500">Since {formatDate(singleuser?.activation_date)}</p>
                  </div>
                  
                  <div className="bg-orange-50 p-4 rounded-lg border border-orange-100">
                    <p className="text-sm text-orange-500 font-medium">Referral Network</p>
                    <p className="text-2xl font-bold">{singleuser?.total_team || "0"}</p>
                    <p className="text-xs text-gray-500">Team Members</p>
                  </div>
                  
                  <div className="bg-orange-50 p-4 rounded-lg border border-orange-100">
                    <p className="text-sm text-orange-500 font-medium">Business Balance</p>
                    <p className="text-2xl font-bold">{singleuser?.business_balance || "0"}</p>
                    <p className="text-xs text-gray-500">Current Balance</p>
                  </div>
                </div>
                
                {/* User Details */}
                <div className="bg-gray-50 rounded-lg p-4 mb-6">
                  <h3 className="text-lg font-medium text-orange-500 mb-4">Account Information</h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
                    <div className="flex flex-col">
                      <span className="text-xs text-gray-500">Username</span>
                      <span className="font-medium">{singleuser?.username || "-"}</span>
                    </div>
                    
                    <div className="flex flex-col">
                      <span className="text-xs text-gray-500">Email</span>
                      <span className="font-medium">{singleuser?.email || "-"}</span>
                    </div>
                    
                    <div className="flex flex-col">
                      <span className="text-xs text-gray-500">Full Name</span>
                      <span className="font-medium">{singleuser?.fullname || "-"}</span>
                    </div>
                    
                    <div className="flex flex-col">
                      <span className="text-xs text-gray-500">Phone</span>
                      <span className="font-medium">{singleuser?.phone || "-"}</span>
                    </div>
                    
                    <div className="flex flex-col">
                      <span className="text-xs text-gray-500">Referral Code</span>
                      <span className="font-medium">{singleuser?.refferal_code || "-"}</span>
                    </div>
                    
                    <div className="flex flex-col">
                      <span className="text-xs text-gray-500">Referred By</span>
                      <span className="font-medium">{singleuser?.reffer_by || "-"}</span>
                    </div>
                  </div>
                </div>
                
                {/* Crypto Address Section */}
                <div className="bg-gray-50 rounded-lg p-4 mb-6">
                  <h3 className="text-lg font-medium text-orange-500 mb-4">Wallet Addresses</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-white p-3 rounded border border-gray-200">
                      <p className="text-sm font-medium mb-1">BEP20 Address</p>
                      <p className="text-xs bg-gray-100 p-2 rounded overflow-auto whitespace-nowrap">
                        {singleuser?.bep20 || "Not provided"}
                      </p>
                    </div>
                    
                    <div className="bg-white p-3 rounded border border-gray-200">
                      <p className="text-sm font-medium mb-1">TRC20 Address</p>
                      <p className="text-xs bg-gray-100 p-2 rounded overflow-auto whitespace-nowrap">
                        {singleuser?.trc20 || "Not provided"}
                      </p>
                    </div>
                  </div>
                </div>
                
                {/* Business & ROI Stats */}
                <div className="bg-gray-50 rounded-lg p-4 mb-6">
                  <h3 className="text-lg font-medium text-orange-500 mb-4">Earnings & Performance</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="flex flex-col bg-white p-3 rounded border border-gray-200">
                      <span className="text-xs text-gray-500">Business</span>
                      <span className="text-xl font-medium">{singleuser?.business || "0"}</span>
                    </div>
                    
                    <div className="flex flex-col bg-white p-3 rounded border border-gray-200">
                      <span className="text-xs text-gray-500">ROI/day</span>
                      <span className="text-xl font-medium">{singleuser?.roi_day || "0"}</span>
                      <span className={`text-xs ${singleuser?.roi_status === "close" ? "text-red-500" : "text-green-500"}`}>
                        {singleuser?.roi_status || "unknown"}
                      </span>
                    </div>
                    
                    <div className="flex flex-col bg-white p-3 rounded border border-gray-200">
                      <span className="text-xs text-gray-500">Level Month</span>
                      <span className="text-xl font-medium">{singleuser?.level_month || "0"}</span>
                      <span className={`text-xs ${singleuser?.level_status === "close" ? "text-red-500" : "text-green-500"}`}>
                        {singleuser?.level_status || "unknown"}
                      </span>
                    </div>
                  </div>
                </div>
                
                {/* Timestamps */}
                <div className="bg-gray-50 rounded-lg p-4">
                  <h3 className="text-lg font-medium text-orange-500 mb-4">Account Activity</h3>
                  
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="flex flex-col">
                      <span className="text-xs text-gray-500">Last Login</span>
                      <span className="text-sm">{formatDate(singleuser?.last_login)}</span>
                    </div>
                    
                    <div className="flex flex-col">
                      <span className="text-xs text-gray-500">Created At</span>
                      <span className="text-sm">{formatDate(singleuser?.created_at)}</span>
                    </div>
                    
                    <div className="flex flex-col">
                      <span className="text-xs text-gray-500">Verified At</span>
                      <span className="text-sm">{formatDate(singleuser?.verify_at)}</span>
                    </div>
                    
                    <div className="flex flex-col">
                      <span className="text-xs text-gray-500">Updated At</span>
                      <span className="text-sm">{formatDate(singleuser?.updated_at)}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Edit User Form */}
          <div className="mb-8">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden border-t-4 border-orange-500">
              <div className="bg-gradient-to-r from-orange-500 to-orange-400 px-6 py-4">
                <h2 className="text-xl font-semibold text-white">Edit User Details</h2>
              </div>
              
              <div className="px-6 py-6">
                {message && <SuccessAlert message={message} />}
                {error && <ErrorAlert error={error} />}
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Username
                      </label>
                      <input
                        type="text"
                        name="username"
                        className="block w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                        defaultValue={singleuser?.username}
                        onChange={handleChange}
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        className="block w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                        defaultValue={singleuser?.email}
                        onChange={handleChange}
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Password
                      </label>
                      <input
                        type="text"
                        name="password"
                        className="block w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                        defaultValue={singleuser?.password}
                        onChange={handleChange}
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Full Name
                      </label>
                      <input
                        type="text"
                        name="fullname"
                        className="block w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                        defaultValue={singleuser?.fullname || ""}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Role
                      </label>
                      <select
                        name="role"
                        className="block w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                        defaultValue={singleuser?.role}
                        onChange={handleChange}
                      >
                        <option value="user">User</option>
                        <option value="admin">Admin</option>
                      </select>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Status
                      </label>
                      <select
                        name="status"
                        className="block w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                        defaultValue={singleuser?.status}
                        onChange={handleChange}
                      >
                        <option value="unblock">Unblock</option>
                        <option value="block">Block</option>
                      </select>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Is Active
                      </label>
                      <select
                        name="is_active"
                        className="block w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                        defaultValue={singleuser?.is_active}
                        onChange={handleChange}
                      >
                        <option value="active">Active</option>
                        <option value="inactive">Inactive</option>
                      </select>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Phone
                      </label>
                      <input
                        type="number"
                        name="phone"
                        className="block w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                        defaultValue={singleuser?.phone || ""}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Roi Status
                      </label>
                      <select
                        name="roi_status"
                        className="block w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                        defaultValue={singleuser?.roi_status}
                        onChange={handleChange}
                      >
                        <option value="open">Open</option>
                        <option value="close">Close</option>
                      </select>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Level Status
                      </label>
                      <select
                        name="level_status"
                        className="block w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                        defaultValue={singleuser?.level_status}
                        onChange={handleChange}
                      >
                        <option value="open">Open</option>
                        <option value="close">Close</option>
                      </select>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Business
                      </label>
                      <input
                        type="number"
                        name="business"
                        className="block w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                        defaultValue={singleuser?.business || ""}
                        onChange={handleChange}
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Business Balance
                      </label>
                      <input
                        type="number"
                        name="business_balance"
                        className="block w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                        defaultValue={singleuser?.business_balance || ""}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                </div>
                
                <div className="mt-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Address
                      </label>
                      <input
                        type="text"
                        name="address"
                        className="block w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                        defaultValue={singleuser?.address || ""}
                        onChange={handleChange}
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Referral By
                      </label>
                      <input
                        type="text"
                        name="reffer_by"
                        className="block w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                        defaultValue={singleuser?.reffer_by}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                </div>
                
                <div className="flex justify-end mt-8">
                  <button
                    className="px-6 py-3 text-white bg-orange-500 rounded-md hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-opacity-50 transition-colors"
                    onClick={handleSaveChanges}
                  >
                    Save Changes
                  </button>
                </div>
              </div>
            </div>
          </div>
          
          {/* New Section: Account Activity Graph */}
          <div className="mb-8">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden border-t-4 border-orange-500">
              <div className="bg-gradient-to-r from-orange-500 to-orange-400 px-6 py-4">
                <h2 className="text-xl font-semibold text-white">Account Activity</h2>
              </div>
              
              <div className="px-6 py-6">
                <div className="flex flex-col md:flex-row gap-6">
                  {/* Activity Graph */}
                  <div className="w-full md:w-2/3">
                    <div className="bg-gray-50 rounded-lg p-4 h-64 flex items-center justify-center">
                      <div className="text-center text-gray-500">
                        <p>Activity graph visualization would appear here</p>
                        <p className="text-sm">Account growth and performance metrics over time</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Activity Stats */}
                  <div className="w-full md:w-1/3">
                    <div className="space-y-4">
                      <div className="bg-orange-50 p-4 rounded-lg border border-orange-100">
                        <p className="text-sm text-orange-500 font-medium">Account Age</p>
                        <p className="text-2xl font-bold">
                          {singleuser?.created_at ? 
                            Math.floor((new Date() - new Date(singleuser.created_at)) / (1000 * 60 * 60 * 24)) + " days" : 
                            "N/A"}
                        </p>
                      </div>
                      
                      <div className="bg-orange-50 p-4 rounded-lg border border-orange-100">
                        <p className="text-sm text-orange-500 font-medium">Activity Status</p>
                        <p className="text-2xl font-bold">
                          {singleuser?.is_active === "active" ? "Active" : "Inactive"}
                        </p>
                      </div>
                      
                      <div className="bg-orange-50 p-4 rounded-lg border border-orange-100">
                        <p className="text-sm text-orange-500 font-medium">Last Activity</p>
                        <p className="text-lg font-bold">
                          {singleuser?.last_login ? 
                            new Date(singleuser.last_login).toLocaleDateString() : 
                            "Never logged in"}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}