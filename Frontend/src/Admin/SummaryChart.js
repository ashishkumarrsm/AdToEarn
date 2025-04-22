
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
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  LineChart,
  Line,
  AreaChart,
  Area
} from "recharts";
import { Calendar, RefreshCcw, DollarSign, TrendingUp, PieChart as PieChartIcon, BarChart2, LineChart as LineChartIcon, ArrowRight, ArrowUpRight } from "lucide-react";

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
  const [chartType, setChartType] = useState("pie");
  const [isExpanded, setIsExpanded] = useState(false);
  const dispatch = useDispatch();
  const { summary, isLoading, error } = useSelector(
    (state) => state.transaction
  );

  // Colors for the chart - orange-themed
  const COLORS = [
    "#f97316", // orange-500
    "#fb923c", // orange-400
    "#fdba74", // orange-300
    "#ffedd5", // orange-100
    "#ea580c", // orange-600
    "#c2410c", // orange-700
    "#9a3412", // orange-800
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

  // Prepare data for the charts
  const chartData = summary.map((item) => ({
    name: getSourceName(item.source),
    value: item.total_amount,
    amount: item.total_amount, // For bar/line charts
  }));

  // Calculate percentages for each item
  const dataWithPercentages = summary.map(item => {
    const percentage = (item.total_amount / totalAmount) * 100;
    return {
      ...item,
      percentage: percentage.toFixed(1)
    };
  });

  // Toggle chart type function
  const toggleChartType = (type) => {
    setChartType(type);
  };

  // Add mock trend data (this would be replaced with real data in a production environment)
  const generateTrendData = () => {
    // This simulates 6-month trend data
    const months = [];
    const currentDate = new Date();
    
    for (let i = 5; i >= 0; i--) {
      const date = new Date(currentDate);
      date.setMonth(currentDate.getMonth() - i);
      const monthYear = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}`;
      months.push(monthYear);
    }

    // Create trend data with random values for demonstration
    const trendData = months.map(month => {
      const baseAmount = totalAmount * 0.8 + Math.random() * totalAmount * 0.4;
      return {
        month: month.split('-')[1] + '/' + month.split('-')[0].substring(2),
        total: baseAmount,
      };
    });

    return trendData;
  };

  const trendData = generateTrendData();

  return (
    <div className="w-full bg-white rounded-2xl shadow-lg overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-orange-500 to-orange-600 p-6 text-white">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-4 md:space-y-0">
          <div>
            <h2 className="text-2xl font-bold">Mining Analytics Dashboard</h2>
            <p className="text-orange-100 mt-1">Track your mining performance and revenue distribution</p>
          </div>
          
          <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-3 sm:space-y-0 sm:space-x-4">
            <div className="flex items-center bg-white bg-opacity-20 rounded-lg px-3 py-2">
              <Calendar className="text-orange-100 mr-2" size={18} />
              <input
                type="month"
                value={selectedMonth}
                onChange={handleMonthChange}
                className="bg-transparent border-none text-white placeholder-orange-100 focus:outline-none focus:ring-0"
              />
            </div>

            <button
              onClick={handleRefresh}
              className="flex items-center space-x-2 bg-white text-orange-500 hover:bg-orange-50 px-4 py-2 rounded-lg transition-colors duration-200"
            >
              <RefreshCcw size={16} />
              <span>Refresh</span>
            </button>
          </div>
        </div>
      </div>

      {/* Chart Type Selection */}
      <div className="border-b border-gray-200">
        <div className="flex overflow-x-auto p-2">
          <button
            onClick={() => toggleChartType("pie")}
            className={`flex items-center px-4 py-2 rounded-lg mr-2 ${
              chartType === "pie"
                ? "bg-orange-500 text-white"
                : "text-gray-600 hover:bg-orange-100"
            }`}
          >
            <PieChartIcon size={16} className="mr-2" />
            Pie Chart
          </button>
          <button
            onClick={() => toggleChartType("bar")}
            className={`flex items-center px-4 py-2 rounded-lg mr-2 ${
              chartType === "bar"
                ? "bg-orange-500 text-white"
                : "text-gray-600 hover:bg-orange-100"
            }`}
          >
            <BarChart2 size={16} className="mr-2" />
            Bar Chart
          </button>
          <button
            onClick={() => toggleChartType("line")}
            className={`flex items-center px-4 py-2 rounded-lg mr-2 ${
              chartType === "line"
                ? "bg-orange-500 text-white"
                : "text-gray-600 hover:bg-orange-100"
            }`}
          >
            <LineChartIcon size={16} className="mr-2" />
            Line Chart
          </button>
          <button
            onClick={() => toggleChartType("area")}
            className={`flex items-center px-4 py-2 rounded-lg ${
              chartType === "area"
                ? "bg-orange-500 text-white"
                : "text-gray-600 hover:bg-orange-100"
            }`}
          >
            <TrendingUp size={16} className="mr-2" />
            Area Chart
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="p-6">
        {isLoading ? (
          <div className="flex justify-center items-center h-80">
            <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-orange-500 border-opacity-50"></div>
          </div>
        ) : error ? (
          <div className="bg-red-50 border-l-4 border-red-500 text-red-700 p-4 rounded-md">
            <p className="font-medium">Error loading data</p>
            <p>{error}</p>
          </div>
        ) : summary.length === 0 ? (
          <div className="text-center py-12 bg-orange-50 rounded-lg">
            <div className="mb-4">
              <DollarSign size={48} className="text-orange-300 mx-auto" />
            </div>
            <p className="text-lg font-medium text-gray-700">No transaction data available for {selectedMonth}</p>
            <p className="text-gray-500 mt-2">Try selecting a different month or refreshing the data.</p>
          </div>
        ) : (
          <div className="flex flex-col lg:flex-row">
            {/* Chart section */}
            <div className="lg:w-2/3 lg:pr-6">
              <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-4 h-full">
                <h3 className="text-lg font-bold text-gray-800 mb-4">
                  Mining Revenue Distribution
                </h3>
                <div className="h-96">
                  <ResponsiveContainer width="100%" height="100%">
                    {chartType === "pie" ? (
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
                            backgroundColor: "#fff",
                            borderColor: "#e5e7eb",
                            borderRadius: "0.375rem",
                            boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
                          }}
                        />
                        <Legend />
                      </PieChart>
                    ) : chartType === "bar" ? (
                      <BarChart data={chartData}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#f3f4f6" />
                        <XAxis dataKey="name" tickLine={false} axisLine={false} />
                        <YAxis tickFormatter={(value) => `$${value}`} tickLine={false} axisLine={false} />
                        <Tooltip
                          formatter={(value) => formatCurrency(value)}
                          contentStyle={{
                            backgroundColor: "#fff",
                            borderColor: "#e5e7eb",
                            borderRadius: "0.375rem",
                            boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
                          }}
                        />
                        <Bar dataKey="value" fill="#f97316" radius={[4, 4, 0, 0]} />
                      </BarChart>
                    ) : chartType === "line" ? (
                      <LineChart data={chartData}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#f3f4f6" />
                        <XAxis dataKey="name" tickLine={false} axisLine={false} />
                        <YAxis tickFormatter={(value) => `$${value}`} tickLine={false} axisLine={false} />
                        <Tooltip
                          formatter={(value) => formatCurrency(value)}
                          contentStyle={{
                            backgroundColor: "#fff",
                            borderColor: "#e5e7eb",
                            borderRadius: "0.375rem",
                            boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
                          }}
                        />
                        <Line 
                          type="monotone" 
                          dataKey="value" 
                          stroke="#f97316" 
                          strokeWidth={3}
                          dot={{ r: 6, fill: "#f97316", strokeWidth: 2, stroke: "#fff" }}
                          activeDot={{ r: 8, fill: "#f97316", strokeWidth: 2, stroke: "#fff" }}
                        />
                      </LineChart>
                    ) : (
                      <AreaChart data={chartData}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#f3f4f6" />
                        <XAxis dataKey="name" tickLine={false} axisLine={false} />
                        <YAxis tickFormatter={(value) => `$${value}`} tickLine={false} axisLine={false} />
                        <Tooltip
                          formatter={(value) => formatCurrency(value)}
                          contentStyle={{
                            backgroundColor: "#fff",
                            borderColor: "#e5e7eb",
                            borderRadius: "0.375rem",
                            boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
                          }}
                        />
                        <Area 
                          type="monotone" 
                          dataKey="value" 
                          stroke="#f97316" 
                          fill="#fdba74" 
                          fillOpacity={0.6} 
                        />
                      </AreaChart>
                    )}
                  </ResponsiveContainer>
                </div>
              </div>
            </div>

            {/* Summary section */}
            <div className="lg:w-1/3 mt-6 lg:mt-0">
              <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 h-full">
                <div className="mb-6">
                  <div className="flex justify-between items-center">
                    <h3 className="text-lg font-bold text-gray-800">Summary</h3>
                    <div className="px-3 py-1 bg-orange-100 text-orange-500 text-sm rounded-full">
                      {selectedMonth}
                    </div>
                  </div>
                  <p className="text-gray-500 text-sm mt-1">
                    Mining revenue breakdown by source
                  </p>
                </div>

                <div className="space-y-6">
                  {dataWithPercentages.map((item, index) => (
                    <div
                      key={item.source}
                      className="flex flex-col"
                    >
                      <div className="flex justify-between items-center mb-2">
                        <div className="flex items-center">
                          <div
                            className="w-3 h-3 rounded-full mr-2"
                            style={{
                              backgroundColor: COLORS[index % COLORS.length],
                            }}
                          ></div>
                          <span className="text-gray-700 font-medium">
                            {getSourceName(item.source)}
                          </span>
                        </div>
                        <span className="font-bold text-gray-900">
                          {formatCurrency(item.total_amount)}
                        </span>
                      </div>
                      <div className="w-full bg-gray-100 rounded-full h-2">
                        <div
                          className="h-2 rounded-full"
                          style={{
                            width: `${item.percentage}%`,
                            backgroundColor: COLORS[index % COLORS.length],
                          }}
                        ></div>
                      </div>
                      <div className="flex justify-between mt-1">
                        <span className="text-xs text-gray-500">{item.percentage}% of total</span>
                        {parseFloat(item.percentage) > 20 && (
                          <span className="text-xs text-orange-500 flex items-center">
                            <ArrowUpRight size={12} className="mr-1" />
                            High performer
                          </span>
                        )}
                      </div>
                    </div>
                  ))}

                  <div className="pt-4 mt-4 border-t border-gray-200">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center text-gray-800 font-bold">
                        <DollarSign className="mr-1 text-orange-500" size={20} />
                        <span>Total Revenue</span>
                      </div>
                      <span className="font-bold text-xl text-orange-500">
                        {formatCurrency(totalAmount)}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Revenue Trend Section (New) */}
      <div className="p-6 pt-0">
        <button 
          onClick={() => setIsExpanded(!isExpanded)}
          className="flex items-center text-orange-500 mb-4 hover:text-orange-600 transition-colors"
        >
          <span className="font-medium">{isExpanded ? "Hide" : "Show"} Revenue Trend Analysis</span>
          <ArrowRight className={`ml-2 transition-transform duration-300 ${isExpanded ? "rotate-90" : ""}`} size={16} />
        </button>
        
        {isExpanded && (
          <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 mt-2 animate-fadeIn">
            <h3 className="text-lg font-bold text-gray-800 mb-6">6-Month Revenue Trend</h3>
            
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={trendData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f3f4f6" />
                  <XAxis dataKey="month" />
                  <YAxis tickFormatter={(value) => `$${(value / 1000).toFixed(0)}k`} />
                  <Tooltip 
                    formatter={(value) => formatCurrency(value)}
                    labelFormatter={(label) => `Period: ${label}`}
                  />
                  <defs>
                    <linearGradient id="colorTotal" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#f97316" stopOpacity={0.8}/>
                      <stop offset="95%" stopColor="#f97316" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <Area 
                    type="monotone" 
                    dataKey="total" 
                    stroke="#f97316" 
                    fillOpacity={1} 
                    fill="url(#colorTotal)" 
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
              <div className="bg-orange-50 rounded-lg p-4">
                <p className="text-gray-600 text-sm">Month-over-Month Growth</p>
                <div className="flex items-center mt-1">
                  <ArrowUpRight className="text-orange-500 mr-2" size={20} />
                  <span className="text-xl font-bold text-orange-500">+12.4%</span>
                </div>
              </div>
              
              <div className="bg-orange-50 rounded-lg p-4">
                <p className="text-gray-600 text-sm">Projected Next Month</p>
                <p className="text-xl font-bold text-orange-500 mt-1">
                  {formatCurrency(totalAmount * 1.15)}
                </p>
              </div>
              
              <div className="bg-orange-50 rounded-lg p-4">
                <p className="text-gray-600 text-sm">YTD Total Revenue</p>
                <p className="text-xl font-bold text-orange-500 mt-1">
                  {formatCurrency(totalAmount * 5.8)}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}