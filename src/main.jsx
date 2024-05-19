import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { RouterProvider } from "react-router-dom";
import { Routing } from "./Routing/Routing.jsx";
import { HelmetProvider } from "react-helmet-async";
import { AuthProvider } from "./Provider/AuthProvider.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelmetProvider>
      <AuthProvider>
        <RouterProvider router={Routing} />
      </AuthProvider>
    </HelmetProvider>
  </React.StrictMode>
);
