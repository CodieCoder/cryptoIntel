import React from "react";
import { CurrencyDetails, getCurrencyDetails } from "utils/currency";
import "./index.scss";

interface INumberType {
  type: string;
  number: number;
  length: number;
  checker: number;
  icon?: boolean;
  currency?: string;
}

const NumberType: React.FC<INumberType> = ({
  type,
  number,
  length,
  checker,
  icon,
  currency = CurrencyDetails[0].title,
}) => {
  const currentCurrency = getCurrencyDetails(currency);
  number = number > 0.001 ? Number(number) : number;
  number = number > 0.001 ? Number(number.toFixed(length)) : number;
  checker = Number(checker);
  const typeCheck = (type: string) => {
    if (type === "percent" || type === "%" || type === "percentage") {
      return "%";
    } else {
      return "";
    }
  };
  return (
    <span
      className={` number-color ${
        checker > 0 ? "number-color-up" : "number-color-down"
      }`}
    >
      {icon && (
        <span>
          {checker > 0 ? (
            <i className="bi bi-caret-up-fill"></i>
          ) : (
            <i className="bi bi-caret-down-fill"></i>
          )}
        </span>
      )}{" "}
      {type === "number" && currentCurrency.symbol} {number?.toLocaleString()}{" "}
      {typeCheck(type)}
    </span>
  );
};

export default NumberType;
