import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  useMemo,
} from "react";
import {
  createServiceAPI,
  deleteServiceAPI,
  getServicesAPI,
  updateServiceAPI,
} from "../api/ServiceApi";
import { handleServiceErrors } from "../services/handleServiceError";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export const ServiceContext = createContext();

const ServiceContextProvider = ({ children }) => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const fetchServices = useCallback(async () => {
    setLoading(true);
    try {
      const data = await getServicesAPI();
      setServices(data);
      setLoading(false);
    } catch (error) {
      handleServiceErrors(error);
      setError(error);
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchServices();
  }, [fetchServices]);

  const createService = async (data) => {
    setLoading(true);
    try {
      const response = await toast.promise(createServiceAPI(data), {
        loading: "Creating Service...",
        success: "Create Successful.",
        error: "Failed to Create. Please try again later.",
      });
      setServices([...services, response]);
      fetchServices();
      setLoading(false);
      navigate("/dashboard/lihat-daftar");
    } catch (error) {
      handleServiceErrors(error);
      setError(error);
      console.log("Error creating service: ", error);
      setLoading(false);
    }
  };

  const updateService = async (data) => {
    setLoading(true);
    try {
      const response = await toast.promise(updateServiceAPI(data), {
        loading: "Updating Service...",
        success: "Update Successful.",
        error: "Failed to Update. Please try again later.",
      });
      setServices([...services, response]);
      fetchServices();
      setLoading(false);
      navigate("/dashboard/lihat-daftar");
    } catch (error) {
      handleServiceErrors(error);
      setError(error);
      setLoading(false);
    }
  };

  const deleteService = async (id) => {
    setLoading(true);
    try {
      const response = await toast.promise(deleteServiceAPI(id), {
        loading: "Deleting Service...",
        success: "Delete Successful.",
        error: "Failed to Delete. Please try again later.",
      });
      setServices([...services, response]);
      fetchServices();
      setLoading(false);
      navigate("/dashboard/lihat-daftar");
    } catch (error) {
      handleServiceErrors(error);
      handleServiceErrors(error);
      setError(error);
      setLoading(false);
    }
  };

  const value = useMemo(
    () => ({
      services,
      loading,
      error,
      fetchServices,
      createService,
      updateService,
      deleteService,
    }),
    [
      services,
      loading,
      error,
      fetchServices,
      createService,
      updateService,
      deleteService,
    ]
  );

  return (
    <ServiceContext.Provider value={value}>{children}</ServiceContext.Provider>
  );
};

export const useService = () => {
  const context = useContext(ServiceContext);
  if (context === undefined) {
    throw new Error("useService must be used within a ServiceContextProvider");
  }
  return context;
};

export default ServiceContextProvider;
