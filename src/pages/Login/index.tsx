import React, { useContext, useEffect, useState } from "react"
import { Alert, Fade, FloatingLabel, Form } from "react-bootstrap"
import { LoadingButton, MyButton } from "../../components/HtmlElements/Button"
import {
  formValidator,
  USER_INFO_CONSTANT,
  ValidatorEnum,
} from "../../utils/FormValidator"
import UserLogin from "../../Apis/user/login"
import "./index.scss"
import { useNavigate } from "react-router-dom"
import PagesContext from "../../Context"

const LoginPage = () => {
  const { notify, loginHandler } = useContext(PagesContext)
  const [input_Email, setInput_Email] = useState("")
  const [err_Email, setErr_Email] = useState(false)
  const [input_Password, setInput_Password] = useState("")
  const [loginResponse, setLoginResponse] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const checkEmailTyping = (text: string) => {
    setErr_Email(false)
    const form_data = {
      formField: text,
      type: ValidatorEnum.EMAIL,
      range: "5-50",
      errCheck: setErr_Email,
    }

    if (text.length > 4) {
      formValidator(form_data)
    }
    setInput_Email(text)
  }

  const LoginFn = (e: React.FormEvent<HTMLFormElement>) => {
    // const form = e.currentTarget;
    e.preventDefault()
    e.stopPropagation()
    setLoginResponse(false)

    const formFIelds = [
      {
        formField: input_Email,
        type: "email",
        range: "5-50",
        errCheck: setErr_Email,
      },
    ]

    const errCheck = formFIelds.filter(
      (field) => formValidator(field) === false
    )
    if (errCheck.length > 0) {
      return
    } else {
      setIsLoading(true)
      const DataToPost = {
        email: input_Email,
        password: input_Password,
      }
      UserLogin(DataToPost)
        .then((data) => {
          if (data === false) {
            setLoginResponse(true)
            notify.error("Network Error.")
          } else {
            //redirect to User dashboard page
            //save user data in context
            if (data?.error === false) {
              loginHandler(data.msg)
            }
            setLoginResponse(true)
          }
        })
        .catch((error) => {
          console.error(error)
        })
        .finally(() => {
          setIsLoading(false)
        })
    }
  }

  return (
    <div className="container page-section">
      <div className="login-page">
        {/* <div className="page_head_text">Login Page</div> 
        <hr />*/}
        <div className="login-page-form-head">Welcome back Champ!</div>

        <Alert
          key={89}
          variant="warning"
          show={loginResponse}
          className="login-alert"
          transition={Fade}
        >
          Invalid username/password. Check and try again
        </Alert>
        <Form noValidate onSubmit={LoginFn}>
          <Form.Group>
            <FloatingLabel
              controlId="InputEmail"
              label="Email address"
              className="mb-3"
            >
              <Form.Control
                type="email"
                className="general-input"
                placeholder="johndoe@example.com"
                value={input_Email}
                onChange={(e) => checkEmailTyping(e.target.value)}
                required
              />
              {/* {validated && */}
              {err_Email && (
                <div className="form-err-msg">
                  Invalid email. Ex. johndoe@example.com
                </div>
              )}
              {/* } */}
            </FloatingLabel>
          </Form.Group>

          <Form.Group>
            <FloatingLabel controlId="floatingPassword" label="Password">
              <Form.Control
                type="password"
                placeholder="Password"
                value={input_Password}
                onChange={(e) => setInput_Password(e.target.value)}
                // pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                required
              />
            </FloatingLabel>
            <br />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Remember me" />
          </Form.Group>
          <hr />
          <div className="login-page-form-bottom">
            <LoadingButton loading={isLoading}>Login</LoadingButton>
          </div>
        </Form>
      </div>
    </div>
  )
}

export default LoginPage
