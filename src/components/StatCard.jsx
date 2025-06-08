import React from "react";

const StatCard = ({ title, total, amount, icon }) => (
  <div className="bg-white p-4 rounded-md shadow">
    {/* Icon + Title in a row */}
    <div className="flex items-center gap-2 mb-1">
      <span className="text-blue-600 text-xl">{icon}</span>
      <h3 className="text-md text-black font-semibold">{title}</h3>
    </div>

    {/* Total Count */}
    <p className="text-lg text-black font-bold">Total {total}</p>

    {/* Amount */}
    <p className="text-gray-600 text-md">₹ {amount}</p>
  </div>
);

export default StatCard;
