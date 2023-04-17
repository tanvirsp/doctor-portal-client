import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Home from "../../Pages/Home/Home/Home";
import About from "../../Pages/About/About";
import Contact from "../../Pages/Contact/Contact";
import Reviews from "../../Pages/Reviews/Reviews";
import Appointment from "../../Pages/Appointment/Appointment";
import Login from "../../Pages/Login/Login";

const router = createBrowserRouter([
    {
        path: '/',
        element : <Main />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/about',
                element: <About />
            },
            {
                path: '/contact',
                element: <Contact />
            },
            {
                path: '/reviews',
                element: <Reviews />
            },
            {
                path:"/appointment",
                element: <Appointment />
            },
            {
                path:"/login",
                element: <Login />
            }
        ]
    }
]);

export default router