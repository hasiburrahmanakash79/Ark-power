import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import About from "../Pages/About/About";
import Home from "../Pages/HomePage/Home";
import NewsEvent from "../Pages/NewsEvent/NewsEvent";
import Contact from "../Pages/Contact/Contact";
import OurPolicy from "../Pages/About/OurPolicy";
import Directors from "../Pages/About/Directors";
import Management from "../Pages/About/Management";
import Products from "../Pages/Products/Products";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
      children:[
        {
          path: '/',
          element: <Home/>
        },
        {
          path: '/what-do',
          element: <About/>,
        },
        {
          path: '/policy',
          element: <OurPolicy/>
        },
        {
          path: '/directors',
          element: <Directors/>
        },
        {
          path: '/management',
          element: <Management/>
        },
        {
          path: '/products',
          element: <Products/>
        },
        {
          path: '/news-event',
          element: <NewsEvent/>
        },
        {
          path: '/contact',
          element: <Contact/>
        },
      ]
    },
  ]);
  export default router;