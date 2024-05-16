import React from "react";
import { NavLink } from "react-router-dom";
import { sidebar_nav } from "../../../utils/data";

const SidebarItem = () => {
  return (
    <nav className="mt-6">
      <div>
        {sidebar_nav.map((item, index) => (
          <NavLink
            key={index}
            className={({ isActive, isPending }) =>
              isPending
                ? ""
                : isActive
                ? "flex items-center justify-start w-full p-4 my-2 font-thin text-blue-500 uppercase transition-colors duration-200 border-r-4 border-blue-500 bg-gradient-to-r from-white to-blue-100 dark:from-gray-700 dark:to-gray-800"
                : ""
            }
            to={item.href}
          >
            {item.icon}
            <span className="mx-4 text-sm font-normal">{item.name}</span>
          </NavLink>
        ))}
      </div>
    </nav>
  );
};

export default SidebarItem;
