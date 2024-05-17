import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  useMemo,
} from "react";
import {
  deleteCustomer,
  getCustomerById,
  getCustomers,
  updateCustomer,
} from "../api/CustomerApi";

export const CustomerContext = createContext();

const CustomerContextProvider = ({ children }) => {
  const [customer, setCustomer] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  //   ADMIN USE ONLY
  const fetchCustomer = useCallback(async () => {
    setLoading(true);
    try {
      setLoading(false);
      const response = await getCustomers();
      setCustomer(response);
    } catch (error) {
      setError(error);
    }
  }, []);

  //   TO GET ALL THE CUSTOMERS , FOR ADMIN USE
  useEffect(() => {
    fetchCustomer();
  }, [fetchCustomer]);

  //   CUSTOMER AND ADMIN CAN USE THIS TO UPDATE CUSTOMER BY ID
  const updateCustomerData = useCallback(async (id, data) => {
    setLoading(true);
    try {
      setLoading(false);
      const response = await toast.promise(updateCustomer(id, data), {
        loading: "Updating...",
        success: "Update Successful.",
        error: "Failed to Update. Please try again later.",
      });
      setCustomer(response.data);
    } catch (error) {
      setError(error);
    }
  }, []);

  //   DELETE THAT MF UP, BUT ONLY ADMIN CAN DO THIS
  const deleteSingleCustomer = useCallback(async (id) => {
    setLoading(true);
    try {
      setLoading(false);
      await toast.promise(deleteCustomer(id), {
        loading: "Deleting...",
        success: "Delete Successful.",
        error: "Failed to Delete. Please try again later.",
      });
      setCustomer({});
    } catch (error) {
      setError(error);
    }
  }, []);

  const value = useMemo(
    () => ({
      customer,
      loading,
      error,
      fetchCustomer,
      updateCustomerData,
      deleteSingleCustomer,
    }),
    [
      customer,
      loading,
      error,
      fetchCustomer,
      updateCustomerData,
      deleteSingleCustomer,
    ]
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
