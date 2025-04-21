// import React, { useState, useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { getDirectReferrals } from "../redux/referralSlice";
// import { ChevronLeft, ChevronRight, Search, Filter, X } from 'lucide-react';

// const DirectReferralsTable = () => {

//   const dispatch = useDispatch();
//   const userId = useSelector((state) => state.auth.auth.id);
//   const { directReferrals, totalReferrals, loading, error } = useSelector((state) => state.referralTree);
  


//   // Local state for pagination and filters
//   const [currentPage, setCurrentPage] = useState(1);
//   const [limit, setLimit] = useState(10);
//   const [search, setSearch] = useState('');
//   const [status, setStatus] = useState('');
//   const [role, setRole] = useState('');
//   const [isFilterOpen, setIsFilterOpen] = useState(false);
  
//   // Status options for filter
//   const statusOptions = ['Active', 'Inactive', 'Pending', 'Verified'];
//   const roleOptions = ['User', 'Agent', 'Admin', 'Partner'];
  
//   useEffect(() => {
//     fetchReferrals();
//   }, [currentPage, limit, status, role]);
  
//   // Fetch referrals when page, limit, or filters change
//   const fetchReferrals = () => {
//     dispatch(getDirectReferrals({
//       user_id: userId,
//       page: currentPage,
//       limit,
//       search,
//       status,

//     }));
//   };
  
//   // Handle search input
//   const handleSearch = (e) => {
//     e.preventDefault();
//     fetchReferrals();
//   };
  
//   // Clear all filters
//   const clearFilters = () => {
//     setStatus('');
//     setRole('');
//     setSearch('');
//     setCurrentPage(1);
//   };
  
//   // Calculate pagination details
//   const totalPages = Math.ceil(totalReferrals / limit);
//   const pageNumbers = [];
//   const maxPagesToShow = 5;
  
//   let startPage = Math.max(1, currentPage - Math.floor(maxPagesToShow / 2));
//   let endPage = Math.min(totalPages, startPage + maxPagesToShow - 1);
  
//   if (endPage - startPage + 1 < maxPagesToShow && startPage > 1) {
//     startPage = Math.max(1, endPage - maxPagesToShow + 1);
//   }
  
//   for (let i = startPage; i <= endPage; i++) {
//     pageNumbers.push(i);
//   }
  
//   return (
//     <div className="w-full p-6 bg-white rounded-lg shadow-md">
//       {/* Header with search and filters */}
//       <div className="p-4 border-b border-gray-200 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
//         <h2 className="text-xl font-semibold text-gray-800">Direct Referrals</h2>
        
//         <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
//           {/* Search bar */}
//           <form onSubmit={handleSearch} className="relative flex-grow">
//             <input
//               type="text"
//               placeholder="Search referrals..."
//               className="w-full px-4 py-2 pr-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//               value={search}
//               onChange={(e) => setSearch(e.target.value)}
//             />
//             <button type="submit" className="absolute right-2 top-2 text-gray-500">
//               <Search size={20} />
//             </button>
//           </form>
          
//           {/* Filter button */}
//           <button
//             onClick={() => setIsFilterOpen(!isFilterOpen)}
//             className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg flex items-center gap-2 transition-colors"
//           >
//             <Filter size={16} />
//             <span>Filters</span>
//             {(status || role) && (
//               <span className="flex h-5 w-5 items-center justify-center rounded-full bg-blue-500 text-xs text-white">
//                 {(status ? 1 : 0) + (role ? 1 : 0)}
//               </span>
//             )}
//           </button>
//         </div>
//       </div>
      
//       {/* Filter dropdown */}
//       {isFilterOpen && (
//         <div className="p-4 border-b border-gray-200 bg-gray-50">
//           <div className="flex flex-wrap gap-4 items-end">
//             {/* Status filter */}
//             <div className="flex flex-col gap-1">
//               <label className="text-sm font-medium text-gray-700">Status</label>
//               <select
//                 value={status}
//                 onChange={(e) => setStatus(e.target.value)}
//                 className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//               >
//                 <option value="">All Statuses</option>
//                 {statusOptions.map((option) => (
//                   <option key={option} value={option.toLowerCase()}>
//                     {option}
//                   </option>
//                 ))}
//               </select>
//             </div>
            
