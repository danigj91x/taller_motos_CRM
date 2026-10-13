# Costes del proyecto

Fuente oficial: OpenRouter → Actividad. El dato de Pi es orientativo.

## Agente desarrollador (Pi + OpenRouter)

| Fecha | Tarea | Modelo | Tokens entrada | Tokens salida | Caché | Coste (USD) | Notas |
|---|---|---|---|---|---|---|---|
| 2026-10-09 | Prueba de solo lectura | DeepSeek V4 Flash | — | — | — | (completar) | Primera prueba del agente |
| 2026-10-13 | Issue #1: montar proyecto | DeepSeek V4 Flash | 28k | 17k | 99,0 % | 0,021 | Next.js, Dockerfile multi-etapa, compose |
| 2026-10-13 | Issue #2: cabecera | DeepSeek V4 Flash | 13k | 7,1k | 97,5 % | 0,006 | Sin contar la corrección del número |
| 2026-10-13 | Issue #2: corrección | DeepSeek V4 Flash | — | — | — | (completar) | Número de WhatsApp no asignable |

**Total Sprint 1 hasta ahora:** ≈ 0,027 USD (pendiente de completar)

## Scrum master (Open WebUI + Ollama local)

| Concepto | Coste |
|---|---|
| Modelo `qwen3:8b` en GPU local | 0 USD (solo consumo eléctrico) |

## Observaciones
- La caché de OpenRouter ronda el 97-99 % en las sesiones del agente: el contexto se reenvía en cada paso y la caché lo abarata mucho.
- Coste medio por issue hasta ahora: ≈ 0,014 USD.