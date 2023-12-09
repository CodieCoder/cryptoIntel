import axios from "axios";

const BaseUrl = process.env.REACT_APP_API_ENDPOINT;

const AxiosClient = axios.create({
  baseURL: BaseUrl,
  timeout: 7000,
  headers: { "Content-Type": "application/json" },
});

export default AxiosClient;

export const AxiosRequest = {
  get: AxiosClient.get,
  patch: AxiosClient.patch,
  post: AxiosClient.post,
};
