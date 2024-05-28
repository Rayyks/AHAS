import React from "react";
import { useAuth } from "../context/AuthContextProvider";

const PrivatePage = ({ children }) => {
  const { isAuth } = useAuth();

  if (!isAuth) {
    return <div>Unauthorized Access</div>;
  }

  return <div>{children}</div>;
};

export default PrivatePage;
