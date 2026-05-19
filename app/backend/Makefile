.PHONY: format lint check

format:
	uv run black src/
	uv run ruff check src/ --fix

lint:
	uv run black src/ --check
	uv run ruff check src/

check: lint
