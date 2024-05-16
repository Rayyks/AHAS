import { useLocation } from "react-router-dom";

// LANDING PAGES
import Home from "../pages/landing/Home";
import About from "../pages/landing/About";
import Blog from "../pages/landing/Blog";
import Service from "../pages/landing/Service";
import Careers from "../pages/landing/Careers";
import BlogContent from "../pages/landing/BlogContent";

// DASHBOARD PAGES
import RegisterService from "../pages/dashbboard/RegisterService";
import OrderList from "../pages/dashbboard/OrderList";
import History from "../pages/dashbboard/History";
import Profile from "../pages/dashbboard/Profile";
import Index from "../pages/dashbboard/Index";

const UseLayoutPageChanger = () => {
  const location = useLocation();
  const { pathname } = location;
  switch (pathname) {
    case "/":
      return <Home />;
    case "/about":
      return <About />;
    case "/blog":
      return <Blog />;
    // case for handling individual blog posts
    case pathname.match(/^\/blog\/[a-zA-Z0-9\-]+$/) ? pathname : null:
      return <BlogContent />;
    case "/service":
      return <Service />;
    case "/careers":
      return <Careers />;
    default:
      return <Home />;
  }
};

const UseDashboardPageChanger = () => {
  const location = useLocation();
  const { pathname } = location;
  switch (pathname) {
    case "/dashboard":
      return <Index />;
    case "/dashboard/daftar-service":
      return <RegisterService />;
    case "/dashboard/lihat-daftar":
      return <OrderList />;
    case "/dashboard/riwayat-service":
      return <History />;
    case "/dashboard/profile":
      return <Profile />;
    default:
      return <Index />;
  }
};
export default { UseLayoutPageChanger, UseDashboardPageChanger };
