import React, { ReactNode, useContext, useState } from "react"
import { Toast, ToastContainer } from "react-bootstrap"
import PagesContext from "../../Context"
import "./index.scss"

const Notify = () => {
  const { notifyContent, showNotify, setShowNotify } = useContext(PagesContext)
  return (
    <ToastContainer position="top-center" containerPosition="fixed">
      <Toast
        animation={true}
        onClose={() => setShowNotify(false)}
        show={showNotify}
        delay={5000}
        autohide
        className="notify"
      >
        <Toast.Body className="notify-body">{notifyContent}</Toast.Body>
      </Toast>
    </ToastContainer>
  )
}

export default Notify
