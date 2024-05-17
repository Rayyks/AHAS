import React from "react";
import SidebarItem from "./SidebarItem";
import { useAuth } from "../../../context/AuthContextProvider";

const Sidebar = ({ isOpen }) => {
  const { Logout } = useAuth();
  return (
    <div
      className={`fixed z-30 inset-y-0 left-0 transform  h-screen ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } transition-transform duration-300 ease-in-out md:relative md:translate-x-0 flex flex-col w-64 h-full bg-gray-800`}
    >
      <div className="flex items-center justify-center h-16 bg-gray-900">
        <span className="text-2xl font-semibold text-white">AHAS</span>
      </div>
      <div className="flex flex-col flex-grow overflow-y-auto">
        <div className="mt-4">
          <SidebarItem />
        </div>
      </div>
      <div className="flex-shrink-0 p-4 border-t border-gray-700">
        <button
          type="button"
          className="flex items-center justify-center w-full px-4 py-2 text-sm text-gray-200 bg-gray-700 rounded-lg hover:bg-gray-600"
          onClick={Logout}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5 mr-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
            />
          </svg>
          Logout
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
