from uuid import uuid4
from .schema import ApplicationSchemaIn, ApplicationSchemaOut


class ApplicationService:
    def __init__(self):
        # TODO заранее заготовленные ошибки, например, not_found_exception
        ...

    @staticmethod
    def create(data: ApplicationSchemaIn) -> ApplicationSchemaOut:
        # TODO Какая-то логика обработки заявки; Взаимодействие с бд

        return ApplicationSchemaOut(
            uuid=uuid4(),
            full_name=data.full_name,
            email=data.email,
        )


application_service = ApplicationService()
