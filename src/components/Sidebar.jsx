import React, { useState } from "react";
import {
  FaThLarge,
  FaFileAlt,
  FaFileInvoice,
  FaUserPlus,
  FaRegBuilding,
  FaTimes,
  FaBars,
} from "react-icons/fa";
import { MdPlaylistAdd } from "react-icons/md";

const menuItems = [
  { label: "Dashboard", icon: <FaThLarge />, id: "dashboard", clickable: true },
  { label: "Report", icon: <FaFileAlt />, id: "report", clickable: true },
  { label: "Add Invoice", icon: <FaFileInvoice />, id: "add-invoice", clickable: false },
  { label: "Add User", icon: <FaUserPlus />, id: "add-user", clickable: false },
  { label: "Without PO", icon: <MdPlaylistAdd />, id: "without-po", clickable: false },
  { label: "Company", icon: <FaRegBuilding />, id: "company", clickable: false },
];

const Sidebar = ({ activeSection, onSectionChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen((prev) => !prev);
  };

  const handleMenuClick = (item) => {
    if (item.clickable && onSectionChange) {
      onSectionChange(item.id);
    }
    if (window.innerWidth < 1024) {
      setIsOpen(false);
    }
  };

  return (
    <>
      {/* Mobile Toggle Button */}
      <button
        onClick={toggleSidebar}
        className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-white rounded-md shadow-md"
      >
        {isOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
      </button>

      {/* Overlay */}
      {isOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black bg-opacity-40 z-40"
          onClick={toggleSidebar}
        ></div>
      )}

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full w-56 bg-white shadow-md z-50 transform transition-transform duration-300 ease-in-out
        ${isOpen ? "translate-x-0" : "-translate-x-full"} 
        lg:translate-x-0 lg:top-1/2 lg:left-0 lg:w-24 lg:h-1/2 lg:-translate-y-1/2 lg:rounded-xl lg:flex lg:flex-col lg:items-center lg:justify-between lg:py-4`}
      >
        <div className="flex flex-col items-center lg:space-y-0 space-y-4 mt-8 lg:mt-0">
          {menuItems.map((item, idx) => (
            <div
              key={idx}
              onClick={() => handleMenuClick(item)}
              className={`flex flex-col items-center px-2 py-2 rounded-lg transition-all duration-300 ${
                item.clickable ? "cursor-pointer" : "cursor-default"
              } ${
                activeSection === item.id
                  ? "bg-[#0F1F4B] text-white"
                  : item.clickable
                  ? "text-gray-500 hover:text-[#0F1F4B]"
                  : "text-gray-400"
              } ${isOpen ? "w-full ml-4 items-start lg:items-center" : "w-9/12"} `}
            >
              <div className="text-lg">{item.icon}</div>
              <span className="text-sm lg:text-[10px] mt-1 text-center leading-tight">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
