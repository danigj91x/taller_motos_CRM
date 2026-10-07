# 008 — UAC desactivado: todo se ejecutaba como administrador

**Fecha:** 2026-10-07

## Síntoma
VS Code mostraba `[Administrator]` en la barra de título al conectarse a WSL, sin haberlo pedido.

## Diagnóstico
- La opción "Ejecutar como administrador" estaba desmarcada en Windows Terminal y en los accesos directos.
- Comprobación de elevación en PowerShell abierto desde Inicio: `True`.
- Control de cuentas de usuario en "No notificarme nunca".

## Causa
Con el UAC desactivado, Windows ejecuta todos los procesos con privilegios de administrador sin pedir confirmación.

## Riesgo
Cualquier script, dependencia o agente de IA lanzado desde la terminal tenía permisos de administrador sobre Windows.

## Solución
UAC en la posición predeterminada ("Notificarme solo cuando una aplicación intente realizar cambios") y reinicio.

## Verificación
Comprobación de elevación: `False`. VS Code sin `[Administrator]`. `nvidia-smi`, Ollama y Docker funcionando como usuario normal.