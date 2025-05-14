import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Router from "./Router/Router.jsx";
import { RouterProvider } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Provider } from "react-redux";
import { Store } from "./Fetures/Store.jsx";


createRoot(document.getElementById("root")).render(
  <Provider store={Store}>
  <RouterProvider router={Router} />
  </Provider>
);
