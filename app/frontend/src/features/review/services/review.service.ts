import type { ReviewRequest, ReviewResponse } from '@/features/review/types/review.types'
import { axiosClient } from '@/shared/api/api.interceptor'

class ReviewService {
    public readonly BASE_PATH = '/reviews'

    async list(meta: ReviewRequest) {
        const response = await axiosClient.get<ReviewResponse>(this.BASE_PATH, {
            params: meta,
        })
        return response.data
    }
}

export const reviewService = new ReviewService()
