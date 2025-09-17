import axiosInstance from "../service/httpService";
import type { Message } from "../types/paramTypes";
import type { QueryResult } from "../types/responseTypes";

const getQueryResponse = async (query: string): Promise<QueryResult> => {
  const response = await axiosInstance.post("/vectors/query", {
    query: query,
  });
  return response.data;
};

const getChatHistory = async (): Promise<Message[]> => {
  const response = await axiosInstance.get("/session/history");
  return response.data?.history;
};

const deleteSession = async (): Promise<any> => {
  const response = await axiosInstance.post("/session/clear");
  return response.data;
};

export default {
  getQueryResponse,
  deleteSession,
  getChatHistory,
};
