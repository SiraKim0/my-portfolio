import axios from "axios";
import { TOKEN } from "../../config";

const axiosConfig = {
  baseURL: `https://api.notion.com/v1/`,
  headers: {
    Authorization: `Bearer ${TOKEN}`,
    accept: "application/json",
    "Notion-Version": "2022-06-28",
    "content-type": "application/json",
  },
};
const notionService = axios.create(axiosConfig);

export default notionService;
