import { useState } from "react";
import { Bars3BottomRightIcon, XMarkIcon } from "@heroicons/react/24/solid";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const Links = [
    { name: "Home", link: "/" },
    { name: "Service", link: "/service" },
    { name: "Products", link: "/products" },
    { name: "News & Event", link: "/news-event" },
    { name: "About us", link: "/about" },
    { name: "Contact", link: "/contact" },
  ];

  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <div className="shadow-md w-full fixed top-0 z-50 left-0">
      <div className="md:flex items-center justify-between bg-white container mx-auto p-3">
        {/* logo section */}
        <Link to='/' className="font-bold text-2xl cursor-pointer flex items-center gap-1">
          <img
            src="https://www.arkpowerltd.com.bd/assets/images/arkpower/logo.jpg"
            alt="Logo"
            className="md:w-72 w-48"
          />
        </Link>
        {/* Menu icon */}
        <div
          onClick={() => setOpen(!open)}
          className="absolute right-8 top-5 cursor-pointer md:hidden w-7 h-7"
        >
          {open ? <XMarkIcon /> : <Bars3BottomRightIcon />}
        </div>
        {/* link items */}
        <ul
          className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static md:bg-white bg-slate-50 md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            open ? "top-16" : "top-[-490px]"
          }`}
        >
          {Links.map((link) => (
            <li key={link.name} className="md:ml-8 md:my-0 my-5">
              <a
                href={link.link}
                className={`text-gray-800 hover:text-blue-400 duration-500 ${
                  location.pathname === link.link ? "text-[#00ADF2]" : ""
                }`}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
