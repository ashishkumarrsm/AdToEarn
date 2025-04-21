
// src/components/transactions/MyTransactions.jsx
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getUserTransactions, resetTransactionState } from "../redux/transactionSlice";

// Custom hook for transaction filters (unchanged)
const useTransactionFilters = (initialSource, dispatch, user_id) => {
  const [filters, setFilters] = useState({
    page: 1,
    limit: 10,
    transaction_type: "",
    status: "",
    search: "",
    source: initialSource || "",
  });
  const [activeTab, setActiveTab] = useState("all");

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({
      ...prev,
      [name]: value,
      page: 1,
    }));
  };

  const applyFilters = () => {
    dispatch(getUserTransactions({ user_id, ...filters }));
  };

  const resetFilters = () => {
    setFilters({
      page: 1,
      limit: 10,
      transaction_type: "",
      status: "",
      search: "",
      source: "",
    });
    setActiveTab("all");
    dispatch(getUserTransactions({ user_id, page: 1, limit: 10 }));
  };

  const handleTabClick = (type) => {
    setActiveTab(type);
    if (type === "all") {
      setFilters((prev) => ({ ...prev, transaction_type: "", page: 1 }));
    } else {
      setFilters((prev) => ({ ...prev, transaction_type: type, page: 1 }));
    }
  };

  const handlePageChange = (newPage) => {
    if (newPage > 0) {
      setFilters((prev) => ({ ...prev, page: newPage }));
    }
  };

  return {
    filters,
    activeTab,
    setActiveTab,
    handleFilterChange,
    applyFilters,
    resetFilters,
    handleTabClick,
    handlePageChange,
  };
};

// src/utils/transactionUtils.js (unchanged)
const formatCurrency = (value) => {
  if (!value) return "$0.00";
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2
  }).format(value);
};

const formatDate = (dateString) => {
  if (!dateString) return "";
  const date = new Date(dateString);
  if (isNaN(date.getTime())) return dateString;
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  }).format(date);
};

const getStatusBadgeClass = (status) => {
  switch (status) {
    case "completed":
      return "bg-green-200 text-green-900";
    case "pending":
      return "bg-yellow-200 text-yellow-900";
    case "failed":
      return "bg-red-200 text-red-900";
    case "cancelled":
      return "bg-gray-200 text-gray-900";
    default:
      return "bg-gray-200 text-gray-900";
  }
};

const getTransactionTypeBadgeClass = (type) => {
  switch (type) {
    case "deposit":
      return "bg-green-200 text-green-900";
    case "withdrawal":
      return "bg-red-200 text-red-900";
    case "transfer":
      return "bg-blue-200 text-blue-900";
    case "refund":
      return "bg-yellow-200 text-yellow-900";
    default:
      return "bg-gray-200 text-gray-900";
  }
};

