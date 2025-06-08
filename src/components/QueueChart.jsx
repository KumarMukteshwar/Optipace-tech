import React from "react";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";

// Custom Colors
const COLORS = [
  "#EE7777",  // Processing Queue
  "#4BAAB4",  // Exception Queue
  "#000000",  // Duplicate Queue
  "#F5B461",  // Missing PO Queue
  "#F9C480",  // Receipt Hold Queue
  "#EA5455",  // Supplier Portal Queue
];

const QueueChart = ({ data }) => {
  const chartData = data.labels.map((label, index) => ({
    name: label,
    value: data.values[index],
  }));

  return (
    <div className="w-full max-w-2xl bg-white p-3 sm:p-4 rounded-lg shadow-sm border border-gray-200">

      {/* Title */}
      <h2 className="text-sm sm:text-md md:text-lg text-black font-semibold mb-3 sm:mb-4 text-center sm:text-left">
        {data.title}
      </h2>

      {/* Main content container with flex items-center justify-between */}
      <div className="flex items-center justify-between h-full min-h-[200px]">
        
        {/* Chart container */}
        <div className="relative w-60 h-60 sm:w-52 sm:h-52">

                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={chartData}
                          dataKey="value"
                          nameKey="name"
                          cx="50%"
                          cy="50%"
                          outerRadius="80%"
                          innerRadius="50%"
                          startAngle={90}
                          endAngle={450}
                          label={false}
                          stroke="none"
                        >
                          {chartData.map((_, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index]} />
                          ))}
                        </Pie>
                      </PieChart>
                    </ResponsiveContainer>
        
                    {/* Percentage Labels positioned to match the image */}
 
                    {/* Role (Orange - 30%) - Bottom */}
                    <div className="absolute bottom-[20%] left-[2%] bg-white text-sm font-bold px-2 py-3 rounded-full shadow-md border my-8">
                      54%
                    </div>
                  </div>

        {/* Legend - positioned with justify-between */}
        <div className="flex-shrink-0 ml-4 sm:ml-6">
          <ul className="space-y-3 sm:space-y-4 text-xs sm:text-sm mb-6">
            {chartData.map((entry, index) => (
              <li key={index} className="flex items-center gap-2 whitespace-nowrap">
                <span
                  className="inline-block w-3 h-3 sm:w-4 sm:h-4 rounded-full flex-shrink-0"
                  style={{ backgroundColor: COLORS[index % COLORS.length] }}
                ></span>
                <span className="text-gray-700">{entry.name}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default QueueChart;
