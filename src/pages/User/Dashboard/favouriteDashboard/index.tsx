import React, { useContext, useEffect, useState } from "react";
import { getMarketById } from "Apis/coins/getCoins";
import { updateFavourite } from "Apis/user/favourite";
import CoinIcon from "components/HtmlElements/CoinIcon";
import PagesContext from "Context";
import EachCoin from "./eachCoin";
import UserContext from "pages/User/context";
import { useQuery } from "react-query";
import Loading from "components/Loading";

const FavouriteDashboard = () => {
  const {
    currency,
    favouriteCoins,
    updateFavouriteCoinsHandler,
    notify,
    login,
    setShowLoginModal,
  } = useContext(PagesContext);

  const { userDetails, setSelectedCoin } = useContext(UserContext);
  // const [isFavourite, setIsFavourite] = useState(false)
  const [coins, setCoins] = useState<any>();

  const getFavouriteCoinsPrices = () => {
    // getMarketById(favouriteCoins.join(","), currency)
    //   .then((data) => {
    //     const coins = data?.data || [];
    //     if (coins) {
    //       setCoins(coins);
    //     }
    //   })
    //   .catch((error) => {
    //     notify.error("Error getting favourite coins.");
    //     console.error(error);
    //   });
    return getMarketById(favouriteCoins.join(","), currency);
  };

  const { data, isLoading, isFetching, refetch } = useQuery(
    "get-favourite-coins-marketData",
    getFavouriteCoinsPrices,
    {
      onSuccess(data) {
        const coins = data?.data || [];
        if (coins) {
          setCoins(coins);
        }
      },
      onError(error) {
        console.error(error);
      },
    }
  );

  useEffect(() => {
    favouriteCoins?.length > 0 && refetch();
  }, [favouriteCoins]);

  return (
    <Loading loading={isLoading || isFetching}>
      <div className="container favourites-pane">
        <div className="favouriteDashboard-head">
          <div className="title">Favourite Coins</div>
          {coins && (
            <div className="coin-list">
              {coins
                .filter((coin: any) => favouriteCoins.includes(coin?.id))
                .map((coin: any, index: number) => (
                  <div className="each-coin" key={index}>
                    <EachCoin
                      coin={coin}
                      setSelectedCoin={setSelectedCoin}
                      currency={currency}
                    />
                  </div>
                ))}
            </div>
          )}
        </div>
      </div>
    </Loading>
  );
};

export default FavouriteDashboard;
