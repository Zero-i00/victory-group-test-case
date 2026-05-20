from collections.abc import Sequence

from .schema import ReviewSchema

mock_review_table: Sequence[ReviewSchema] = [
    ReviewSchema(
        id=1,
        recipient_city="Москва",
        recipient_full_name="Алена",
        video=None,
    ),
    ReviewSchema(
        id=2,
        recipient_city="Санкт-Петербург",
        recipient_full_name="Игорь",
        video="/static/reviews/review1.mp4",
    ),
    ReviewSchema(
        id=3,
        recipient_city="Казань",
        recipient_full_name="Марина",
        video="/static/reviews/review2.mp4",
    ),
]
