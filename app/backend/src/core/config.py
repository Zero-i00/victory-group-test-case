from functools import lru_cache

from pydantic import Field
from pydantic_settings import BaseSettings, SettingsConfigDict

BaseConfig = SettingsConfigDict(
    env_file=".env", env_file_encoding="utf-8", extra="ignore"
)


class Settings(BaseSettings):
    model_config = BaseConfig

    debug: bool = False

    port: int = 8000
    host: str = "localhost"
    title: str = "DentistAm API"

    static_path: str = "static"
    allowed_hosts: list[str] = Field(default_factory=list)


@lru_cache
def get_settings() -> Settings:
    return Settings()
