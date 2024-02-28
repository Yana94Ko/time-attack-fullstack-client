import axios from "axios";
import authAPI from "./auth.api";
import dealAPI from "./deal.api";
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

export const coreClient = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
});
const API = { authAPI, dealAPI };

export default API;
