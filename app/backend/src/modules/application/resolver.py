from fastapi import APIRouter, status

from .schema import ApplicationSchemaIn, ApplicationSchemaOut
from .service import application_service


class ApplicationResolver:
    router = APIRouter(prefix="/applications", tags=["Application"])

    @staticmethod
    @router.post("", status_code=status.HTTP_201_CREATED)
    def create(
        data: ApplicationSchemaIn,
    ) -> ApplicationSchemaOut:
        return application_service.create(data)


application_resolver = ApplicationResolver()
