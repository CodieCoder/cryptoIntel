import React, { useContext, useEffect, useState } from "react"
import { Accordion } from "react-bootstrap"
import { getMarketById } from "../../../../Apis/coins/getCoins"
import { updateFavourite } from "../../../../Apis/user/favourite"
import CoinIcon from "../../../../components/HtmlElements/CoinIcon"
import PagesContext from "../../../../Context"
import EachCoin from "./eachCoin"

const FavouriteDashboard = () => {
  const {
    currency,
    favouriteCoins,
    updateFavouriteCoinsHandler,
    notify,
    login,
    setShowLoginModal,
    userDetails,
  } = useContext(PagesContext)

  // const [isFavourite, setIsFavourite] = useState(false)
  const [coins, setCoins] = useState<any>()

  const getFavouriteCoinsPrices = () => {
    getMarketById(favouriteCoins.join(","), currency)
      .then((data) => {
        const coins = data?.data || []
        if (coins) {
          setCoins(coins)
        }
      })
      .catch((error) => {
        notify.error("Error getting favourite coins.")
        console.error(error)
      })
  }

  useEffect(() => {
    favouriteCoins?.length > 0 && getFavouriteCoinsPrices()
  }, [favouriteCoins])

  return (
    <div className="container favourites-pane">
      <div className="favouriteDashboard-head">
        <div className="title">Favourite Coins</div>
        {coins && (
          <>
            {coins
              .filter((coin: any) => favouriteCoins.includes(coin?.id))
              .map((coin: any, index: number) => (
                <div className="each-coin" key={index}>
                  <EachCoin coin={coin} />
                </div>
              ))}
          </>
        )}
      </div>
    </div>
  )
}

export default FavouriteDashboard
