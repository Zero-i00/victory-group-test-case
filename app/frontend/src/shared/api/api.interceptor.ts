import axios from "axios";
import {BASE_API_URL} from "@/shared/constants/root.constants";
import {APP_API_HEADERS} from "@/shared/api/api.utils";

export const axiosClient = axios.create({
    baseURL: BASE_API_URL,
    headers: APP_API_HEADERS,
    withCredentials: true
})
