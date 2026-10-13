# 011 — Contenedor del frontend sin puerto publicado

**Fecha:** 2026-10-13

## Síntoma
`docker compose up` arrancaba el frontend ("Ready" en los logs), pero el navegador devolvía `ERR_CONNECTION_REFUSED` en localhost:3000.

## Diagnóstico
1. Primer intento: conflicto de puertos. Open WebUI ocupaba el 3000 del host. Se movió al 3080.
2. Tras el cambio, seguía sin responder. `docker ps` mostraba el contenedor `Up` pero sin puertos publicados.
3. `compose.yaml` era correcto (`ports: "3000:3000"`): se descartó un error del agente.
4. El contenedor tenía `CREATED` anterior al cambio de puerto, y `docker compose up` indicaba `Started`, no `Recreated`: se estaba reutilizando el contenedor creado durante el conflicto.

## Causa (probable, no confirmada con `docker inspect`)
El contenedor se creó mientras el puerto 3000 estaba ocupado y quedó sin la publicación del puerto. Como el `compose.yaml` no cambió, Compose lo reutilizaba en cada arranque.

## Solución
`docker compose down` seguido de `docker compose up -d --build --force-recreate`.

## Lecciones
- Llevar una tabla de puertos asignados (`docs/puertos.md`).
- `docker ps` solo muestra contenedores en marcha; `docker ps -a` muestra todos.
- Ante un comportamiento raro, comprobar si Compose recrea o reutiliza el contenedor.
- El resumen de un agente no es una prueba: los criterios se verifican siempre.