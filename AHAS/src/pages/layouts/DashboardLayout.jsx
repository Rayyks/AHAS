import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../../components/Dashboard/sidebar/Sidebar";
import DashboardNavbar from "../../components/header-footer/DashboardNavbar";
import AuthGuard from "../../utils/AuthGuard";
import { useAuth } from "../../context/AuthContextProvider";

const DashboardLayout = () => {
  const { isAuth } = useAuth();

  return (
    <main className="relative h-screen overflow-hidden bg-gray-100 dark:bg-gray-800">
      {!isAuth && (
        <div className="fixed top-0 left-0 z-50 w-full h-full bg-opacity-50 bg-gray-50 backdrop-blur-sm flex justify-center items-center">
          <AuthGuard />
        </div>
      )}
      <div className="flex items-start justify-between">
        <Sidebar />
        <div className="flex flex-col w-full pl-0 md:p-4 md:space-y-4">
          <DashboardNavbar />
          <div className="h-screen pt-2 pb-24 pl-2 pr-2 overflow-auto md:pt-0 md:pr-0 md:pl-0">
            <Outlet />
          </div>
        </div>
      </div>
    </main>
  );
};

export default DashboardLayout;
