import React from "react";

const DueSummary = ({ data }) => {
  // Add safety check in case data is not provided
  if (!data) {
    return <div>No due summary data available</div>;
  }

  return (
    <div className="bg-blue-100 p-4 rounded-lg shadow">
      {/* Header */}
      <div className="flex justify-between items-start mb-4">
        <div>
          <h2 className="text-lg font-semibold text-gray-800">{data.title}</h2>
          <p className="text-sm text-gray-600">{data.subtitle}</p>
        </div>
        <div className="bg-white px-4 py-2 rounded-md shadow text-right">
          <p className="text-xs text-gray-500">Penalty Saved amount</p>
          <p className="text-lg font-semibold text-gray-800">₹ {data.penaltySaved}</p>
        </div>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 gap-4">
        {data.dues && data.dues.map((item, idx) => (
          <div
            key={idx}
            className="bg-white p-4 rounded-md text-center shadow-sm"
          >
            <p className="text-sm text-gray-500">{item.days}</p>
            <p className="text-lg font-semibold text-gray-800">₹ {item.amount}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DueSummary;
