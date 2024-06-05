
import { useEffect, useState } from 'react'
import { Link, Outlet } from 'react-router-dom'
import {
  FaUser,
  FaHome,
  FaComment,
} from 'react-icons/fa'
import { AiFillNotification } from 'react-icons/ai'
import { FaImages } from 'react-icons/fa6'
import { MdHomeWork } from 'react-icons/md'
import { IconContext } from 'react-icons'
import arrow from '../assets/control.png'

const Dashboard = () => {
  const [open, setOpen] = useState(true)

  const isAdmin = true

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setOpen(false)
      } else {
        setOpen(true)
      }
    }
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  const iconMappings = {
    RoleHome: MdHomeWork,
    Users: FaUser,
    Home: FaHome,
    Photos: FaImages,
    Blog: FaComment,
    Notice: AiFillNotification,
  }

  const Menus = [
    {
      title: 'Admin Home',
      path: '/dashboard/adminHome',
      icon: iconMappings.RoleHome,
      role: 'admin',
      gap: true
    },
    {
      title: 'Manage Users',
      path: '/dashboard/manageUsers',
      icon: iconMappings.Users,
      role: 'admin',
    },
    {
      title: 'Create Features',
      path: '/dashboard/createFeature',
      icon: iconMappings.Notice,
      role: 'admin'
    },
    {
      title: 'Add Blog',
      path: '/dashboard/addBlog',
      icon: iconMappings.Blog,
      role: 'admin'
    },
    {
      title: 'Add Photo Gallery',
      path: '/dashboard/addPhoto',
      icon: iconMappings.Photos,
      role: 'admin'
    },
    {
      title: 'Home ',
      path: '/',
      icon: iconMappings.Home,
      role: 'general',
      gap: true
    }
  ]

  const adminMenus = Menus.filter(menu => menu.role === 'admin')
  const userMenus = Menus.filter(menu => menu.role === 'user')
  const generalMenus = Menus.filter(menu => menu.role === 'general')

  return (
    <div className='flex'>
      {/* Dashboard Sidebar content */}
      <div
        className={` ${
          open ? 'w-56 p-4' : 'w-14 text-center'
        }   h-screen  fixed left-0 top-0 bottom-0 bg-black text-white z-50 pt-8  duration-500 transition-all`}
      >
        <img
          src={arrow}
          className={`absolute cursor-pointer -right-3 top-9 w-7  
			 border-2 rounded-full  ${!open && 'rotate-180'}`}
          onClick={() => setOpen(!open)}
        />
        <ul
          className={` ${
            open ? '' : 'flex flex-col items-center justify-center'
          }`}
        >
          {isAdmin
            ? adminMenus.map((Menu, index) => (
              <Link to={Menu.path}   key={index} className={`flex rounded-md p-2 cursor-pointer hover: hover:bg-white hover:text-black text-sm items-center gap-x-4 ${
                Menu.gap ? 'mt-9' : 'mt-2'
              } ${index === 0 && ' hover:bg-white'}`}>
                <li
             
             className='flex items-center gap-x-4'
                >
                  
                    <IconContext.Provider value={{ className: 'react-icon' }}>
                      <Menu.icon />
                    </IconContext.Provider>
                    <span
                      className={`${
                        !open && 'hidden'
                      } origin-left duration-200`}
                    >
                      {Menu.title}
                    </span>
                  
                </li>
                </Link>
              ))
            : 
            // User menus
              userMenus.map((Menu, index) => (
                <Link to={Menu.path} key={index} className={`flex rounded-md p-2 cursor-pointer hover: hover:bg-primary text-sm items-center gap-x-4 ${
                  Menu.gap ? 'mt-9' : 'mt-2'
                } ${index === 0 && ' hover:bg-white'}`}>
                <li
                  
                  className='flex items-center gap-x-4'
                >
                  
                    <IconContext.Provider value={{ className: 'react-icon' }}>
                      <Menu.icon />
                    </IconContext.Provider>
                    <span
                      className={`${
                        !open && 'hidden'
                      } origin-left duration-200`}
                    >
                      {Menu.title}
                    </span>
                  
                </li>
                </Link>
              ))}
          {generalMenus.map((Menu, index) => (
            <Link  to={Menu.path}  key={index} className={`flex rounded-md p-2 cursor-pointer hover: hover:bg-white  hover:text-black  text-sm items-center gap-x-4 ${
              Menu.gap ? 'mt-9' : 'mt-2'
            } ${index === 0 && ' hover:bg-primary'}`}>
            <li
             
              className='flex items-center gap-x-4'
            >
              
                <IconContext.Provider value={{ className: 'react-icon' }}>
                  <Menu.icon />
                </IconContext.Provider>
                <span
                  className={`${!open && 'hidden'} origin-left duration-200`}
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
          open ? 'pl-60 pr-4' : 'pl-16 pr-2'
        }  flex-1  overflow-y-auto  duration-500 transition-all h-[100vh] ${
          isAdmin
            ? ''
            :''
        }`}
      >
        <Outlet></Outlet>
      </div>
    </div>
  )
}

export default Dashboard
