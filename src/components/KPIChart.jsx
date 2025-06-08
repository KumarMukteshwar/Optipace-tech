import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const COLORS = ["#FDBA74", "#4FD1C7", "#1E293B"]; // Role, Person Responsible, Triggers Alert

const chartData = [
  { name: "Role", value: 30, percent: "30%" },
  { name: "Person Responsible", value: 54, percent: "54%" },
  { name: "Triggers Alert", value: 26, percent: "26%" },
];

const KPIChart = ({ data }) => {
  return (
 <div className="w-full max-w-2xl bg-white p-3 sm:p-4 rounded-lg shadow-sm border border-gray-200">

      {/* Chart Title */}
      <h2 className="text-lg font-semibold text-gray-800 mb-4">
        {data?.title || "KPI"}
      </h2>
      
      <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
        {/* Pie Chart Container */}
        <div className="relative w-full lg:w-2/3 flex justify-center">
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
            {/* Person Responsible (Teal - 54%) - Top right */}
            <div className="absolute top-[20%] right-[2%] bg-white text-sm font-medium px-2 py-3 rounded-full shadow-md border border-gay-100">
              26%
            </div>
            
            {/* Triggers Alert (Dark Blue - 26%) - Top left */}
            <div className="absolute top-[20%] left-[2%] bg-white text-sm font-medium px-2 py-3 rounded-full shadow-md border border-gay-100">
              30%
            </div>
            
            {/* Role (Orange - 30%) - Bottom */}
            <div className="absolute bottom-[10%] left-[2%] bg-white text-sm font-medium px-2 py-3 rounded-full shadow-md border border-gay-100">
              54%
            </div>
          </div>
        </div>

        {/* Legend */}
        <div className="w-full lg:w-1/3 lg:pl-8">
          <div className="space-y-4">
            {chartData.map((entry, index) => (
              <div key={index} className="flex items-center gap-3">
                <div 
                  className="w-3 h-3 rounded-full flex-shrink-0"
                  style={{ backgroundColor: COLORS[index] }}
                />
                <span className="text-gray-700 text-sm font-medium">
                  {entry.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default KPIChart;