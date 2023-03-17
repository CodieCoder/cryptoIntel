import moment from "moment"
import React, { useState } from "react"
import { Form } from "react-bootstrap"
import { CountryList } from "../../../Assets/CountryList"
import { GenderList } from "../../../Assets/GenderList"
import { MyButton } from "../../../components/HtmlElements/Button"

interface IProfileForm {
  profileData: any
  editHandler: () => void
  UpdateUserProfile: (e: any) => void
}

const ProfileForm: React.FC<IProfileForm> = ({
  profileData,
  editHandler,
  UpdateUserProfile,
}) => {
  const [isFormDisabled, setIsFormDisabled] = useState(true)

  return (
    <>
      <br />
      <div className="container user-profile-form">
        <div className="user-profile-action-btns">
          {isFormDisabled ? (
            <MyButton onClick={editHandler}>Edit</MyButton>
          ) : (
            <MyButton onClick={editHandler}>Cancel</MyButton>
          )}
        </div>
        <hr />
        <Form noValidate onSubmit={UpdateUserProfile}>
          <fieldset disabled={isFormDisabled}>
            <Form.Group className="mb-3">
              <Form.Label htmlFor="disabledTextInput">Name</Form.Label>
              <Form.Control
                name="fullName"
                defaultValue={profileData?.fullname}
                className="profile-inputs"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label htmlFor="disabledTextInput">Email</Form.Label>
              <Form.Control
                name="email"
                defaultValue={profileData?.email}
                className="profile-inputs"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Select name="gender" className="profile-inputs">
                <option selected={profileData?.gender === GenderList.Male}>
                  {profileData?.gender}
                </option>
                <option selected={profileData?.gender === GenderList.Male}>
                  {profileData?.gender}
                </option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label htmlFor="disabledSelect">Country</Form.Label>
              <Form.Select
                aria-label="Select one"
                name="country"
                className="profile-inputs"
              >
                {/* <option>Select country</option> */}
                {CountryList.map((country, index) => {
                  return (
                    <option
                      key={index}
                      value={country.name}
                      selected={
                        country.name === profileData.country ? true : false
                      }
                    >
                      {country.name}
                    </option>
                  )
                })}
              </Form.Select>
            </Form.Group>

            <div className="profile-update-btn">
              {!isFormDisabled && <MyButton type="submit">Submit</MyButton>}
            </div>
          </fieldset>
        </Form>
        {isFormDisabled && (
          <div className="user-profile-other-details">
            <div className="user-profile-other-details-divs">
              Last Login : {moment(profileData?.last_login).format("LLLL")}
            </div>
            <div className="user-profile-other-details-divs">
              Registration Date :
              {moment(profileData?.registration_date).format("LLLL")}
            </div>
          </div>
        )}
      </div>
    </>
  )
}

export default ProfileForm
