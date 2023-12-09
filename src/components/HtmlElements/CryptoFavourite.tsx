import { useEffect, useState } from "react";
import Spinner from "react-bootstrap/esm/Spinner";
import { BsStar, BsStarFill } from "react-icons/bs";
import { useMutation } from "react-query";
import usePagesProvider from "usePagesProvider";
import { updateFavourite } from "../../Apis/user/favourite";
import CoinIcon from "./CoinIcon";

const CryptoFavourite = ({ coin }: { coin: any }) => {
  const {
    favouriteCoins,
    updateFavouriteCoinsHandler,
    notify,
    login,
    setShowLoginModal,
    userDetails,
  } = usePagesProvider();

  const [isFavourite, setIsFavourite] = useState(false);

  const { mutate: updatedFav, isLoading } = useMutation(updateFavourite, {
    onSuccess: (data: any) => {
      if (data?.error === false) {
        updateFavouriteCoinsHandler(data?.result);
        notify.success(
          <span>
            <CoinIcon src={coin?.image} /> &nbsp; {coin?.name}
            {isFavourite ? (
              <span> removed from favourites</span>
            ) : (
              <span> added to favourites</span>
            )}
          </span>
        );
      } else {
        notify.error(data?.result || "An error occured.");
      }
    },
    onError: (error: any) => notify.error("An error occured."),
  });

  const favouriteClickHandler = async () => {
    //add to favourite or show login/signup modal
    //check is user is logged in
    if (login === true) {
      updatedFav({ userId: userDetails?.userKey, coinId: coin?.id });
      //add to favourite
    } else {
      //show login/signup modal
      notify.warning(`You need to login first`);
      setShowLoginModal(true);
    }
  };

  useEffect(() => {
    if (login === true) {
      if (favouriteCoins?.find((id: string) => id === coin.id)) {
        setIsFavourite(true);
      } else {
        setIsFavourite(false);
      }
    }
  }, [login, favouriteCoins, coin.id]);

  return (
    <>
      {isLoading ? (
        <Spinner
          as="span"
          animation="border"
          size="sm"
          role="status"
          aria-hidden="true"
        />
      ) : (
        <span className="favourite-star" onClick={favouriteClickHandler}>
          {isFavourite === true ? (
            <BsStarFill className="isFavourite" />
          ) : (
            <BsStar />
          )}
        </span>
      )}
    </>
  );
};
export default CryptoFavourite;
