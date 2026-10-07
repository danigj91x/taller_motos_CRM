# 002 — `sudo nvidia-smi`: command not found

**Fecha:** 2026-10-06

## Síntoma
`sudo nvidia-smi` devolvía `command not found`.

## Diagnóstico
`ls /usr/lib/wsl/lib/` mostraba `nvidia-smi` y `libcuda.so`, y esa ruta estaba en el `PATH` del usuario.

## Causa
En WSL, `nvidia-smi` está en `/usr/lib/wsl/lib/`, montado desde el driver de Windows. `sudo` sustituye el `PATH` por el `secure_path` definido en `/etc/sudoers`, que no incluye esa carpeta.

## Solución
Ejecutar `nvidia-smi` sin `sudo`: no necesita privilegios para consultar la GPU.
