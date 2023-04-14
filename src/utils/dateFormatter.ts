import moment from "moment";

export enum DateTypeEnum {
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

export const dateTimeInterval = (
  num: number,
  interval: string,
  format: DateTypeEnum
) => {
  const date = moment().subtract(
    num,
    interval as moment.unitOfTime.DurationConstructor
  );
  return moment(date).format(format);
};
