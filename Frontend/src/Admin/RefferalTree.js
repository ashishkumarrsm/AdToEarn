// import React, { useState, useEffect } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { getTreeData } from "../redux/referralSlice";
// import "../User/ReferralTree.css"; // Import your CSS file here
// import { useParams } from "react-router-dom";
// // TreeNode Component


// const calculateTotalBusiness = (user) => {
//   let totalBusiness = Number(user.active_plan) || 0;
//   if (Array.isArray(user?.referrals) && user?.referrals.length > 0) {
//     user?.referrals?.forEach((referral) => {
//       totalBusiness += calculateTotalBusiness(referral);
//     });
//   }
//   return totalBusiness;
// };


// const TreeNode = ({ user, expandedNodes, toggleExpand, isWhite }) => {
//   const bgColor = isWhite ? "#FFFFFF" : "#D1D5DB"; // White or Gray based on index
//   const borderColor = isWhite ? "border-gray-400" : "border-gray-300"; // Alternating borders
//   return (
//     <li className="relative flex flex-col items-center">
//       {/* Before condition */}
//       <div className="before-condition text-lg text-gray-500">
//         {/* Before: {user.beforeCondition || "N/A"} */}
//       </div>

//       <a
//         href="#"
//         onClick={(e) => {
//           e.preventDefault();
//           toggleExpand(user.id);
//         }}
//         className={`border ${borderColor} py-2 px-4 rounded hover:bg-blue-100 flex items-center`}
//         style={{ backgroundColor: bgColor }} // Use the defined background color
//       >
//         <div className="relative">
//           <img
//             src="/default.jpg" // Placeholder image
//             alt={user?.username}
//             className="w-10 h-10 rounded-full border border-gray-300 cursor-pointer"
//           />
//           {user?.referrals && user?.referrals.length > 0 && (
//             <div className="absolute w-0 h-full bg-gray-300 left-1/2 transform -translate-x-1/2 top-10"></div>
//           )}
//         </div>
//         <div className="ml-2">
//           <div className="font-semibold">{user?.username}</div>
//           <div>Email: {user?.email}</div>
//           <div>Status: {user?.is_active ? "Active" : "Inactive"}</div>
//           <div className="font-semibold">Self business : ${user?.active_plan}</div>
//           <div className="font-semibold">Refferal : ${user?.refferal_code}</div>
//           <div className="font-semibold">Total business : ${calculateTotalBusiness(user)}</div>
//         </div>
//       </a>

//       <div className="after-condition text-lg text-gray-500">
//       </div>

//       {expandedNodes[user.id] &&
//         user.referrals &&
//         user.referrals.length > 0 && (
//           <ul className="flex justify-center pt-4 relative space-x-8">
//             {user.referrals.map((childUser, index) => (
//               <li key={childUser.id} className="mb-4 mx-2">
//                 <TreeNode
//                   user={childUser}
//                   expandedNodes={expandedNodes}
//                   toggleExpand={toggleExpand}
//                   isWhite={index % 2 === 0} 
//                 />
//               </li>
//             ))}
//           </ul>
//         )}
//     </li>
//   );
// };

// // RefferalTree Component
// const RefferalTree = () => {
// const { referral_code } =useParams()
//   const dispatch = useDispatch();
//   const [error, setError] = useState(null);
//   const { auth } = useSelector((state) => state.auth);
//   const { treeData } = useSelector((state) => state.referralTree);
//   const [expandedNodes, setExpandedNodes] = useState({}); // Track which nodes are expanded

//   useEffect(() => {
//     if (referral_code) {
//       dispatch(getTreeData(referral_code));
//     }
//   }, [referral_code, dispatch]);

//   // Toggle expand/collapse for a node
//   const toggleExpand = (id) => {
//     setExpandedNodes((prev) => ({
//       ...prev,
//       [id]: !prev[id], // Toggle the current state
//     }));
//   };

//   return (
//     <div className="py-12 overflow-auto genealogy-scroll whitespace-nowrap min-h-screen text-center bg-gray-900">
//       <div className="flex justify-center items-center mb-6">
//         <div className="relative">
//           <img
//             src="/default.jpg" // Placeholder image
//             alt={auth?.username}
//             className="w-10 h-10 rounded-full border border-gray-300"
//           />
//         </div>
//         <div className="ml-2 text-white">
//           <div className="font-semibold">{auth?.username}</div>
//           <div>ID: {auth?.id}</div>
//           <div>Email: {auth?.email}</div>
//           <div>Status: {auth?.is_active ? "Active" : "Inactive"}</div>
//         </div>
//       </div>

