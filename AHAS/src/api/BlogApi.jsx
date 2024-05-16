import axios from "axios";

export const GetBlogsAPI = async () => {
  try {
    const response = await axios.get(`${import.meta.env.VITE_API_URL}/blogs`, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