//             {/* Role filter */}
//             <div className="flex flex-col gap-1">
//               <label className="text-sm font-medium text-gray-700">Role</label>
//               <select
//                 value={role}
//                 onChange={(e) => setRole(e.target.value)}
//                 className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//               >
//                 <option value="">All Roles</option>
//                 {roleOptions.map((option) => (
//                   <option key={option} value={option.toLowerCase()}>
//                     {option}
//                   </option>
//                 ))}
//               </select>
//             </div>
            
//             {/* Clear filters button */}
//             <button
//               onClick={clearFilters}
//               className="px-4 py-2 text-gray-600 hover:text-gray-800 flex items-center gap-1"
//             >
//               <X size={16} />
//               <span>Clear filters</span>
//             </button>
//           </div>
//         </div>
//       )}
      
//       {/* Table */}
//       <div className="overflow-x-auto">
//         <table className="w-full">
//           <thead>
//             <tr className="bg-gray-50">
//               <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">#</th>
//               <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
//               <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
//               <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
//               <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Joined Date</th>
//             </tr>
//           </thead>
//           <tbody className="bg-white divide-y divide-gray-200">
//             {loading ? (
//               <tr>
//                 <td colSpan="5" className="px-6 py-4 text-center text-gray-500">
//                   <div className="flex justify-center items-center">
//                     <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-blue-500"></div>
//                     <span className="ml-2">Loading...</span>
//                   </div>
//                 </td>
//               </tr>
//             ) : error ? (
//               <tr>
//                 <td colSpan="5" className="px-6 py-4 text-center text-red-500">
//                   Error: {error}
//                 </td>
//               </tr>
//             ) : directReferrals?.length === 0 ? (
//               <tr>
//                 <td colSpan="5" className="px-6 py-4 text-center text-gray-500">
//                   No referrals found
//                 </td>
//               </tr>
//             ) : (
//               directReferrals?.map((referral, index) => (
//                 <tr key={referral.id} className="hover:bg-gray-50">
//                   <td className="px-6 py-4 whitespace-nowrap">
//                    {index+1}
//                   </td>
//                   <td className="px-6 py-4 whitespace-nowrap">
//                     <div className="flex items-center">
//                       <div className="h-10 w-10 flex-shrink-0">
//                         <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 uppercase">
//                           {referral.fullname?.charAt(0) || 'U'}
//                         </div>
//                       </div>
//                       <div className="ml-4">
//                         <div className="text-sm font-medium text-gray-900">{referral.username || 'Unknown'}</div>
//                         <div className="text-sm text-gray-500">ID: {referral.id}</div>
//                       </div>
//                     </div>
//                   </td>
//                   <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
//                     {referral.email || 'N/A'}
//                   </td>

//                   <td className="px-6 py-4 whitespace-nowrap">
//                     <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
//                       ${referral.status === 'active' ? 'bg-green-100 text-green-800' : 
//                         referral.status === 'inactive' ? 'bg-red-100 text-red-800' : 
//                         referral.status === 'pending' ? 'bg-yellow-100 text-yellow-800' : 
//                         'bg-gray-100 text-gray-800'}`}>
//                       {referral.status || 'Unknown'}
//                     </span>
//                   </td>
//                   <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
//                     {referral.created_at ? new Date(referral.created_at).toLocaleDateString() : 'N/A'}
//                   </td>
//                 </tr>
//               ))
//             )}
//           </tbody>
//         </table>
//       </div>
      
//       {/* Pagination */}
//       <div className="px-4 py-3 border-t border-gray-200 flex items-center justify-between">
//         <div className="flex-1 flex justify-between sm:hidden">
//           <button
//             onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
//             disabled={currentPage === 1}
//             className={`relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md ${
//               currentPage === 1 ? 'bg-gray-100 text-gray-400 cursor-not-allowed' : 'bg-white text-gray-700 hover:bg-gray-50'
//             }`}
//           >
//             Previous
//           </button>
//           <button
//             onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
//             disabled={currentPage === totalPages}
//             className={`ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md ${
//               currentPage === totalPages ? 'bg-gray-100 text-gray-400 cursor-not-allowed' : 'bg-white text-gray-700 hover:bg-gray-50'
//             }`}
//           >
//             Next
//           </button>
//         </div>
//         <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
//           <div>
//             <p className="text-sm text-gray-700">
//               Showing <span className="font-medium">{((currentPage - 1) * limit) + 1}</span> to{' '}
//               <span className="font-medium">{Math.min(currentPage * limit, totalReferrals)}</span> of{' '}
//               <span className="font-medium">{totalReferrals}</span> results
//             </p>
//           </div>
//           <div>
//             <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
//               <button
//                 onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
//                 disabled={currentPage === 1}
//                 className={`relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium ${
//                   currentPage === 1 ? 'text-gray-300 cursor-not-allowed' : 'text-gray-500 hover:bg-gray-50'
//                 }`}
//               >
//                 <span className="sr-only">Previous</span>
//                 <ChevronLeft className="h-5 w-5" aria-hidden="true" />
//               </button>
              
