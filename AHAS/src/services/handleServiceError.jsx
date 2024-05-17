import toast from "react-hot-toast";

export const handleServiceErrors = (error) => {
  if (error.response) {
    const { status, data } = error.response;
    if (status === 400) {
      toast.error(
        "Invalid service data. Please check your input and try again."
      );
    } else if (status === 401) {
      toast.error("Unauthorized. Please login to access this feature.");
    } else if (status === 403) {
      toast.error(
        "Forbidden. You don't have permission to perform this action."
      );
    } else if (status === 404) {
      toast.error("Service not found. Please make sure the service exists.");
    } else if (status === 409) {
      toast.error("Service already exists. Please use a different service ID.");
    } else if (status === 500) {
      toast.error("Internal server error. Please try again later.");
    } else {
      toast.error("An error occurred. Please try again later.");
    }
  } else {
    toast.error("An error occurred. Please try again later.");
  }
};
