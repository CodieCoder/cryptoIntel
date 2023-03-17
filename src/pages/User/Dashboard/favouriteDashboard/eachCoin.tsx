import React, { useEffect } from "react"
import { Container, Row, Col } from "react-bootstrap"
import { Sparklines, SparklinesLine } from "react-sparklines"
import CoinIcon from "../../../../components/HtmlElements/CoinIcon"
import CryptoFavourite from "../../../../components/HtmlElements/CryptoFavourite"
import NumberType from "../../../../components/NumberType"
import "./index.scss"

const EachCoin = ({ coin }: { coin: any }) => {
  useEffect(() => {
    console.log("Testee Coin", coin)
  }, [])
  return (
    <Container>
      <div className="fovourite-eachCoin">
        <div className="eachCoin-favourite-btn">
          <CryptoFavourite coin={coin} />
        </div>
        <div className="eachCoin-body">
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
            <div className="sparkline">
              <Sparklines
                // svgHeight={40}
                // svgWidth={40}
                data={coin?.sparkline_in_7d?.price}
              >
                <SparklinesLine
                  color={`${
                    coin?.price_change_percentage_7d_in_currency < 0
                      ? "red"
                      : "green"
                  }`}
                />
              </Sparklines>
            </div>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default EachCoin
