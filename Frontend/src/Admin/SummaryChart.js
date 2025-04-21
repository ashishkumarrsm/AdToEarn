import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTransactionSummary } from "../redux/transactionSlice";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
  Legend,
} from "recharts";
import { Calendar, RefreshCcw, DollarSign } from "lucide-react";

// Helper function to get current month in YYYY-MM format
const getCurrentMonth = () => {
  const date = new Date();
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  return `${year}-${month}`;
};

// Helper function to format money
const formatCurrency = (amount) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
  }).format(amount);
};

export default function SummaryCharts() {
  const [selectedMonth, setSelectedMonth] = useState(getCurrentMonth());
  const dispatch = useDispatch();
  const { summary, isLoading, error } = useSelector(
    (state) => state.transaction
  );

  // Colors for the chart
  const COLORS = [
    "#00D0FF",
    "#FF6384",
    "#FFCE56",
    "#4BC0C0",
    "#36A2EB",
    "#9966FF",
    "#FF9F40",
  ];

  useEffect(() => {
    dispatch(fetchTransactionSummary(selectedMonth));
  }, [dispatch, selectedMonth]);

  const totalAmount = summary.reduce((acc, item) => acc + item.total_amount, 0);

  // Function to handle month change
  const handleMonthChange = (e) => {
    setSelectedMonth(e.target.value);
  };

  // Function to refresh data
  const handleRefresh = () => {
    dispatch(fetchTransactionSummary(selectedMonth));
  };

  // Function to get readable source name
  const getSourceName = (source) => {
    return source.split("_")[0] + " mining";
  };

  // Prepare data for the pie chart
  const chartData = summary.map((item) => ({
    name: getSourceName(item.source),
    value: item.total_amount,
  }));

  return (
    <div className="mt-5 max-w-full mx-auto ">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-100">Mining Summary</h2>

        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <Calendar className="text-gray-100" size={18} />
            <input
              type="month"
              value={selectedMonth}
              onChange={handleMonthChange}
              className="border rounded-md px-3 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <button
            onClick={handleRefresh}
            className="flex items-center space-x-1 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md transition"
          >
            <RefreshCcw size={16} />
            <span>Refresh</span>
          </button>
        </div>
      </div>
     
        <div className="bg-black text-white p-4 rounded-lg">
          <div className="flex flex-col md:flex-row">
            {/* Chart section - 60% */}
            <div className="md:w-3/5 p-4">
              {isLoading ? (
                <div className="flex justify-center items-center h-64">
                  <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
                </div>
              ) : error ? (
                <div className="bg-red-900 border border-red-700 text-red-200 px-4 py-3 rounded-md">
                  <p>{error}</p>
                </div>
              ) : summary.length === 0 ? (
                <div className="text-center py-12 text-gray-400">
                  <p>No transaction data available for the selected month.</p>
                </div>
              ) : (
                <div className="bg-gray-900 rounded-lg p-4 h-full">
                  <h3 className="text-xl font-bold text-white mb-4 text-center">
                    Expense Breakdown
                  </h3>
                  <div className="h-96">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={chartData}
                          cx="50%"
                          cy="50%"
                          labelLine={false}
                          label={({ name, percent }) =>
                            `${name}: ${(percent * 100).toFixed(0)}%`
                          }
                          outerRadius={120}
                          fill="#8884d8"
                          dataKey="value"
                        >
                          {chartData.map((entry, index) => (
                            <Cell
                              key={`cell-${index}`}
                              fill={COLORS[index % COLORS.length]}
                            />
                          ))}
                        </Pie>
                        <Tooltip
                          formatter={(value) => formatCurrency(value)}
                          contentStyle={{
                            backgroundColor: "#333",
                            borderColor: "#555",
                            color: "#fff",
                          }}
                        />
                        <Legend
                          verticalAlign="bottom"
                          height={36}
                          formatter={(value) => (
                            <span className="text-white">{value}</span>
                          )}
                        />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                </div>
              )}
            </div>

            {/* Summary section - 40% */}
            <div className="md:w-2/5 p-4">
              <div className="bg-gray-900 p-6 rounded-lg h-full">
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-white mb-2">Summary</h3>
                  <p className="text-gray-400 text-sm">
                    For period: {selectedMonth}
                  </p>
                </div>

                <div className="space-y-4">
                  {summary.map((item, index) => (
                    <div
                      key={item.source}
                      className="flex justify-between items-center"
                    >
                      <div className="flex items-center">
                        <div
                          className="w-3 h-3 rounded-full mr-2"
                          style={{
                            backgroundColor: COLORS[index % COLORS.length],
                          }}
                        ></div>
                        <span className="text-gray-300">
                          {getSourceName(item.source)}
                        </span>
                      </div>
                      <span className="font-medium text-white">
                        {formatCurrency(item.total_amount)}
                      </span>
                    </div>
                  ))}

                  <div className="pt-4 mt-4 border-t border-gray-700">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center font-bold text-white">
                        <DollarSign className="mr-1" size={18} />
                        <span>Total</span>
                      </div>
                      <span className="font-bold text-lg text-white">
                        {formatCurrency(totalAmount)}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
     
    </div>
  );
}
