import { useContext, useState } from "react";
import { Bars3BottomRightIcon, XMarkIcon, ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/solid";
import { Link, useLocation } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const Links = [
    { name: "Home", link: "/" },
    { name: "Service", link: "/service" },
    { name: "Products", link: "/products" },
    { name: "News & Event", link: "/news-event" },
    { name: "About us", link:"/about-us", dropdown: true },
    { name: "Contact", link: "/contact" },
    { name: "Career", link: "/career" },
  ];

  const dropdownLinks = [
    { name: "What we do", link: "/what-do" },
    { name: "Our Policy", link: "/policy" }
  ];

  const [open, setOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const location = useLocation();

  const handleLinkClick = () => {
    setOpen(false); // Close the main menu
    setDropdownOpen(false); // Close the dropdown menu
  };

  const handleLogout = () => {
    logOut()
      .then(
        Swal.fire({
          icon: "success",
          title: "Log Out Successful",
          showConfirmButton: false,
          timer: 1500,
        })
      )
      .catch((error) => console.log(error));
  };

  return (
    <div className="shadow-md w-full fixed top-0 z-50 bg-white left-0">
      <div className="md:flex items-center justify-between  container mx-auto p-3">
        {/* logo section */}
        <Link to='/' className="font-bold text-2xl cursor-pointer flex items-center gap-1">
          <img
            src="https://i.ibb.co/61nBkFS/ARK-power-ltd-main.png"
            alt="Logo"
            className="md:w-72 w-48"
          />
        </Link>
        {/* Menu icon */}
        <div
          onClick={() => setOpen(!open)}
          className="absolute right-8 top-2 cursor-pointer md:hidden w-7 h-7"
        >
          {open ? <XMarkIcon /> : <Bars3BottomRightIcon />}
        </div>
        {/* link items */}
        <ul
          className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white bg-slate-50 md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            open ? "top-10" : "top-[-490px]"
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
          {
            user ? <button className="ml-8"  onClick={handleLogout}>Log out</button> : <></>
          }
          
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
