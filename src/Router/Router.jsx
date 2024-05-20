import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root/Root";
import Home from "./Pages/Home/Home";
import Menu from "./Pages/Menu/Menu";
import OrderFood from "./Pages/OrderFood/OrderFood";
import Login from "./Pages/Login/Login";
import SignUp from "./Pages/SignUp/SignUp";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: 'menu',
                element: <Menu></Menu>
            },
            {
                path: 'order/:category',
                element: <OrderFood></OrderFood>
            },
            {
                path: 'login',
                element: <Login></Login>
            },
            {
                path: 'register',
                element: <SignUp></SignUp>
            }
           
        ]
    }
])

export default router