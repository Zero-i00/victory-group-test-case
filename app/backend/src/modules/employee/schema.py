from pydantic import BaseModel


class StaffSchema(BaseModel):
    id: int
    title: str


class EmployeeSchema(BaseModel):
    id: int

    photo: str

    full_name: str
    description: str

    staff: StaffSchema

    is_active: bool = True

    # TODO Можно расширить модель другими полями: education, experience, и т.д