//       <div className="tree inline-block">
//         <ul className="flex justify-center pt-5 space-x-8">
//           {treeData?.map((user, index) => {
//             return (
//               <>
//                 {/* <p className="text-white">{user.referrals.length > 0 ?"has-referrals" : "not-referrals"}</p> */}
//                 <TreeNode
//                   key={user.id}
//                   user={user}
//                   expandedNodes={expandedNodes}
//                   toggleExpand={toggleExpand}
//                   isWhite={index % 2 === 0} // Pass the alternating color state
//                 />
//               </>
//             );
//           })}
//         </ul>
//       </div>

//       {error && <p>{error}</p>}
//       {treeData?.length === 0 && (
//         <div className="text-white text-center">No More Tree</div>
//       )}
//     </div>
//   );
// };

// export default RefferalTree;




import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getTreeData } from "../redux/referralSlice";
import { useParams } from "react-router-dom";

// Helper function - unchanged
const calculateTotalBusiness = (user) => {
  let totalBusiness = Number(user.active_plan) || 0;
  if (Array.isArray(user?.referrals) && user?.referrals.length > 0) {
    user?.referrals?.forEach((referral) => {
      totalBusiness += calculateTotalBusiness(referral);
    });
  }
  return totalBusiness;
};

// Stats Card Component - New addition
const StatsCard = ({ title, value, icon }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 flex items-center">
      <div className="p-3 rounded-full bg-orange-100 text-orange-500 mr-4">
        {icon}
      </div>
      <div>
        <h3 className="text-gray-500 text-sm">{title}</h3>
        <p className="text-gray-700 font-bold text-lg">{value}</p>
      </div>
    </div>
  );
};

