import { USERDETAILS, LOCALSTORAGE, CURRENCIES } from "../Constants";

export const setUserDetails = (userData: USERDETAILS): void => {
  localStorage.setItem(LOCALSTORAGE.Islogin, "true");
  localStorage.setItem(LOCALSTORAGE.UserDetails, JSON.stringify(userData));
};

export const isUserLogin = (): boolean => {
  const isLogin = localStorage.getItem(LOCALSTORAGE.Islogin);
  if (isLogin === "true") {
    return true;
  } else {
    return false;
  }
};

export const getUserDetails = async (): Promise<USERDETAILS | false> => {
  const userDetails = await JSON.parse(
    String(localStorage.getItem(LOCALSTORAGE.UserDetails))
  );
  if (userDetails?.email && userDetails?.userKey && userDetails?.fullname) {
    return userDetails;
  } else {
    return false;
  }
};

export const logoutUser = () => {
  localStorage.removeItem(LOCALSTORAGE.Islogin);
  localStorage.removeItem(LOCALSTORAGE.UserDetails);
};

export const setCurrency = (currency: CURRENCIES): void => {
  localStorage.setItem(LOCALSTORAGE.currenctCurrency, currency);
};

export const getCurrency = (): string | false => {
  const currency = localStorage.getItem(LOCALSTORAGE.currenctCurrency);
  if (currency) {
    return currency;
  } else {
    return false;
  }
};
