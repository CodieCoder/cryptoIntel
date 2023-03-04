import AxiosRequest from "../../Library/axios"
import { UserDevice } from "../../utils/FormValidator"

interface USERREGISTRATION {
  fullName: string
  gender: string
  email: string
  // username: string;
  password: string
}

const UserRegistration = async (data: USERREGISTRATION) => {
  const userDevice = UserDevice()
  const DataToPost = { ...data, userDevice }
  //send to server
  try {
    const register = await AxiosRequest.post("/user/new", {
      ...DataToPost,
    })
    return register?.data
  } catch (error) {
    console.error("API ERROR: ", error)
    return false
  }
}
export default UserRegistration
