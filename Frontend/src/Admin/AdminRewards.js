







import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { AiFillDelete, AiOutlineSearch, AiOutlinePlus, AiOutlineTrophy } from "react-icons/ai";
import { GrView } from "react-icons/gr";
import { FiAward, FiUsers, FiBarChart2 } from "react-icons/fi";
import { IoMdArrowBack, IoMdArrowForward } from "react-icons/io";
import SuccessAlert from "../BaseFile/comman/SuccessAlert";
import ErrorAlert from "../BaseFile/comman/ErrorAlert";
import { Confirmation } from "../BaseFile/comman/Confirmation";
import Loader from "../BaseFile/comman/Loader";
import { TbBinaryTree } from "react-icons/tb";
import { Dialog } from '@headlessui/react';
import {
  getAllRewards,
  clearErrors,
  clearMessage,
} from "../redux/userSlice";
import { useDispatch, useSelector } from "react-redux";

export default function AdminRewards() {
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);
  const { allrewards, loading, error, message } = useSelector(
    (state) => state.allusers
  );
  const [allUser, setAllUser] = useState(allrewards);
  const [searchQuery, setSearchQuery] = useState("");
  const [itemsPerPage] = useState(10);

  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState('');
  const [image, setImage] = useState(null);

  useEffect(() => {
    dispatch(getAllRewards());
    setAllUser(allrewards);

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
  }, [dispatch, error, message, clearErrors, clearMessage]);

  const handleSearch = (e) => {
    const searchTerm = e.target.value.toLowerCase();
    setAllUser(
      allrewards?.filter((p) => p.username?.toLowerCase().includes(searchTerm))
    );
    setSearchQuery(e.target.value);
  };

  const totalPages = Math.ceil((searchQuery ? allUser : allrewards)?.length / itemsPerPage);
  const currentUsers = (searchQuery ? allUser : allrewards)?.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePagination = (direction) => {
    if (direction === "next" && currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    } else if (direction === "prev" && currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('name', name);
    formData.append('image', image);
    // dispatch(submitFormData(formData));
  };

  // Calculate stats for dashboard cards
  const totalRewards = allrewards?.length || 0;
  const uniqueUsers = [...new Set(allrewards?.map(reward => reward.username))]?.length || 0;
  const topLevelCount = allrewards?.filter(reward => reward.reward_level === "Advanced" || reward.reward_level === "Expert")?.length || 0;

  // Get reward levels for donut chart
  const rewardLevels = {};
  allrewards?.forEach(reward => {
    if (reward.reward_level) {
      rewardLevels[reward.reward_level] = (rewardLevels[reward.reward_level] || 0) + 1;
    }
  });

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {message && <SuccessAlert message={message} />}
      {error && <ErrorAlert error={error} />}

      {/* Header Section */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-800 flex items-center">
          <AiOutlineTrophy className="mr-2 text-orange-500" size={24} />
          Rewards Management
        </h1>
        <p className="text-gray-600 mt-1">Track and manage user rewards and achievements</p>
      </div>

      {/* Dashboard Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
          <div className="flex items-center">
            <div className="p-3 bg-orange-100 rounded-full">
              <FiAward className="text-orange-500" size={24} />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-500">Total Rewards</p>
              <h2 className="text-2xl font-bold text-gray-800">{totalRewards}</h2>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
          <div className="flex items-center">
            <div className="p-3 bg-orange-100 rounded-full">
              <FiUsers className="text-orange-500" size={24} />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-500">Unique Achievers</p>
              <h2 className="text-2xl font-bold text-gray-800">{uniqueUsers}</h2>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
          <div className="flex items-center">
            <div className="p-3 bg-orange-100 rounded-full">
              <FiBarChart2 className="text-orange-500" size={24} />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-500">Top Level Rewards</p>
              <h2 className="text-2xl font-bold text-gray-800">{topLevelCount}</h2>
            </div>
          </div>
        </div>
      </div>

      {/* Graph Visualization - Reward Levels Distribution */}
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 mb-8">
        <h2 className="text-lg font-medium text-gray-700 mb-4">Reward Levels Distribution</h2>
        <div className="flex flex-wrap justify-around items-center h-48">
          {Object.entries(rewardLevels).map(([level, count], index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="relative mb-2">
                <div className="h-32 w-6 bg-gray-200 rounded-t-lg">
                  <div 
                    className="absolute bottom-0 w-6 bg-orange-500 rounded-t-lg"
                    style={{ 
                      height: `${(count / Math.max(...Object.values(rewardLevels))) * 120}px`,
                    }}
                  ></div>
                </div>
              </div>
              <span className="text-xs font-medium text-gray-600">{level}</span>
              <span className="text-sm font-bold text-gray-800">{count}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Search and Action Bar */}
      <div className="flex flex-col md:flex-row justify-between items-stretch md:items-center mb-6 gap-4">
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <AiOutlineSearch className="text-gray-400" size={20} />
          </div>
          <input
            id="search"
            name="search"
            value={searchQuery}
            onChange={(e) => handleSearch(e)}
            type="text"
            placeholder="Search by username..."
            className="pl-10 pr-4 py-2.5 w-full md:w-64 lg:w-96 text-gray-700 bg-white rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
          />
        </div>
        
        <button
          className="flex items-center justify-center px-4 py-2.5 text-white bg-orange-500 rounded-lg hover:bg-orange-600 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
          onClick={() => setIsOpen(true)}
        >
          <AiOutlinePlus className="mr-2" size={20} />
          Add Achiever
        </button>
      </div>

      {/* Table Section */}
      <div className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-100">
        {loading ? (
          <div className="flex justify-center items-center h-64">
            <Loader />
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Name
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Email
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Reward
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Reward Level
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {(searchQuery ? allUser : currentUsers)?.length > 0 ? (
                  (searchQuery ? allUser : currentUsers)?.map((item, index) => (
                    <tr key={index} className="hover:bg-gray-50 transition-colors duration-150">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium text-gray-900">{item?.username || "-"}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-500">{item?.email || "-"}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-500">{item?.reward || "-"}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                          item?.reward_level === "Advanced" || item?.reward_level === "Expert" 
                            ? "bg-orange-100 text-orange-800" 
                            : "bg-green-100 text-green-800"
                        }`}>
                          {item?.reward_level || "-"}
                        </span>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="4" className="px-6 py-4 text-center text-sm font-medium text-gray-500">
                      No data found
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-between items-center mt-6">
        <button
          onClick={() => handlePagination("prev")}
          disabled={currentPage === 1}
          className={`flex items-center px-4 py-2 text-sm font-medium rounded-md ${
            currentPage === 1
              ? "bg-gray-100 text-gray-400 cursor-not-allowed"
              : "bg-white text-gray-700 hover:bg-gray-50 border border-gray-300"
          }`}
        >
          <IoMdArrowBack className="mr-2" />
          Previous
        </button>
        
        <div className="text-sm text-gray-700">
          Page <span className="font-medium">{currentPage}</span> of{" "}
          <span className="font-medium">{totalPages || 1}</span>
        </div>
        
        <button
          onClick={() => handlePagination("next")}
          disabled={currentPage === totalPages || totalPages === 0}
          className={`flex items-center px-4 py-2 text-sm font-medium rounded-md ${
            currentPage === totalPages || totalPages === 0
              ? "bg-gray-100 text-gray-400 cursor-not-allowed"
              : "bg-white text-gray-700 hover:bg-gray-50 border border-gray-300"
          }`}
        >
          Next
          <IoMdArrowForward className="ml-2" />
        </button>
      </div>

      {/* Add Achiever Modal */}
      <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="relative z-50">
        <div className="fixed inset-0 bg-black bg-opacity-50" />
        <div className="flex fixed inset-0 justify-center items-center">
          <div className="p-6 w-full max-w-md bg-white rounded-lg shadow-xl">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold text-gray-800">Add New Achiever</h2>
              <button
                className="text-gray-400 hover:text-gray-500 focus:outline-none"
                onClick={() => setIsOpen(false)}
              >
                <span className="text-2xl">×</span>
              </button>
            </div>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter name"
                  className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-orange-500 focus:border-orange-500"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Image</label>
                <input
                  type="file"
                  onChange={(e) => setImage(e.target.files[0])}
                  className="block w-full px-3 py-2 text-sm text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500"
                  required
                />
              </div>
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full px-4 py-2 text-white bg-orange-500 rounded-md hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 transition-colors duration-200"
                >
                  Submit
                </button>
              </div>
            </form>
            {error && <p className="mt-3 text-sm text-red-600">{error}</p>}
          </div>
        </div>
      </Dialog>
    </div>
  );
}