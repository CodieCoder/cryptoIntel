import React, { ReactNode, useContext } from "react"
import { Toast } from "react-bootstrap"
import PagesContext from "../../Context"
import Notify from "./notify"

const NotificationAlert = () => {
  const { notify } = useContext(PagesContext)
  notify.error("Network Error.")
  return <></>
}

export default (type: any) => {
  return <NotificationAlert />
}
