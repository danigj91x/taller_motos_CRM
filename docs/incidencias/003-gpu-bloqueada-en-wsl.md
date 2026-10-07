# 003 — GPU bloqueada por el sistema en WSL

**Fecha:** 2026-10-06

## Síntoma
`nvidia-smi` en WSL devolvía:
`Failed to initialize NVML: GPU access blocked by the operating system`

## Diagnóstico
El binario y las librerías existían (ver 002), así que el driver se encontraba pero Windows bloqueaba el acceso de WSL a la GPU. Pasos comprobados:
1. `nvidia-smi` en PowerShell (GPU visible en Windows).
2. `wsl --version` y `wsl --update`.
3. Prueba con terminal de administrador.
4. Reinstalación limpia del driver.

## Causa
[COMPLETAR: qué paso lo resolvió]

## Solución
[COMPLETAR]

## Verificación posterior
Tras corregir el UAC (ver 008), `nvidia-smi` funciona en WSL sin permisos de administrador.