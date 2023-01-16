import React from "react";

const TrendingCoins = ({ coin }: { coin: any }) => {
  return (
    <div className="trending-coins-single">
      <div className="trending-coins-img">
        <img src={coin?.small} className="float-start" alt={coin?.name}></img>
      </div>
      <div className="trending-coins-name">{coin?.name}</div>
      <div className="trending-coins-symbol">{coin?.symbol}</div>
      <div className="trending-coins-price">{coin?.price_btc.toFixed(9)}</div>
    </div>
  );
};

export default TrendingCoins;
