import React from "react"
import NavDropdown from "react-bootstrap/NavDropdown"
import { USERDETAILS } from "../../../Constants"
import { BsPersonCircle, BsPerson } from "react-icons/bs"
import { CiLogout } from "react-icons/ci"
import { RxDashboard } from "react-icons/rx"
import { IoSettingsOutline } from "react-icons/io5"
import { USERPAGES } from "../../../pages/User/constants"
import { useNavigate } from "react-router-dom"

interface IDesktopHeaderUser {
  userDetails: USERDETAILS
  logout: () => void
  onClickUserMenu?: () => void
}
const DesktopHeaderUser: React.FC<IDesktopHeaderUser> = ({
  userDetails,
  logout,
  onClickUserMenu,
}) => {
  const navigate = useNavigate()

  const getUserFirstname = () => {
    let firstName: any = userDetails.fullname.split(" ")
    firstName = firstName[0]
    const icon = (
      <span>
        <BsPersonCircle /> &nbsp; {firstName}
      </span>
    )
    return icon
  }

  const onClickHandler = (route: USERPAGES) => {
    onClickUserMenu && onClickUserMenu()
    navigate(`/user/${route}`)
  }

  return (
    <NavDropdown title={getUserFirstname()}>
      <NavDropdown.Item onClick={() => onClickHandler(USERPAGES.home)}>
        <RxDashboard /> Dashboard
      </NavDropdown.Item>
      <NavDropdown.Item onClick={() => onClickHandler(USERPAGES.profile)}>
        <BsPerson /> Profile
      </NavDropdown.Item>
      <NavDropdown.Item onClick={() => onClickHandler(USERPAGES.settings)}>
        <IoSettingsOutline /> Settings
      </NavDropdown.Item>
      <NavDropdown.Divider />
      <NavDropdown.Item onClick={logout}>
        <CiLogout /> Log out
      </NavDropdown.Item>
    </NavDropdown>
  )
}

export default DesktopHeaderUser
