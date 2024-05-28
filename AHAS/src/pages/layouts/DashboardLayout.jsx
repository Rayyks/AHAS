import React from "react";
import Sidebar from "../../components/Dashboard/sidebar/Sidebar";
import DashboardNavbar from "../../components/header-footer/DashboardNavbar";
import AuthGuard from "../../utils/AuthGuard";
import { useAuth } from "../../context/AuthContextProvider";
import usePageChanger from "../../hooks/usePageChanger";

const DashboardLayout = () => {
  const { isAuth } = useAuth();
  const CurrentPage = usePageChanger.UseDashboardPageChanger();

  const [isSidebarOpen, setIsSidebarOpen] = React.useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
    localStorage.setItem("Sidebar_Open?", !isSidebarOpen);
    console.log("sidebar toggled");
  };

  return (
    <main className="relative h-screen overflow-hidden bg-gray-100 dark:bg-[#141521]">
      {!isAuth && (
        <div className="fixed top-0 left-0 z-50 w-full h-full bg-opacity-50 bg-gray-50 backdrop-blur-sm flex justify-center items-center">
          <AuthGuard />
        </div>
      )}
      <div className="flex items-start justify-between">
        <Sidebar isOpen={isSidebarOpen} />
        <div
          className={`flex flex-col w-full transition-all duration-300 ease-in-out ${
            isSidebarOpen ? "md:pl-1" : "md:pl-16"
          }`}
        >
          <DashboardNavbar
            toggleSidebar={toggleSidebar}
            isSidebarOpen={isSidebarOpen}
          />
          <div className="flex-grow p-4 mt-20">{CurrentPage}</div>
        </div>
      </div>
    </main>
  );
};

export default DashboardLayout;
