import { AxiosRequest } from "../../Library/axios";

export const getNews = async (page?: number, pageSize?: number) => {
  return await AxiosRequest.get(`news/news/?page=${page}&pageSize=${pageSize}`);
};

export const getNewsHeadlines = async (page?: number, pageSize?: number) => {
  return await AxiosRequest.get(`news/news/?page=${page}&pageSize=${pageSize}`);
};

export const getOneNews = async (newsId: string) => {
  return await AxiosRequest.get(`news/news/${newsId}`);
};

export const getNewsBrief = async (page?: number, pageSize?: number) => {
  return await AxiosRequest.get(
    `news/brief/?page=${page}&pageSize=${pageSize}`
  );
};
