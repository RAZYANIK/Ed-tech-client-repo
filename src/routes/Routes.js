import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Blog from "../page/Blog";
import Checkout from "../page/Checkout";
import CourseDetails from "../page/CourseDetails";
import CoursePage from "../page/CoursePage";
import Faq from "../page/Faq";
import Home from "../page/Home/Home";
import Login from "../page/Login";
import Signup from "../page/Signup";
import PrivateRoute from "./PrivateRoute";


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
                path: "/course/:id",
                element: <CourseDetails></CourseDetails>,
                loader: ({ params }) =>
                    fetch(
                        `https://ed-tech-server-razyanik.vercel.app/course/${params.id}`
                    ),
            },
            {
                path: '/checkout/:id',
                element: (<PrivateRoute><Checkout></Checkout></PrivateRoute>),
                loader: ({ params }) =>
                    fetch(`https://ed-tech-server-razyanik.vercel.app/course/${params.id}`)
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
        element: <div><img className='d-flex mx-auto' src="https://studio.uxpincdn.com/studio/wp-content/uploads/2021/06/10-error-404-page-examples-for-UX-design.png.webp" alt="" /></div>,
    },
])