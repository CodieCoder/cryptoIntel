import { AxiosResponse } from "axios";
import AxiosClient from "../../Library/axios";
import { getCoins_CoinGecko } from "../Endpoints/coins.endpoints";

export const getAllCoinsMarket = async (
  currency: string,
  count: number,
  pageNo: number
): Promise<AxiosResponse<any, any>> => {
  return await AxiosClient.get(
    `${getCoins_CoinGecko.MarketData}?vs_currency=${currency}&order=market_cap_desc&per_page=${count}&page=${pageNo}&sparkline=true&price_change_percentage=1h`
  );
};
export const getMarketById = async (coinId: string, currency: string) => {
  return await AxiosClient.get(
    `${getCoins_CoinGecko.MarketData}?vs_currency=${currency}&ids=${coinId}&sparkline=true&price_change_percentage=7d`
  );
};

export const getTrendingCoins = async () => {
  return await AxiosClient.get(`${getCoins_CoinGecko.Trending}`);
};

export const getCoinData = async (coinId:string) => {
  return await AxiosClient.get(`${getCoins_CoinGecko.CoinData}${coinId}?localization=false&sparkline=true`);
};
