import React, { useState } from "react";
import {
  FaBell,
  FaQuestionCircle,
  FaShoppingCart,
  FaSearch,
  FaBars,
  FaTimes,
} from "react-icons/fa";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-lg relative">
      <div className="flex justify-between items-center px-4 sm:px-6 py-3 sm:py-4">
        {/* Logo Section with Triple Line Menu */}
        <div className="flex items-center space-x-2 sm:space-x-3">
          <button
            className="text-xl sm:text-2xl text-gray-700 focus:outline-none lg:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
          <button className="hidden lg:block text-2xl text-gray-700 focus:outline-none">
            <FaBars />
          </button>
          <h1 className="text-base sm:text-lg md:text-xl font-semibold text-gray-700 pl-5 flex-shrink-0">
            Logo
          </h1>
        </div>

        {/* Search Bar Section - Hidden on mobile, visible on tablet+ */}
        <div className="hidden md:flex flex-1 justify-center mx-4 lg:mx-8">
          <div className="relative w-full max-w-md lg:max-w-lg">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FaSearch className="text-gray-400" size={16} />
            </div>
            <input
              type="text"
              className="w-full pl-10 pr-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
              placeholder="Search"
            />
          </div>
        </div>

        {/* Right Section (Icons and Language) */}
        <div className="flex items-center space-x-3 sm:space-x-4 lg:space-x-6">
          {/* Search Icon - Visible only on mobile */}
          <button className="md:hidden text-gray-700">
            <FaSearch size={18} />
          </button>

          {/* Notification Icon */}
          <button className="relative text-gray-700">
            <FaBell size={18} className="sm:w-5 sm:h-5" />
            <span className="absolute -top-1 -right-1 text-xs text-white bg-red-500 rounded-full w-3 h-3 sm:w-4 sm:h-4 flex items-center justify-center text-[10px] sm:text-xs">
              3
            </span>
          </button>

          {/* Help Icon - Hidden on small mobile */}
          <button className="hidden xs:block text-gray-700">
            <FaQuestionCircle size={18} className="sm:w-5 sm:h-5" />
          </button>

          {/* Cart Icon */}
          <button className="text-gray-700">
            <FaShoppingCart size={18} className="sm:w-5 sm:h-5" />
          </button>

          {/* Language Selector */}
          <div className="flex items-center space-x-2">
            <div className="w-7 h-7 sm:w-8 sm:h-8 bg-[#0F1F4B] rounded-full text-white flex items-center justify-center">
              <span className="text-xs sm:text-sm font-medium">JA</span>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-white shadow-lg border-t z-50">
          <div className="px-4 py-3">
            {/* Mobile Search Bar */}
            <div className="md:hidden mb-4">
              <div className="relative w-full">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaSearch className="text-gray-400" size={16} />
                </div>
                <input
                  type="text"
                  className="w-full pl-10 pr-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Search"
                />
              </div>
            </div>

            {/* Mobile Menu Items */}
            <div className="space-y-3">
              <button className="flex items-center space-x-3 w-full text-left py-2 text-gray-700 hover:bg-gray-50 rounded">
                <FaQuestionCircle size={18} />
                <span>Help</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
