import React, { useContext, useEffect, useState } from "react"
import { AxiosRequest } from "../../../Library/axios"
import UserContext from "../context"
import { useQuery, useMutation } from "react-query"
import { Form, Spinner } from "react-bootstrap"
import moment from "moment"
import { MyButton } from "../../../components/HtmlElements/Button"
import { CountryList } from "../../../Assets/CountryList"
import { GenderList } from "../../../Assets/GenderList"
import PagesContext from "../../../Context"

const Profile = () => {
  const { userDetails, logOut } = useContext(UserContext)
  const { notify } = useContext(PagesContext)
  const [isFormDisabled, setIsFormDisabled] = useState(true)
  const getUserProfile = async () => {
    // const userToken = userRequesToken(userDetails?.key, userDetails?.email)
    return AxiosRequest.get(`user/profile/${userDetails.userKey}`)
      .then((data) => {
        if (data?.data?.error) {
          logOut(false)
        } else {
          return data?.data?.msg
        }
      })
      .catch((error) => {
        console.error(error)
      })
  }

  const updateUserProfile = async (data: any) => {
    // const userToken = userRequesToken(userDetails?.key, userDetails?.email)
    try {
      return await AxiosRequest.patch(
        `user/profile/${userDetails.userKey}`,
        data
      )
        .then((data) => {
          if (data?.data?.error) {
            notify.warning(data.data.msg)
            return data?.data?.message
          } else {
            notify.success(data.data.msg)
            return data?.data?.msg
          }
        })
        .catch((error) => {
          console.error(error)
          notify.error("An error occured")
          return false
        })
        .finally(() => {
          refetchProfile()
        })
    } catch (error) {
      // notify.error("An error occured")
      console.error(error)
      notify.error("An error occured.")
      return error
    }
  }

  const {
    data: profileData,
    isLoading,
    isFetching,
    refetch: refetchProfile,
  } = useQuery("user-profile", () => getUserProfile(), {
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  })

  const { mutate: updateUserProfileMutation, isLoading: isUpdating } =
    useMutation(updateUserProfile, {
      onSuccess: (data) => {
        // notify.success(data)
      },
      onError: (error) => {
        // notify.error("error")
      },
      // onSettled: () => refetchProfile(),
    })
  const UpdateUserProfile = (e: any) => {
    e.preventDefault()
    e.stopPropagation()
    setIsFormDisabled(true)
    const formData = new FormData(e.target),
      formDataObj = Object.fromEntries(formData.entries())
    updateUserProfileMutation(formData)
  }

  const editHandler = () => {
    setIsFormDisabled((prev) => !prev)
    refetchProfile()
  }

  return (
    <div className="user-profile">
      {isLoading || isUpdating ? (
        <div className="user-layout-body-loading">
          <Spinner
            as="span"
            animation="border"
            role="status"
            variant="dark"
            aria-hidden="true"
          />
        </div>
      ) : (
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
      )}
    </div>
  )
}

export default Profile
