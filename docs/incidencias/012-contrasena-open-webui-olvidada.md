# 012 — Contraseña de Open WebUI olvidada

**Fecha:** 2026-10-15

## Síntoma
Imposible iniciar sesión en Open WebUI (localhost:3080) por no recordar la contraseña del usuario administrador, que era el único usuario.
Mensaje: "The email or password provided is incorrect."

## Contexto
Open WebUI guarda los usuarios en una base de datos SQLite (`webui.db`) dentro de su volumen de Docker (`open-webui_open-webui-data`). Las contraseñas se almacenan como hash, nunca en claro.

## Intentos de recuperación

En todos los casos se paró el servicio (`docker compose stop`) antes de tocar la base de datos, se hizo una copia de `webui.db` y se editó desde un contenedor temporal de Alpine con el volumen montado:

`docker run --rm -it -v open-webui_open-webui-data:/data alpine sh`

1. **Hash bcrypt generado con `htpasswd`** y `UPDATE auth SET password=... WHERE email=...`.
   El cambio se guardó (verificado con `SELECT email, substr(password,1,7) FROM auth;` → `$2y$10$`), pero el login siguió fallando.

2. **Hash generado con la librería bcrypt de Python** dentro del contenedor de Open WebUI. Mismo resultado.

3. **Hash generado con la función interna de Open WebUI** (`open_webui.utils.auth.get_password_hash`):
   - Exigía la variable `WEBUI_SECRET_KEY`. Se pasó un valor provisional solo para ese proceso (`docker exec -e WEBUI_SECRET_KEY=temporal ...`). Esa clave firma las sesiones, no cifra contraseñas.
   - La función resultó ser asíncrona en esta versión (devolvía una *coroutine*). Se ejecutó con `asyncio.run()`.
   - El login siguió fallando.

## Causa (probable, no confirmada)
El procedimiento documentado para versiones anteriores de Open WebUI no es válido en la versión instalada: la gestión de contraseñas ha cambiado (la función de hash pasó a ser asíncrona), y probablemente también el formato o la forma de verificar el hash.

## Solución
Reinstalación de Open WebUI desde cero:
1. Copia de seguridad de la base de datos fuera del repositorio:
   `docker run --rm -v open-webui_open-webui-data:/data -v ~/backups:/backup alpine cp /data/webui.db /backup/openwebui-FECHA.db`
2. `docker compose down` y `docker volume rm open-webui_open-webui-data`.
3. `docker compose up -d` y creación de un nuevo usuario administrador.
4. Reconfiguración manual (ver abajo).

Lo definido en código se restauró automáticamente: conexión con Ollama (`OLLAMA_BASE_URL`) y puerto (3080) están en `compose.yaml`; los modelos viven en Ollama, no en Open WebUI.

## Reconfiguración tras reinstalar
- Idioma: Configuración > General > Idioma > Español (España).
- Configuración > Interfaz: desactivar el seguimiento y las etiquetas generadas automáticamente.
- Espacio de trabajo > Modelos > Crear "Scrum Master":
  - Modelo base: `qwen3:8b`.
  - Indicaciones del sistema: contenido de `agents/scrum-master/system-prompt.md`.
  - Parámetros avanzados: `num_ctx` 8192, `temperature` 0.4.
  - Herramientas integradas: solo "Preguntar al Usuario".
  - Capacidades desactivadas: Terminal, Intérprete de Código, Generación de Imagen, Búsqueda Web, Visión.
- Prueba: un chat nuevo con el Scrum Master debe hacer una única pregunta, centrada en el usuario final.

## Incidente de seguridad asociado
Durante la recuperación, una contraseña en claro quedó visible en una captura de pantalla (el comando `htpasswd` la muestra). Se descartó esa contraseña y se usó otra nueva.
En el tercer intento se usó `getpass`, que pide la contraseña sin mostrarla en pantalla ni dejarla en el historial.

## Lecciones
- **Credenciales en un gestor de contraseñas** desde el momento de crearlas.
- **La configuración importante, en Git**, no solo dentro de la aplicación. Por eso reinstalar costó minutos y no horas.
- **Quien accede al host y a los volúmenes de Docker controla la aplicación**, aunque no conozca su contraseña. El acceso al servidor es la frontera de seguridad real.
- **Los procedimientos de recuperación dependen de la versión.** Antes de aplicarlos, comprobar que corresponden a la versión instalada.
- **Pendiente:** automatizar la reconfiguración de Open WebUI para que la reinstalación sea reproducible.