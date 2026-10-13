#!/usr/bin/env bash
# Prepara el repositorio para que el agente trabaje en una issue.
# Uso: ./infra/scripts/preparar-tarea.sh <numero-issue>
set -euo pipefail

ISSUE="$1"
cd "$(git rev-parse --show-toplevel)"

# 1. Partir siempre de main limpio y actualizado
git checkout main
git pull --ff-only
if [[ -n "$(git status --porcelain)" ]]; then
  echo "ERROR: hay cambios sin commitear en main. Súbelos o descártalos antes." >&2
  exit 1
fi

# 2. Volcar la issue al archivo que lee el agente
gh issue view "$ISSUE" --json number,title,body \
  -q '"# Issue #\(.number): \(.title)\n\n\(.body)"' > .tarea-actual.md

echo "Listo. Tarea en .tarea-actual.md:"
echo "----------------------------------"
cat .tarea-actual.md