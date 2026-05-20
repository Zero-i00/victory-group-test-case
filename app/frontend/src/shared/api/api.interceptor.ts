import axios from 'axios'
import {APP_API_HEADERS} from '@/shared/api/api.utils'
import {BASE_API_URL, BASE_API_URL_INTERNAL, IS_SERVER} from '@/shared/constants/root.constants'

export const axiosClient = axios.create({
    baseURL: IS_SERVER ? BASE_API_URL_INTERNAL : BASE_API_URL,
    headers: APP_API_HEADERS,
    withCredentials: true,
    timeout: 10_000,
})
