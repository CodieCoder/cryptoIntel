import { KlineIntervalEnum } from "components/Charts/constants";
import moment from "moment";

export enum DateTypeEnum {
  justDate = "l",
  longDate = "LLL",
  shortDate = "lll",
  unix = "x",
}

export const DateFormatter = (type: DateTypeEnum, date: string) => {
  return moment(date).format(type);
};

export enum DateIntervalEnum {
  Year = "year",
  Month = "month",
  Quater = "quarter",
  Week = "week",
  IsoWeek = "isoweek",
  Day = "day",
  Date = "date",
  Hour = "hour",
  Minute = "minute",
  Second = "second",
  Millisecond = "millisecond",
}

export interface IChartInterval {
  interval: KlineIntervalEnum;
  startTime: string | number;
  endTime: string | number;
}

export const dateTimeInterval = (
  num: number,
  days: string,
  format: DateTypeEnum
): string | number => {
  const date = moment().subtract(
    num,
    days as moment.unitOfTime.DurationConstructor
  );
  return moment(date).format(format);
};

export const simpleIntervals = (
  intervalType: KlineIntervalEnum
): IChartInterval => {
  const currentDateTime = new Date().toString();
  let interval = KlineIntervalEnum.FourHour;
  let num = 1;
  let days = "day";
  switch (intervalType) {
    case KlineIntervalEnum.OneDay:
      interval = KlineIntervalEnum.FourHour;
      num = 1;
      days = "day";
      break;
    case KlineIntervalEnum.OneWeek:
      interval = KlineIntervalEnum.OneDay;
      num = 1;
      days = "week";
      break;
    case KlineIntervalEnum.OneMonth:
      interval = KlineIntervalEnum.OneWeek;
      num = 1;
      days = "month";
      break;
    case KlineIntervalEnum.threeMonths:
      interval = KlineIntervalEnum.OneMonth;
      num = 3;
      days = "months";
      break;
    case KlineIntervalEnum.oneYear:
      interval = KlineIntervalEnum.OneMonth;
      num = 1;
      days = "year";
      break;
    default:
      interval = KlineIntervalEnum.FourHour;
      num = 1;
      days = "day";
  }

  return {
    interval,
    startTime: dateTimeInterval(num, days, DateTypeEnum.unix),
    endTime: DateFormatter(DateTypeEnum.unix, currentDateTime),
  };
};
