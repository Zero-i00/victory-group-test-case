from fastapi import APIRouter, status

from core.pagination import (
    PaginationDepend,
    PaginationResponse,
)

from .schema import EmployeeSchema
from .service import employee_service


class EmployeeResolver:
    router = APIRouter(prefix="/employee", tags=["Employee"])

    @staticmethod
    @router.get("/", status_code=status.HTTP_200_OK)
    def list(pagination: PaginationDepend) -> PaginationResponse[EmployeeSchema]:
        return employee_service.list(pagination)


employee_resolver = EmployeeResolver()
