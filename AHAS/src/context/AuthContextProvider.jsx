import {
  createContext,
  useContext,
  useCallback,
  useMemo,
  useState,
} from "react";
import { LoginAPI, LogoutAPI, RegisterAPI } from "../api/AuthApi";
import { handleErrors } from "../services/handleAuthError";
import { useNavigate } from "react-router-dom";
import { useCustomer } from "./CustomerContextProvider";
import { useService } from "./ServiceContextProvider";
import useLocalStorage from "../hooks/useLocalStorage";
import handleAPICall from "../services/handleAPICall";

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const { fetchCustomer } = useCustomer();
<<<<<<< HEAD
  const { fetchServices } = useService();
=======
  const { fetchServices, serviceHistory } = useService();
>>>>>>> 6788be4aa31e0f54a7f6f83c0cb67a984af356b3
  const [user, setUser] = useState(null);
  const [token, setToken] = useLocalStorage("app_token_key", null);
  const [isAuth, setIsAuth] = useLocalStorage("is_user_authenticated", false);
  const navigate = useNavigate();

  const Register = useCallback(async (data) => {
    try {
      await handleAPICall(
        RegisterAPI(data),
        "Registration successful. Please login.",
        "Failed to register. Please try again later."
      );
      navigate("/login");
    } catch (error) {
      console.error("Error in Register: ", error);
      handleErrors(error);
      throw error;
    }
  }, []);

  const Login = useCallback(
    async (data) => {
      try {
        const response = await handleAPICall(
          LoginAPI(data),
<<<<<<< HEAD
          "Welcome back!",
=======
>>>>>>> 6788be4aa31e0f54a7f6f83c0cb67a984af356b3
          "Failed to login. Please try again later."
        );
        setUser(response.user);
        setToken(response.token);
        setIsAuth(true);
        fetchCustomer();
<<<<<<< HEAD
=======
        serviceHistory();
>>>>>>> 6788be4aa31e0f54a7f6f83c0cb67a984af356b3
        fetchServices();
        navigate("/");
      } catch (error) {
        throw error;
      }
    },
    [navigate]
  );

  const Logout = useCallback(async () => {
    try {
      await handleAPICall(
        LogoutAPI(),
        "Logout successful.",
        "Logout failed. Please try again later."
      );
      setUser(null);
      setToken(null);
      localStorage.removeItem("app_token_key");
      setIsAuth(false);
      navigate("/login");
    } catch (error) {
      throw error;
    }
  }, []);

  const value = useMemo(
    () => ({ user, token, isAuth, Register, Login, Logout }),
    [user, token, isAuth, Register, Login, Logout]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthContextProvider");
  }
  return context;
};

export default AuthContextProvider;
