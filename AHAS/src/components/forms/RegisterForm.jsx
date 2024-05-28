import React, { useState } from "react";
import { Link } from "react-router-dom";
import AuthInput from "./inputs/AuthInput";
import AuthLabel from "./labels/AuthLabel";
import { useAuth } from "../../context/AuthContextProvider";

const RegisterForm = () => {
  const { Register } = useAuth();

  const [form, setForm] = useState({
    fullname: "",
    email: "",
    password: "",
    password_confirmation: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    Register(form);
    console.log("Form Submitted");
  };

  const handleChange = (field, value) => {
    setForm((prevState) => ({ ...prevState, [field]: value }));
  };

  return (
    <form className="mt-8 grid grid-cols-6 gap-6" onSubmit={handleSubmit}>
      <div className="col-span-6">
        <AuthLabel htmlFor="fullname">Full Name</AuthLabel>

        <AuthInput
          type="text"
          id="fullname"
          required={true}
          onChange={(e) => handleChange("fullname", e.target.value)}
        />
      </div>

      <div className="col-span-6">
        <AuthLabel htmlFor="Email">Email</AuthLabel>

        <AuthInput
          type="email"
          id="Email"
          required={true}
          onChange={(e) => handleChange("email", e.target.value)}
        />
      </div>

      <div className="col-span-6 sm:col-span-3">
        <AuthLabel htmlFor="Password">Password</AuthLabel>

        <AuthInput
          type="password"
          id="Password"
          required={true}
          onChange={(e) => handleChange("password", e.target.value)}
        />
      </div>

      <div className="col-span-6 sm:col-span-3">
        <AuthLabel htmlFor="PasswordConfirmation">
          Password Confirmation
        </AuthLabel>

        <AuthInput
          type="password"
          id="PasswordConfirmation"
          required={true}
          onChange={(e) =>
            handleChange("password_confirmation", e.target.value)
          }
        />
      </div>

      <div className="col-span-6">
        <label htmlFor="MarketingAccept" className="flex gap-4">
          <input
            type="checkbox"
            id="MarketingAccept"
            className="size-5 rounded-md border-gray-200 bg-white shadow-sm dark:border-gray-700 dark:bg-gray-800 dark:focus:ring-offset-gray-900"
          />

          <span className="text-sm text-gray-700 dark:text-gray-200">
            I want to receive emails about events, product updates and company
            announcements.
          </span>
        </label>
      </div>

      <div className="col-span-6">
        <p className="text-sm text-gray-500 dark:text-gray-400">
          By creating an account, you agree to our
          <Link to="/" className="text-gray-700 underline dark:text-gray-200">
            terms and conditions
          </Link>
          and
          <Link to="/" className="text-gray-700 underline dark:text-gray-200">
            {" "}
            privacy policy{" "}
          </Link>
          .
        </p>
      </div>

      <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
        <button className="inline-block shrink-0 rounded-md border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500 dark:hover:bg-blue-700 dark:hover:text-white">
          Create an account
        </button>

        <p className="mt-4 text-sm text-gray-500 sm:mt-0 dark:text-gray-400">
          Already have an account?
          <Link
            to="/login"
            className="text-gray-700 underline dark:text-gray-200"
          >
            Log in
          </Link>
          .
        </p>
      </div>
    </form>
  );
};

export default RegisterForm;
