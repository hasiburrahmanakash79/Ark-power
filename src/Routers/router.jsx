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
import Dashboard from "../Layouts/Dashboard";
import ManageProducts from "../Pages/AdminDashboard/ManageProducts/ManageProducts";
import AddProduct from "../Pages/AdminDashboard/AddProduct/AddProduct";
import ProductDetails from "../Pages/Products/ProductDetails";
import NewsDetails from "../Pages/NewsEvent/NewsDetails";
import AddNews from "../Pages/AdminDashboard/AddNews/AddNews";
import ManageNewsAndEvents from "../Pages/AdminDashboard/ManageNewsAndEvents/ManageNewsAndEvents";
import Services from "../Pages/Services/Services";
import AddCareer from "../Pages/AdminDashboard/AddCareer/AddCareer";
import Career from "../Pages/Career/Career";
import AdminHome from "../Pages/AdminDashboard/AdminHome/AdminHome";

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
          path: '/ProductDetails/:id',
          element: <ProductDetails/>
        },
        {
          path: '/service',
          element: <Services/>
        },
        {
          path: '/news-event',
          element: <NewsEvent/>
        },
        {
          path: '/newsDetails/:id',
          element: <NewsDetails/>
        },
        {
          path: '/contact',
          element: <Contact/>
        },
        {
          path: '/career',
          element: <Career/>
        },
      ]
    },
    {
      path: '/dashboard',
      element: <Dashboard/>,
      children: [
        {
          path: 'adminHome',
          element: <AdminHome/>
        },
        {
          path: 'manageProducts',
          element: <ManageProducts/>
        },
        {
          path: 'addProduct',
          element: <AddProduct/>
        },
        {
          path: 'addNews',
          element: <AddNews/>
        },
        {
          path: 'manageNews',
          element: <ManageNewsAndEvents/>
        },
        {
          path: 'addCareer',
          element: <AddCareer/>
        },
      ]
    },
  ]);
  export default router;