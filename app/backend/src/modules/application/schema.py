from uuid import UUID
from pydantic import BaseModel, EmailStr


class ApplicationSchemaIn(BaseModel):
    full_name: str
    email: EmailStr


class ApplicationSchemaOut(ApplicationSchemaIn):
    uuid: UUID

