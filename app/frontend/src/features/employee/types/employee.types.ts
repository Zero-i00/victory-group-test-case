import type {PaginationRequest, PaginationResponse} from '@/shared/types/api.types'

export type Staff = {
    id: number
    title: string
}

export type Employee = {
    id: number
    photo: string
    full_name: string
    description: string
    staff: Staff
    is_active: boolean
}

export type EmployeeRequest = PaginationRequest

export type EmployeeResponse = PaginationResponse<Employee>
