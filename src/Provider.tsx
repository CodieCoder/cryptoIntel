import React, { useEffect, useMemo, useState } from "react"
import PagesContext from "./Context"
import { USERDETAILS } from "./Constants"
import { FcHighPriority, FcOk, FcMediumPriority } from "react-icons/fc"
import {
  setUserDetails as setUserDetails_LocalStorage,
  getUserDetails,
  isUserLogin,
  logoutUser,
} from "./utils/localStorage"

//provider/context to use throuout the app pages
const PagesProvider = (props: { children: React.ReactNode }) => {
  const [currency, setCurrency] = useState<String>("usd")
  const [vs_currency, setVs_currency] = useState<String>()
  const [login, setLogin] = useState<boolean>()
  const [showNotify, setShowNotify] = useState<boolean>(false)
  const [notifyContent, setNotifyContent] = useState<React.ReactNode>()
  const [userDetails, setUserDetails] = useState<USERDETAILS>()
  const [showLoginModal, setShowLoginModal] = useState(false)
  const [loginModalTab, setLoginModalTab] = useState<"login" | "signup">(
    "login"
  )

  useEffect(() => {
    const checkLogin = isUserLogin()
    const userData = getUserDetails()
    if (checkLogin === true && userData) {
      setLogin(checkLogin)
      setUserDetails(userData)
    }
  }, [])

  const loginHandler = (data: USERDETAILS) => {
    if (data) {
      if (
        data?.userKey &&
        data?.fullname &&
        data?.country &&
        data?.email &&
        data?.gender
      ) {
        setUserDetails(data)
        setLogin(true)
        setUserDetails_LocalStorage(data)
        setShowLoginModal(false)
        notify.success("Login successfull!")
      }
    }
  }

  const logoutHandler = () => {
    setLogin(false)
    setUserDetails(undefined)
    logoutUser()
    window.location.reload()
  }

  useEffect(() => {
    setVs_currency(currency == "usd" ? "usdt" : currency)
  }, [currency])

  const notify = {
    success: (content: React.ReactNode) => notifyUser(content, <FcOk />),
    warning: (content: React.ReactNode) =>
      notifyUser(content, <FcHighPriority />),
    error: (content: React.ReactNode) =>
      notifyUser(content, <FcMediumPriority />),
  }
  const notifyUser = (content: React.ReactNode, icon: React.ReactNode) => {
    const combinedContent = (
      <div>
        {icon} &nbsp; {content}
      </div>
    )
    setNotifyContent(combinedContent)
    setShowNotify(true)
    setTimeout(() => {
      setShowNotify(false)
      setNotifyContent(null)
    }, 3000)
  }

  const pagesData = useMemo(
    () => ({
      currency,
      setCurrency,
      login,
      userDetails,
      loginHandler,
      logoutHandler,
      vs_currency,
      notify,
      showNotify,
      notifyContent,
      showLoginModal,
      setShowLoginModal,
      loginModalTab,
      setLoginModalTab,
    }),
    [
      currency,
      setCurrency,
      login,
      userDetails,
      loginHandler,
      logoutHandler,
      vs_currency,
      notify,
      showNotify,
      notifyContent,
      showLoginModal,
      setShowLoginModal,
      loginModalTab,
      setLoginModalTab,
    ]
  )
  return (
    <PagesContext.Provider value={pagesData}>
      {props.children}
    </PagesContext.Provider>
  )
}

export default PagesProvider
