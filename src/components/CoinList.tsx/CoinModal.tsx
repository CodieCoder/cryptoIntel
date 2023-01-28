import React, { useContext, useEffect, useState } from "react"
import Image from "react-bootstrap/Image"
import Modal from "react-bootstrap/Modal"
import NumberType from "../NumberType"
import moment from "moment"
import { Sparklines, SparklinesLine } from "react-sparklines"
import { Button } from "react-bootstrap"
import { Link } from "react-router-dom"
import PagesContext from "../../Context"
import LivePrice from "../LivePrice"

const CoinModal = ({
  coin,
  show,
  toggler,
}: {
  coin: any
  show: boolean
  toggler: any
}) => {
  const { vs_currency } = useContext(PagesContext)
  const [modalOn, setModalOn] = useState<boolean>(show)

  useEffect(() => {
    setModalOn(show)
  }, [show])

  const handleClose = () => {
    toggler()
  }

  useEffect(() => {}, [])

  return modalOn === true ? (
    <Modal
      show={modalOn}
      onHide={handleClose}
      className="coin-modal"
      animation={true}
      scrollable={true}
      size="xl"
    >
      <Modal.Header
        closeButton
        style={{ paddingBottom: "0.2rem", paddingTop: "0.2rem" }}
      >
        <Modal.Title>
          <div className="coin-modal-title">
            <div className="coin-modal-icon">
              <Image src={coin?.image} className="coin-modal-icon-thumb" />
            </div>
            <div className="coin-modal-name">{coin?.name}</div>
            <div className="coin-modal-symbol">
              {coin?.symbol.toUpperCase()}
            </div>
          </div>
          <div className="coin-modal-price">
            <LivePrice
              currency={coin?.symbol}
              vs_currency={vs_currency}
              initialPrice={coin?.current_price}
            />
          </div>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="coin-modal-body">
        <div className="container">
          <br />
          <div className="row coin-modal-top-div">
            <div className="col-lg-4 col-md-12 col-sm-12 coin-modal-top-details">
              <div className="coin-modal-top-details-hds">Rank </div>
              <div className="coin-modal-details-text">
                {coin?.market_cap_rank}
              </div>
            </div>
            <div className="col-lg-4 col-md-12 col-sm-12 coin-modal-top-details">
              <div className="coin-modal-top-details-hds">Market cap </div>
              <div className="coin-modal-details-text">
                {coin?.market_cap?.toLocaleString()}
              </div>
            </div>
            <div className="col-lg-4 col-md-12 col-sm-12 coin-modal-top-details">
              <div className="coin-modal-top-details-hds">Total Supply </div>
              <div className="coin-modal-details-text">
                {coin?.total_supply?.toLocaleString()}
              </div>
            </div>
          </div>
        </div>
        <div
          style={{
            maxWidth: "50rem",
            margin: "auto",
            marginTop: "2rem",
          }}
        >
          <Sparklines data={coin?.sparkline_in_7d?.price} height={90}>
            <SparklinesLine
              color={coin?.price_change_24h < 0 ? "#f35484" : "#0a8830"}
            />
            {/* <SparklinesSpots /> */}
          </Sparklines>
          <br />
        </div>

        <hr />
        <div className="container" style={{ margin: "auto" }}>
          <div className="row coin-modal-top-other-div">
            <div className="col-lg-3 col-md-12 col-sm-12 coin-modal-top-other-divs">
              <div className="coin-modal-top-other-hd">24hrs stats </div>
              <div className="coin-modal-top-other-details">
                <div className="coin-modal-top-other-details-hds">High </div>
                <div className="coin-modal-top-other-details-text">
                  {coin?.high_24h?.toLocaleString()}
                </div>
              </div>
              <div className="coin-modal-top-other-details">
                <div className="coin-modal-top-other-details-hds">Low </div>
                <div className="coin-modal-top-other-details-text">
                  {coin?.low_24h?.toLocaleString()}
                </div>
              </div>
              <div className="coin-modal-top-other-details">
                <div className="coin-modal-top-other-details-hds">
                  Price change
                </div>
                <div className="coin-modal-top-other-details-text">
                  <NumberType
                    type=""
                    length={3}
                    number={coin?.price_change_24h}
                    checker={coin?.price_change_24h}
                    icon={true}
                  />
                </div>
              </div>
              <div className="coin-modal-top-other-details">
                <div className="coin-modal-top-other-details-hds">% change</div>
                <div className="coin-modal-top-other-details-text">
                  <NumberType
                    type="percent"
                    length={3}
                    number={coin?.price_change_percentage_24h}
                    checker={coin?.price_change_percentage_24h}
                    icon={true}
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-12 col-sm-12 coin-modal-top-other-divs">
              <div className="coin-modal-top-other-hd">Market stats</div>
              <div className="coin-modal-top-other-details">
                <div className="coin-modal-top-other-details-hds">
                  Cap change
                </div>
                <div className="coin-modal-top-other-details-text">
                  <NumberType
                    type=" "
                    length={3}
                    number={coin?.market_cap_change_24h}
                    checker={coin?.market_cap_change_24h}
                    icon={false}
                  />
                  (
                  <NumberType
                    type="percent"
                    length={2}
                    number={coin?.market_cap_change_percentage_24h}
                    checker={coin?.market_cap_change_percentage_24h}
                    icon={true}
                  />
                  )
                </div>
              </div>
              <div className="coin-modal-top-other-details">
                <div className="coin-modal-top-other-details-hds">
                  Circulation
                </div>
                <div className="coin-modal-top-other-details-text">
                  {coin?.circulating_supply?.toLocaleString()}
                </div>
              </div>
              <div className="coin-modal-top-other-details">
                <div className="coin-modal-top-other-details-hds">
                  Total supply
                </div>
                <div className="coin-modal-top-other-details-text">
                  {coin?.total_supply?.toLocaleString()}
                </div>
              </div>
              <div className="coin-modal-top-other-details">
                <div className="coin-modal-top-other-details-hds">
                  Diluted valuation
                </div>
                <div className="coin-modal-top-other-details-text">
                  {coin?.fully_diluted_valuation?.toLocaleString()}
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-12 coin-modal-top-other-divs">
              <div className="coin-modal-top-other-hd">All time stats</div>
              <div className="coin-modal-top-other-details">
                <div className="coin-modal-top-other-details-hds">High</div>
                <div className="coin-modal-top-other-details-text">
                  {coin?.ath}
                  (
                  <NumberType
                    type="%"
                    length={2}
                    number={coin?.ath_change_percentage}
                    checker={coin?.ath_change_percentage}
                    icon={true}
                  />
                  )
                </div>
              </div>
              <div className="coin-modal-top-other-details">
                <div className="coin-modal-top-other-details-hds">
                  High date
                </div>
                <div className="coin-modal-top-other-details-text">
                  {moment(coin?.ath_date).format("LLL")}
                </div>
              </div>
              <div className="coin-modal-top-other-details">
                <div className="coin-modal-top-other-details-hds">Low</div>
                <div className="coin-modal-top-other-details-text">
                  {coin?.atl}
                  (
                  <NumberType
                    type="%"
                    length={2}
                    number={coin?.atl_change_percentage}
                    checker={coin?.atl_change_percentage}
                    icon={true}
                  />
                  )
                </div>
              </div>
              <div className="coin-modal-top-other-details">
                <div className="coin-modal-top-other-details-hds">Low date</div>
                <div className="coin-modal-top-other-details-text">
                  {moment(coin?.atl_date).format("LLL")}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Link to={`/coin/${coin?.id}`}>
          <Button className="default-primary-button">
            View {coin?.symbol?.toUpperCase()} dashboard
          </Button>
        </Link>
      </Modal.Footer>
    </Modal>
  ) : (
    <></>
  )
}

export default CoinModal
