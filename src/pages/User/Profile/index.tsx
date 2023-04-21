import { useState } from "react";
import { useQuery, useMutation } from "react-query";
import ProfileForm from "./ProfileForm";
import NoData from "components/Errors/NoData";
import { getUserProfile, updateUserProfile } from "Apis/user/profile";
import useUserProvider from "../useUserContext";
import ContainerBox from "components/Container";
import { IconTypesEnum } from "components/Container/constants";
import usePagesProvider from "usePagesProvider";

const Profile = () => {
  const { userDetails } = useUserProvider();
  const { notify } = usePagesProvider();
  const [isFormDisabled, setIsFormDisabled] = useState(true);

  const updateProfile = async (data: any) => {
    return userDetails && (await updateUserProfile(userDetails.userKey, data));
  };

  const {
    data: profileData,
    isLoading,
    isFetching,
    refetch: refetchProfile,
  } = useQuery(
    "user-profile",
    () => userDetails && getUserProfile(userDetails?.userKey),
    {
      refetchOnMount: false,
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
      enabled: !!userDetails,
    }
  );

  const { mutate: updateUserProfileMutation, isLoading: isUpdating } =
    useMutation(updateProfile, {
      onSuccess: (data) => {
        if (data?.error) {
          notify.warning(data.result);
        } else {
          notify.success("Profile updated");
        }
      },
      onError: () => {
        notify.error("Error updating profile");
      },
      onSettled: () => refetchProfile(),
    });

  const UpdateUserProfile = (e: any) => {
    e.preventDefault();
    e.stopPropagation();
    setIsFormDisabled(true);
    const formData = new FormData(e.target);
    updateUserProfileMutation(formData);
  };

  const editHandler = () => {
    setIsFormDisabled((prev) => !prev);
    refetchProfile();
  };

  return (
    <div className="user-profile">
      <ContainerBox
        title="User profile"
        loading={isLoading || isFetching || isUpdating}
        icon={IconTypesEnum.userProfile}
      >
        <div className="profile-form">
          {profileData?.result ? (
            <ProfileForm
              profileData={profileData?.result}
              editHandler={editHandler}
              isFormDisabled={isFormDisabled}
              UpdateUserProfile={UpdateUserProfile}
            />
          ) : (
            <NoData />
          )}
        </div>
      </ContainerBox>
    </div>
  );
};

export default Profile;
