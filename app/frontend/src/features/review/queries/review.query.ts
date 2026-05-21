import { infiniteQueryOptions } from '@tanstack/react-query'
import { reviewService } from '@/features/review/services/review.service'
import type { ReviewRequest } from '@/features/review/types/review.types'

class ReviewQuery {
    public readonly BASE_KEY = 'review'

    list(meta: ReviewRequest = {}) {
        return infiniteQueryOptions({
            queryKey: [this.BASE_KEY, meta],
            queryFn: ({ pageParam }) => reviewService.list({ ...meta, page: pageParam }),
            initialPageParam: 1,
            getNextPageParam: (lastPage) => {
                if (lastPage.page >= lastPage.pages) return undefined

                return lastPage.page + 1
            },
            select: (data) => data.pages.flatMap((page) => page.items),
        })
    }
}

export const reviewQuery = new ReviewQuery()
