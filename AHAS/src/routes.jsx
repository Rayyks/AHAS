import { Suspense, lazy } from "react";
import Loader from "./utils/Loader";

// AUTH PAGES
const Register = lazy(() => import("./pages/Auth/Register"));
const Login = lazy(() => import("./pages/Auth/Login"));

// DASHBOARD PAGES
const DashboardLayout = lazy(() => import("./pages/layouts/DashboardLayout"));

// LANDING PAGES
const LandingLayout = lazy(() => import("./pages/layouts/LandingLayout"));

export const routes = [
  // LANDING ROUTES
  {
    path: "/",
    component: (
      <Suspense fallback={<Loader />}>
        <LandingLayout />
      </Suspense>
    ),
    index: true,
  },
  {
    path: "/about",
    component: <LandingLayout />,
    index: false,
  },
  {
    path: "/blog",
    component: <LandingLayout />,
    index: false,
  },
  {
    path: "/blog/:slug",
    component: <LandingLayout />,
    index: false,
  },
  {
    path: "/service",
    component: <LandingLayout />,
    index: false,
  },
  {
    path: "/careers",
    component: <LandingLayout />,
    index: false,
  },

  // DASHBOARD ROUTES
  {
    path: "/dashboard",
    component: (
      <Suspense fallback={<Loader />}>
        <DashboardLayout />
      </Suspense>
    ),
    index: false,
  },
  {
    path: "/dashboard/daftar-service",
    component: <DashboardLayout />,
    index: false,
  },
  {
    path: "/dashboard/lihat-daftar",
    component: <DashboardLayout />,
    index: false,
  },
  {
    path: "/dashboard/riwayat-service",
    component: <DashboardLayout />,
    index: false,
  },
  {
    path: "/dashboard/profile",
    component: <DashboardLayout />,
    index: false,
  },

  // AUTH ROUTES
  {
    path: "/register",
    component: (
      <Suspense fallback={<Loader />}>
        <Register />
      </Suspense>
    ),
    index: false,
  },
  {
    path: "/login",
    component: (
      <Suspense fallback={<Loader />}>
        <Login />
      </Suspense>
    ),
    index: false,
  },
  {
    path: "/forgot-password",
    component: "ForgotPassword",
    index: false,
  },
  {
    path: "/reset-password",
    component: "ResetPassword",
    index: false,
  },
  {
    path: "/verify-email",
    component: "VerifyEmail",
    index: false,
  },
  {
    path: "/404",
    component: "NotFound",
    index: false,
  },
  {
    path: "*",
    component: "NotFound",
  },
];
