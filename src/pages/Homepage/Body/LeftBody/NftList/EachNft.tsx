// asset_platform_id: "ethereum";
// contract_address: "0xd433a216266d998c557441ce722c13307be3597f";
// id: "villa-devendome-paris-elk";
// name: "Villa Devendome Paris ELK";
// symbol: "VDPE";

const EachNft = ({ nft }: { nft: any }) => {
  return (
    <div className="nft-list-each-nft">
      <div className="nft-list-each-nft-name">{nft.name}</div>
      <div className="nft-list-each-nft-symbol">{nft.symbol}</div>
    </div>
  );
};

export default EachNft;
