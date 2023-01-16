import React, { useContext } from "react"
import { NavLink } from "react-router-dom"
import { LOGINMODAL, USERDETAILS } from "../../Constants"
import PagesContext from "../../Context"
import CurrencyDropdown from "../CurrencyDropdown"
import "./DesktopHeader.scss"
import DesktopHeaderUser from "./headerUser/DesktopHeaderUser"
import { DesktopMenu } from "./HomeLinks"

interface IDesktopHeader {
  isLogin: boolean
  userDetails: USERDETAILS | undefined
  logoutHandler: () => void
}

const DesktopHeader: React.FC<IDesktopHeader> = ({
  isLogin,
  userDetails,
  logoutHandler,
}) => {
  const { setShowLoginModal, setLoginModalTab } = useContext(PagesContext)
  return (
    <div className="container">
      <div className="desktop-top-header">
        <div className="desktop-top-header-left">
          <div className="desktop-top-header-logo">
            <NavLink to="/">Home</NavLink>
          </div>
        </div>

        <div className="desktop-top-header-right">
          <DesktopMenu />
          <div className="desktop-top-header-right-divs">
            <div className="desktop-top-header-currency">
              <CurrencyDropdown />
            </div>
            {isLogin && userDetails ? (
              <DesktopHeaderUser
                userDetails={userDetails}
                logout={logoutHandler}
              />
            ) : (
              <div className="desktop-top-header-account">
                <div
                  className="desktop-top-header-links"
                  onClick={() => {
                    setLoginModalTab(LOGINMODAL.Signup)
                    setShowLoginModal(true)
                  }}
                >
                  Sign up
                </div>
                <div
                  className="desktop-top-header-links"
                  onClick={() => {
                    setLoginModalTab(LOGINMODAL.Login)
                    setShowLoginModal(true)
                  }}
                >
                  Log in
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default DesktopHeader
