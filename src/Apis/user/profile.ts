import { AxiosRequest } from "../../Library/axios";

export const getUserProfile = async (userKey: string) => {
  return AxiosRequest.get(`user/profile/${userKey}`)
    .then((data) => data?.data)
    .catch((error) => {
      console.error("Api [Profile] Error: ", error);
      return error;
    });
};

export const updateFavourite = async (userKey: string): Promise<any> => {
  return await AxiosRequest.get(`user/profile${userKey}`)
    .then((data) => data?.data)
    .catch((error) => {
      console.error("Api [favourites] Error: ", error);
      return error;
    });
};

export const updateUserProfile = async (
  userKey: string,
  data: any
): Promise<any> => {
  return await AxiosRequest.patch(`user/profile/${userKey}`, data)
    .then((data) => data?.data)
    .catch((error) => {
      console.error("Api [Profile] Error: ", error);
      return error;
    });
};
