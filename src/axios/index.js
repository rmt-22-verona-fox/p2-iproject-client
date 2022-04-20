import axios from "axios";
import { BASE_URL } from "../main";

export const axiosAuth = axios.create({
  baseURL: BASE_URL(),
});
