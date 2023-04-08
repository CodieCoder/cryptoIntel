export enum klineInterval {
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
  OneMillion = "1M",
}

export interface IKlineParams {
  symbol?: string;
  interval?: klineInterval;
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
