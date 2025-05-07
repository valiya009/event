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
import BookingForm from "../Pages/BookTicket";
import IPLEvent from "../Pages/IplEvent";
import AdminLayout from "../../Admindashbord";
import UserList from "../Admine pages/Pages/Userlist";
import PostEvent from "../Admine pages/Pages/Addpageevent";
import PostCategory from "../Admine pages/Pages/PostCategoty";
import AddGallery from "../Admine pages/Pages/AddGallery";
import ContactList from "../Admine pages/Pages/ContactList";
import Profile from "../Admine pages/Pages/Profile";
import ChangePassword from "../Admine pages/Pages/ChangePassword";

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
      {
        path: "/bookticket",
        element: <BookingForm />,
      },
      {
        path: "/IplEvent",
        element: <IPLEvent />,
      },
    ],
  },
  {
    path: "/admin",
    element: <AdminLayout />,
    children: [
      {
        path: "/admin/userlist",
        element: <UserList />,
      },
      {
        path: "/admin/post",
        element: <PostEvent />,
      },
      {
        path: "/admin/post event",
        element: <PostCategory />,
      },
      {
        path: "/admin/gallery",
        element: <AddGallery />,
      },
      {
        path: "/admin/contacts",
        element: <ContactList />,
      },
      {
        path: "/admin/profile",
        element: <Profile />,
      },
      {
        path: "/admin/changepassword",
        element: <ChangePassword />,
      },
    ],
  },
]);

export default Router;