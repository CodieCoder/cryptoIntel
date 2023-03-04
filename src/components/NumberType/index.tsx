import React from "react"
import "./index.scss"

// interface Type{
//  type:string = "number" || "percent" || "%"
// }

const NumberType = ({
  type,
  number,
  length,
  checker,
  icon,
}: {
  type: string
  number: number
  length: number
  checker: number
  icon?: boolean
}) => {
  number = number > 0.001 ? Number(number) : number
  number = number > 0.001 ? Number(number.toFixed(length)) : number
  checker = Number(checker)
  const typeCheck = (type: string) => {
    if (type === "percent" || type === "%" || type === "percentage") {
      return "%"
    } else {
      return ""
    }
  }
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
      {number?.toLocaleString()} {typeCheck(type)}
    </span>
  )
}

export default NumberType
