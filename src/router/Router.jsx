import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/home/Home";
import Login from "../components/Login/Login";
import Signup from "../components/Signup/Signup";

const Router=createBrowserRouter([
    {
        path:"/",
        element:<Main/>,
        children:[
            {
                path:"/",
                element:<Home/>
            }
           
        ]
    },
    {
        path:"login",
        element:<Login/>
    },
    {
        path:"signup",
        element:<Signup/>
    }
])

export default Router