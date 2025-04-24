import { createBrowserRouter } from "react-router-dom";
import { Hero } from "../Pages/Hero";
import { Gallary } from "../Pages/Gallary";
import { Contact } from "../Pages/Contact";
import App from "../App";
import React from "react";
import About from "../Pages/Aboute";
import Event from "../Pages/Event";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Hero />,
      },
      {
        path: "/ABOUT",
        element: <About />,
      },
      {
        path: "/EVENT",
        element: <Event />,
      },
      {
        path: "/GALLRY",
        element: <Gallary />,
      },
      {
        path: "/CONTACT",
        element: <Contact />,
      },
    ],
  },
]);

export default Router;
