import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root/Root";
import Home from "./Pages/Home/Home";
import Menu from "./Pages/Menu/Menu";
import OrderFood from "./Pages/OrderFood/OrderFood";
import Login from "./Pages/Login/Login";
import SignUp from "./Pages/SignUp/SignUp";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import Secret from "./Pages/Shared/Secret/Secret";

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
            },
            {
                path: 'secret',
                element: <PrivateRoute><Secret></Secret></PrivateRoute>
            }
           
        ]
    }
])

export default router