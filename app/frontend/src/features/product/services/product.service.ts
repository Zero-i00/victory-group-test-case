import type {ProductRequest, ProductResponse} from '@/features/product/types/product.types'
import {axiosClient} from '@/shared/api/api.interceptor'

class ProductService {
    public readonly BASE_PATH = '/products'

    async list(meta: ProductRequest) {
        const response = await axiosClient.get<ProductResponse>(this.BASE_PATH, {
            params: meta,
        })
        return response.data
    }
}

export const productService = new ProductService()
