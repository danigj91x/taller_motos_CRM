# Instrucciones para agentes

## Proyecto
Plataforma web para un taller de motos (demo con taller ficticio "MotoTaller Demo").
Fases: 1) web base, 2) reserva de citas, 3) venta de motos, 4) área de clientes con historial exportable.

## Stack (no cambiar sin aprobación)
- Frontend: Next.js + React + TypeScript, en `frontend/`
- Backend: Spring Boot (Java 21), en `backend/`
- Base de datos: PostgreSQL
- Autenticación: Keycloak
- Contenedores: Docker Compose

## Reglas de trabajo
- Trabaja siempre en una rama nueva: `feature/<numero-issue>-<descripcion-corta>`. Nunca en `main`.
- Commits pequeños, en español, con prefijo: `feat:`, `fix:`, `docs:`, `chore:`.
- No hagas `git push`: la revisión y la subida las hace Daniel.
- No modifiques `infra/`, `agents/` ni `docs/incidencias/` salvo que la tarea lo pida explícitamente.
- Nunca escribas contraseñas, claves ni tokens en el código. Usa variables de entorno y documenta las necesarias en un `.env.example`.
- Antes de dar una tarea por terminada, comprueba que el proyecto compila y que se cumplen los criterios de aceptación de la issue.
- Si algo de la tarea no está claro, pregunta antes de suponer.

## Al terminar una tarea
Resume: qué has cambiado, qué archivos, cómo probarlo y qué queda pendiente.