//               {/* First page */}
//               {startPage > 1 && (
//                 <>
//                   <button
//                     onClick={() => setCurrentPage(1)}
//                     className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
//                   >
//                     1
//                   </button>
//                   {startPage > 2 && (
//                     <span className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700">
//                       ...
//                     </span>
//                   )}
//                 </>
//               )}
              
//               {/* Page numbers */}
//               {pageNumbers.map((page) => (
//                 <button
//                   key={page}
//                   onClick={() => setCurrentPage(page)}
//                   className={`relative inline-flex items-center px-4 py-2 border text-sm font-medium ${
//                     page === currentPage
//                       ? 'z-10 bg-blue-50 border-blue-500 text-blue-600'
//                       : 'bg-white border-gray-300 text-gray-700 hover:bg-gray-50'
//                   }`}
//                 >
//                   {page}
//                 </button>
//               ))}
              
//               {/* Last page */}
//               {endPage < totalPages && (
//                 <>
//                   {endPage < totalPages - 1 && (
//                     <span className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700">
//                       ...
//                     </span>
//                   )}
//                   <button
//                     onClick={() => setCurrentPage(totalPages)}
//                     className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
//                   >
//                     {totalPages}
//                   </button>
//                 </>
//               )}
              
//               <button
//                 onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
//                 disabled={currentPage === totalPages || totalPages === 0}
//                 className={`relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium ${
//                   currentPage === totalPages || totalPages === 0 ? 'text-gray-300 cursor-not-allowed' : 'text-gray-500 hover:bg-gray-50'
//                 }`}
//               >
//                 <span className="sr-only">Next</span>
//                 <ChevronRight className="h-5 w-5" aria-hidden="true" />
//               </button>
//             </nav>
//           </div>
//         </div>
//       </div>
      
//       {/* Items per page selector */}
//       <div className="px-4 py-3 bg-gray-50 border-t border-gray-200 flex justify-end">
//         <div className="flex items-center">
//           <span className="text-sm text-gray-700 mr-2">Rows per page:</span>
//           <select
//             value={limit}
//             onChange={(e) => {
//               setLimit(Number(e.target.value));
//               setCurrentPage(1);
//             }}
//             className="border border-gray-300 rounded-md text-sm px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
//           >
//             {[5, 10, 25, 50, 100].map((size) => (
//               <option key={size} value={size}>
//                 {size}
//               </option>
//             ))}
//           </select>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DirectReferralsTable;





import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getDirectReferrals } from "../redux/referralSlice";
import { ChevronLeft, ChevronRight, Search, Filter, X, Users, Calendar, Mail, Award } from 'lucide-react';

