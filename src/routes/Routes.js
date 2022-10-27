import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Blog from "../page/Blog";
import CourseDetails from "../page/CourseDetails";
import CoursePage from "../page/CoursePage";
import Faq from "../page/Faq";
import Home from "../page/Home/Home";
import Login from "../page/Login";
import Signup from "../page/Signup";
import NotFound from "./NotFound";


export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/course',
                element: <CoursePage></CoursePage>,
                loader: () => fetch('https://ed-tech-server-razyanik.vercel.app/course')
            },
            {
                path: "/courses/:id",
                element: <CourseDetails></CourseDetails>,
                loader: ({ params }) =>
                    fetch(
                        `https://ed-tech-server-razyanik.vercel.app/course/${params.id}`
                    ),
            },
            {
                path: "/faq",
                element: <Faq></Faq>,
            },
            {
                path: "/blog",
                element: <Blog></Blog>,
            },
            {
                path: "/login",
                element: <Login></Login>,
            },
            {
                path: "/signup",
                element: <Signup></Signup>,
            },

        ]
    },
    {
        path: "/*",
        element: <NotFound></NotFound>,
    },
])