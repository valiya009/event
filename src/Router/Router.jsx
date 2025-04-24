import { createBrowserRouter} from "react-router-dom";
import App from "../App";
import { Hero } from "../Pages/Hero";
import { Gallary } from "../Pages/Gallary";
import { Event } from "../Pages/Event";
import { Contact } from "../Pages/Contact";
import { Aboute } from "../Pages/Aboute";



const Router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children: [
            {
                path: "/",
                element: <Hero/>,
            },
            {
                path: "/ABOUT",
                element: <Gallary />,
            },
            {
                path: "/EVENT",
                element: <Event />,
            },
            {
                path: "/GALLRY",
                element: <Contact />,
            },
            {
                path: "/CONTACT",
                element: <Aboute />,
            },
           
        ],
    },
]);

export default Router;