import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../Layouts/HomeLayout";

const Routers = createBrowserRouter([
    {
        path:'/',
        element: <HomeLayout/>
    },
    {
        path:'/news',
        element: <h1>The News Room</h1>
    },
    {
        path:'auth',
        element: <h1>Authenication</h1>
    },
    {
        path:'*',
        element: <h1>Error Page loded</h1>
    }
])

export default Routers;