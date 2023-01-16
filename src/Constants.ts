export enum SITEINFO {
  Name = "CryptoIntel",
}

export type USERDETAILS = {
  email: string
  fullname: string
  country: string
  gender: string
  key: string
  userKey: string
}

export enum LOCALSTORAGE {
  UserDetails = "userDetails",
  Islogin = "isLogin",
  currenctCurrency = "currency",
  VsCurrency = "vsCurrency",
}
export enum CURRENCIES {
  USD = "usd",
  USDT = "usdt",
  GBP = "gbp",
  EUR = "Eur",
}

export enum LOGINMODAL {
  Login = "login",
  Signup = "signup",
}
