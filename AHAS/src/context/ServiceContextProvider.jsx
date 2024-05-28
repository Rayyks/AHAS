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
import handleAPICall from "../services/handleAPICall";

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
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchServices();
  }, [fetchServices]);

  const createService = async (data) => {
    setLoading(true);
    try {
      const response = await handleAPICall(
        createServiceAPI(data),
        "Create Successful.",
        "Failed to Create. Please try again later."
      );
      setServices((prevServices) => [...prevServices, response]);
      fetchServices();
      navigate("/dashboard/lihat-daftar");
    } catch (error) {
      handleServiceErrors(error);
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  const updateService = async (data) => {
    setLoading(true);
    try {
      const response = await handleAPICall(
        updateServiceAPI(data),
        "Update Successful.",
        "Failed to Update. Please try again later."
      );
      setServices((prevServices) =>
        prevServices.map((service) =>
          service.id === data.id ? response : service
        )
      );
      fetchServices();
      serviceHistory();
      navigate("/dashboard/lihat-daftar");
    } catch (error) {
      handleServiceErrors(error);
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  const deleteService = async (id) => {
    setLoading(true);
    try {
      await handleAPICall(
        deleteServiceAPI(id),
        "Delete Successful.",
        "Failed to Delete. Please try again later."
      );
      setServices((prevServices) =>
        prevServices.filter((service) => service.id !== id)
      );
      fetchServices();
      navigate("/dashboard/lihat-daftar");
    } catch (error) {
      handleServiceErrors(error);
      setError(error);
    } finally {
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
