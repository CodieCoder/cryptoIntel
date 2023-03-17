import React, {
  useContext,
  Dispatch,
  ReactElement,
  SetStateAction,
  useEffect,
  useState,
} from "react"
import { Container, Spinner, Tab, Tabs } from "react-bootstrap"
import { NavLink } from "react-router-dom"
import { USERPAGES } from "./constants"
import UserContext from "./context"
import "./index.scss"
import Profile from "./Profile"
import Settings from "./Settings"
import UserDashboard from "./Dashboard"

const UserLayout = (props: {
  children: ReactElement<any, any>
  activePage: string
  setActivePage: Dispatch<SetStateAction<string>>
}) => {
  // const {  } = useContext(UserContext)
  const { children, activePage, setActivePage } = props

  const [key, setKey] = useState<string>(USERPAGES.home)
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
    // <section className="container user-layout">
    //   <div className="user-layout-top">
    //     <div className="user-layout-menu">
    //       <div className="row">{menuLinks()}</div>
    //     </div>
    //   </div>
    //   <div className="user-layout-body">{children}</div>
    // </section>
    <Container className="justify-content-md-center">
      <Tabs
        id="controlled-tab-example"
        // activeKey={key}
        // onSelect={(k) => setKey(k)}
        className="mb-3"
      >
        <Tab eventKey={USERPAGES.home} title="Home">
          <UserDashboard />
        </Tab>
        <Tab eventKey={USERPAGES.profile} title="Profile">
          <Profile />
        </Tab>
        <Tab eventKey={USERPAGES.settings} title="Settings">
          <Settings />
        </Tab>
      </Tabs>
    </Container>
  )
}

export default UserLayout
