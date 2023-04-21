import CoinsListing from "../../../../components/CoinList.tsx";
import "./index.scss";
import TopStories from "./headlines";

// centerbody
const CenterBody = () => {
  return (
    <div className="center-body">
      <TopStories />
      <CoinsListing />
    </div>
  );
};

export default CenterBody;
