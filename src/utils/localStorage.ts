import { USERDETAILS, LOCALSTORAGE, CURRENCIES } from "../Constants"

export const setUserDetails = (userData: USERDETAILS): void => {
  localStorage.setItem(LOCALSTORAGE.Islogin, "true")
  localStorage.setItem(LOCALSTORAGE.UserDetails, JSON.stringify(userData))
}

export const isUserLogin = (): boolean => {
  const isLogin = localStorage.getItem(LOCALSTORAGE.Islogin)
  if (isLogin === "true") {
    return true
  } else {
    return false
  }
}

export const getUserDetails = (): USERDETAILS | false => {
  const userDetails = localStorage.getItem(LOCALSTORAGE.UserDetails)
  if (userDetails) {
    return JSON.parse(userDetails)
  } else {
    return false
  }
}

export const logoutUser = () => {
  localStorage.removeItem(LOCALSTORAGE.Islogin)
  localStorage.removeItem(LOCALSTORAGE.UserDetails)
}

export const setCurrency = (currency: CURRENCIES): void => {
  localStorage.setItem(LOCALSTORAGE.currenctCurrency, currency)
}

export const getCurrency = (): string | false => {
  const currency = localStorage.getItem(LOCALSTORAGE.currenctCurrency)
  if (currency) {
    return currency
  } else {
    return false
  }
}
