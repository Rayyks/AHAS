import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { handleLoginRedirect } from "../services/handleSessionStorage";

const AuthGuard = () => {
  const navigate = useNavigate();

  return (
    <div
      role="alert"
      className="rounded-xl border border-red-500 bg-red-100 p-4"
    >
      <div className="flex items-start gap-4">
        <span className="text-red-600">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </span>

        <div className="flex-1">
          <strong className="block font-medium text-red-700">
            {" "}
            Please Login to Access this Page
          </strong>

          <p className="mt-1 text-sm text-gray-800">
            For security reasons, you need to login to access this page.
          </p>

          <div className="mt-4 flex gap-2">
            <Link
              to="/login"
              className="inline-flex items-center gap-2 rounded-lg bg-red-600 px-4 py-2 text-white hover:bg-red-700"
              onClick={handleLoginRedirect}
            >
              <span className="text-sm"> Login </span>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-4 w-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                />
              </svg>
            </Link>

            <button
              className="block rounded-lg px-4 py-2 text-gray-800 transition hover:bg-red-50"
              onClick={() => navigate(-1)}
            >
              <span className="text-sm">Cancel</span>
            </button>
          </div>
        </div>

        <button
          className="text-gray-500 transition hover:text-gray-600"
          onClick={(e) => navigate("/")}
        >
          <span className="sr-only">Dismiss popup</span>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default AuthGuard;
