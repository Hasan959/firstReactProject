
import Root from "../components/layout/Root";
import Home from "../components/pages/Home";
import Product from "../components/pages/Products"

import Blogs from "../components/pages/Blogs";
import About from "../components/pages/About";
import Contact from "../components/pages/Contact";
import Login from "../components/auth/Login";
import Register from "../components/auth/Register";
import { createBrowserRouter } from "react-router";



const router= createBrowserRouter ([
    {
        path: '/',
        Component: Root,
        children: [
            {
                index: true,
                Component: Home
            },
            {
                path: 'products',
                Component: Product
                
            },
            {
                path: 'blogs',
                Component: Blogs
            },
            {
                path: 'contact',
                Component: Contact
            },
            {
                path: 'about',
                Component: About
            },
            {
                path: 'login',
                Component: Login
            },
            {
                path: 'register',
                Component: Register
            }


        ]
    }
]);
export default router