import React, { useEffect, useState } from "react";
import "./index.scss";
import axios from "axios";
import EachNft from "./EachNft";

const url: string =
  "https://api.coingecko.com/api/v3/nfts/list?order=h24_volume_native_asc&per_page=10";

const client = axios.create({
  baseURL: url,
});

const NftList = () => {
  const [nftList, setNftList] = useState<any>();

  const NftlistApi = async () => {
    let response = await client.get("");
    setNftList(response.data);
  };

  useEffect(() => {
    NftlistApi();
    console.log("TESTING THIS>>: ", nftList);
  }, []);
  return (
    <div className="container">
      <div className="nft-list">
        <div className="row">
          {nftList?.length > 0 &&
            nftList.map((nft: any, index: number) => {
              return (
                <div
                  className="col-lg-12 col-md-4 col-sm-12 col-xl-12"
                  key={index}
                >
                  <EachNft nft={nft} />
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default NftList;
