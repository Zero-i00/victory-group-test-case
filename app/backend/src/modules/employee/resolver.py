from fastapi import APIRouter, status

from core.pagination import (
    PaginationDepend,
    PaginationResponse,
)

from .schema import EmployeeSchemaOut
from .service import employee_service


class EmployeeResolver:
    router = APIRouter(prefix="/employees", tags=["Employee"])

    @staticmethod
    @router.get("", status_code=status.HTTP_200_OK)
    def list(pagination: PaginationDepend) -> PaginationResponse[EmployeeSchemaOut]:
        return employee_service.list(pagination)


employee_resolver = EmployeeResolver()
