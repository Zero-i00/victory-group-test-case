import type {PaginationRequest, PaginationResponse} from '@/shared/types/api.types'

export type Review = {
    id: number
    recipient_city: string
    recipient_full_name: string
    video: string | null
}

export type ReviewRequest = PaginationRequest

export type ReviewResponse = PaginationResponse<Review>
