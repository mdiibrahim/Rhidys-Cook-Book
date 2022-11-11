import Main from "../Layout/Main";
import Error from "../Pages/404/404";
import AddServices from "../Pages/AddServices/AddServices";
import Blogs from "../Pages/Blogs/Blogs";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import MyReviews from "../Pages/MyReviews/MyReviews";
import Services from "../Pages/Services/Services";
import SignUp from "../Pages/SignUp/SignUp"
import PrivateRoute from "./PrivateRoute/PrivateRoute";
const { createBrowserRouter } = require("react-router-dom");

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                loader: () =>  fetch('https://rhidys-cook-book-server-side.vercel.app/services-at-home'),
                element: <Home></Home>,
            },
            {
                path: '/login',
                element: <Login></Login>,
            },
           
            {
                path: '/services',
                loader: () =>  fetch('https://rhidys-cook-book-server-side.vercel.app/services'),
                element: <Services></Services>,
            },
            {
                path: '/blogs',
                element: <Blogs></Blogs>
            },
            {
                path: '/*',
                element: <Error></Error>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/my-reviews',
                element: <PrivateRoute><MyReviews></MyReviews></PrivateRoute>,
            },
            {
                path: '/add-services',
                element: <PrivateRoute><AddServices></AddServices></PrivateRoute>,
            }
        ]
    }

]);