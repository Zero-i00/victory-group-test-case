from fastapi import APIRouter, status

from core.pagination import (
    PaginationDepend,
    PaginationResponse,
)
from modules.product.schema import ProductSchemaOut
from modules.product.service import product_service


class ProductResolver:
    router = APIRouter(prefix="/products", tags=["Product"])

    @staticmethod
    @router.get("", status_code=status.HTTP_200_OK)
    def list(
        pagination: PaginationDepend,
    ) -> PaginationResponse[ProductSchemaOut]:
        return product_service.list(pagination)


product_resolver = ProductResolver()
