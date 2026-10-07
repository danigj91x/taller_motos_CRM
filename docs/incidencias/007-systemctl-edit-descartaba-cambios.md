# 007 — Ollama seguía escuchando solo en 127.0.0.1

**Fecha:** 2026-10-07

## Síntoma
Tras `sudo systemctl edit ollama`, `ss -tlnp | grep 11434` seguía mostrando `127.0.0.1:11434`, y al reabrir el editor los cambios no estaban.

## Causa
`systemctl edit` descarta todo lo que se escribe debajo de la marca `### Edits below this comment will be discarded`. El texto se había escrito en esa zona.

## Solución
Crear el override a mano:
- `/etc/systemd/system/ollama.service.d/override.conf` con `Environment="OLLAMA_HOST=0.0.0.0"` en la sección `[Service]`.
- `sudo systemctl daemon-reload` y `sudo systemctl restart ollama`.
- Verificación: `systemctl cat ollama`, `systemctl show ollama -p Environment`, `ss -tlnp`.

## Nota de seguridad
`0.0.0.0` es aceptable en local (red interna de WSL). En un servidor expuesto requeriría firewall.