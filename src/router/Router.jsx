import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/home/Home";
import Login from "../components/Login/Login";

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
    }
])

export default Router