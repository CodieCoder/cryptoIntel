import React, { useContext } from "react"
import DesktopHeader from "./DesktopHeader"
import MobileHeader from "./MobileHeader"
import PagesContext from "../../Context"

const Header = () => {
  const { userDetails, login, logoutHandler } = useContext(PagesContext)
  return (
    <div className="container-fluid">
      <div className="d-none d-md-block">
        <DesktopHeader
          isLogin={login}
          userDetails={userDetails}
          logoutHandler={logoutHandler}
        />
      </div>
      <div className="d-block d-md-none">
        <MobileHeader
          isLogin={login}
          userDetails={userDetails}
          logoutHandler={logoutHandler}
        />
      </div>
    </div>
  )
}

export default Header
