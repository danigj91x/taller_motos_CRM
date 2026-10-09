# 010 — Error 401 en OpenRouter: se usaba una clave de gestión

**Fecha:** 2026-10-09

## Síntoma
Pi devolvía al enviar el primer mensaje:
`Error: 401: {"message":"User not found.","code":401}`
La lista de modelos sí se cargaba.

## Diagnóstico
Se descartaron las causas por capas:
1. **Transporte:** la variable llegaba al contenedor con la longitud (73) y el prefijo (`sk-or-v1-`) correctos.
2. **Formato:** sin espacios ni `\r` en el archivo `.env` (`grep -c`).
3. **Validez:** consulta directa sin Pi:
   `curl -s https://openrouter.ai/api/v1/key -H "Authorization: Bearer $OPENROUTER_API_KEY"`
   La clave era válida, pero la respuesta incluía `"is_management_key": true`, `"is_provisioning_key": true` y `"limit": null`.

La lista de modelos se cargaba porque el catálogo de OpenRouter es público y no requiere autenticación.

## Causa
La clave se había creado como clave de gestión (sirve para administrar otras claves), no como clave de API para usar modelos.

## Solución
- Nueva clave de API normal, exclusiva para el proyecto (`taller-motos-agentes`), con límite de crédito de 10 $.
- Sustituida en `~/.config/agentes/openrouter.env`.
- Verificación con el mismo `curl`: `is_management_key: false` y `limit: 10`.
- Clave de gestión eliminada.

## Lecciones
- Una clave por proyecto o servicio: gasto aislado y revocación independiente.
- Las claves deben tener límite de gasto y, a ser posible, caducidad.
- Una clave de gestión dentro de un agente es un riesgo: permite crear otras claves.
- Al editar un `.env`, hay que volver a cargarlo (`source`) o reiniciar el contenedor para que se apliquen los cambios.