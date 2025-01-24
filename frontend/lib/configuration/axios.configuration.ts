import axios, { AxiosInstance, AxiosRequestConfig } from "axios";
import { ContentTypes, ResponseHeaders } from "../enums/http.enum";
import { EnvironmentConfiguration } from "./environment.configuration";

export const BEARER_TOKEN_PREFIX: string = "Bearer ";
export const DEFAULT_PAGINATION_LIMIT: number = 10;
export const API_PREFIX: string = "/api/v1";

const axiosInstance: AxiosInstance = axios.create({
  baseURL: String(EnvironmentConfiguration.ApiBaseUrl),
  headers: {
    [ResponseHeaders.ContentType]: ContentTypes.Json,
  },
});

const requestsInterceptor = async (
  requestConfig: AxiosRequestConfig
): Promise<AxiosRequestConfig> => {
  return requestConfig;
};

axiosInstance.interceptors.request.use(requestsInterceptor as any, (error) =>
  Promise.reject(error)
);

export default axiosInstance;
