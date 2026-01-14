import { AxiosRequest } from "../../Library/axios";

export const updateFavourite = async (values: {
  userId: string;
  coinId: string;
}) => {
  return await AxiosRequest.patch(`/favourite/${values.userId}`, {
    coinId: values.coinId,
  })
    .then((data) => data?.data)
    .catch((error) => {
      console.error("Api Error: ", error);
      throw new Error(error);
      // return false;
    });
};
