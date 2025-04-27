import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import React from "react";
import About from "../Pages/Aboute";
import Event from "../Pages/Event";
import CricketEvents from "../Pages/CricketEventpage";
import Contact from "../Pages/Contact";
import Gallery from "../Pages/Gallary";
import { Home } from "../Component/Home";
import AuthForms from "../Pages/Login";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
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
        element: <Gallery />,
      },
      {
        path: "/CONTACT",
        element: <Contact />,
      },
      {
        path: "/CricketEventpage",
        element: <CricketEvents />,
      },
      {
        path: "/login",
        element: <AuthForms />,
      },
    ],
  },
]);

export default Router;
