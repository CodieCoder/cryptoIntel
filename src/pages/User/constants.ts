import { ICoin, USERDETAILS } from "Constants";
import { SetStateAction } from "react";

export interface IUserContext {
  isLogin: boolean;
  logOut: () => void;
  userDetails?: USERDETAILS;
  selectedCoin?: ICoin;
  setSelectedCoin: React.Dispatch<SetStateAction<ICoin | undefined>>;
}

export enum USERPAGES {
  home = "home",
  profile = "profile",
  settings = "settings",
}
