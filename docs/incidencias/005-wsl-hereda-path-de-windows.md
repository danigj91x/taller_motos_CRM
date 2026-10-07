# 005 — WSL heredaba el PATH de Windows

**Fecha:** 2026-10-07

## Síntoma
`which docker` devolvía `/mnt/c/Program Files/Docker/Docker/resources/bin/docker`.

## Diagnóstico
`echo $PATH` incluía decenas de rutas `/mnt/c/...`: Python, Node, Java, Docker y Ollama de Windows.

## Causa
WSL añade por defecto el `PATH` de Windows al de Linux. Cualquier comando no instalado en Ubuntu se resolvía con la versión de Windows sin avisar. Además, Docker Desktop y Ollama seguían instalados en Windows (Ollama ocupando el puerto 11434).

## Solución
- En `/etc/wsl.conf`, sección `[interop]`: `appendWindowsPath=false`.
- `wsl --shutdown` para aplicar.
- Desinstalación de Docker Desktop y Ollama de Windows.

## Efecto secundario
Se pierde el comando `code .` desde Ubuntu; VS Code se conecta mediante la extensión WSL.