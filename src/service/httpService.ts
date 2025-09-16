import axios from "axios";
import CONFIGS from "../configs/envConfigs";

const axiosInstance = axios.create({
  baseURL: CONFIGS.API_BASE_URL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

export default axiosInstance;
