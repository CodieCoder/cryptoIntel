import { AxiosRequest } from "../../Library/axios"

export const updateFavourite = async (userKey: String): Promise<any> => {
  return await AxiosRequest.get(`user/profile${userKey}`)
    .then((data) => data?.data)
    .catch((error) => {
      console.log("Api [Profile] Error: ", error)
      return error
    })
}
