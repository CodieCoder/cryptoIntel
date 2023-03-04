import { VscHome } from "react-icons/vsc"
import { GrBitcoin } from "react-icons/gr"
import { TbNews } from "react-icons/tb"
import { MdOutlineContactSupport } from "react-icons/md"
import { TbHeartHandshake } from "react-icons/tb"
import { FaUserPlus } from "react-icons/fa"
import { CiLogin } from "react-icons/ci"
import { NavLink } from "react-router-dom"

export const SitePages = [
  {
    title: "Home",
    path: "/",
    icon: <VscHome />,
  },
  {
    title: "Coins",
    path: "/coins",
    icon: <GrBitcoin />,
  },
  {
    title: "News",
    path: "/news",
    icon: <TbNews />,
  },
  {
    title: "Contact",
    path: "/contact",
    icon: <MdOutlineContactSupport />,
  },
  {
    title: "About",
    path: "/about",
    icon: <TbHeartHandshake />,
  },
  {
    title: "Join us",
    path: "/registration",
    icon: <FaUserPlus />,
  },
  {
    title: "Login",
    path: "/login",
    icon: <CiLogin />,
  },
]

export const MobileMenu = (fn: (value: string) => void) => {
  return (
    <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
      {SitePages.map((link, index) => {
        if (link.title === "Login" || link.title === "Join us") return null
        return (
          <li
            key={index}
            className="mobile-top-menu-links"
            onClick={() => fn(link.path)}
          >
            <div className="mobile-top-memu-link-icon">{link.icon}</div>
            <div className="mobile-top-memu-link-title">{link.title}</div>
          </li>
        )
      })}
    </ul>
  )
}

export const DesktopMenu = () => {
  return (
    <div className="desktop-top-header-menu">
      {SitePages.map((link, index) => {
        if (
          link.title === "Home" ||
          link.title === "Login" ||
          link.title === "Join us"
        )
          return null
        return (
          <div
            className="desktop-top-header-menus"
            key={index}
            // onClick={() => fn(link.path)}
          >
            <NavLink to={link.path}>{link.title}</NavLink>
          </div>
        )
      })}
    </div>
  )
}
