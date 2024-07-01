import { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { FaUser, FaHome } from "react-icons/fa";
import {
  FaFileMedical,
  FaFileInvoice,
  FaBook,
  FaBookMedical,
  FaClipboardList,
  FaClipboardCheck
} from "react-icons/fa6";
import { MdHomeWork } from "react-icons/md";
import { IconContext } from "react-icons";
import arrow from "../assets/control.png";

const Dashboard = () => {
  const [open, setOpen] = useState(true);

  const isAdmin = true;

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
  };

  const Menus = [
    {
      title: "Admin Home",
      path: "/dashboard",
      icon: iconMappings.RoleHome,
      role: "admin",
      gap: true,
    },
    {
      title: "Manage Admin",
      path: "/dashboard/manageAdmin",
      icon: iconMappings.Users,
      role: "admin",
    },
    {
      title: "Add Product",
      path: "/dashboard/addProduct",
      icon: iconMappings.Product_add,
      role: "admin",
    },
    {
      title: "Manage Product",
      path: "/dashboard/manageProducts",
      icon: iconMappings.Product_manage,
      role: "admin",
    },
    {
      title: "Add News",
      path: "/dashboard/addNews",
      icon: iconMappings.News,
      role: "admin",
    },
    {
      title: "Manage News",
      path: "/dashboard/manageNews",
      icon: iconMappings.News_manage,
      role: "admin",
    },
    {
      title: "Add Career",
      path: "/dashboard/addCareer",
      icon: iconMappings.Career,
      role: "admin",
    },
    {
      title: "Manage Career",
      path: "/dashboard/manageCareer",
      icon: iconMappings.Career_manage,
      role: "admin",
    },
    {
      title: "Home ",
      path: "/",
      icon: iconMappings.Home,
      role: "general",
      gap: true,
    },
  ];

  const adminMenus = Menus.filter((menu) => menu.role === "admin");
  const userMenus = Menus.filter((menu) => menu.role === "user");
  const generalMenus = Menus.filter((menu) => menu.role === "general");

  return (
    <div className="flex">
      {/* Dashboard Sidebar content */}
      <div
        className={` ${
          open ? "w-56 p-4" : "w-14 text-center"
        }   h-screen fixed left-0 top-0 bottom-0 bg-black text-white z-50 pt-8  duration-500 transition-all`}
      >
        <img
          src={arrow}
          className={`absolute cursor-pointer -right-3 top-9 w-7  
			 border-2 rounded-full  ${!open && "rotate-180"}`}
          onClick={() => setOpen(!open)}
        />
        <ul
          className={` ${
            open ? "" : "flex flex-col items-center justify-center"
          }`}
        >
          {isAdmin
            ? adminMenus.map((Menu, index) => (
                <Link
                  to={Menu.path}
                  key={index}
                  className={`flex rounded-md p-2 cursor-pointer hover: hover:bg-white hover:text-black text-sm items-center gap-x-4 ${
                    Menu.gap ? "mt-9" : "mt-2"
                  } ${index === 0 && " hover:bg-white"}`}
                >
                  <li className="flex items-center gap-x-4">
                    <IconContext.Provider value={{ className: "react-icon" }}>
                      <Menu.icon />
                    </IconContext.Provider>
                    <span
                      className={`${
                        !open && "hidden"
                      } origin-left duration-200`}
                    >
                      {Menu.title}
                    </span>
                  </li>
                </Link>
              ))
            : // User menus
              userMenus.map((Menu, index) => (
                <Link
                  to={Menu.path}
                  key={index}
                  className={`flex rounded-md p-2 cursor-pointer hover: hover:bg-primary text-sm items-center gap-x-4 ${
                    Menu.gap ? "mt-9" : "mt-2"
                  } ${index === 0 && " hover:bg-white"}`}
                >
                  <li className="flex items-center gap-x-4">
                    <IconContext.Provider value={{ className: "react-icon" }}>
                      <Menu.icon />
                    </IconContext.Provider>
                    <span
                      className={`${
                        !open && "hidden"
                      } origin-left duration-200`}
                    >
                      {Menu.title}
                    </span>
                  </li>
                </Link>
              ))}
          {generalMenus.map((Menu, index) => (
            <Link
              to={Menu.path}
              key={index}
              className={`flex rounded-md p-2 cursor-pointer hover: hover:bg-white  hover:text-black  text-sm items-center gap-x-4 ${
                Menu.gap ? "mt-9" : "mt-2"
              } ${index === 0 && " hover:bg-primary"}`}
            >
              <li className="flex items-center gap-x-4">
                <IconContext.Provider value={{ className: "react-icon" }}>
                  <Menu.icon />
                </IconContext.Provider>
                <span
                  className={`${!open && "hidden"} origin-left duration-200`}
                >
                  {Menu.title}
                </span>
              </li>
            </Link>
          ))}
        </ul>
      </div>
      {/* Dashboard main content */}
      <div
        className={` ${
          open ? "pl-60 pr-4" : "pl-16 pr-2"
        } duration-500 transition-all h-[100vh] mx-auto${
          isAdmin ? "" : ""
        }`}
      >
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
