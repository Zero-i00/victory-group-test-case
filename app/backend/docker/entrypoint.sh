#!/bin/sh
set -e

exec "$@" --host "${HOST:-0.0.0.0}" --port "${PORT:-8000}" --reload
