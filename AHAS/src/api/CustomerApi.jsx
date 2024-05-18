import axios from "axios";

export const getCustomers = async () => {
  try {
    const response = await axios.get(
      `${import.meta.env.VITE_API_URL}/customer`,
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
    console.log(" Error getting customers data: ", error);
    throw error;
  }
};

export const updateCustomer = async (data) => {
  try {
    const response = await axios.put(
      `${import.meta.env.VITE_API_URL}/customer`,
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
    console.log(" Error updating customer data: ", error);
    throw error;
  }
};

export const deleteCustomer = async () => {
  try {
    const response = await axios.delete(
      `${import.meta.env.VITE_API_URL}/customer`,
      {},
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
    console.log(" Error deleting customer data: ", error);
    throw error;
  }
};