// StatsSummary Component
const StatsSummary = ({ stats }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
      {[
        { title: "Transactions", value: stats.transactions, icon: "M12 4v16m8-8H4" },
        { title: "Deposited", value: formatCurrency(stats.deposited), icon: "M12 6v6m0 0v6m0-6h6m-6 0H6" },
        { title: "Withdrawn", value: formatCurrency(stats.withdrawn), icon: "M18 12H6" },
        { title: "Balance", value: formatCurrency(stats.total), icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" },
      ].map((item, index) => (
        <div
          key={index}
          className="bg-white p-4 rounded-lg shadow-md border-l-4 border-orange-500 hover:shadow-lg transition-shadow"
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm font-medium">{item.title}</p>
              <h4 className="text-lg font-bold text-orange-500">{item.value}</h4>
            </div>
            <div className="p-2 bg-orange-100 rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-orange-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
              </svg>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

// FilterTabs Component
const FilterTabs = ({ activeTab, handleTabClick, transactionTypeOptions }) => {
  return (
    <div className="mb-6 flex flex-wrap gap-2">
      <button
        onClick={() => handleTabClick("all")}
        className={`px-4 py-2 rounded-md font-medium transition-all ${
          activeTab === "all"
            ? "bg-orange-500 text-white shadow-md"
            : "bg-gray-100 text-gray-600 hover:bg-orange-100 hover:text-orange-500"
        }`}
      >
        All
      </button>
      {transactionTypeOptions.map((type) => (
        <button
          key={type}
          onClick={() => handleTabClick(type)}
          className={`px-4 py-2 rounded-md font-medium transition-all capitalize ${
            activeTab === type
              ? "bg-orange-500 text-white shadow-md"
              : "bg-gray-100 text-gray-600 hover:bg-orange-100 hover:text-orange-500"
          }`}
        >
          {type}
        </button>
      ))}
    </div>
  );
};

// TransactionAlerts Component
const TransactionAlerts = ({ success, error, message, resetState }) => {
  if (!success && !error) return null;

  return (
    <div className="mb-6">
      {success && (
        <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-md flex justify-between items-center">
          <div className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-2"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            <span>{message}</span>
          </div>
          <button onClick={resetState} className="text-green-700 hover:text-green-900">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      )}
      {error && (
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-md flex justify-between items-center">
          <div className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-2"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                clipRule="evenodd"
              />
            </svg>
            <span>{error}</span>
          </div>
          <button onClick={resetState} className="text-red-700 hover:text-red-900">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      )}
    </div>
  );
};

// TransactionHeader Component
const TransactionHeader = ({ searchValue, handleFilterChange, applyFilters }) => {
  return (
    <div className="flex flex-col sm:flex-row justify-between items-center mb-8">
      <div className="mb-4 sm:mb-0">
        <h1 className="text-3xl font-bold text-orange-500">Your Transactions</h1>
        <p className="text-gray-500 mt-1">Manage your financial activity</p>
      </div>
      <div className="relative w-full sm:w-64">
        <input
          type="text"
          name="search"
          value={searchValue}
          onChange={handleFilterChange}
          placeholder="Search..."
          className="w-full py-2 pl-4 pr-10 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
        />
        <button onClick={applyFilters} className="absolute top-2 right-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-orange-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

// AdvancedFilters Component
const AdvancedFilters = ({
  filters,
  handleFilterChange,
  resetFilters,
  applyFilters,
  sourceOptions,
  statusOptions,
}) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md mb-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold text-orange-500">Filters</h2>
        <button
          onClick={resetFilters}
          className="text-orange-500 hover:text-orange-600 flex items-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 mr-1"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z"
              clipRule="evenodd"
            />
          </svg>
          Reset
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Source</label>
          <select
            name="source"
            value={filters.source}
            onChange={handleFilterChange}
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
          >
            <option value="">All Sources</option>
            {sourceOptions.map((source) => (
              <option key={source} value={source}>
                {source.charAt(0).toUpperCase() + source.slice(1)}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
          <select
            name="status"
            value={filters.status}
            onChange={handleFilterChange}
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
          >
            <option value="">All Statuses</option>
            {statusOptions.map((status) => (
              <option key={status} value={status}>
                {status.charAt(0).toUpperCase() + status.slice(1)}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Per Page</label>
          <select
            name="limit"
            value={filters.limit}
            onChange={handleFilterChange}
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
          >
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="20">20</option>
            <option value="50">50</option>
          </select>
        </div>
      </div>
      <div className="mt-4">
        <button
          onClick={applyFilters}
          className="bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600"
        >
          Apply
        </button>
      </div>
    </div>
  );
};

// TransactionTable Component
const TransactionTable = ({ loading, transactions, currentPage, limit }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      {loading ? (
        <div className="flex justify-center items-center h-48">
          <div className="flex flex-col items-center">
            <div className="w-8 h-8 border-4 border-orange-500 border-t-transparent rounded-full animate-spin"></div>
            <p className="text-gray-500 mt-2">Loading...</p>
          </div>
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-orange-50 text-orange-500">
                <th className="p-3 text-left font-semibold">ID</th>
                <th className="p-3 text-left font-semibold">Amount</th>
                <th className="p-3 text-left font-semibold">Type</th>
                <th className="p-3 text-left font-semibold">Source</th>
                <th className="p-3 text-left font-semibold">Status</th>
                <th className="p-3 text-left font-semibold">Date</th>
              </tr>
            </thead>
            <tbody>
              {transactions && transactions.length === 0 ? (
                <tr>
                  <td colSpan="6" className="py-12 text-center text-gray-500">
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
                      <p>No transactions found</p>
                    </div>
                  </td>
                </tr>
              ) : (
                transactions &&
                transactions.map((transaction, index) => (
                  <tr
                    key={transaction.transaction_id || index}
                    className="border-t border-gray-200 hover:bg-orange-50"
                  >
                    <td className="p-3 text-gray-700">
                      {(currentPage - 1) * limit + index + 1}
                    </td>
                    <td className="p-3">
                      <span
                        className={`font-medium ${
                          transaction.transaction_type === "deposit"
                            ? "text-green-600"
                            : transaction.transaction_type === "withdrawal"
                            ? "text-red-600"
                            : "text-orange-500"
                        }`}
                      >
                        {formatCurrency(transaction.amount)}
                      </span>
                    </td>
                    <td className="p-3">
                      <span
                        className={`px-2 py-1 rounded text-xs ${getTransactionTypeBadgeClass(
                          transaction.transaction_type
                        )}`}
                      >
                        {transaction.transaction_type.charAt(0).toUpperCase() +
                          transaction.transaction_type.slice(1)}
                      </span>
                    </td>
                    <td className="p-3 text-gray-700 capitalize">{transaction.source}</td>
                    <td className="p-3">
                      <span
                        className={`px-2 py-1 rounded text-xs ${getStatusBadgeClass(
                          transaction.status
                        )}`}
                      >
                        {transaction.status.charAt(0).toUpperCase() + transaction.status.slice(1)}
                      </span>
                    </td>
                    <td className="p-3 text-gray-700">{formatDate(transaction.created_at)}</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

// TransactionPagination Component
const TransactionPagination = ({
  loading,
  transactions,
  currentPage,
  totalPages,
  limit,
  handlePageChange,
}) => {
  if (loading || !transactions || transactions.length === 0 || totalPages <= 0) {
    return null;
  }

  return (
    <div className="flex flex-col sm:flex-row justify-between items-center mt-6 gap-4">
      <div className="text-gray-500">
        Showing {(currentPage - 1) * limit + 1} to{" "}
        {Math.min(currentPage * limit, (currentPage - 1) * limit + transactions.length)} of{" "}
        {totalPages * limit}
      </div>
      <div className="flex items-center gap-2">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className={`px-3 py-1 rounded-md ${
            currentPage === 1
              ? "bg-gray-200 text-gray-400 cursor-not-allowed"
              : "bg-orange-500 text-white hover:bg-orange-600"
          }`}
        >
          Prev
        </button>
        {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
          let pageNumber;
          if (totalPages <= 5) {
            pageNumber = i + 1;
          } else if (currentPage <= 3) {
            pageNumber = i + 1;
          } else if (currentPage >= totalPages - 2) {
            pageNumber = totalPages - 4 + i;
          } else {
            pageNumber = currentPage - 2 + i;
          }
          return (
            <button
              key={i}
              onClick={() => handlePageChange(pageNumber)}
              className={`px-3 py-1 rounded-md ${
                currentPage === pageNumber
                  ? "bg-orange-500 text-white"
                  : "bg-gray-100 text-gray-600 hover:bg-orange-100"
              }`}
            >
              {pageNumber}
            </button>
          );
        })}
        {totalPages > 5 && currentPage < totalPages - 2 && (
          <>
            <span className="px-2 text-gray-500">...</span>
            <button
              onClick={() => handlePageChange(totalPages)}
              className="px-3 py-1 rounded-md bg-gray-100 text-gray-600 hover:bg-orange-100"
            >
              {totalPages}
            </button>
          </>
        )}
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className={`px-3 py-1 rounded-md ${
            currentPage === totalPages
              ? "bg-gray-200 text-gray-400 cursor-not-allowed"
              : "bg-orange-500 text-white hover:bg-orange-600"
          }`}
        >
          Next
        </button>
      </div>
    </div>
  );
};

// Main MyTransactions Component
const MyTransactions = () => {
  const { auth } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const user_id = auth.id;
  const { source } = useParams();
  const {
    userTransactions,
    totalPages,
    currentPage,
    loading,
    error,
    success,
    message,
  } = useSelector((state) => state.transaction);

  const {
    filters,
    activeTab,
    setActiveTab,
    handleFilterChange,
    applyFilters,
    resetFilters,
    handleTabClick,
    handlePageChange,
  } = useTransactionFilters(source, dispatch, user_id);

  useEffect(() => {
    if (user_id) {
      dispatch(getUserTransactions({ user_id, ...filters }));
    }
  }, [dispatch, filters.page, filters.limit]);

  useEffect(() => {
    if (user_id) {
      if (source) {
        const resetFilterState = {
          ...filters,
          page: 1,
          search: '',
          status: '',
          transaction_type: ''
        };
        resetFilters();
        dispatch(getUserTransactions({ 
          user_id, 
          ...resetFilterState,
          source
        }));
      }
    }
  }, [source, user_id]);

  useEffect(() => {
    if (success || error) {
      const timer = setTimeout(() => {
        dispatch(resetTransactionState());
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [success, error, dispatch]);

  const calculateStatistics = () => {
    if (!userTransactions || !userTransactions.length) {
      return {
        total: 0,
        deposited: 0,
        withdrawn: 0,
        transactions: 0
      };
    }

    const stats = userTransactions.reduce((acc, transaction) => {
      const amount = parseFloat(transaction.amount) || 0;
      acc.total += amount;
      if (transaction.transaction_type === 'deposit') {
        acc.deposited += amount;
      } else if (transaction.transaction_type === 'withdrawal') {
        acc.withdrawn += amount;
      }
      return acc;
    }, { total: 0, deposited: 0, withdrawn: 0, transactions: userTransactions.length });

    return stats;
  };

  const stats = calculateStatistics();

  const transactionTypeOptions = ["deposit", "withdrawal", "transfer", "refund"];
  const sourceOptions = ["bank", "card", "wallet", "crypto"];
  const statusOptions = ["pending", "completed", "failed", "cancelled"];

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <TransactionHeader
        searchValue={filters.search}
        handleFilterChange={handleFilterChange}
        applyFilters={applyFilters}
      />
      <TransactionAlerts
        success={success}
        error={error}
        message={message}
        resetState={() => dispatch(resetTransactionState())}
      />
      <StatsSummary stats={stats} />
      <FilterTabs
        activeTab={activeTab}
        handleTabClick={handleTabClick}
        transactionTypeOptions={transactionTypeOptions}
      />
      <AdvancedFilters
        filters={filters}
        handleFilterChange={handleFilterChange}
        resetFilters={resetFilters}
        applyFilters={applyFilters}
        sourceOptions={sourceOptions}
        statusOptions={statusOptions}
      />
      <TransactionTable
        loading={loading}
        transactions={userTransactions}
        currentPage={currentPage}
        limit={filters.limit}
      />
      <TransactionPagination
        loading={loading}
        transactions={userTransactions}
        currentPage={currentPage}
        totalPages={totalPages}
        limit={filters.limit}
        handlePageChange={handlePageChange}
      />
    </div>
  );
};

export default MyTransactions;
