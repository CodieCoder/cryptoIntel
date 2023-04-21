import React, { useContext, useEffect, useState } from "react";
import CoinList from "./CoinsList";
import "./index.scss";
import CoinListMobile from "./CoinListMobile";
import CoinModal from "./CoinModal";
import { Table } from "react-bootstrap";
import PagesContext from "../../Context";
import CoinPagination from "../Pagination/Pagination";
import { useQuery } from "react-query";
import { getAllCoinsMarket } from "../../Apis/coins/getCoins";
import ContainerBox from "components/Container";

interface ICoinListist {
  pagination?: boolean;
  count?: number;
}
const CoinsListing: React.FC<ICoinListist> = ({
  pagination = false,
  count = 20,
}) => {
  const { currency } = useContext(PagesContext);

  const [coinListData, setCoinListData] = useState<any>();
  const [coinSearch, setCoinSearch] = useState<string>("");
  const [modalOn, setModalOn] = useState<boolean>(false);
  const [selectedCoin, setSelectedCoin] = useState<any>();
  const [pageNo, setPageNo] = useState(1);

  const getCoins = () => {
    return getAllCoinsMarket(currency, count, pageNo);
  };

  const { data, isLoading, isFetching, refetch } = useQuery(
    "all-coins",
    getCoins,
    {
      refetchOnMount: false,
      refetchOnWindowFocus: false,
    }
  );

  useEffect(() => {
    refetch();
    // eslint-disable-next-line
  }, [currency, pageNo]);

  useEffect(() => {
    data && setCoinListData(data?.data);
  }, [data]);

  const filterBySearch = () => {
    const searchResult = coinListData;
    const searchTerm = coinSearch.toLocaleLowerCase();
    if (searchResult) {
      return searchResult?.filter(
        (coin: any) =>
          coin?.name?.toLocaleLowerCase().includes(searchTerm) ||
          coin?.symbol?.toLocaleLowerCase().includes(searchTerm)
      );
    }

    return searchResult;
  };

  const modalShow = (coin: any) => {
    setSelectedCoin(coin);
    setModalOn(true);
  };

  const handleClose = () => setModalOn(false);

  return (
    <>
      <CoinModal coin={selectedCoin} show={modalOn} toggler={handleClose} />
      <ContainerBox loading={isLoading || isFetching} title="Coin list">
        <div className="container coin-list-div">
          <div className="coin-list-search-div">
            <input
              className="form-control coin-list-search-input"
              type="text"
              placeholder="Search coin..."
              onChange={(e) => setCoinSearch(e.target.value)}
            />
          </div>
          <div className="coin-list d-none d-md-block">
            <Table hover responsive>
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
                  filterBySearch().map((coin: any, index: number) => (
                    <CoinList coin={coin} key={index} showModal={modalShow} />
                  ))}
              </tbody>
            </Table>
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
                  filterBySearch().map((coin: any, index: number) => (
                    <CoinListMobile
                      coin={coin}
                      key={index}
                      showModal={modalShow}
                    />
                  ))}
              </tbody>
            </table>
          </div>
        </div>
        {pagination && <CoinPagination pageNo={pageNo} setPageNo={setPageNo} />}
      </ContainerBox>
    </>
  );
};

export default CoinsListing;
