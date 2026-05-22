import {infiniteQueryOptions} from '@tanstack/react-query'
import {productService} from '@/features/product/services/product.service'
import type {ProductRequest} from '@/features/product/types/product.types'

class ProductQuery {
    public readonly BASE_KEY = 'product'

    list(meta: ProductRequest = {}) {
        return infiniteQueryOptions({
            queryKey: [this.BASE_KEY, meta],
            queryFn: ({pageParam}) => productService.list({...meta, page: pageParam}),
            initialPageParam: 1,
            getNextPageParam: (lastPage) => {
                if (lastPage.page >= lastPage.pages) return undefined

                return lastPage.page + 1
            },
            select: (data) => data.pages.flatMap((page) => page.items),
        })
    }
}

export const productQuery = new ProductQuery()
