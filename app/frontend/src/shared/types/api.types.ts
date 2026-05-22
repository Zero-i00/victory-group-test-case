export type PaginationRequest = {
    page?: number
    per_page?: number
}

export type PaginationResponse<T> = {
    items: T[]
    total: number
    page: number
    per_page: number
    pages: number
}
