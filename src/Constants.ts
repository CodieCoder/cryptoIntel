export enum SITEINFO {
  Name = "CryptoIntel",
}

export type USERDETAILS = {
  email: string
  fullname: string
  country: string
  gender: string
  favouriteCoins: string
  key: string
  userKey: string
}

export type TNews = {
  news_body: string
  news_categories: string
  news_date: string
  news_image: string
  news_language: string
  news_randkey: string
  news_source_info: string
  news_title: string
  news_url: string
  news_tags: string
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
