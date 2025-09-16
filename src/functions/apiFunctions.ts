import axiosInstance from "../service/httpService";
import type { QueryResult } from "../types/responseTypes";

const getQueryResponse = async (query: string): Promise<QueryResult> => {
  const response = await axiosInstance.post("/vectors/query", {
    query: query,
  });
  return response.data;
};

export default {
  getQueryResponse,
};
