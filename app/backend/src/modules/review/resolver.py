from fastapi import APIRouter, status

from core.pagination import PaginationDepend, PaginationResponse

from .schema import ReviewSchemaOut
from .service import review_service


class ReviewResolver:
    router = APIRouter(prefix="/reviews", tags=["Review"])

    @staticmethod
    @router.get("", status_code=status.HTTP_200_OK)
    def list(pagination: PaginationDepend) -> PaginationResponse[ReviewSchemaOut]:
        return review_service.list(pagination)


review_resolver = ReviewResolver()
