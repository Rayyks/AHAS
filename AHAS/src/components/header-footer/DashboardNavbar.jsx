import React from "react";
import Breadcrumb from "../ui/Breadcrump";

const DashboardNavbar = () => {
  return (
    <header className="z-40 items-center w-full h-16 bg-white shadow-lg dark:bg-gray-700 rounded-2xl">
      <div className="relative z-20 flex flex-col justify-center h-full px-3 mx-auto flex-center">
        <div className="relative flex items-center w-full pl-1 lg:max-w-68 sm:pr-2 sm:ml-0">
          <Breadcrumb />
        </div>
      </div>
    </header>
  );
};

export default DashboardNavbar;
