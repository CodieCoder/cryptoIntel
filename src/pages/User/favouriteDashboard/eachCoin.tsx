import React from "react"
import CoinIcon from "../../../components/HtmlElements/CoinIcon"
import CryptoFavourite from "../../../components/HtmlElements/CryptoFavourite"
import NumberType from "../../../components/NumberType"
import "./index.scss"

const EachCoin = ({ coin }: { coin: any }) => {
  return (
    <div className="fovourite-eachCoin">
      <div className="eachCoin-favourite-btn">
        <CryptoFavourite coin={coin} />
      </div>
      <div className="eachCoin-header-icon">
        <CoinIcon src={coin?.image} className="icon" />
      </div>
      <div className="eachCoin-header-body">
        <div className="name-symbol">
          <span className="symbol">{coin?.symbol.toUpperCase()}</span>
        </div>
        <div className="price">
          <NumberType
            type="number"
            number={coin?.current_price}
            length={10}
            checker={coin?.price_change_percentage_24h}
            icon={true}
          />
        </div>
      </div>
    </div>
  )
}

export default EachCoin
