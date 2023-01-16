import React, {
  useContext,
  Dispatch,
  ReactElement,
  SetStateAction,
  useEffect,
} from "react"
import { Spinner } from "react-bootstrap"
import { NavLink } from "react-router-dom"
import { USERPAGES } from "./constants"
import UserContext from "./context"
import "./index.scss"

const UserLayout = (props: {
  children: ReactElement<any, any>
  activePage: string
  setActivePage: Dispatch<SetStateAction<string>>
}) => {
  // const {  } = useContext(UserContext)
  const { children, activePage, setActivePage } = props

  const switchPages = (page: string) => {
    setActivePage(page)
  }
  const menuLinks = () => {
    return Object.values(USERPAGES).map((menuItem: string, index: number) =>
      activePage === menuItem ? (
        <NavLink
          to={`/user/${menuItem}`}
          key={index}
          className={`col user-layout-menu-links user-layout-menu-links-active`}
        >
          {menuItem}
        </NavLink>
      ) : (
        <NavLink
          to={`/user/${menuItem}`}
          onClick={() => switchPages(menuItem)}
          key={index}
          className={`col user-layout-menu-links `}
        >
          {menuItem}
        </NavLink>
      )
    )
  }

  return (
    <section className="container user-layout">
      <div className="user-layout-top">
        <div className="user-layout-menu">
          <div className="row">{menuLinks()}</div>
        </div>
      </div>
      <div className="user-layout-body">{children}</div>
    </section>
  )
}

export default UserLayout
