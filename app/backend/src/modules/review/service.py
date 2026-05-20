from core.pagination import (
    PaginationRequest,
    PaginationResponse,
    build_pagination_response,
)

from .data import mock_review_table
from .schema import ReviewSchemaOut


class ReviewService:
    def __init__(self):
        # TODO заранее заготовленные ошибки, например, not_found_exception
        ...

    @staticmethod
    def list(pagination: PaginationRequest) -> PaginationResponse[ReviewSchemaOut]:
        return build_pagination_response(mock_review_table, pagination)

    # TODO другие методы взаимодействия с бд (+ добавить async): create, retrieve, update, destroy


review_service = ReviewService()
