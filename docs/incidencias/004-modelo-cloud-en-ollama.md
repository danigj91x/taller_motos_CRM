# 004 — El modelo descargado era un modelo cloud

**Fecha:** 2026-10-06

## Síntoma
`ollama run deepseek-v4.1-flash` terminaba con:
`You need to be signed in to Ollama to run Cloud models`

## Diagnóstico
La descarga ocupaba 326 bytes: solo un manifiesto, sin pesos del modelo.

## Causa
Era un modelo de ejecución en la nube (servidores de Ollama), no local. Además, por tamaño no cabría en 8 GB de VRAM.

## Solución
- `ollama rm deepseek-v4.1-flash`.
- Elegir modelos locales (etiquetas de tamaño, 4-6 GB): `qwen3:8b` y `qwen2.5-coder:7b`.
- Verificación con `ollama ps`: 100% GPU.