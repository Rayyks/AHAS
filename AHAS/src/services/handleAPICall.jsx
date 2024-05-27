import toast from "react-hot-toast";

const handleAPICall = async (apiCall, successMessage, errorMessage) => {
  try {
    const response = await toast.promise(apiCall, {
      loading: "Loading...",
      success: successMessage,
      error: errorMessage,
    });
    return response;
  } catch (error) {
    console.error("Error in handleAPICall: ", error);
    throw error;
  }
};

export default handleAPICall;
