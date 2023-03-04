import React, { useEffect, useMemo, useState } from "react"
import { useNavigate } from "react-router-dom"
import { USERDETAILS } from "../../Constants"
import {
  getUserDetails,
  isUserLogin,
  logoutUser,
} from "../../utils/localStorage"
import UserContext from "./context"

const UserProvider = (props: { children: React.ReactNode }) => {
  const NavigateTo = useNavigate()
  const { children } = props
  const [isLogin, setIsLogin] = useState(false)
  const [userDetails, setUserDetails] = useState<USERDETAILS>()

  useEffect(() => {
    const checkLogin = isUserLogin()
    const userData = getUserDetails()
    if (checkLogin === true && userData) {
      setIsLogin(checkLogin)
      setUserDetails(userData)
    } else {
      NavigateTo("/login")
    }
  }, [])

  const logOut = () => {
    logoutUser()
    NavigateTo("/login")
  }

  const dataState = useMemo(
    () => ({
      isLogin,
      logOut,
      userDetails,
      setUserDetails,
    }),
    [isLogin, logOut, userDetails, setUserDetails]
  )
  return (
    <UserContext.Provider value={dataState}>{children}</UserContext.Provider>
  )
}

export default UserProvider