// TreeNode Component - Redesigned
const TreeNode = ({ user, expandedNodes, toggleExpand, level = 0 }) => {
  const isExpanded = expandedNodes[user.id];
  const hasChildren = user?.referrals && user?.referrals.length > 0;
  const totalBusiness = calculateTotalBusiness(user);
  
  return (
    <div className="relative">
      {/* Connection lines for children */}
      {isExpanded && hasChildren && (
        <div className="absolute left-1/2 top-16 h-8 w-px bg-orange-300 transform -translate-x-1/2"></div>
      )}
      
      <div 
        className={`relative border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 flex flex-col ${isExpanded ? 'bg-orange-50' : 'bg-white'}`}
      >
        <div 
          onClick={(e) => {
            e.preventDefault();
            toggleExpand(user.id);
          }}
          className="flex items-center p-4 cursor-pointer"
        >
          {/* User Avatar */}
          <div className="relative">
            <img
              src="/default.jpg"
              alt={user?.username}
              className="w-12 h-12 rounded-full border-2 border-orange-300"
            />
            <div className={`absolute bottom-0 right-0 w-3 h-3 rounded-full ${user?.is_active ? 'bg-green-500' : 'bg-gray-400'} border border-white`}></div>
          </div>
          
          {/* User Info */}
          <div className="ml-4 flex-1">
            <div className="flex justify-between items-center">
              <h3 className="font-bold text-gray-800">{user?.username}</h3>
              <span className="text-orange-500 text-sm font-medium">
                ${user?.active_plan}
              </span>
            </div>
            <div className="text-sm text-gray-600">{user?.email}</div>
            <div className="text-xs text-gray-500">Ref: {user?.refferal_code}</div>
          </div>
          
          {/* Expand indicator */}
          {hasChildren && (
            <div className={`ml-2 text-orange-500 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </div>
          )}
        </div>
        
        {/* Business Stats - Extended information */}
        <div className="px-4 pb-3 pt-0 border-t border-gray-100">
          <div className="flex justify-between items-center mt-2">
            <div className="text-sm">
              <span className="text-gray-500">Self:</span> 
              <span className="font-medium ml-1 text-gray-700">${user?.active_plan}</span>
            </div>
            <div className="text-sm">
              <span className="text-gray-500">Network:</span>
              <span className="font-medium ml-1 text-orange-500">${totalBusiness}</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Children nodes */}
      {isExpanded && hasChildren && (
        <div className={`pt-8 relative`}>
          <div className="flex flex-wrap justify-center gap-6">
            {user.referrals.map((childUser, index) => (
              <div key={childUser.id} className="relative">
                {/* Connection line from parent to this child */}
                <div className="absolute top-0 left-1/2 h-8 w-px bg-orange-300 transform -translate-x-1/2 -translate-y-8"></div>
                <TreeNode
                  user={childUser}
                  expandedNodes={expandedNodes}
                  toggleExpand={toggleExpand}
                  level={level + 1}
                />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

// Main ReferralTree Component - Redesigned
const ReferralTree = () => {
  const { referral_code } = useParams();
  const dispatch = useDispatch();
  const [error, setError] = useState(null);
  const { auth } = useSelector((state) => state.auth);
  const { treeData } = useSelector((state) => state.referralTree);
  const [expandedNodes, setExpandedNodes] = useState({});
  const [view, setView] = useState("tree"); // New state for view toggle
  
  useEffect(() => {
    if (referral_code) {
      dispatch(getTreeData(referral_code));
    }
  }, [referral_code, dispatch]);
  
  // Toggle expand/collapse for a node
  const toggleExpand = (id) => {
    setExpandedNodes((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };
  
  // Calculate total network stats
  const calculateNetworkStats = () => {
    let totalMembers = 0;
    let totalActivePlans = 0;
    
    const countMembers = (user) => {
      totalMembers++;
      totalActivePlans += Number(user.active_plan) || 0;
      
      if (Array.isArray(user?.referrals) && user?.referrals.length > 0) {
        user?.referrals?.forEach(countMembers);
      }
    };
    
    treeData?.forEach(countMembers);
    
    return { totalMembers, totalActivePlans };
  };
  
  const { totalMembers, totalActivePlans } = calculateNetworkStats();
  
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-orange-600 to-orange-400 text-white px-4 py-8 shadow-md">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-2xl font-bold mb-2">Referral Network</h1>
          <div className="flex items-center">
            <img
              src="/default.jpg"
              alt={auth?.username}
              className="w-10 h-10 rounded-full border-2 border-white"
            />
            <div className="ml-3">
              <div className="font-medium">{auth?.username}</div>
              <div className="text-sm text-orange-100">{auth?.email}</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Dashboard Stats - New Section */}
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <StatsCard 
            title="Network Members" 
            value={totalMembers}
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            }
          />
          <StatsCard 
            title="Total Business" 
            value={`$${totalActivePlans}`}
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            }
          />
          <StatsCard 
            title="Referral Code" 
            value={auth?.refferal_code || referral_code}
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
              </svg>
            }
          />
        </div>
        
        {/* View Switcher */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex rounded-md shadow-sm" role="group">
            <button
              type="button"
              onClick={() => setView("tree")}
              className={`px-4 py-2 text-sm font-medium rounded-l-lg ${
                view === "tree" 
                  ? "bg-orange-500 text-white" 
                  : "bg-white text-gray-700 hover:bg-gray-50"
              }`}
            >
              Tree View
            </button>
            <button
              type="button"
              onClick={() => setView("list")}
              className={`px-4 py-2 text-sm font-medium rounded-r-lg ${
                view === "list" 
                  ? "bg-orange-500 text-white" 
                  : "bg-white text-gray-700 hover:bg-gray-50"
              }`}
            >
              List View
            </button>
          </div>
        </div>
        
        {/* Tree View Content */}
        {view === "tree" && (
          <div className="bg-white rounded-lg shadow-sm p-6 overflow-x-auto">
            {treeData?.length > 0 ? (
              <div className="flex justify-center min-w-max">
                <div className="flex space-x-12">
                  {treeData?.map((user, index) => (
                    <TreeNode
                      key={user.id}
                      user={user}
                      expandedNodes={expandedNodes}
                      toggleExpand={toggleExpand}
                    />
                  ))}
                </div>
              </div>
            ) : (
              <div className="text-center py-12 text-gray-500">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto text-gray-400 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
                <p className="text-lg">No referral network found</p>
                <p className="text-sm">Start building your network by sharing your referral code</p>
              </div>
            )}
          </div>
        )}
        
        {/* List View Content - New Addition */}
        {view === "list" && (
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    User
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Referral Code
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Self Business
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Total Business
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {treeData?.length > 0 ? (
                  treeData.map((user) => {
                    // Function to flatten tree structure for the list view
                    const flattenUsers = (user, result = []) => {
                      result.push(user);
                      if (user.referrals && user.referrals.length > 0) {
                        user.referrals.forEach(child => flattenUsers(child, result));
                      }
                      return result;
                    };
                    
                    const allUsers = flattenUsers(user);
                    
                    return allUsers.map((u, index) => (
                      <tr key={`${u.id}-${index}`}>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="flex-shrink-0 h-10 w-10">
                              <img className="h-10 w-10 rounded-full" src="/default.jpg" alt="" />
                            </div>
                            <div className="ml-4">
                              <div className="text-sm font-medium text-gray-900">{u.username}</div>
                              <div className="text-sm text-gray-500">{u.email}</div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${u.is_active ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'}`}>
                            {u.is_active ? 'Active' : 'Inactive'}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {u.refferal_code}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          ${u.active_plan}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-orange-500 font-medium">
                          ${calculateTotalBusiness(u)}
                        </td>
                      </tr>
                    ));
                  })
                ) : (
                  <tr>
                    <td colSpan="5" className="px-6 py-12 text-center text-gray-500">
                      No referral data available
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default ReferralTree;