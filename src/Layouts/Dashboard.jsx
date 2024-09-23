import { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { FaUser, FaHome } from "react-icons/fa";
import {
  FaFileMedical,
  FaFileInvoice,
  FaBook,
  FaBookMedical,
  FaClipboardList,
  FaClipboardCheck,
  FaScrewdriverWrench

} from "react-icons/fa6";
import { MdHomeWork } from "react-icons/md";
import { IconContext } from "react-icons";
import arrow from "../assets/control.png";
import useAdmin from "../Hooks/useAdmin";
import LoadingSpinner from "../Hooks/Loading/LoadingSpinner";

// const Dashboard = () => {
//   const [open, setOpen] = useState(true)
//   const {isAdmin, isAdminLoading} = useAdmin();

//   useEffect(() => {
//     const handleResize = () => {
//       if (window.innerWidth < 768) {
//         setOpen(false);
//       } else {
//         setOpen(true);
//       }
//     };
//     handleResize();
//     window.addEventListener("resize", handleResize);
//     return () => {
//       window.removeEventListener("resize", handleResize);
//     };
//   }, []);

//   const iconMappings = {
//     RoleHome: MdHomeWork,
//     Users: FaUser,
//     Home: FaHome,
//     News: FaBookMedical,
//     News_manage: FaBook,
//     Career: FaClipboardList,
//     Career_manage: FaClipboardCheck,
//     Product_add: FaFileMedical,
//     Product_manage: FaFileInvoice,
//   };

//   const Menus = [
//     {
//       title: "Admin Home",
//       path: "/dashboard",
//       icon: iconMappings.RoleHome,
//       role: "admin",
//       gap: true,
//     },
//     {
//       title: "Manage Admin",
//       path: "/dashboard/manageAdmin",
//       icon: iconMappings.Users,
//       role: "admin",
//     },
//     {
//       title: "Manage Product",
//       path: "/dashboard/manageProducts",
//       icon: iconMappings.Product_manage,
//       role: "admin",
//     },
//     {
//       title: "Manage News",
//       path: "/dashboard/manageNews",
//       icon: iconMappings.News_manage,
//       role: "admin",
//     },
//     {
//       title: "Manage Career",
//       path: "/dashboard/manageCareer",
//       icon: iconMappings.Career_manage,
//       role: "admin",
//     },

//     {
//       title: "Add Product",
//       path: "/dashboard/addProduct",
//       icon: iconMappings.Product_add,
//       role: "admin",
//       gap: true,
//     },
//     {
//       title: "Add News",
//       path: "/dashboard/addNews",
//       icon: iconMappings.News,
//       role: "admin",
//     },
//     {
//       title: "Add Career",
//       path: "/dashboard/addCareer",
//       icon: iconMappings.Career,
//       role: "admin",
//     },
//     {
//       title: "Home ",
//       path: "/",
//       icon: iconMappings.Home,
//       role: "general",
//       gap: true,
//     },
//   ];

//   const adminMenus = Menus.filter((menu) => menu.role === "admin");
//   const userMenus = Menus.filter((menu) => menu.role === "user");
//   const generalMenus = Menus.filter((menu) => menu.role === "general");

//   if (isAdminLoading) {
//     return <LoadingSpinner />;
//   }

//   return (
//     <div className="flex">
//       {/* Dashboard Sidebar content */}
//       <div
//         className={` ${
//           open ? "w-56 p-4" : "w-14 text-center"
//         }   h-screen fixed left-0 top-0 bottom-0 bg-black text-white z-50 pt-8  duration-500 transition-all`}
//       >
//         <img
//           src={arrow}
//           className={`absolute cursor-pointer -right-3 top-9 w-7  
// 			 border-2 rounded-full  ${!open && "rotate-180"}`}
//           onClick={() => setOpen(!open)}
//         />
//         <ul
//           className={` ${
//             open ? "" : "flex flex-col items-center justify-center"
//           }`}
//         >
//           {isAdmin
//             ? adminMenus.map((Menu, index) => (
//                 <Link
//                   to={Menu.path}
//                   key={index}
//                   className={`flex rounded-md p-2 cursor-pointer hover: hover:bg-white hover:text-black text-sm items-center gap-x-4 ${
//                     Menu.gap ? "mt-9" : "mt-2"
//                   } ${index === 0 && " hover:bg-white"}`}
//                 >
//                   <li className="flex items-center gap-x-4">
//                     <IconContext.Provider value={{ className: "react-icon" }}>
//                       <Menu.icon />
//                     </IconContext.Provider>
//                     <span
//                       className={`${
//                         !open && "hidden"
//                       } origin-left duration-200`}
//                     >
//                       {Menu.title}
//                     </span>
//                   </li>
//                 </Link>
//               ))
//             : // User menus
//               userMenus.map((Menu, index) => (
//                 <Link
//                   to={Menu.path}
//                   key={index}
//                   className={`flex rounded-md p-2 cursor-pointer hover: hover:bg-primary text-sm items-center gap-x-4 ${
//                     Menu.gap ? "mt-9" : "mt-2"
//                   } ${index === 0 && " hover:bg-white"}`}
//                 >
//                   <li className="flex items-center gap-x-4">
//                     <IconContext.Provider value={{ className: "react-icon" }}>
//                       <Menu.icon />
//                     </IconContext.Provider>
//                     <span
//                       className={`${
//                         !open && "hidden"
//                       } origin-left duration-200`}
//                     >
//                       {Menu.title}
//                     </span>
//                   </li>
//                 </Link>
//               ))}
//           {generalMenus.map((Menu, index) => (
//             <Link
//               to={Menu.path}
//               key={index}
//               className={`flex rounded-md p-2 cursor-pointer hover: hover:bg-white  hover:text-black  text-sm items-center gap-x-4 ${
//                 Menu.gap ? "mt-9" : "mt-2"
//               } ${index === 0 && " hover:bg-primary"}`}
//             >
//               <li className="flex items-center gap-x-4">
//                 <IconContext.Provider value={{ className: "react-icon" }}>
//                   <Menu.icon />
//                 </IconContext.Provider>
//                 <span
//                   className={`${!open && "hidden"} origin-left duration-200`}
//                 >
//                   {Menu.title}
//                 </span>
//               </li>
//             </Link>
//           ))}
//         </ul>
//       </div>
//       {/* Dashboard main content */}
//       <div
//         className={` ${
//           open ? "pl-60 pr-4" : "pl-16 pr-2"
//         } duration-500 transition-all h-[100vh] mx-auto p-10${
//           isAdmin ? "" : ""
//         }`}
//       >
//         <Outlet></Outlet>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;


const Dashboard = () => {
  const [open, setOpen] = useState(true);
  const [productsOpen, setProductsOpen] = useState(false);
  const [newsOpen, setNewsOpen] = useState(false);
  const [careerOpen, setCareerOpen] = useState(false);
  const [appearanceOpen, setAppearanceOpen] = useState(false); // State for appearance submenu
  const { isAdmin, isAdminLoading } = useAdmin();

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setOpen(false);
      } else {
        setOpen(true);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const iconMappings = {
    RoleHome: MdHomeWork,
    Users: FaUser,
    Home: FaHome,
    News: FaBookMedical,
    News_manage: FaBook,
    Career: FaClipboardList,
    Career_manage: FaClipboardCheck,
    Product_add: FaFileMedical,
    Product_manage: FaFileInvoice,
    settings: FaScrewdriverWrench
  };

  const Menus = [
    {
      title: "Admin Home",
      path: "/dashboard",
      icon: iconMappings.RoleHome,
      role: "admin",
    },
    {
      title: "Users",
      path: "/dashboard/manageAdmin",
      icon: iconMappings.Users,
      role: "admin",
    },
    {
      title: "Products",
      icon: iconMappings.Product_manage,
      role: "admin",
      submenu: [
        {
          title: "Add Product",
          path: "/dashboard/addProduct",
          icon: iconMappings.Product_add,
        },
        {
          title: "Manage Product",
          path: "/dashboard/manageProducts",
          icon: iconMappings.Product_manage,
        },
      ],
    },
    {
      title: "News",
      icon: iconMappings.News_manage,
      role: "admin",
      submenu: [
        {
          title: "Add News",
          path: "/dashboard/addNews",
          icon: iconMappings.News,
        },
        {
          title: "Manage News",
          path: "/dashboard/manageNews",
          icon: iconMappings.News_manage,
        },
      ],
    },
    {
      title: "Career",
      icon: iconMappings.Career_manage,
      role: "admin",
      submenu: [
        {
          title: "Add Career",
          path: "/dashboard/addCareer",
          icon: iconMappings.Career,
        },
        {
          title: "Manage Career",
          path: "/dashboard/manageCareer",
          icon: iconMappings.Career_manage,
        },
      ],
    },
    {
      title: "Appearance",
      icon: iconMappings.settings,
      role: "admin",
      submenu: [
        {
          title: "Banner Content",
          path: "/dashboard/bannerContent",
        },
        {
          title: "Footer Content",
          path: "/dashboard/footerContent",
        },
      ],
    },
  ];

  const adminMenus = Menus.filter((menu) => menu.role === "admin");

  if (isAdminLoading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="flex">
      {/* Dashboard Sidebar content */}
      <div
        className={` ${open ? "w-56 p-4" : "w-14 text-center"} h-screen fixed left-0 top-0 bottom-0 bg-black text-white z-50 pt-8 duration-500 transition-all`}
      >
        <img
          src={arrow}
          className={`absolute cursor-pointer -right-3 top-9 w-7 border-2 rounded-full ${!open && "rotate-180"}`}
          onClick={() => setOpen(!open)}
        />
        <ul className={`${open ? "" : "flex flex-col items-center justify-center"}`}>
          <Link to='/' className="border-b-2 flex items-center gap-3 pb-2 ps-1">
            <FaHome/> <h1 className={`${open ? "" : "hidden"}`}>ARK POWER LTD.</h1>
          </Link>
          {isAdmin &&
            adminMenus.map((menu, index) => (
              <div key={index}>
                {menu.submenu ? (
                  <div
                    onMouseEnter={() => {
                      if (menu.title === "Products") setProductsOpen(true);
                      if (menu.title === "News") setNewsOpen(true);
                      if (menu.title === "Career") setCareerOpen(true);
                      if (menu.title === "Appearance") setAppearanceOpen(true); // Handle appearance
                    }}
                    onMouseLeave={() => {
                      if (menu.title === "Products") setProductsOpen(false);
                      if (menu.title === "News") setNewsOpen(false);
                      if (menu.title === "Career") setCareerOpen(false);
                      if (menu.title === "Appearance") setAppearanceOpen(false); // Handle appearance
                    }}
                    className="relative"
                  >
                    <div className="flex items-center p-2 cursor-pointer hover:bg-white hover:text-black text-sm gap-x-4">
                      <IconContext.Provider value={{ className: "react-icon" }}>
                        <menu.icon />
                      </IconContext.Provider>
                      <span className={`${!open && "hidden"} origin-left duration-200`}>
                        {menu.title}
                      </span>
                    </div>

                    {/* Dropdown menu */}
                    {(productsOpen && menu.title === "Products") ||
                    (newsOpen && menu.title === "News") ||
                    (careerOpen && menu.title === "Career") ||
                    (appearanceOpen && menu.title === "Appearance") ? (
                      <ul className="absolute left-full top-0 w-44 bg-gray-800 text-white p-2 shadow-lg rounded-lg">
                        {menu.submenu.map((sub, subIndex) => (
                          <Link to={sub.path} key={subIndex} className="flex items-center p-2 hover:bg-white hover:text-black">
                            <IconContext.Provider value={{ className: "react-icon" }}>
                              {sub.icon && <sub.icon />}
                            </IconContext.Provider>
                            <span className="ml-2">{sub.title}</span>
                          </Link>
                        ))}
                      </ul>
                    ) : null}
                  </div>
                ) : (
                  <Link
                    to={menu.path}
                    className={`flex rounded-md p-2 cursor-pointer hover:bg-white hover:text-black text-sm items-center gap-x-4 ${
                      menu.gap ? "mt-9" : "mt-2"
                    }`}
                  >
                    <IconContext.Provider value={{ className: "react-icon" }}>
                      <menu.icon />
                    </IconContext.Provider>
                    <span className={`${!open && "hidden"} origin-left duration-200`}>{menu.title}</span>
                  </Link>
                )}
              </div>
            ))}
        </ul>
      </div>

      {/* Dashboard main content */}
      <div className={`${open ? "pl-60 pr-4" : "pl-16 pr-2"} duration-500 transition-all h-[100vh] mx-auto p-10`}>
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;

