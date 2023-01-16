import axios from "axios";

// NOT IN USE NOW

const url: string = "https://api.coingecko.com/api/v3/search/trending";

const TrendingCoinsAPI = async () => {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (err) {
    // Handle Error Here
    console.error(err);
  }
  return [];
};

export default TrendingCoinsAPI;
