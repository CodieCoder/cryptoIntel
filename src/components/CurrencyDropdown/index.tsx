import React, { useContext } from "react"
import PagesContext from "../../Context"
import { CURRENCY_LIST } from "../../Assets/CurrencyList"

const CurrencyDropdown = () => {
  const { currency, setCurrency } = useContext(PagesContext)

  const changeCurrency = (data: string) => setCurrency(data?.toLowerCase())
  //   useEffect(() => {}, [currency]);
  return (
    <span className="dropdown">
      <span
        className="dropdown-toggle"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        {CURRENCY_LIST.map((value: any) => {
          if (
            value?.name === currency ||
            value?.symbol === currency ||
            value?.symbol2 === currency
          ) {
            return value.name
          }
          return
        })}
      </span>
      <ul className="dropdown-menu">
        {CURRENCY_LIST?.map((value, index) => (
          <li
            key={index}
            className={`dropdown-item ${
              currency === value?.name ||
              (currency === value?.symbol && "active")
            }`}
            onClick={() => changeCurrency(value?.symbol)}
          >
            {value?.name}
          </li>
        ))}
      </ul>
    </span>
  )
}

export default CurrencyDropdown
