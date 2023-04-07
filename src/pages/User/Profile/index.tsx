import React, { useContext, useEffect, useState } from "react";
import { AxiosRequest } from "../../../Library/axios";
import UserContext from "../context";
import { useQuery, useMutation } from "react-query";
import { Spinner } from "react-bootstrap";
import PagesContext from "../../../Context";
import ProfileForm from "./ProfileForm";
import ServerError from "components/Errors/ServerError";
import NoData from "components/Errors/NoData";

const Profile = () => {
  const { userDetails, logOut } = useContext(UserContext);
  const { notify } = useContext(PagesContext);
  const [isFormDisabled, setIsFormDisabled] = useState(true);
  const getUserProfile = async () => {
    // const userToken = userRequesToken(userDetails?.key, userDetails?.email)
    if (!userDetails) {
      return;
    }
    return AxiosRequest.get(`user/profile/${userDetails.userKey}`)
      .then((data) => {
        if (data?.data?.error === false) {
          return data?.data?.msg;
        } else {
          logOut();
        }

        console.log("Testing profileData : ", data);
      })
      .catch((error) => {
        console.error(error);
        return error;
      });
  };

  const updateUserProfile = async (data: any) => {
    // const userToken = userRequesToken(userDetails?.key, userDetails?.email)
    try {
      return await AxiosRequest.patch(
        `user/profile/${userDetails.userKey}`,
        data
      )
        .then((data) => {
          if (data?.data?.error) {
            notify.warning(data.data.msg);
            return data?.data?.msg;
          } else {
            notify.success(data.data.msg);
            return data?.data?.msg;
          }
        })
        .catch((error) => {
          console.error(error);
          notify.error("An error occured");
          return false;
        })
        .finally(() => {
          refetchProfile();
        });
    } catch (error) {
      console.error(error);
      notify.error("An error occured.");
      return error;
    }
  };

  const {
    data: profileData,
    isLoading,
    refetch: refetchProfile,
  } = useQuery("user-profile", () => getUserProfile(), {
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    enabled: !!userDetails,
    // onSuccess(data) {},
  });

  const { mutate: updateUserProfileMutation, isLoading: isUpdating } =
    useMutation(updateUserProfile, {
      onSuccess: (data) => {
        // notify.success(data)
      },
      onError: (error) => {
        // notify.error("error")
      },
      // onSettled: () => refetchProfile(),
    });
  const UpdateUserProfile = (e: any) => {
    e.preventDefault();
    e.stopPropagation();
    setIsFormDisabled(true);
    const formData = new FormData(e.target);
    // formDataObj = Object.fromEntries(formData.entries())
    updateUserProfileMutation(formData);
  };

  const editHandler = () => {
    setIsFormDisabled((prev) => !prev);
    refetchProfile();
  };

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
        <div className="profile-form">
          {profileData ? (
            <ProfileForm
              profileData={profileData}
              editHandler={editHandler}
              UpdateUserProfile={UpdateUserProfile}
            />
          ) : (
            <NoData />
          )}
        </div>
      )}
    </div>
  );
};

export default Profile;
