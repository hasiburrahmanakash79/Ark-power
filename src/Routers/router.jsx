import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import About from "../Pages/About/About";
import Home from "../Pages/HomePage/Home";
import Products from "../Pages/Products/Products";
import NewsEvent from "../Pages/NewsEvent/NewsEvent";
import Contact from "../Pages/Contact/Contact";

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