# 006 — Sin red en WSL con networkingMode=mirrored

**Fecha:** 2026-10-07

## Síntoma
`apt update` fallaba con `Temporary failure resolving 'archive.ubuntu.com'`.

## Diagnóstico
- `ping 8.8.8.8` → `Network is unreachable`: no era solo DNS, no había red.
- `/etc/resolv.conf` era un enlace roto a `/mnt/wsl/resolv.conf`: la red de WSL no se había inicializado.

## Causa
Con `networkingMode=mirrored` en `.wslconfig`, la red de WSL no llegaba a arrancar en este equipo.

## Solución
Comentar `networkingMode=mirrored` en `.wslconfig` (vuelta al modo NAT predeterminado) y `wsl --shutdown`.

## Consecuencias
Desde Windows, `localhost` sigue llegando a los servicios de WSL (reenvío automático de puertos). Al revés no, pero no se necesita.