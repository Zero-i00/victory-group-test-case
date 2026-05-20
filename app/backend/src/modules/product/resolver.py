from fastapi import APIRouter, status

from core.pagination import (
    PaginationDepend,
    PaginationResponse,
)
from modules.product.schema import ProductSchema
from modules.product.service import product_service


class ProductResolver:
    router = APIRouter(prefix="/product", tags=["Product"])

    @staticmethod
    @router.get("/", status_code=status.HTTP_200_OK)
    def list(
        pagination: PaginationDepend,
    ) -> PaginationResponse[ProductSchema]:
        return product_service.list(pagination)


product_resolver = ProductResolver()
