import React from "react";
import { Link } from "react-router-dom";
import SidebarItem from "./SidebarItem";

const Sidebar = () => {
  return (
    //    <!-- =================================== SIDEBAR ===================================  -->
    <div className="relative hidden h-screen my-4 ml-4 shadow-lg lg:block w-80">
      <div className="h-full bg-white rounded-2xl dark:bg-gray-700">
        <div className="flex items-center justify-center pt-6">
          <Link to="/">
            <img
              src="https://i.pinimg.com/736x/0c/d3/b8/0cd3b81aff41afc83dbf8b10eab29ae9.jpg"
              alt=""
              className=" h-16 w-16 rounded-full"
            />
          </Link>
        </div>
        <SidebarItem />
      </div>
    </div>
  );
  // <!-- =================================== end SIDEBAR ===================================  -->
};

export default Sidebar;
