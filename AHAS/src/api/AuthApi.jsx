import axios from "axios";

export const RegisterAPI = async (data) => {
  try {
    const response = await axios.post(
      `${import.meta.env.VITE_API_URL}/register`,
      data,
      {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      }
    );
    return response.data;
  } catch (error) {
    console.log("Error in RegisterAPI: ", error.response.data);
    throw error.response.data;
  }
};

export const LoginAPI = async (data) => {
  try {
    const response = await axios.post(
      `${import.meta.env.VITE_API_URL}/login`,
      data,
      {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      }
    );
    return response.data;
  } catch (error) {
    console.log("Error in LoginAPI: ", error.response.data);
    throw error.response.data;
  }
};

export const LogoutAPI = async () => {
  try {
    const response = await axios.post(
      `${import.meta.env.VITE_API_URL}/logout`,
      {},
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("app_token_key")}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.log("Error in LogoutAPI: ", error.response.data);
    throw error.response.data;
  }
};
