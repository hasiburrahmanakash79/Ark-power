import { useState } from "react";
import { Bars3BottomRightIcon, XMarkIcon, ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/solid";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const Links = [
    { name: "Home", link: "/" },
    { name: "Service", link: "/service" },
    { name: "Products", link: "/products" },
    { name: "News & Event", link: "/news-event" },
    { name: "About us", dropdown: true },
    { name: "Contact", link: "/contact" },
    { name: "Career", link: "/career" },
  ];

  const dropdownLinks = [
    { name: "What we do", link: "/what-do" },
    { name: "Our Policy", link: "/policy" },
    { name: "Board of Directors", link: "/directors" },
    { name: "Management", link: "/management" },
  ];

  const [open, setOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const location = useLocation();

  const handleLinkClick = () => {
    setOpen(false); // Close the main menu
    setDropdownOpen(false); // Close the dropdown menu
  };

  return (
    <div className="shadow-md w-full fixed top-0 z-50 bg-white left-0">
      <div className="md:flex items-center justify-between  container mx-auto p-3">
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
            <li
              key={link.name}
              className="md:ml-8 md:my-0 my-5 relative"
              onMouseEnter={() => link.dropdown && setDropdownOpen(true)}
              onMouseLeave={() => link.dropdown && setDropdownOpen(false)}
              onClick={() => link.dropdown && setDropdownOpen(!dropdownOpen)}
            >
              <div className="flex items-center">
                <Link
                  to={link.link}
                  className={`text-gray-800 hover:text-blue-400 duration-500 ${
                    location.pathname === link.link ? "text-[#00ADF2]" : ""
                  }`}
                  onClick={handleLinkClick} // Close dropdown on link click
                >
                  {link.name}
                </Link>
                {link.dropdown && (
                  dropdownOpen ? 
                  <ChevronUpIcon className="w-3 h-3 ml-1 text-gray-800" />
                  : 
                  <ChevronDownIcon className="w-3 h-3 ml-1 text-gray-800" />
                )}
              </div>
              {link.dropdown && dropdownOpen && (
                <ul className="absolute bg-white shadow-md rounded-md md:block hidden md:group-hover:block md:w-40">
                  {dropdownLinks.map((dropdownLink) => (
                    <li key={dropdownLink.name} className="px-4 py-2">
                      <Link
                        to={dropdownLink.link}
                        className="text-gray-800 hover:text-blue-400 duration-500"
                        onClick={handleLinkClick} // Close dropdown on link click
                      >
                        {dropdownLink.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
              {link.dropdown && open && (
                <ul className="md:hidden bg-white shadow-md rounded-md md:w-40">
                  {dropdownLinks.map((dropdownLink) => (
                    <li key={dropdownLink.name} className="px-4 py-2">
                      <Link
                        to={dropdownLink.link}
                        className="text-gray-800 hover:text-blue-400 duration-500"
                        onClick={handleLinkClick} // Close dropdown on link click
                      >
                        {dropdownLink.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
