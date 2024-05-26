import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root/Root";
import Home from "./Pages/Home/Home";
import Menu from "./Pages/Menu/Menu";
import OrderFood from "./Pages/OrderFood/OrderFood";
import Login from "./Pages/Login/Login";
import SignUp from "./Pages/SignUp/SignUp";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import Secret from "./Pages/Shared/Secret/Secret";
import DashBoard from "../Layout/DashBoard/DashBoard";
import Cart from "./Pages/DashBoard/Cart/Cart";
import UserHome from "./Pages/DashBoard/UserHome/UserHome";
import Reservation from "./Pages/DashBoard/Reservation/Reservation";
import AllUsers from "./Pages/DashBoard/AllUsers/AllUsers";
import AddItems from "./Pages/DashBoard/AddItems/AddItems";
import AdminRoute from "./PrivateRoute/AdminRoute";
import ManageItem from "./Pages/DashBoard/ManageItem/ManageItem";

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
                path: 'dashboard',
                element: <PrivateRoute><Secret></Secret></PrivateRoute>
            }

        ]
    },
    {
        path: 'dashboard',
        element: <PrivateRoute><DashBoard></DashBoard></PrivateRoute>,
        children: [
            {
                path: 'cart',
                element: <Cart></Cart>
            },
            {
                path: 'user_home',
                element: <UserHome></UserHome>
            },
            {
                path: 'reservation',
                element: <Reservation></Reservation>
            },
            // Admin routes
            {
                path: 'all-users',
                element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
            },
            {
                path: 'add-item',
                element: <AdminRoute><AddItems></AddItems></AdminRoute>
               
            },
            {
                path: 'manage-item',
                element: <ManageItem></ManageItem>
            }

        ]
    }
])

export default router