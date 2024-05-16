import React from "react";

const AuthLabel = ({ htmlFor, children, ...props }) => {
  return (
    <label
      htmlFor={htmlFor}
      className="block text-sm font-medium text-gray-700 dark:text-gray-200"
      {...props}
    >
      {children}
    </label>
  );
};

export default AuthLabel;
