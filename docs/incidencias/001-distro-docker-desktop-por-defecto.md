# 001 — WSL arrancaba la distro interna de Docker Desktop

**Fecha:** 2026-10-06

## Síntoma
Al abrir WSL no existían `sudo`, `nano` ni `nvidia-smi`.

## Diagnóstico
`ls /etc` mostraba `alpine-release`, `busybox-paths.d` y `docker-desktop-vm`: no era Ubuntu, sino un Alpine mínimo.

## Causa
No había ninguna distribución instalada, así que WSL arrancaba por defecto la máquina virtual interna de Docker Desktop, que no está pensada para usarse.

## Solución
- `wsl --install -d Ubuntu-24.04` y `wsl --set-default Ubuntu-24.04`.
- Creación de usuario propio (`daniel`) con `sudo`.
- Desinstalación de Docker Desktop (ver decisión sobre Docker Engine).