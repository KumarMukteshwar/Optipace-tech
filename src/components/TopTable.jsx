import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { SlOptions } from "react-icons/sl";

const InvoiceHeader = () => {
  const [status, setStatus] = useState("Rejected");

  const statuses = ["Approvel", "Rejected", "Pending"];
  const selectedDate = {
    day: "14",
    weekday: "W",
    month: "July",
    year: "2022",
    week: ["S", "M", "T", "W", "T", "F", "S"],
    dates: [11, 12, 13, 14, 15, 16, 17],
  };

  return (
    <div className="w-full bg-[#F5F8FB] px-4 sm:px-6 lg:px-8 py-4 flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0 rounded-xl">
      {/* Left Section */}
      <div className="space-y-2">
        <div className="text-xs text-gray-500">Dashboard › Invoice Received</div>
        <h2 className="text-xl font-bold text-gray-800">Invoice Received</h2>
        <div className="flex items-center gap-2">
          {statuses.map((s) => (
            <button
              key={s}
              onClick={() => setStatus(s)}
              className={`px-4 py-1.5 rounded-md text-sm font-medium border transition ${
                status === s
                  ? "bg-[#0F1F4B] text-white"
                  : "bg-white text-gray-700 border-gray-300 hover:border-[#0F1F4B]"
              }`}
            >
              {s}
            </button>
          ))}
        </div>
      </div>

      {/* Right Section */}
      <div className="flex flex-col sm:flex-row sm:items-center gap-4">
        {/* Date Selector */}
        <div className="text-center text-sm text-gray-700">
          <div className="font-medium">{selectedDate.month} {selectedDate.year}</div>
          <div className="flex justify-center items-center gap-2 text-xs mt-1">
            {selectedDate.week.map((w, idx) => (
              <div key={w + idx} className="flex flex-col items-center w-5">
                <span
                  className={`${
                    w === selectedDate.weekday
                      ? "text-orange-500 font-bold"
                      : "text-gray-500"
                  }`}
                >
                  {w}
                </span>
                <span
                  className={`${
                    selectedDate.dates[idx] == selectedDate.day
                      ? "bg-[#0F1F4B] text-white rounded-full w-5 h-5 flex items-center justify-center text-xs"
                      : "text-gray-700"
                  }`}
                >
                  {selectedDate.dates[idx]}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Search */}
        <div className="relative flex items-center">
          <FiSearch className="absolute left-3 text-gray-400" />
          <input
            type="text"
            placeholder="Search"
            className="pl-10 pr-10 py-2 rounded-md border border-gray-300 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#0F1F4B]"
          />
          <button className="absolute right-2 text-gray-500">
            <SlOptions />
          </button>
        </div>
      </div>
    </div>
  );
};

export default InvoiceHeader;
