import { AxiosRequest } from "../../Library/axios";

export const updateFavourite = async (userId: String, coinId: string) => {
  return await AxiosRequest.patch(`/favourite/${userId}`, { coinId })
    .then((data) => data?.data)
    .catch((error) => {
      console.error("Api Error: ", error);
      return false;
    });
};
