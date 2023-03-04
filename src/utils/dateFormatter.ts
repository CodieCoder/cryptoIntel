import moment from "moment"

export enum DateTypeEnum {
  longDate = "LLL",
  shortDate = "lll",
}

export const DateFormatter = (type: DateTypeEnum, date: string) => {
  return moment(date).format(type)
}
