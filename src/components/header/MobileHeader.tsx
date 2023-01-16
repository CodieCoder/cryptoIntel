import React, { useState, useContext } from "react"
import "./MobileHeader.scss"
import { LOGINMODAL, SITEINFO, USERDETAILS } from "../../Constants"
import DesktopHeaderUser from "./headerUser/DesktopHeaderUser"
import { NavLink, useNavigate } from "react-router-dom"
import { Offcanvas } from "react-bootstrap"
import { MobileMenu } from "./HomeLinks"
import PagesContext from "../../Context"

interface IDesktopHeader {
  isLogin: boolean
  userDetails: USERDETAILS | undefined
  logoutHandler: () => void
}

const MobileHeader: React.FC<IDesktopHeader> = ({
  isLogin,
  userDetails,
  logoutHandler,
}) => {
  const navigate = useNavigate()
  const [isOverlayOpen, setIsOverlayOpen] = useState(false)

  const { setShowLoginModal, setLoginModalTab } = useContext(PagesContext)

  const goToPage = (page: string) => {
    navigate(page)
    setIsOverlayOpen(false)
  }
  return (
    <div className="container-fluid">
      <nav className="navbar fixed-top mobile-top-header">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            // type="button"
            onClick={() => setIsOverlayOpen(true)}
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {isLogin && userDetails ? (
            <div className="mobile-top-header-account-div">
              <DesktopHeaderUser
                userDetails={userDetails}
                logout={logoutHandler}
              />
            </div>
          ) : (
            <div className="mobile-top-header-account">
              <div
                className="mobile-top-header-links"
                onClick={() => {
                  setLoginModalTab(LOGINMODAL.Signup)
                  setShowLoginModal(true)
                }}
              >
                Sign up
              </div>
              <div
                className="mobile-top-header-links"
                onClick={() => {
                  setLoginModalTab(LOGINMODAL.Login)
                  setShowLoginModal(true)
                }}
              >
                Log in
              </div>
            </div>
          )}

          <Offcanvas
            show={isOverlayOpen}
            onHide={() => setIsOverlayOpen(false)}
            backdrop="true"
            className="mobile-top-header-drawer"
          >
            <Offcanvas.Header className="mobile-top-header-drawer" closeButton>
              <Offcanvas.Title>{SITEINFO.Name}</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body className=" mobile-top-menu">
              {MobileMenu(goToPage)}
            </Offcanvas.Body>
            {isLogin && userDetails && (
              <div className="mobile-top-menu-drawer-bottom">
                <DesktopHeaderUser
                  userDetails={userDetails}
                  logout={logoutHandler}
                  onClickUserMenu={() => setIsOverlayOpen(false)}
                />
              </div>
            )}
          </Offcanvas>
        </div>
      </nav>
    </div>
  )
}

export default MobileHeader
