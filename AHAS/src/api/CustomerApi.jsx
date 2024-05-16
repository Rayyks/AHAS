import axios from "axios";

export const getCustomers = async () => {
  try {
    const response = await axios.get(
      `${import.meta.env.VITE_API_URL}/customers`,
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
