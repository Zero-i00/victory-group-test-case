import type {EmployeeRequest, EmployeeResponse} from '@/features/employee/types/employee.types'
import {axiosClient} from '@/shared/api/api.interceptor'

class EmployeeService {
    public readonly BASE_PATH = '/employees'

    async list(meta: EmployeeRequest) {
        const response = await axiosClient.get<EmployeeResponse>(this.BASE_PATH, {
            params: meta,
        })
        return response.data
    }
}

export const employeeService = new EmployeeService()
