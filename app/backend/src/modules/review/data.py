from collections.abc import Sequence

from .schema import ReviewSchemaOut

mock_review_table: Sequence[ReviewSchemaOut] = [
    ReviewSchemaOut(
        id=1,
        recipient_city="Москва",
        recipient_full_name="Алена",
        video=None,
    ),
    ReviewSchemaOut(
        id=2,
        recipient_city="Санкт-Петербург",
        recipient_full_name="Игорь",
        video="/static/reviews/review1.mp4",
    ),
    ReviewSchemaOut(
        id=3,
        recipient_city="Казань",
        recipient_full_name="Марина",
        video="/static/reviews/review2.mp4",
    ),
]
