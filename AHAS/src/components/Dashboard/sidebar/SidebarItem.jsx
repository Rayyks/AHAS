import React from "react";
import { NavLink } from "react-router-dom";
import { sidebar_nav } from "../../../utils/data";

const SidebarItem = () => {
  return (
    <div className="px-2">
      <div className="py-4">
        <NavLink
          to="/dashboard"
          className="group relative flex justify-start items-center space-x-3 rounded px-2 py-2 text-gray-200 hover:bg-gray-700"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6 opacity-75"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
          <span className="text-sm">General</span>
        </NavLink>
      </div>
      <ul className="space-y-1 border-t border-gray-700 pt-4">
        {sidebar_nav.map((item, index) => (
          <li key={index}>
            <NavLink
              to={`/dashboard${item.href}`}
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "group flex justify-start items-center space-x-3 rounded bg-gray-700 px-2 py-2 text-white"
                  : "group flex justify-start items-center space-x-3 rounded px-2 py-2 text-gray-200 hover:bg-gray-700"
              }
            >
              {item.icon}
              <span className="text-sm">{item.name}</span>
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SidebarItem;
