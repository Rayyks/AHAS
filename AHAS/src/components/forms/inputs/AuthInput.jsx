import React from "react";

const AuthInput = ({ type, ...props }) => {
  const className =
    "mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200";
  return <input type={type} className={className} {...props} />;
};

export default AuthInput;
