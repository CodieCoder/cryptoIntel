import React, { useEffect, useState } from "react";
import TrendingCoins from "./TrendingCoins";
import "./index.scss";
import { Link } from "react-router-dom";
import { getTrendingCoins } from "../../Apis/coins/getCoins";
import { useQuery } from "react-query";
import { Spinner, Container } from "react-bootstrap";

const Trending = () => {
  const [trendData, setTrendData] = useState<any>();

  const { data, isLoading, isFetching } = useQuery(
    "trending-coins",
    getTrendingCoins,
    {
      refetchOnMount: false,
      refetchOnWindowFocus: false,
    }
  );

  useEffect(() => {
    setTrendData(data?.data?.coins);
  }, [data]);

  const getTrends = () => {
    if (trendData?.length > 0) {
      return trendData.map(
        (coin: { item: any }, index: React.Key) =>
          index < 4 && (
            <div
              className={`${
                index > 3 && "d-none d-sm-block"
              } col-lg-3 col-md-6 col-sm-12`}
              key={index}
            >
              <Link to={`/coin/${coin?.item?.id?.toLowerCase()}`}>
                <TrendingCoins coin={coin?.item} />
              </Link>
            </div>
          )
      );
    }
  };

  return (
    <Container>
      <div className="trending-coins">
        <h4>Trending Coins</h4>
        {isLoading || isFetching ? (
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
          <div className="row">{getTrends()}</div>
        )}
      </div>
    </Container>
  );
};

export default Trending;
