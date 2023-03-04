import AxiosClient from "../../Library/axios"
import { getCoins_CoinGecko } from "../Endpoints/coins.endpoints"

export const getMarketById = async (coinId: string, currency: string) => {
  return await AxiosClient.get(
    `${getCoins_CoinGecko.MarketData}?vs_currency=${currency}&ids=${coinId}`
  )
}
