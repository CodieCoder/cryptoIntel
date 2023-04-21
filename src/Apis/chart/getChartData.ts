import { BinanceEndpointEnum } from "Apis/Endpoints/coins.endpoints";
import { AxiosResponse } from "axios";
import AxiosClient from "../../Library/axios";

export const getKlineDataFromBinance = async (
  symbol: string,
  interval: string,
  startTime: string | number,
  endTime: string | number
): Promise<AxiosResponse<any, any>> => {
  const url = `${BinanceEndpointEnum.Kline}?symbol=${symbol}&interval=${interval}&startTime=${startTime}&endTime=${endTime}`;
  return await AxiosClient.get(url);
};
