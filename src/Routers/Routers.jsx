import { createBrowserRouter, Navigate } from "react-router-dom";
import HomeLayout from "../Layouts/HomeLayout";
import HomeNews from "../Pages/HomeNews";
import AuthLayout from "../Layouts/AuthLayout";
import Login from "./Login";
import Register from "./Register";
import NewsDetails from "../Pages/NewsDetails";
import PrivateRoute from "./PrivateRoute";

const Routers = createBrowserRouter([
    {
        path:'/',
        element: <HomeLayout/>,
        children:[
            {
                path:"",
                element: <Navigate to={"/cetagory/01"}></Navigate>
            },
            {
                path:"/cetagory/:id",
                element: <HomeNews></HomeNews>,
                loader: ({params}) => fetch(`https://openapi.programming-hero.com/api/news/category/${params.id}`)
            }
        ],
    },
    {
        path:'/news/:id',
        element: <PrivateRoute>
            <NewsDetails></NewsDetails>
        </PrivateRoute>,
        loader:({params}) => fetch(`https://openapi.programming-hero.com/api/news/${params.id}`)
    },
    {
        path:'auth',
        element: <AuthLayout></AuthLayout>,
        children:[
            {
                path:'/auth/login',
                element: <Login></Login>
            },
            {
                path:'/auth/register',
                element: <Register></Register>
            }
        ]
    },
    {
        path:'*',
        element: <h1>Error Page loded</h1>
    }
])

export default Routers;