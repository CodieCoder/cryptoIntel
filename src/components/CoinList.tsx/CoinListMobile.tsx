import CryptoFavourite from "components/HtmlElements/CryptoFavourite";
import { Sparklines, SparklinesLine } from "react-sparklines";

const CoinList = ({ coin, showModal }: { coin: any; showModal: any }) => {
  return (
    <tr className="coinlist-table-tr">
      <td className="coinlist-table-td">
        <CryptoFavourite coin={coin} />
      </td>
      <td className="coinlist-table-td">{coin?.market_cap_rank}</td>
      <td className="coinlist-table-td">
        <img
          src={coin?.image}
          width="20px"
          className="float-start"
          alt={coin?.symbol}
        />
        <div className="coinlist-table-name" onClick={() => showModal(coin)}>
          {coin?.name}
        </div>
      </td>
      <td className="coinlist-table-td">
        {coin?.current_price.toLocaleString()}
      </td>

      <td className="coinlist-table-td">
        <Sparklines data={coin?.sparkline_in_7d?.price}>
          <SparklinesLine
            color={`${coin?.price_change_24h < 0 ? "red" : "green"}`}
          />
        </Sparklines>
      </td>
    </tr>
  );
};

export default CoinList;
