import axios, { AxiosError } from "axios";
import CONFIGS from "../configs/envConfigs";
import axiosRetry from "axios-retry";

const axiosInstance = axios.create({
  baseURL: CONFIGS.API_BASE_URL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

axiosRetry(axiosInstance, {
  retries: 3, // number of retries
  retryCondition: (error: AxiosError) => {
    // if retry condition is not specified, by default idempotent requests are retried
    return error.response ? error.response.status === 500 : false;
  },
});

export default axiosInstance;
