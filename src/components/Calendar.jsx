import React from "react";

const Calendar = ({ calendar }) => (
  <div className="w-full max-w-sm mx-auto p-2 sm:p-4 text-right sm:pr-4">
    <p className="text-xs sm:text-sm md:text-base font-medium mb-2">
      {calendar.month} {calendar.year}
    </p>
    
    {/* Days header */}
    <div className="grid grid-cols-7 gap-1 text-xs mb-1">
      {calendar.days.map((day, index) => (
        <span 
          key={index} 
          className={`
            h-6 w-6 sm:h-8 sm:w-8 
            flex items-center justify-center 
            text-xs sm:text-sm 
            text-black text-center 
            rounded-full 
            transition-colors duration-200
            hover:bg-gray-100
            ${day === calendar.selectedDay 
              ? "bg-orange-400 rounded-t-full text-white hover:bg-orange-500 " 
              : ""
            }
          `}
          
        >
          {day}
        </span>
      ))}
    </div>
    
    {/* Dates grid */}
    <div className="grid grid-cols-7 gap-1">
      {calendar.dates.map((date, index) => (
        <span 
          key={index} 
          className={`
            h-6 w-6 sm:h-8 sm:w-8 
            flex items-center justify-center 
            text-xs sm:text-sm 
            text-black text-center 
            rounded-full 
            transition-colors duration-200
            hover:bg-gray-100
            ${date === calendar.selectedDate 
              ? "bg-black rounded-b-full text-white hover:bg-orange-500" 
              : ""
            }
          `}
        >
          {date}
        </span>
      ))}
    </div>
  </div>
);

export default Calendar;
