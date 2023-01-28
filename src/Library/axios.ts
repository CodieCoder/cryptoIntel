import axios from "axios"

const BaseUrl = "http://192.168.5.176:8000"

const AxiosClient = axios.create({
  baseURL: BaseUrl,
  timeout: 7000,
  headers: { "Content-Type": "application/json" },
})

export default AxiosClient

export const AxiosRequest = {
  get: AxiosClient.get,
  patch: AxiosClient.patch,
  post: AxiosClient.post,
}
