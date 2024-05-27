import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  useMemo,
} from "react";
import toast from "react-hot-toast";
import {
  deleteCustomer,
  getCustomers,
  updateCustomer,
} from "../api/CustomerApi";
import { handleCustomerErrors } from "../services/handleCustomerError";
import { useNavigate } from "react-router-dom";
import handleAPICall from "../services/handleAPICall";

export const CustomerContext = createContext();

const CustomerContextProvider = ({ children }) => {
  const [customer, setCustomer] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const fetchCustomer = useCallback(async () => {
    setLoading(true);
    try {
      const response = await getCustomers();
      setCustomer(response);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchCustomer();
  }, [fetchCustomer]);

  const updateCustomerData = useCallback(async (data) => {
    setLoading(true);
    try {
      const response = await handleAPICall(
        updateCustomer(data),
        "Update Successful.",
        "Failed to Update. Please try again later."
      );
      setCustomer(response.data);
      fetchCustomer();
      navigate("/dashboard/daftar-service");
    } catch (error) {
      handleCustomerErrors(error);
      setError(error);
    } finally {
      setLoading(false);
    }
  }, []);

  const deleteAccount = useCallback(async () => {
    setLoading(true);
    try {
      await toast.promise(deleteCustomer(), {
        loading: "Deleting...",
        success: "Delete Successful.",
        error: "Failed to Delete. Please try again later.",
      });
      setCustomer({});
    } catch (error) {
      handleCustomerErrors(error);
      setError(error);
    } finally {
      setLoading(false);
    }
  }, []);

  const value = useMemo(
    () => ({
      customer,
      loading,
      error,
      fetchCustomer,
      updateCustomerData,
      deleteAccount,
    }),
    [customer, loading, error, fetchCustomer, updateCustomerData, deleteAccount]
  );

  return (
    <CustomerContext.Provider value={value}>
      {children}
    </CustomerContext.Provider>
  );
};

export const useCustomer = () => {
  const context = useContext(CustomerContext);
  if (context === undefined) {
    throw new Error(
      "useCustomer must be used within a CustomerContextProvider"
    );
  }
  return context;
};

export default CustomerContextProvider;
