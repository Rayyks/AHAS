import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthInput from "./inputs/AuthInput";
import AuthLabel from "./labels/AuthLabel";
import { useAuth } from "../../context/AuthContextProvider";

const LoginForm = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const { Login } = useAuth();

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await Login(form);
    const prevPath = sessionStorage.getItem("prevPath");
    if (prevPath) {
      navigate(prevPath);
      sessionStorage.removeItem("prevPath"); // Clear the stored path after navigation
    } else {
      navigate("/"); // If no previous path is stored, navigate to the homepage
    }
  };

  const handleChange = (field, value) => {
    setForm((prevState) => ({ ...prevState, [field]: value }));
  };

  return (
    <form className="mt-8 grid grid-cols-6 gap-6" onSubmit={handleSubmit}>
      <div className="col-span-6">
        <AuthLabel htmlFor="Email">Email</AuthLabel>

        <AuthInput
          type="email"
          id="Email"
          required={true}
          onChange={(e) => handleChange("email", e.target.value)}
        />
      </div>

      <div className="col-span-6 ">
        <AuthLabel htmlFor="Password">Password</AuthLabel>

        <AuthInput
          type="password"
          id="Password"
          required={true}
          onChange={(e) => handleChange("password", e.target.value)}
        />
      </div>

      <div className="col-span-6">
        <label htmlFor="MarketingAccept" className="flex gap-4">
          <input
            type="checkbox"
            id="MarketingAccept"
            name="marketing_accept"
            className="size-5 rounded-md border-gray-200 bg-white shadow-sm dark:border-gray-700 dark:bg-gray-800 dark:focus:ring-offset-gray-900"
          />

          <span className="text-sm text-gray-700 dark:text-gray-200">
            Remember Me
          </span>
        </label>
      </div>

      <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
        <button className="inline-block shrink-0 rounded-md border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500 dark:hover:bg-blue-700 dark:hover:text-white">
          Sign In
        </button>

        <p className="mt-4 text-sm text-gray-500 sm:mt-0 dark:text-gray-400">
          Don't have an account?
          <Link
            to="/register"
            className="text-gray-700 underline dark:text-gray-200"
          >
            Register
          </Link>
          .
        </p>
      </div>
    </form>
  );
};

export default LoginForm;
