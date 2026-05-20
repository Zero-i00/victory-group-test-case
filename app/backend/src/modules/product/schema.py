from pydantic import BaseModel


class ProductSchema(BaseModel):
    id: int

    title: str
    description: str
    image: str | None = None

    is_active: bool = True

    # TODO Можно расширить модель другими полями: price, old_price (discount) и т.д
