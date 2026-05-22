import type {AxiosHeaders} from "axios";


export const APP_API_HEADERS: Partial<AxiosHeaders> = {
    'X-App-Context': 'Landing',
    'Content-Type': 'application/json',
}