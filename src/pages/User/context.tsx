import React, { createContext } from "react";
import { IUserContext } from "./constants";

const UserContext = createContext<IUserContext>({
  isLogin: false,
  logOut: () => {},
  //   userDetails: undefined!,
  //   selectedCoin: undefined!,
  setSelectedCoin: () => {},
});

export default UserContext;
