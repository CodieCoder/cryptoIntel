import { createContext } from "react";
import { IUserContext } from "./constants";

const UserContext = createContext<IUserContext>({
  isLogin: false,
  logOut: () => {},
  setSelectedCoin: () => {},
});

export default UserContext;
