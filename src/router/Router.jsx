import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/home/Home";
import Login from "../components/Login/Login";
import Signup from "../components/Signup/Signup";
import Bookdetails from "../components/Bookdetails/Bookdetails";
import CategoryBooks from "../components/CategoryBooks/CategoryBooks";
import CategoryAllBooks from "../pages/CategoryAllBooks/CategoryAllBooks";

const Router=createBrowserRouter([
    {
        path:"/",
        element:<Main/>,
        children:[
            {
                path:"/",
                element:<Home/>
            },
            {
                path:"books/:id",
                element:<Bookdetails/>,
                loader: ({ params }) => fetch(`http://localhost:5000/books/${params.id}`),
            },
            {
               path:"categoryallbooks/:name",
               element:<CategoryAllBooks/>,
               loader: ({ params }) => fetch(`http://localhost:5000/books?subject=${params.name}`),

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
    },

])

export default Router