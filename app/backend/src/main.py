from fastapi import APIRouter, FastAPI, status
from fastapi.staticfiles import StaticFiles

from core.config import get_settings
from modules.employee import employee_resolver
from modules.product import product_resolver
from modules.review import review_resolver

settings = get_settings()

app = FastAPI(title=settings.title)
app.mount("/static", StaticFiles(directory="/app/static"), name="static")

api_v1_router = APIRouter(prefix="/api/v1", tags=["API v1"])


@api_v1_router.get("/health", status_code=status.HTTP_200_OK)
async def health_check() -> dict[str, str]:
    return {"status": "ok"}


api_v1_router.include_router(product_resolver.router)
api_v1_router.include_router(employee_resolver.router)
api_v1_router.include_router(review_resolver.router)

app.include_router(api_v1_router)

if __name__ == "__main__":
    import uvicorn

    uvicorn.run(
        "main:app",
        host=settings.host,
        port=settings.port,
        reload=True,
    )
