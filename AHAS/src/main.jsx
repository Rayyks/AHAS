import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import BlogsContextProvider from "./context/BlogsContextProvider.jsx";
import AuthContextProvider from "./context/AuthContextProvider.jsx";
import CustomerContextProvider from "./context/CustomerContextProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <BlogsContextProvider>
        <CustomerContextProvider>
          <AuthContextProvider>
            <App />
          </AuthContextProvider>
        </CustomerContextProvider>
      </BlogsContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
