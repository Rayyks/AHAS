export const handleLoginRedirect = () => {
  // Store the current path in sessionStorage
  sessionStorage.setItem("prevPath", window.location.pathname);
};
