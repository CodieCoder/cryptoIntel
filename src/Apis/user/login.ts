import { AxiosRequest } from "../../Library/axios";

interface USERLOGIN {
  email: string;
  password: string;
}

//send and receive data to/from server
const UserLogin = async (data: USERLOGIN) => {
  const userDevice = UserDevice();
  const DataToPost = { ...data, userDevice };
  //send to server
  try {
    const login = await AxiosRequest.post("/user/login", {
      ...DataToPost,
    });
    return login?.data;
  } catch (error) {
    console.error("API ERROR: ", error);
    return false;
  }
};

const UserDevice = () => {
  //TODO
  //Get User device
  return navigator.userAgent;
};

export default UserLogin;
