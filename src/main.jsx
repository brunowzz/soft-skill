import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./pages/Home";
import { GlobalStyles } from "./styles/GlobalStyle";
import { ToastContainer } from "react-toastify";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Home />
    <GlobalStyles />
    <ToastContainer />
  </React.StrictMode>
);
