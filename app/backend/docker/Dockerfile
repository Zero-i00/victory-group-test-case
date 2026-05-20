FROM ghcr.io/astral-sh/uv:bookworm-slim

WORKDIR /app

COPY .python-version ./
RUN uv python install

COPY pyproject.toml uv.lock ./
RUN uv sync --frozen

ENV PYTHONPATH=src

CMD uv run uvicorn main:app --host ${HOST:-0.0.0.0} --port ${PORT:-8000} --reload
