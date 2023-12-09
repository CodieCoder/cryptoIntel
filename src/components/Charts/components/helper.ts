import {
  IKlineData,
  KlineDataLabelEnum,
  KlineDataTypeEnum,
} from "components/Charts/constants";
import { ICoin } from "Constants";
import { DateFormatter, DateTypeEnum } from "utils/dateFormatter";
import { numberFormat, priceFormat } from "utils/numberFormat";
import { ILinearChartData } from "../constants";

export const createTopChartInfo = (selectedCoin: ICoin, currency: string) => {
  return [
    {
      title: "Market cap",
      data: priceFormat(selectedCoin?.market_cap, currency),
    },
    {
      title: "Volume",
      data: numberFormat(selectedCoin?.total_volume),
    },
    {
      title: "Supply",
      data: numberFormat(selectedCoin?.circulating_supply),
    },
  ];
};

export const arrangeKlineData = (klines: any) => {
  const dataToAdd: IKlineData[] = [];
  klines.forEach((kline: number[]) => {
    const tmp: IKlineData = {
      OpenTime: kline[0],
      OpenPrice: kline[1],
      HighPrice: kline[2],
      LowPrice: kline[3],
      ClosePrice: kline[4],
      Volume: kline[5],
      CloseTime: kline[6],
      QuoteAssetVolume: kline[7],
      NumberOfTrades: kline[8],
      TakerBuyBaseAssetVolume: kline[9],
      TakerBuyQuoteAssetVolume: kline[10],
      UnusedField: kline[11],
    };
    dataToAdd.push(tmp);
  });
  return dataToAdd;
};

export const linearDatasetsFromKlineData = (
  klines: IKlineData[],
  type: KlineDataTypeEnum,
  label: KlineDataLabelEnum,
  formatLabels: (value: any) => string
) => {
  const data = klines?.map((kline: IKlineData) => kline[type]);
  const labels = klines?.map((kline: IKlineData) => formatLabels(kline[label]));
  return {
    labels,
    data,
  };
};

export const covertDateTime = (value: string) => {
  return DateFormatter(DateTypeEnum.justDate, value);
};

export const getLinearChartData = (
  rawData: any,
  selectedCoin: any,
  chartDataType: KlineDataTypeEnum,
  chartLabel: KlineDataLabelEnum
): ILinearChartData => {
  const klineData = arrangeKlineData(rawData);
  const linearData = linearDatasetsFromKlineData(
    klineData,
    chartDataType,
    chartLabel,
    covertDateTime
  );

  return {
    labels: linearData?.labels,
    datasets: [
      {
        label: selectedCoin.name,
        data: linearData?.data,
        fill: true,
        borderColor: "rgba(16, 185, 129, 0.5)",
        backgroundColor: "rgba(16, 185, 129, 0.1)",
        tension: 0.3,
      },
    ],
  };
};
