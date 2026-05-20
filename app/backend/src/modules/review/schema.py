from pydantic import BaseModel


class ReviewSchemaOut(BaseModel):
    id: int

    recipient_city: str
    recipient_full_name: str

    video: str | None = None

    # TODO Можно расширить модель другими полями: rate, text, created_at и т.д
