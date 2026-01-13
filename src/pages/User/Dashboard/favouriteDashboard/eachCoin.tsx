import React from "react";
import { Container } from "react-bootstrap";
import { Sparklines, SparklinesLine } from "react-sparklines";
import CoinIcon from "components/HtmlElements/CoinIcon";
import CryptoFavourite from "components/HtmlElements/CryptoFavourite";
import NumberType from "components/NumberType";
import "./asset/index.scss";
import { ICoin } from "Constants";

interface IEachCoin {
  coin: ICoin;
  currency: string;
  setSelectedCoin: (coin: ICoin) => void;
}

const EachCoin: React.FC<IEachCoin> = ({ coin, currency, setSelectedCoin }) => {
  return (
    <Container onClick={() => setSelectedCoin(coin)}>
      <div className="fovourite-eachCoin">
        <div className="eachCoin-body">
          <div className="eachCoin-body-left">
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
                <div className="price-div-percent">
                  <NumberType
                    type="%"
                    number={coin?.price_change_percentage_24h}
                    length={10}
                    checker={coin?.price_change_percentage_24h}
                    icon={true}
                  />
                </div>
                <div className="price-div-price">
                  <NumberType
                    type="number"
                    number={coin?.current_price}
                    length={10}
                    checker={coin?.price_change_percentage_24h}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="eachCoin-body-right">
            <div className="sparkline">
              <Sparklines data={coin?.sparkline_in_7d?.price}>
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
  );
};

export default EachCoin;
