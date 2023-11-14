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
                loader: ({ params }) => fetch(`https://book-rental-back-git-main-moshiur-rahmans-projects-fe916e0b.vercel.app/books/${params.id}`),
            },
            {
                path: "categoryallbooks/:name",
                element: <CategoryAllBooks />,
                loader: ({ params }) => fetch(`https://book-rental-back-git-main-moshiur-rahmans-projects-fe916e0b.vercel.app/books?subject=${params.name}`),

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