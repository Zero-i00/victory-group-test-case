import {axiosClient} from '@/shared/api/api.interceptor'
import type {ApplicationRequest, ApplicationResponse} from '@/shared/types/application.types'

class ApplicationService {
    public readonly BASE_PATH = '/applications'

    async create(data: ApplicationRequest) {
        const response = await axiosClient.post<ApplicationResponse>(this.BASE_PATH, {
            ...data,
        })
        return response.data
    }
}

export const applicationService = new ApplicationService()
