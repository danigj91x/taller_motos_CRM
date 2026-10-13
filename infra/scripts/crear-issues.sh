#!/usr/bin/env bash
# Crea issues de GitHub a partir de un archivo de historias de usuario.
# Uso: ./crear-issues.sh <archivo> <milestone> [--de-verdad]
set -euo pipefail

ARCHIVO="$1"
MILESTONE="$2"
MODO="${3:-}"
PROYECTO="Taller Motos CRM"
TMP=$(mktemp -d)

# Separa el archivo en un fichero por historia (bloques entre líneas ---)
awk -v dir="$TMP" 'BEGIN{RS="\n---\n"} NR>1 {printf "%s", $0 > sprintf("%s/historia-%02d.txt", dir, NR-1)}' "$ARCHIVO"

for f in "$TMP"/historia-*.txt; do
  titulo=$(grep -m1 '^TÍTULO:' "$f" | sed 's/^TÍTULO: *//')
  etiquetas=$(grep -m1 '^ETIQUETAS:' "$f" | sed 's/^ETIQUETAS: *//; s/ //g')
  cuerpo=$(grep -v -e '^TÍTULO:' -e '^ETIQUETAS:' "$f")

  if [[ "$MODO" == "--de-verdad" ]]; then
    gh issue create --title "$titulo" --label "$etiquetas" \
      --milestone "$MILESTONE" --project "$PROYECTO" --body "$cuerpo"
  else
    echo "== $titulo"
    echo "   Etiquetas: $etiquetas"
    echo
  fi
done

rm -r "$TMP"