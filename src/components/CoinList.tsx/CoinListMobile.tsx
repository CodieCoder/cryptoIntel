import React from "react"
import { Sparklines, SparklinesLine } from "react-sparklines"

const CoinList = ({ coin, showModal }: { coin: any; showModal: any }) => {
  // const [coinsList, setCoinsList] = useState<string[]>([])

  // useEffect(() => {
  //   setCoinsList(coin)
  // })

  return (
    <tr className="coinlist-table-tr" onClick={() => showModal(coin)}>
      <td className="coinlist-table-td">
        <i className="bi bi-star"></i>
      </td>
      <td className="coinlist-table-td">{coin?.market_cap_rank}</td>
      <td className="coinlist-table-td">
        <img
          src={coin?.image}
          width="20px"
          className="float-start"
          alt={coin?.symbol}
        />
        <div className="coinlist-table-name">{coin?.name}</div>
      </td>
      {/* <td className="coinlist-table-td">{coin?.symbol.toUpperCase()}</td> */}
      <td className="coinlist-table-td">
        {coin?.current_price.toLocaleString()}
      </td>

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
