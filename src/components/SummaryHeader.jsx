import React from "react";

const SummaryHeader = ({ title, outstanding }) => {
  return (
    <div className="flex flex-col p-4 w-full">
      <h1 className="text-2xl text-black font-bold px-4">{title}</h1>
      <p className="bg-white text-black rounded-md px-3 py-3 shadow ml-4 mt-2 w-fit">
        Over all outstanding ₹ {outstanding}
      </p>
    </div>
  );
};

export default SummaryHeader;
