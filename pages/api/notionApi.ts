import { NotionAPI } from "notion-client";
import notionService from ".";
import { NotionPostDataType, statusFilter } from "@/types";
import { AxiosResponse } from "axios";
import { BLOG_DATABASE_ID, PROJECT_DATABASE_ID } from "@/config";

const notionApi = new NotionAPI();
export default notionApi;

export const getNotionBlogPost = async (filter: statusFilter) => {
  const res = await notionService.post<
    NotionPostDataType,
    AxiosResponse<NotionPostDataType>
  >(`/databases/${BLOG_DATABASE_ID}/query`, filter);
  return res;
};

export const getNotionProjectPost = async (filter: statusFilter) => {
  const res = await notionService.post<
    NotionPostDataType,
    AxiosResponse<NotionPostDataType>
  >(`/databases/${PROJECT_DATABASE_ID}/query`, filter);
  return res;
};
