import React, { useEffect, useMemo, useState } from "react";
import PagesContext from "./Context";
import { USERDETAILS } from "./Constants";
import { FcHighPriority, FcCheckmark, FcMediumPriority } from "react-icons/fc";
import {
  setUserDetails as setUserDetails_LocalStorage,
  getUserDetails,
  isUserLogin,
  logoutUser,
} from "./utils/localStorage";

//provider/context to use throughout the app pages
const PagesProvider = (props: { children: React.ReactNode }) => {
  const [currency, setCurrency] = useState<string>("usd");
  const [vs_currency, setVs_currency] = useState<string>();
  const [login, setLogin] = useState<boolean>();
  const [showNotify, setShowNotify] = useState(false);
  const [notifyContent, setNotifyContent] = useState<React.ReactNode>();
  const [userDetails, setUserDetails] = useState<USERDETAILS>();
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [loginModalTab, setLoginModalTab] = useState<"login" | "signup">(
    "login"
  );
  const [favouriteCoins, setFavouriteCoins] = useState<string[]>();

  const getUser = async () => {
    const checkLogin = isUserLogin();
    const userData = await getUserDetails();
    if (checkLogin === true && userData) {
      setLogin(checkLogin);
      setUserDetails(userData);
      const favCoins = userData?.favouriteCoins
        ? userData?.favouriteCoins.split(",")
        : [];
      setFavouriteCoins(favCoins);
    }
  };
  useEffect(() => {
    getUser();
  }, []);

  useEffect(() => {
    setVs_currency(currency === "usd" ? "usdt" : currency);
  }, [currency]);

  const pagesData = useMemo(() => {
    const notify = {
      success: (content: React.ReactNode) =>
        notifyUser(content, <FcCheckmark />),
      warning: (content: React.ReactNode) =>
        notifyUser(content, <FcHighPriority />),
      error: (content: React.ReactNode) =>
        notifyUser(content, <FcMediumPriority />),
    };

    const notifyUser = (content: React.ReactNode, icon: React.ReactNode) => {
      const combinedContent = (
        <div>
          {icon}
          <span>&nbsp; {content}</span>
        </div>
      );
      setNotifyContent(combinedContent);
      setShowNotify(true);
      setTimeout(() => {
        setShowNotify(false);
        setNotifyContent(null);
      }, 3000);
    };

    const loginHandler = (data: USERDETAILS) => {
      if (data) {
        if (
          data?.userKey &&
          data?.fullname &&
          data?.country &&
          data?.email &&
          data?.gender
        ) {
          setUserDetails(data);
          setLogin(true);
          setUserDetails_LocalStorage(data);
          //set user's favourite coin
          data?.favouriteCoins &&
            setFavouriteCoins(data.favouriteCoins.split(","));
          setShowLoginModal(false);
          notifyUser("Login successfull!", <FcCheckmark />);
        }
      }
    };

    const logoutHandler = () => {
      setLogin(false);
      setUserDetails(undefined);
      logoutUser();
      window.location.reload();
    };

    const updateFavouriteCoinsHandler = (newFav: string) => {
      if (login === true && userDetails) {
        userDetails.favouriteCoins = newFav;
        setUserDetails_LocalStorage(userDetails);
        setFavouriteCoins(userDetails.favouriteCoins.split(","));
      }
    };

    return {
      currency,
      setCurrency,
      login,
      userDetails,
      loginHandler,
      logoutHandler,
      vs_currency,
      notify,
      showNotify,
      notifyContent,
      showLoginModal,
      setShowLoginModal,
      loginModalTab,
      setLoginModalTab,
      favouriteCoins,
      updateFavouriteCoinsHandler,
    };
  }, [
    currency,
    setCurrency,
    login,
    userDetails,
    vs_currency,
    showNotify,
    notifyContent,
    showLoginModal,
    setShowLoginModal,
    loginModalTab,
    setLoginModalTab,
    favouriteCoins,
  ]);
  return (
    <PagesContext.Provider value={pagesData}>
      {props.children}
    </PagesContext.Provider>
  );
};

export default PagesProvider;
