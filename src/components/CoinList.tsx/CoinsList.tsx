import React from "react"
import { Sparklines, SparklinesLine } from "react-sparklines"
import CoinIcon from "../HtmlElements/CoinIcon"
import CryptoFavourite from "../HtmlElements/CryptoFavourite"
import NumberType from "../NumberType"
import { priceFormat } from "utils/numberFormat"

interface ICoinList {
  coin: any
  showModal: any
  currency: string
}
const CoinList: React.FC<ICoinList> = ({ coin, showModal, currency }) => {
  return (
    <tr className="coinlist-table-tr">
      <td className="coinlist-table-td">
        <CryptoFavourite coin={coin} />
      </td>
      <td className="coinlist-table-td">{coin?.market_cap_rank}</td>
      <td className="coinlist-table-td">
        <span className="float-start">
          <CoinIcon src={coin?.image} />
        </span>
        <div className="coinlist-table-name" onClick={() => showModal(coin)}>
          {coin?.name}
        </div>
      </td>
      <td className="coinlist-table-td">{coin?.symbol.toUpperCase()}</td>
      <td className="coinlist-table-td">
        {priceFormat(coin?.current_price, currency)}
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
        <Sparklines data={coin?.sparkline_in_7d?.price}>
          <SparklinesLine
            color={`${coin?.price_change_24h < 0 ? "red" : "green"}`}
          />
        </Sparklines>
      </td>
    </tr>
  )
}

export default CoinList
