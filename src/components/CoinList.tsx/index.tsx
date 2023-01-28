import React, { useContext, useEffect, useState } from "react"
import CoinList from "./CoinsList"
import "./index.scss"
import axios from "axios"
import CoinListMobile from "./CoinListMobile"
import CoinModal from "./CoinModal"
import { Spinner } from "react-bootstrap"
import PagesContext from "../../Context"
import CoinPagination from "../Pagination/Pagination"

interface ICoinListist {
  pagination?: boolean
  count?: number
}
const CoinsListing: React.FC<ICoinListist> = ({
  pagination = false,
  count = 20,
}) => {
  const { currency } = useContext(PagesContext)

  const [coinListData, setCoinListData] = useState<any>()
  const [coinSearch, setCoinSearch] = useState<string>("")
  const [modalOn, setModalOn] = useState<boolean>(false)
  const [selectedCoin, setSelectedCoin] = useState<any>()
  const [loading, setLoading] = useState<boolean>(true)
  const [pageNo, setPageNo] = useState(1)

  const CoinListAPI = async () => {
    const url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=${count}&page=${pageNo}&sparkline=true&price_change_percentage=1h`
    const client = axios.create({
      baseURL: url,
    })
    setLoading(true)
    let response = await client.get(url)
    setCoinListData(response.data)
    setLoading(false)
  }

  useEffect(() => {
    CoinListAPI()
  }, [currency, pageNo])

  const modalShow = (coin: any) => {
    setSelectedCoin(coin)
    setModalOn(true)
  }

  const handleClose = () => setModalOn(false)

  return (
    <>
      <CoinModal coin={selectedCoin} show={modalOn} toggler={handleClose} />
      <div className="container coin-list-div">
        {loading ? (
          <div className="loading-div">
            <Spinner
              as="span"
              animation="border"
              role="status"
              variant="dark"
              aria-hidden="true"
            />
            <br />
            Loading...
          </div>
        ) : (
          <>
            <div className="coin-list-search-div">
              <input
                className="form-control coin-list-search-input"
                type="text"
                placeholder="Search coin..."
                onChange={(e) => setCoinSearch(e.target.value)}
              />
            </div>
            <div className="coin-list d-none d-md-block">
              {/* <h3>Top 50 coins</h3> */}

              <table className="table table-borderless table-hover">
                <thead>
                  <tr>
                    <th scope="col"></th>
                    <th scope="col">#</th>
                    <th scope="col">Coin</th>
                    <th scope="col"></th>
                    <th scope="col">Price</th>
                    <th scope="col">24h</th>
                    <th scope="col">24h Volume</th>
                    <th scope="col">Market cap</th>
                    <th scope="col">Last 7 days</th>
                  </tr>
                </thead>
                <tbody>
                  {coinListData &&
                    coinListData
                      ?.filter((value: any) => {
                        if (coinSearch === "") {
                          return value
                        } else if (
                          value?.name
                            ?.toLocaleLowerCase()
                            .includes(coinSearch.toLocaleLowerCase()) ||
                          value?.symbol
                            ?.toLocaleLowerCase()
                            .includes(coinSearch.toLocaleLowerCase())
                        ) {
                          return value
                        }
                        return []
                      })
                      .map((coin: any, index: number) => (
                        <CoinList
                          coin={coin}
                          key={index}
                          showModal={modalShow}
                        />
                      ))}
                </tbody>
              </table>
            </div>
            <div className="coin-list d-block d-md-none">
              {/* for mobile view */}
              {/* <h3>Top 50 coins</h3> */}
              <table className="table table-borderless table-hover">
                <thead>
                  <tr>
                    <th scope="col"></th>
                    <th scope="col">#</th>
                    <th scope="col">Coin</th>
                    <th scope="col">Price</th>
                    <th scope="col">Last 7 days</th>
                  </tr>
                </thead>
                <tbody>
                  {coinListData &&
                    coinListData
                      ?.filter((value: any) => {
                        if (coinSearch === "") {
                          return value
                        } else if (
                          value?.name
                            ?.toLocaleLowerCase()
                            .includes(coinSearch.toLocaleLowerCase())
                        ) {
                          return value
                        }
                        return []
                      })
                      .map((coin: any, index: number) => (
                        <CoinListMobile
                          coin={coin}
                          key={index}
                          showModal={modalShow}
                        />
                      ))}
                </tbody>
              </table>
            </div>
          </>
        )}
      </div>
      {pagination && <CoinPagination pageNo={pageNo} setPageNo={setPageNo} />}
    </>
  )
}

export default CoinsListing
