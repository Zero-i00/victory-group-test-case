FROM ghcr.io/astral-sh/uv:bookworm-slim

WORKDIR /app

COPY .python-version ./
RUN uv python install

COPY pyproject.toml uv.lock ./
RUN uv sync --frozen

COPY docker/entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh

ENV PYTHONPATH=src

ENTRYPOINT ["/entrypoint.sh"]
CMD ["uv", "run", "uvicorn", "main:app"]
