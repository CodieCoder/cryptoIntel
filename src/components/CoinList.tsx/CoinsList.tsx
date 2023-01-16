import React, { useEffect, useMemo, useState } from "react"
import { Sparklines, SparklinesLine } from "react-sparklines"
import NumberType from "../NumberType"

interface ICoinList {
  coin: any
  showModal: any
}
const CoinList: React.FC<ICoinList> = ({ coin, showModal }) => {
  const [coinsList, setCoinsList] = useState<string[]>([])

  useEffect(() => {
    setCoinsList(coin)
  })

  return (
    <tr className="coinlist-table-tr">
      <td className="coinlist-table-td">
        <i className="bi bi-star"></i>
      </td>
      <td className="coinlist-table-td">{coin?.market_cap_rank}</td>
      <td className="coinlist-table-td">
        <img src={coin?.image} width="20px" className="float-start" />
        <div className="coinlist-table-name">{coin?.name}</div>
      </td>
      <td className="coinlist-table-td">{coin?.symbol.toUpperCase()}</td>
      <td className="coinlist-table-td">
        {coin?.current_price.toLocaleString()}
      </td>
      <td className="coinlist-table-td">
        <NumberType
          type="number"
          length={2}
          number={coin?.price_change_percentage_24h}
          checker={coin?.price_change_percentage_24h}
          icon={false}
        />
      </td>
      <td className="coinlist-table-td">
        {coin?.total_volume.toLocaleString()}
      </td>
      <td className="coinlist-table-td">{coin?.market_cap.toLocaleString()}</td>
      <td className="coinlist-table-td">
        <Sparklines
          // svgHeight={40}
          // svgWidth={40}
          data={coin?.sparkline_in_7d?.price}
        >
          <SparklinesLine
            color={`${coin?.price_change_24h < 0 ? "red" : "green"}`}
          />
        </Sparklines>
      </td>
    </tr>
  )
}

export default CoinList
