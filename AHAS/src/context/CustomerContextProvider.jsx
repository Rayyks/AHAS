import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  useMemo,
} from "react";

export const CustomerContext = createContext();

const CustomerContextProvider = ({ children }) => {
  return (
    <CustomerContext.Provider value={{}}>{children}</CustomerContext.Provider>
  );
};

const useCustomer = () => {
  const context = useContext(CustomerContext);
  if (context === undefined) {
    throw new Error(
      "useCustomer must be used within a CustomerContextProvider"
    );
  }
  return context;
};

export default CustomerContextProvider;
