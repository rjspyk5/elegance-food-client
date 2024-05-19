import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { RouterProvider } from "react-router-dom";
import { Routing } from "./Routing/Routing.jsx";
import { HelmetProvider } from "react-helmet-async";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelmetProvider>
      {" "}
      <RouterProvider router={Routing} />
    </HelmetProvider>
  </React.StrictMode>
);
