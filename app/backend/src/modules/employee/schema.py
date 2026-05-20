from pydantic import BaseModel

class StaffSchemaOut(BaseModel):
    id: int
    title: str


class EmployeeSchemaOut(BaseModel):
    id: int

    photo: str

    full_name: str
    description: str

    staff: StaffSchemaOut

    is_active: bool = True

    # TODO Можно расширить модель другими полями: education, experience, и т.д
