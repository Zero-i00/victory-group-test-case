from core.pagination import (
    PaginationRequest,
    PaginationResponse,
    build_pagination_response,
)

from .data import mock_employee_table
from .schema import EmployeeSchemaOut


class EmployeeService:
    def __init__(self):
        # TODO заранее заготовленные ошибки, например, not_found_exception
        ...

    @staticmethod
    def list(pagination: PaginationRequest) -> PaginationResponse[EmployeeSchemaOut]:
        return build_pagination_response(mock_employee_table, pagination)


    # TODO другие методы взаимодействия с бд (+ добавить async): create, retrieve, update, destroy

employee_service = EmployeeService()
