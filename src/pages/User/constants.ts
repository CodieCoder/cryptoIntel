// export const USERPAGES = {
//   home: {
//     path: "home",
//     title: "Home",
//   },
//   profile: {
//     path: "profile",
//     title: "Profile",
//   },
//   settings: {
//     path: "settings",
//     title: "Settings",
//   },
// }

import { ICoin, USERDETAILS } from "Constants";
import { SetStateAction } from "react";

export interface IUserContext {
  isLogin: boolean;
  logOut: () => void;
  userDetails?: USERDETAILS;
  // setUserDetails: React.Dispatch<SetStateAction<USERDETAILS>>;
  selectedCoin?: ICoin;
  setSelectedCoin: React.Dispatch<SetStateAction<ICoin | undefined>>;
}

export enum USERPAGES {
  home = "home",
  profile = "profile",
  settings = "settings",
}
