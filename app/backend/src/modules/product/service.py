from core.pagination import (
    PaginationRequest,
    PaginationResponse,
    build_pagination_response,
)

from .data import mock_product_table
from .schema import ProductSchema


class ProductService:
    def __init__(self):
        # TODO заранее заготовленные ошибки, например, not_found_exception
        ...

    @staticmethod
    def list(pagination: PaginationRequest) -> PaginationResponse[ProductSchema]:
        return build_pagination_response(mock_product_table, pagination)


product_service = ProductService()
