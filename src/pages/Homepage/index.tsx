import Body from "./Body";
import Trending from "../../components/Trending";
import "./index.scss";

const Homepage = () => {
  return (
    <div className="homepage">
      <Trending />
      <Body />
    </div>
  );
};

export default Homepage;
