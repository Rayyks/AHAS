import toast from "react-hot-toast";

export const handleErrors = (error) => {
  if (error.response) {
    const { status, data } = error.response;
    if (status === 401) {
      // Check if the error message indicates invalid credentials
      if (data.message === "The provided credentials are incorrect.") {
        toast.error("Invalid email or password. Please try again.");
      } else {
        toast.error(data.message);
      }
    } else if (status === 409) {
      const { errors } = data;
      if (errors && errors.length > 0) {
        errors.forEach((err) => {
          if (err.field === "email") {
            toast.error("Email is already in use.");
          } else if (err.field === "phone_number") {
            toast.error("Phone number is already in use.");
          } else if (err.field === "username") {
            toast.error("Username is already in use.");
          } else {
            toast.error(err.message);
          }
        });
      } else {
        toast.error("Registration failed. Please try again later.");
      }
    } else {
      toast.error("An error occurred. Please try again later.");
    }
  } else {
    toast.error("An error occurred. Please try again later.");
  }
};
