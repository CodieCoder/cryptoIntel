import React, { useContext, useEffect, useState } from "react"
import { BsStar, BsStarFill } from "react-icons/bs"
import { updateFavourite } from "../../Apis/user/favourite"
import PagesContext from "../../Context"
import CoinIcon from "./CoinIcon"

const CryptoFavourite = ({ coin }: { coin: any }) => {
  const {
    favouriteCoins,
    updateFavouriteCoinsHandler,
    notify,
    login,
    setShowLoginModal,
    userDetails,
  } = useContext(PagesContext)

  const [isFavourite, setIsFavourite] = useState(false)
  const favouriteClickHandler = async () => {
    //add to favourite or show login/signup modal
    //check is user is logged in
    if (login === true) {
      //add to favourite
      const updatedFav = await updateFavourite(userDetails?.userKey, coin?.id)
      if (updatedFav?.error === false) {
        updateFavouriteCoinsHandler(updatedFav?.msg)
        notify.success(
          <span>
            <CoinIcon src={coin?.image} /> &nbsp; {coin?.name}!
          </span>
        )
      } else {
        notify.error("An error occured.")
      }

      return true
    } else {
      //show login/signup modal
      notify.warning(`You need to login first`)
      setShowLoginModal(true)
      return false
    }
  }

  useEffect(() => {
    if (login === true) {
      if (favouriteCoins.find((id: string) => id === coin.id)) {
        setIsFavourite(true)
      } else {
        setIsFavourite(false)
      }
    }
  }, [login, favouriteCoins])

  return (
    <span className="favourite-star" onClick={favouriteClickHandler}>
      {isFavourite === true ? (
        <BsStarFill className="isFavourite" />
      ) : (
        <BsStar />
      )}
    </span>
  )
}
export default CryptoFavourite
