import toast from "react-hot-toast";

export const handleCustomerErrors = (error) => {
  if (error.response) {
    const { status, data } = error.response;
    if (status === 422) {
      const { errors } = data;
      if (errors) {
        Object.values(errors).forEach((errMessages) => {
          errMessages.forEach((message) => {
            toast.error(message);
          });
        });
      } else {
        toast.error("Validation failed. Please check your input.");
      }
    } else if (status === 401) {
      toast.error("You are not authorized to perform this action.");
    } else {
      toast.error("An error occurred. Please try again later.");
    }
  } else {
    toast.error("An error occurred. Please try again later.");
  }
};
