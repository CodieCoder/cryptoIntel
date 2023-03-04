import { AxiosRequest } from "../../Library/axios"

export const getNewsHeadlines = async () => {
  return await AxiosRequest.get(`news/news`)
}
export const getOneNews = async (newsId: string) => {
  return await AxiosRequest.get(`news/news/${newsId}`)
}

export const getNewsBrief = async () => {
  return await AxiosRequest.get(`news/brief`)
}
