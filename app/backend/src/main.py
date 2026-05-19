from fastapi import APIRouter, FastAPI, status

from core.config import get_settings

settings = get_settings()

app = FastAPI(title=settings.title)

api_v1_router = APIRouter(prefix="/api/v1", tags=["API v1"])


@api_v1_router.get("/health", status_code=status.HTTP_200_OK)
async def health_check() -> dict[str, str]:
    return {"status": "ok"}


app.include_router(api_v1_router)

if __name__ == "__main__":
    import uvicorn

    uvicorn.run(
        "main:app",
        host=settings.host,
        port=settings.port,
        reload=True,
    )
