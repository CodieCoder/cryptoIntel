import React, { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ICoin, USERDETAILS } from "../../Constants";
import {
  getUserDetails,
  isUserLogin,
  logoutUser,
} from "../../utils/localStorage";
import UserContext from "./context";

const UserProvider = (props: { children: React.ReactNode }) => {
  const NavigateTo = useNavigate();
  const { children } = props;
  const [isLogin, setIsLogin] = useState(false);
  const [userDetails, setUserDetails] = useState<USERDETAILS | undefined>();
  const [selectedCoin, setSelectedCoin] = useState<ICoin | undefined>();

  const getLogin = async () => {
    const checkLogin = isUserLogin();
    const userData = await getUserDetails();
    if (checkLogin === true && userData !== false) {
      setIsLogin(checkLogin);
      setUserDetails(userData);
    } else {
      NavigateTo("/login");
    }
  };

  useEffect(() => {
    getLogin();
  }, []);

  const logOut = () => {
    logoutUser();
    NavigateTo("/login");
  };

  const dataState = useMemo(
    () => ({
      isLogin,
      logOut,
      userDetails,
      selectedCoin,
      setSelectedCoin,
    }),
    [isLogin, logOut, userDetails, selectedCoin, setSelectedCoin]
  );
  return (
    <UserContext.Provider value={dataState}>{children}</UserContext.Provider>
  );
};

export default UserProvider;
