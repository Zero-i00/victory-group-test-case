from collections.abc import Sequence
from math import ceil
from typing import Annotated, TypeVar

from fastapi import Depends, Query
from pydantic import BaseModel

T = TypeVar("T")


class PaginationRequest:
    def __init__(
        self,
        page: int = Query(default=1, ge=1, description="Номер страницы"),
        per_page: int = Query(
            default=10, ge=1, le=100, description="Количество элементов на странице"
        ),
    ):
        self.page = page
        self.per_page = per_page

    @property
    def offset(self) -> int:
        return (self.page - 1) * self.per_page


class PaginationResponse[T](BaseModel):
    items: list[T]
    total: int
    page: int
    per_page: int
    pages: int


def build_pagination_response[T](
    items: Sequence[T],
    pagination: PaginationRequest,
) -> PaginationResponse[T]:
    total = len(items)

    start = pagination.offset
    end = start + pagination.per_page

    return PaginationResponse(
        items=list(items[start:end]),
        total=total,
        page=pagination.page,
        per_page=pagination.per_page,
        pages=max(1, ceil(total / pagination.per_page)),
    )


PaginationDepend = Annotated[PaginationRequest, Depends()]
