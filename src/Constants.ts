export enum SITEINFO {
  Name = "CryptoIntel",
}

export type USERDETAILS = {
  email: string;
  fullname: string;
  country: string;
  gender: string;
  favouriteCoins: string;
  key: string;
  userKey: string;
};

export type TNews = {
  news_body: string;
  news_categories: string;
  news_date: string;
  news_image: string;
  news_language: string;
  news_randkey: string;
  news_source_info: string;
  news_title: string;
  news_url: string;
  news_tags: string;
};

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

export interface ICoin {
  id: string;
  symbol: string;
  name: string;
  image: string;
  current_price: number;
  market_cap: number;
  market_cap_rank: number;
  fully_diluted_valuation: number;
  total_volume: number;
  high_24h: number;
  low_24h: number;
  price_change_24h: number;
  price_change_percentage_24h: number;
  market_cap_change_24h: number;
  market_cap_change_percentage_24h: number;
  circulating_supply: number;
  total_supply: number;
  max_supply: number;
  ath: number;
  ath_change_percentage: number;
  ath_date: string;
  atl: number;
  atl_change_percentage: number;
  atl_date: string;
  roi: null;
  last_updated: string;
  sparkline_in_7d: { price: number[] };
  price_change_percentage_7d_in_currency: number;
}

//
