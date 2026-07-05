import { createBrowserRouter, Navigate } from "react-router-dom";
import HomeLayout from "../Layouts/HomeLayout";
import HomeNews from "../Pages/HomeNews";
import AuthLayout from "../Layouts/AuthLayout";
import Login from "./Login";
import Register from "./Register";

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
        path:'/news',
        element: <h1>The News Room</h1>
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