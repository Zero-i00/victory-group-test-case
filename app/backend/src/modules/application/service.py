from uuid import uuid4
from .schema import ApplicationSchemaIn, ApplicationSchemaOut


class ApplicationService:
    def __init__(self):
        # TODO заранее заготовленные ошибки, например, not_found_exception
        ...

    @staticmethod
    def create(data: ApplicationSchemaIn) -> ApplicationSchemaOut:
        # TODO Какая-то логика обработки заявки

        return ApplicationSchemaOut(
            uuid=uuid4(),
            full_name=data.full_name,
            email=str(data.email),
        )

    # TODO другие методы взаимодействия с бд (+ добавить async): list, retrieve, update, destroy

application_service = ApplicationService()
