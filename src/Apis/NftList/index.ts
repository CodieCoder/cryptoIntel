import axios from "axios";

const url: string =
  "https://api.coingecko.com/api/v3/nfts/list?order=h24_volume_native_asc&per_page=10";

const client = axios.create({
  baseURL: url,
});

const NftlistApi = () => async () => await client.get("");

export default NftlistApi;
