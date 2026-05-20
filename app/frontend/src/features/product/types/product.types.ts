import type {PaginationRequest, PaginationResponse} from '@/shared/types/api.types'

export type Product = {
    id: number
    title: string
    description: string
    image: string | null
    is_active: boolean
}

export type ProductRequest = PaginationRequest

export type ProductResponse = PaginationResponse<Product>
