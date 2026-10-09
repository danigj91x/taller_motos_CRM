# 009 — Pi no podía escribir en su volumen de configuración

**Fecha:** 2026-10-09

## Síntoma
Al arrancar el contenedor de la sandbox, Pi fallaba con:
`Error: EACCES: permission denied, mkdir '/home/node/.pi/agent/sessions/--workspace--'`

## Diagnóstico
- El contenedor se ejecuta como el usuario `node` (UID 1000), no como root, por diseño (`USER node` en el Dockerfile).
- El volumen con nombre `pi-config` se montaba en `/home/node/.pi`, una ruta que no existía en la imagen.

## Causa
Cuando Docker monta un volumen nuevo en una ruta inexistente en la imagen, crea esa carpeta con dueño root. El usuario `node` no tenía permisos para escribir en ella.
Si la ruta sí existe en la imagen, Docker copia su contenido y sus permisos al volumen la primera vez que se monta (solo si el volumen está vacío).

## Solución
1. En el Dockerfile, antes de `USER node`:
   `RUN mkdir -p /home/node/.pi && chown node:node /home/node/.pi`
   (debe ir antes de `USER node`, porque `chown` requiere root).
2. Borrar el volumen creado con permisos incorrectos: `docker volume rm pi-config`.
3. Reconstruir la imagen: `docker build -t pi-agent infra/agent-sandbox`.

## Verificación
Pi arranca, crea su configuración en el volumen y lista los modelos de OpenRouter.

## Lección
Al combinar contenedores sin privilegios con volúmenes con nombre, las rutas de montaje deben existir en la imagen con el dueño correcto.