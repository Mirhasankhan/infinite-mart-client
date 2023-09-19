import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Pages/Home/Home";
import SignUp from "../Pages/SignUp/SignUp";
import Login from "../Pages/Login/Login";
import DashboardLayout from "../Pages/Dashboard/DashboardLayout";
import AddProduct from "../Pages/Dashboard/AddProduct";
import MyListings from "../Pages/Dashboard/MyListings";
import MyProducts from "../Pages/Dashboard/MyProducts";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout/>,
        children: [
            {
                path: '/',
                element: <Home/>
            },
            {
                path: 'signUp',
                element: <SignUp/>
            },
            {
                path: 'login',
                element: <Login/>
            }
        ]

    },
    {
        path: '/dashboard',
        element: <DashboardLayout/>,
        children: [
            {
                path: 'add-product',
                element: <AddProduct/>
            },
            {
                path: 'my-listings',
                element: <MyListings/>
            },
            {
                path: 'my-products',
                element: <MyProducts/>
            },
        ]
    }
])

export default router