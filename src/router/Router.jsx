import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/home/Home";
import Login from "../components/Login/Login";
import Signup from "../components/Signup/Signup";
import Bookdetails from "../components/Bookdetails/Bookdetails";
import CategoryBooks from "../components/CategoryBooks/CategoryBooks";
import CategoryAllBooks from "../pages/CategoryAllBooks/CategoryAllBooks";
import useAxiosSecure from "../hooks/useAxiosSecure";

const axiosSecure = useAxiosSecure()

const Router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "books/:id",
                element: <Bookdetails />,
                loader: ({ params }) => axiosSecure.get(`/books/${params.id}`)
                    .then(res => res.data)
            },
            {
                path: "categoryallbooks/:name",
                element: <CategoryAllBooks />,
                loader: ({ params }) => axiosSecure.get(`books?subject=${params.name}`)
                    .then(res => res.data)

            }

        ]
    },
    {
        path: "login",
        element: <Login />
    },
    {
        path: "signup",
        element: <Signup />
    },

])

export default Router