import React, { useContext, useState } from "react";
import { Alert, Fade, FloatingLabel, Form } from "react-bootstrap";
import { LoadingButton } from "../../components/HtmlElements/Button";
import UserRegistration from "../../Apis/user/register";
import { formValidator, ValidatorEnum } from "../../utils/FormValidator";
import "./index.scss";
import { CountryList } from "../../Assets/CountryList";
import PagesContext from "../../Context";
import { LOGINMODAL } from "../../Constants";

const RegistrationPage = () => {
  const { setLoginModalTab, notify } = useContext(PagesContext);

  const [input_FullName, setInput_FullName] = useState<string>("");
  const [err_FullName, setErr_FullName] = useState(true);
  const [input_Email, setInput_Email] = useState<string>("");
  const [err_Email, setErr_Email] = useState(true);
  // const [input_UserName, setInput_UserName] = useState<string>("")
  // const [err_UserName, setErr_UserName] = useState(true)
  const [select_Gender, setSelect_Gender] = useState<string>("");
  const [err_Gender, setErr_Gender] = useState(true);
  const [select_Country, setSelect_Country] = useState<string>("");
  const [err_Country, setErr_Country] = useState(true);
  const [input_Password, setInput_Password] = useState<string>("");
  const [err_Password, setErr_Password] = useState(true);
  const [validated, setValidated] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [loginResponse, setLoginResponse] = useState<string | false>(false);

  const registerFn = (e: React.FormEvent<HTMLFormElement>) => {
    // const form = e.currentTarget;
    e.preventDefault();
    e.stopPropagation();
    setValidated(true);
    setLoginResponse(false);
    const formFIelds = [
      {
        formField: input_FullName,
        type: ValidatorEnum.NAME,
        range: "10-50",
        errCheck: setErr_FullName,
      },
      {
        formField: input_Email,
        type: ValidatorEnum.EMAIL,
        range: "5-50",
        errCheck: setErr_Email,
      },
      // {
      //   formField: input_UserName,
      //   type: ValidatorEnum.USERNAME,
      //   range: "5-15",
      //   errCheck: setErr_UserName,
      // },
      {
        formField: select_Gender,
        type: ValidatorEnum.GENDER,
        range: "4-6",
        errCheck: setErr_Gender,
      },
      {
        formField: select_Country,
        type: ValidatorEnum.COUNTRY,
        range: "3-20",
        errCheck: setErr_Country,
      },
      {
        formField: input_Password,
        type: ValidatorEnum.PASSWORD,
        range: "8-25",
        errCheck: setErr_Password,
      },
    ];

    let errCheck = 0;
    formFIelds.forEach((field) => {
      if (formValidator(field) === false) {
        errCheck++;
      }
      return;
    });
    if (errCheck > 0) {
      return;
    } else {
      setIsLoading(true);
      const DataToPost = {
        fullname: input_FullName,
        country: select_Country,
        gender: select_Gender,
        email: input_Email,
        // username: input_UserName,
        password: input_Password,
      };
      UserRegistration(DataToPost)
        .then((data) => {
          if (data === false) {
            notify.error("Network Error.");
          } else {
            if (data?.error === false) {
              //redirect to login page
              notify.success("Registration successfull!");
              setLoginModalTab(LOGINMODAL.Login);
            } else {
              setLoginResponse(data?.msg);
            }
          }
        })
        .catch((error) => {
          console.error(error);
        })
        .finally(() => setIsLoading(false));
    }
  };

  return (
    <div className="container page-section">
      <div className="registration-page">
        {/* <div className="page_head_text registration-page-title">
          Join the Winning Team!
        </div>
        <hr />
        <br /> */}
        <div className="registration-page-form ">
          <div className="registration-page-form-head">
            Create a free account in 2 minutes
          </div>
          <br />
          <div className="form-error-div">
            <Alert
              key={89}
              variant="warning"
              show={loginResponse ? true : false}
              className="login-alert"
              transition={Fade}
            >
              {loginResponse && <>{loginResponse}</>}
            </Alert>
          </div>
          <Form noValidate onSubmit={registerFn}>
            <Form.Group>
              <FloatingLabel
                controlId="InputName"
                label="Full name"
                className="mb-3"
              >
                <Form.Control
                  type="text"
                  className="general-input"
                  placeholder="Amara Tunde Kyari"
                  value={input_FullName}
                  onChange={(e) => setInput_FullName(e.target.value)}
                  required
                />
                {validated &&
                  (err_FullName ? (
                    <div className="form-err-msg">
                      Invalid name. Ex. Amara Tunde
                    </div>
                  ) : (
                    <div className="form-good-msg">Looks good!</div>
                  ))}
              </FloatingLabel>
            </Form.Group>
            <Form.Group>
              <FloatingLabel controlId="selectGender" label="Gender">
                <Form.Select
                  aria-label="Select one"
                  onChange={(e) => {
                    setErr_Gender(false);
                    setSelect_Gender(e.target.value);
                  }}
                >
                  <option>Select gender</option>
                  <option value="Female">Female</option>
                  <option value="Male">Male</option>
                </Form.Select>
                {validated &&
                  (err_Gender ? (
                    <div className="form-err-msg">
                      Invalid Gender. Please choose one
                    </div>
                  ) : (
                    <div className="form-good-msg">Looks good!</div>
                  ))}
              </FloatingLabel>
            </Form.Group>
            <br />
            <Form.Group>
              <FloatingLabel controlId="selectCountry" label="Gender">
                <Form.Select
                  aria-label="Select one"
                  onChange={(e) => setSelect_Country(e.target.value)}
                >
                  <option>Select country</option>
                  {CountryList.map((country, index) => {
                    return index === 0 ? (
                      <option
                        key={index}
                        value={country.name}
                        defaultValue={country.name}
                        defaultChecked
                      >
                        {country.name}
                      </option>
                    ) : (
                      <option key={index} value={country.name}>
                        {country.name}
                      </option>
                    );
                  })}
                </Form.Select>
                {validated &&
                  (err_Country ? (
                    <div className="form-err-msg">
                      Invalid Country. Please choose one
                    </div>
                  ) : (
                    <div className="form-good-msg">Looks good!</div>
                  ))}
              </FloatingLabel>
            </Form.Group>
            <br />
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
                  onChange={(e) => setInput_Email(e.target.value)}
                  required
                />
                {validated &&
                  (err_Email ? (
                    <div className="form-err-msg">
                      Invalid email. Ex. johndoe@example.com
                    </div>
                  ) : (
                    <div className="form-good-msg">Looks good!</div>
                  ))}
              </FloatingLabel>
            </Form.Group>
            {/* <Form.Group>
              <FloatingLabel
                controlId="InputUsername"
                label="Username"
                className="mb-3"
              >
               <Form.Control
                  type="text"
                  className="general-input"
                  placeholder="crytpcoinie"
                  value={input_UserName}
                  onChange={(e) => setInput_UserName(e.target.value)}
                  required
                />
                {validated &&
                  (err_UserName ? (
                    <div className="form-err-msg">
                      Invalid username. Ex. crytpcoinie
                    </div>
                  ) : (
                    <div className="form-good-msg">Looks good!</div>
                  ))}
              </FloatingLabel>
            </Form.Group> */}
            <Form.Group>
              <FloatingLabel controlId="floatingPassword" label="Password">
                <Form.Control
                  type="password"
                  placeholder="Password"
                  value={input_Password}
                  onChange={(e) => setInput_Password(e.target.value)}
                  pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                  required
                />
                {validated &&
                  (err_Password ? (
                    <div className="form-err-msg">
                      Invalid password. Password should contain at least one
                      uppercase, lowercase and number
                    </div>
                  ) : (
                    <div className="form-good-msg">Looks good!</div>
                  ))}
              </FloatingLabel>
            </Form.Group>
            <hr />
            <div className="registration-page-form-bottom">
              {/* <MyButton type="submit">Join</MyButton> */}
              <LoadingButton loading={isLoading}>Join</LoadingButton>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default RegistrationPage;
