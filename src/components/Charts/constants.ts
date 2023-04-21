export enum KlineIntervalEnum {
  OneSecod = "1s",
  OneMinute = "1m",
  ThreeMinute = "3m",
  FiveMinute = "5m",
  FifteenMinute = "15m",
  ThirtyMinute = "30m",
  OneHour = "1h",
  TwoHour = "2h",
  FourHour = "4h",
  SixHour = "6h",
  EightHour = "8h",
  TwelveHour = "12h",
  OneDay = "1d",
  ThreeDay = "3d",
  OneWeek = "1w",
  OneMonth = "1M",
  threeMonths = "3M",
  sixMonths = "6M",
  oneYear = "1Y",
}

export const ChartIntervalsObject = [
  {
    title: "One day",
    short: KlineIntervalEnum.OneDay,
    interval: KlineIntervalEnum.FourHour,
  },
  {
    title: "One week",
    short: KlineIntervalEnum.OneWeek,
    interval: KlineIntervalEnum.OneDay,
  },
  {
    title: "one month",
    short: KlineIntervalEnum.OneMonth,
    interval: KlineIntervalEnum.OneWeek,
  },
  {
    title: "three months",
    short: KlineIntervalEnum.threeMonths,
    interval: KlineIntervalEnum.OneMonth,
  },
  {
    title: "six months",
    short: KlineIntervalEnum.sixMonths,
    interval: KlineIntervalEnum.OneMonth,
  },
  {
    title: "One year",
    short: KlineIntervalEnum.oneYear,
    interval: KlineIntervalEnum.OneMonth,
  },
];

export interface IKlineParams {
  symbol?: string;
  interval?: KlineIntervalEnum;
  startTime?: string;
  endTime?: string;
  limit?: number;
}

export interface IKlineData {
  OpenTime: number;
  OpenPrice: number;
  HighPrice: number;
  LowPrice: number;
  ClosePrice: number;
  Volume: number;
  CloseTime: number;
  QuoteAssetVolume: number;
  NumberOfTrades: number;
  TakerBuyBaseAssetVolume: number;
  TakerBuyQuoteAssetVolume: number;
  UnusedField: number;
}

export enum KlineDataTypeEnum {
  OpenTime = "OpenTime",
  OpenPrice = "OpenPrice",
  HighPrice = "HighPrice",
  LowPrice = "LowPrice",
  ClosePrice = "ClosePrice",
  Volume = "Volume",
  CloseTime = "CloseTime",
  QuoteAssetVolume = "QuoteAssetVolume",
  NumberOfTrades = "NumberOfTrades",
  TakerBuyBaseAssetVolume = "TakerBuyBaseAssetVolume",
  TakerBuyQuoteAssetVolume = "TakerBuyQuoteAssetVolume",
  UnusedField = "UnusedField",
}
export enum KlineDataLabelEnum {
  OpenTime = "OpenTime",
  CloseTime = "CloseTime",
  Volume = "Volume",
}

export interface IChartData {
  labels: string[];
  datasets: [
    {
      label: string;
      data: number[];
      backgroundColor: string;
    }
  ];
}
