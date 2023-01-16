import React, { useEffect, useState } from "react";
import TrendingCoins from "./TrendingCoins";
import "./index.scss";
import axios from "axios";
import { Link } from "react-router-dom";
const url: string = "https://api.coingecko.com/api/v3/search/trending";

const client = axios.create({
  baseURL: url,
});

const Trending = () => {
  const [trendData, setTrendData] = useState<any>();

  const TrendingCoinsAPI = async () => {
    let response = await client.get("?_limit=10");
    setTrendData(response.data.coins);
  };

  useEffect(() => {
    TrendingCoinsAPI();
  }, []);

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
    <div className="container">
      <br />
      <div className="trending-coins">
        <h3>Trending Coins</h3>
        <div className="row">{getTrends()}</div>
      </div>
    </div>
  );
};

export default Trending;
