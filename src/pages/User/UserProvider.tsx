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

  useEffect(() => {
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
    getLogin();
    // eslint-disable-next-line
  }, []);

  const dataState = useMemo(() => {
    const logOut = () => {
      logoutUser();
      NavigateTo("/login");
    };

    return {
      isLogin,
      logOut,
      userDetails,
      selectedCoin,
      setSelectedCoin,
    };

    // eslint-disable-next-line
  }, [isLogin, userDetails, selectedCoin, setSelectedCoin]);
  return (
    <UserContext.Provider value={dataState}>{children}</UserContext.Provider>
  );
};

export default UserProvider;
