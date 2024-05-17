import React from "react";
import Breadcrumb from "../ui/Breadcrump";
import { IconMenu2 } from "@tabler/icons-react";

const DashboardNavbar = ({ toggleSidebar, isSidebarOpen }) => {
  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 h-16 bg-white shadow-md dark:bg-gray-800 transition-all duration-300 ease-in-out ${
        isSidebarOpen ? "md:pl-64" : "md:pl-16"
      }`}
    >
      <div className="relative flex items-center justify-between h-full px-4 lg:max-w-6xl mx-auto">
        <div className="flex items-center space-x-4">
          <button
            onClick={toggleSidebar}
            className="text-gray-600 dark:text-gray-300 focus:outline-none md:hidden"
          >
            <IconMenu2 className="w-6 h-6" />
          </button>
          <Breadcrumb />
        </div>
        <div className="flex items-center space-x-4">
          {/* Add any additional navbar items here */}
        </div>
      </div>
    </header>
  );
};

export default DashboardNavbar;
