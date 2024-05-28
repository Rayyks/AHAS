import axios from "axios";

export const getServicesAPI = async () => {
  try {
    const response = await axios.get(
      `${import.meta.env.VITE_API_URL}/services`,
      {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("app_token_key")}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.log(" Error getting services data: ", error);
    throw error;
  }
};

export const createServiceAPI = async (data) => {
  try {
    const response = await axios.post(
      `${import.meta.env.VITE_API_URL}/services`,
      data,
      {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("app_token_key")}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.log(" Error creating service: ", error);
    throw error;
  }
};

export const updateServiceAPI = async (data) => {
  try {
    const response = await axios.put(
      `${import.meta.env.VITE_API_URL}/services/${data.id}`,
      data,
      {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("app_token_key")}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.log(" Error updating service: ", error);
    throw error;
  }
};

export const deleteServiceAPI = async (id) => {
  try {
    const response = await axios.delete(
      `${import.meta.env.VITE_API_URL}/services/${id}`,
      {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("app_token_key")}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.log(" Error deleting service: ", error);
    throw error;
  }
};