const DirectReferralsTable = () => {
  const dispatch = useDispatch();
  const userId = useSelector((state) => state.auth.auth.id);
  const { directReferrals, totalReferrals, loading, error } = useSelector((state) => state.referralTree);
  
  // Local state for pagination and filters
  const [currentPage, setCurrentPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const [search, setSearch] = useState('');
  const [status, setStatus] = useState('');
  const [role, setRole] = useState('');
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  
  // Status options for filter
  const statusOptions = ['Active', 'Inactive', 'Pending', 'Verified'];
  const roleOptions = ['User', 'Agent', 'Admin', 'Partner'];
  
  useEffect(() => {
    fetchReferrals();
  }, [currentPage, limit, status, role]);
  
  // Fetch referrals when page, limit, or filters change
  const fetchReferrals = () => {
    dispatch(getDirectReferrals({
      user_id: userId,
      page: currentPage,
      limit,
      search,
      status,
    }));
  };
  
  // Handle search input
  const handleSearch = (e) => {
    e.preventDefault();
    fetchReferrals();
  };
  
  // Clear all filters
  const clearFilters = () => {
    setStatus('');
    setRole('');
    setSearch('');
    setCurrentPage(1);
  };
  
  // Calculate pagination details
  const totalPages = Math.ceil(totalReferrals / limit);
  const pageNumbers = [];
  const maxPagesToShow = 5;
  
  let startPage = Math.max(1, currentPage - Math.floor(maxPagesToShow / 2));
  let endPage = Math.min(totalPages, startPage + maxPagesToShow - 1);
  
  if (endPage - startPage + 1 < maxPagesToShow && startPage > 1) {
    startPage = Math.max(1, endPage - maxPagesToShow + 1);
  }
  
  for (let i = startPage; i <= endPage; i++) {
    pageNumbers.push(i);
  }

  // Get status badge style
  const getStatusBadgeStyle = (status) => {
    switch(status) {
      case 'active':
        return 'bg-green-100 text-green-800 border border-green-300';
      case 'inactive':
        return 'bg-red-100 text-red-800 border border-red-300';
      case 'pending':
        return 'bg-yellow-100 text-yellow-800 border border-yellow-300';
      default:
        return 'bg-gray-100 text-gray-800 border border-gray-300';
    }
  };
  
  return (
    <div className="bg-gradient-to-b from-orange-50 to-white rounded-xl shadow-lg overflow-hidden">
      {/* Header with stats */}
      <div className="bg-orange-500 text-white p-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
          <div className="mb-4 md:mb-0">
            <h2 className="text-2xl font-bold flex items-center">
              <Users className="mr-2" size={24} />
              Direct Referrals
            </h2>
            <p className="text-orange-100 mt-1">
              Manage and track your direct referral network
            </p>
          </div>
          
          <div className="flex flex-wrap gap-4">
            <div className="bg-white/20 rounded-lg p-3 flex items-center">
              <div className="bg-white/30 rounded-full p-2 mr-3">
                <Users size={18} className="text-white" />
              </div>
              <div>
                <p className="text-xs text-orange-100">Total Referrals</p>
                <p className="font-bold">{totalReferrals || 0}</p>
              </div>
            </div>
            
            <div className="bg-white/20 rounded-lg p-3 flex items-center">
              <div className="bg-white/30 rounded-full p-2 mr-3">
                <Award size={18} className="text-white" />
              </div>
              <div>
                <p className="text-xs text-orange-100">Current Page</p>
                <p className="font-bold">{currentPage} of {totalPages || 1}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Search and filter section */}
      <div className="p-5 border-b border-orange-100">
        <div className="flex flex-col md:flex-row gap-4 justify-between">
          <form onSubmit={handleSearch} className="relative flex-grow max-w-md">
            <input
              type="text"
              placeholder="Search by name, email or ID..."
              className="w-full px-4 py-3 pl-10 bg-orange-50 border border-orange-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 transition-all"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <Search className="absolute left-3 top-3 text-orange-400" size={18} />
            <button 
              type="submit"
              className="absolute right-3 top-2 px-2 py-1 text-xs bg-orange-500 text-white rounded hover:bg-orange-600 transition-colors"
            >
              Search
            </button>
          </form>
          
          <div className="flex gap-3">
            <button
              onClick={() => setIsFilterOpen(!isFilterOpen)}
              className={`px-4 py-2 rounded-lg flex items-center gap-2 transition-colors ${
                isFilterOpen ? 'bg-orange-500 text-white' : 'bg-orange-100 text-orange-700 hover:bg-orange-200'
              }`}
            >
              <Filter size={16} />
              <span>Filters</span>
              {(status || role) && (
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white text-xs text-orange-500 font-bold">
                  {(status ? 1 : 0) + (role ? 1 : 0)}
                </span>
              )}
            </button>
            
            <select
              value={limit}
              onChange={(e) => {
                setLimit(Number(e.target.value));
                setCurrentPage(1);
              }}
              className="px-3 py-2 border border-orange-200 bg-orange-50 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-400"
            >
              {[5, 10, 25, 50, 100].map((size) => (
                <option key={size} value={size}>
                  {size} rows
                </option>
              ))}
            </select>
          </div>
        </div>
        
        {/* Filter dropdown */}
        {isFilterOpen && (
          <div className="mt-4 p-4 bg-orange-50 rounded-lg border border-orange-100 animate-slideDown">
            <div className="flex flex-wrap gap-6 items-end">
              {/* Status filter */}
              <div className="flex flex-col gap-1">
                <label className="text-sm font-medium text-gray-700 flex items-center">
                  <Award size={14} className="mr-1 text-orange-500" />
                  Status
                </label>
                <select
                  value={status}
                  onChange={(e) => setStatus(e.target.value)}
                  className="px-3 py-2 border border-orange-200 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400 min-w-[150px]"
                >
                  <option value="">All Statuses</option>
                  {statusOptions.map((option) => (
                    <option key={option} value={option.toLowerCase()}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>
              
              {/* Role filter */}
              <div className="flex flex-col gap-1">
                <label className="text-sm font-medium text-gray-700 flex items-center">
                  <Users size={14} className="mr-1 text-orange-500" />
                  Role
                </label>
                <select
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  className="px-3 py-2 border border-orange-200 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400 min-w-[150px]"
                >
                  <option value="">All Roles</option>
                  {roleOptions.map((option) => (
                    <option key={option} value={option.toLowerCase()}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>
              
              {/* Clear filters button */}
              <button
                onClick={clearFilters}
                className="px-4 py-2 text-orange-600 hover:text-orange-800 flex items-center gap-1 hover:bg-orange-100 rounded-md transition-colors"
              >
                <X size={16} />
                <span>Clear filters</span>
              </button>
            </div>
          </div>
        )}
      </div>
      
      {/* Table */}
      <div className="overflow-x-auto">
        {loading ? (
          <div className="flex justify-center items-center p-12">
            <div className="flex flex-col items-center">
              <div className="h-12 w-12 border-t-4 border-orange-500 border-r-4 border-r-orange-300 border-b-4 border-b-orange-300 border-l-4 border-l-orange-300 rounded-full animate-spin"></div>
              <p className="mt-4 text-orange-500 font-medium">Loading referrals...</p>
            </div>
          </div>
        ) : error ? (
          <div className="flex justify-center items-center p-12">
            <div className="bg-red-50 p-6 rounded-lg border border-red-200 text-center">
              <p className="text-red-500 font-medium">Error: {error}</p>
              <button 
                onClick={fetchReferrals}
                className="mt-4 px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors"
              >
                Try Again
              </button>
            </div>
          </div>
        ) : directReferrals?.length === 0 ? (
          <div className="flex justify-center items-center p-12">
            <div className="bg-orange-50 p-6 rounded-lg border border-orange-200 text-center">
              <Users size={48} className="mx-auto mb-4 text-orange-300" />
              <p className="text-gray-500 font-medium">No referrals found</p>
              <p className="text-sm text-gray-400 mt-2">Try adjusting your filters or search criteria</p>
            </div>
          </div>
        ) : (
          <table className="w-full">
            <thead>
              <tr className="border-b border-orange-100">
                <th className="px-6 py-4 text-left text-sm font-semibold text-orange-500">#</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-orange-500">Name</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-orange-500">Email</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-orange-500">Status</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-orange-500">Joined Date</th>
              </tr>
            </thead>
            <tbody>
              {directReferrals?.map((referral, index) => (
                <tr 
                  key={referral.id} 
                  className="hover:bg-orange-50 transition-colors border-b border-orange-50"
                >
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="h-6 w-6 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center text-xs font-medium">
                      {index+1}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="h-12 w-12 flex-shrink-0">
                        <div className="h-12 w-12 rounded-full bg-gradient-to-r from-orange-500 to-orange-400 flex items-center justify-center text-white text-lg font-medium uppercase shadow-sm">
                          {referral.fullname?.charAt(0) || 'U'}
                        </div>
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">{referral.username || 'Unknown'}</div>
                        <div className="text-xs text-orange-500 mt-1 flex items-center">
                          <span className="bg-orange-100 px-2 py-0.5 rounded text-orange-700">ID: {referral.id}</span>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center text-sm text-gray-600">
                      <Mail size={14} className="mr-2 text-orange-400" />
                      {referral.email || 'N/A'}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-3 py-1 inline-flex text-xs leading-5 font-medium rounded-full ${getStatusBadgeStyle(referral.status)}`}>
                      {referral.status || 'Unknown'}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center text-sm text-gray-600">
                      <Calendar size={14} className="mr-2 text-orange-400" />
                      {referral.created_at ? new Date(referral.created_at).toLocaleDateString() : 'N/A'}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
      
      {/* Pagination */}
      {!loading && directReferrals?.length > 0 && (
        <div className="px-6 py-4 border-t border-orange-100 flex items-center justify-between bg-orange-50">
          <div className="flex-1 flex justify-between sm:hidden">
            <button
              onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
              disabled={currentPage === 1}
              className={`relative inline-flex items-center px-4 py-2 border text-sm font-medium rounded-md ${
                currentPage === 1 ? 'bg-gray-100 text-gray-400 cursor-not-allowed border-gray-300' : 'bg-white text-orange-500 hover:bg-orange-50 border-orange-300'
              }`}
            >
              Previous
            </button>
            <button
              onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
              disabled={currentPage === totalPages}
              className={`ml-3 relative inline-flex items-center px-4 py-2 border text-sm font-medium rounded-md ${
                currentPage === totalPages ? 'bg-gray-100 text-gray-400 cursor-not-allowed border-gray-300' : 'bg-white text-orange-500 hover:bg-orange-50 border-orange-300'
              }`}
            >
              Next
            </button>
          </div>
          <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
            <div>
              <p className="text-sm text-gray-700">
                Showing <span className="font-medium text-orange-500">{((currentPage - 1) * limit) + 1}</span> to{' '}
                <span className="font-medium text-orange-500">{Math.min(currentPage * limit, totalReferrals)}</span> of{' '}
                <span className="font-medium text-orange-500">{totalReferrals}</span> results
              </p>
            </div>
            <div>
              <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
                <button
                  onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                  disabled={currentPage === 1}
                  className={`relative inline-flex items-center px-2 py-2 rounded-l-md border bg-white text-sm font-medium ${
                    currentPage === 1 ? 'text-gray-300 cursor-not-allowed border-gray-300' : 'text-orange-500 hover:bg-orange-50 border-orange-300'
                  }`}
                >
                  <span className="sr-only">Previous</span>
                  <ChevronLeft className="h-5 w-5" aria-hidden="true" />
                </button>
                
                {/* First page */}
                {startPage > 1 && (
                  <>
                    <button
                      onClick={() => setCurrentPage(1)}
                      className="relative inline-flex items-center px-4 py-2 border border-orange-300 bg-white text-sm font-medium text-orange-500 hover:bg-orange-50"
                    >
                      1
                    </button>
                    {startPage > 2 && (
                      <span className="relative inline-flex items-center px-4 py-2 border border-orange-300 bg-white text-sm font-medium text-gray-700">
                        ...
                      </span>
                    )}
                  </>
                )}
                
                {/* Page numbers */}
                {pageNumbers.map((page) => (
                  <button
                    key={page}
                    onClick={() => setCurrentPage(page)}
                    className={`relative inline-flex items-center px-4 py-2 border text-sm font-medium ${
                      page === currentPage
                        ? 'z-10 bg-orange-500 border-orange-500 text-white'
                        : 'bg-white border-orange-300 text-orange-500 hover:bg-orange-50'
                    }`}
                  >
                    {page}
                  </button>
                ))}
                
                {/* Last page */}
                {endPage < totalPages && (
                  <>
                    {endPage < totalPages - 1 && (
                      <span className="relative inline-flex items-center px-4 py-2 border border-orange-300 bg-white text-sm font-medium text-gray-700">
                        ...
                      </span>
                    )}
                    <button
                      onClick={() => setCurrentPage(totalPages)}
                      className="relative inline-flex items-center px-4 py-2 border border-orange-300 bg-white text-sm font-medium text-orange-500 hover:bg-orange-50"
                    >
                      {totalPages}
                    </button>
                  </>
                )}
                
                <button
                  onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                  disabled={currentPage === totalPages || totalPages === 0}
                  className={`relative inline-flex items-center px-2 py-2 rounded-r-md border bg-white text-sm font-medium ${
                    currentPage === totalPages || totalPages === 0 ? 'text-gray-300 cursor-not-allowed border-gray-300' : 'text-orange-500 hover:bg-orange-50 border-orange-300'
                  }`}
                >
                  <span className="sr-only">Next</span>
                  <ChevronRight className="h-5 w-5" aria-hidden="true" />
                </button>
              </nav>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DirectReferralsTable;