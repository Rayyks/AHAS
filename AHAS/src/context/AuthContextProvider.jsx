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
import toast from "react-hot-toast";
import { useCustomer } from "./CustomerContextProvider";

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const { fetchCustomer } = useCustomer();
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(
    localStorage.getItem("app_token_key") || null
  );
  const [isAuth, setIsAuth] = useState(
    localStorage.getItem("is_user_authenticated") === "true"
  );
  const navigate = useNavigate();

  const Register = useCallback(
    async (data) => {
      try {
        await toast.promise(RegisterAPI(data), {
          loading: "Registering...",
          success: "Registration successful. Please login.",
          error: "Failed to register. Please try again later.",
        });
        navigate("/login");
      } catch (error) {
        console.error("Error in Register: ", error);
        handleErrors(error);
        throw error;
      }
    },
    [navigate]
  );

  const Login = useCallback(
    async (data) => {
      try {
        const response = await toast.promise(LoginAPI(data), {
          loading: "Logging in...",
          success: "Login successful.",
          error: "Failed to login. Please try again later.",
        });
        setUser(response.user);
        setToken(response.token);
        setIsAuth(true);
        localStorage.setItem("app_token_key", response.token);
        localStorage.setItem("is_user_authenticated", true);
        fetchCustomer();
        navigate("/");
      } catch (error) {
        console.error("Error in Login: ", error);
        handleErrors(error);
        throw error;
      }
    },
    [navigate]
  );

  const Logout = useCallback(async () => {
    try {
      await LogoutAPI();
      setUser(null);
      setToken(null);
      setIsAuth(false);
      localStorage.removeItem("app_token_key");
      localStorage.removeItem("is_user_authenticated");
      navigate("/login");
    } catch (error) {
      console.error("Error in Logout: ", error);
      toast.error("Logout failed. Please try again later.");
      throw error;
    }
  }, [navigate]);

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
