from fastapi import APIRouter
from starlette import status

from core.pagination import PaginationDepend, PaginationResponse

from .schema import ReviewSchema
from .service import review_service


class ReviewResolver:
    router = APIRouter(prefix="/review", tags=["Review"])

    @staticmethod
    @router.get("/", status_code=status.HTTP_200_OK)
    def list(pagination: PaginationDepend) -> PaginationResponse[ReviewSchema]:
        return review_service.list(pagination)


review_resolver = ReviewResolver()
