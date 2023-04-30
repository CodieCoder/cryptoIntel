import { useEffect, useState } from "react";
import { getMarketById } from "Apis/coins/getCoins";
import EachCoin from "./eachCoin";
import { useQuery } from "react-query";
import ContainerBox from "components/Container";
import "./asset/index.scss";
import { IconTypesEnum } from "components/Container/constants";
import NoData from "components/Errors/NoData";
import usePagesProvider from "usePagesProvider";
import useUserProvider from "pages/User/useUserContext";

const FavouriteDashboard = () => {
  const { currency, favouriteCoins } = usePagesProvider();
  const { setSelectedCoin } = useUserProvider();

  const [coins, setCoins] = useState<any>();

  const getFavouriteCoinsPrices = () => {
    return favouriteCoins && getMarketById(favouriteCoins.join(","), currency);
  };

  const { isLoading, isFetching, refetch } = useQuery(
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
      refetchOnMount: false,
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
    }
  );

  useEffect(() => {
    favouriteCoins?.length > 0 && refetch();
    // eslint-disable-next-line
  }, [favouriteCoins, currency]);

  return (
    <>
      <br />
      <ContainerBox
        title="Favourite Coins"
        loading={isLoading || isFetching}
        icon={IconTypesEnum.favourite}
      >
        <div className="favourites-pane">
          <div className="favouriteDashboard-head">
            {coins ? (
              <div className="coin-list">
                {coins
                  .filter((coin: any) => favouriteCoins?.includes(coin?.id))
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
            ) : (
              <NoData />
            )}
          </div>
        </div>
      </ContainerBox>
    </>
  );
};

export default FavouriteDashboard;
