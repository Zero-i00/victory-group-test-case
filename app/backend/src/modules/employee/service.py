from core.pagination import (
    PaginationRequest,
    PaginationResponse,
    build_pagination_response,
)

from .data import mock_employee_table
from .schema import EmployeeSchema


class EmployeeService:
    def __init__(self):
        # TODO заранее заготовленные ошибки, например, not_found_exception
        ...

    @staticmethod
    def list(pagination: PaginationRequest) -> PaginationResponse[EmployeeSchema]:
        return build_pagination_response(mock_employee_table, pagination)


employee_service = EmployeeService()
