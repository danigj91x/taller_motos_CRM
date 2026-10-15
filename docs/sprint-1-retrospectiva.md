# Sprint 1 — Revisión y retrospectiva

**Objetivo:** web base del taller, sin login ni base de datos.
**Fechas:** 2026-10-13 a 2026-10-15
**Resultado:** objetivo cumplido.

## Qué se ha entregado
- 10 historias de usuario (#1 a #10): proyecto Next.js en Docker, cabecera, portada, sobre nosotros, servicios, trabajos, opiniones, contacto, cookies con mapa condicionado al consentimiento, pie y páginas legales.
- 2 bugs de contraste detectados y corregidos durante el sprint (#13, #16).
- 1 bug de accesibilidad pendiente en el Backlog.

## Calidad (Lighthouse, portada)
| Rendimiento | Accesibilidad | Buenas prácticas | SEO |
|---|---|---|---|
| 100 | 97 | 100 | 100 |

Comparativa con la web actual del taller:

| Rendimiento | Accesibilidad | Buenas prácticas | SEO |
|---|---|---|---|
| 88 | 89 | 77 | 92 |

## Coste del agente desarrollador (OpenRouter, DeepSeek V4 Flash)
| Issue | Coste (USD) |
|---|---|
| #1 Montar proyecto | 0,021 |
| #2 Cabecera | 0,006 |
| #3 Portada | 0,013 |
| #4 Sobre nosotros | 0,007 |
| #5 Servicios | 0,008 |
| #6 Trabajos | 0,020 |
| #7 Opiniones | 0,006 |
| #8 Contacto | 0,009 |
| #9 Cookies y mapa | 0,014 |
| #10 Pie y páginas legales | 0,010 |
| #13 Bug contraste WhatsApp | 0,006 |
| #16 Bug contraste Contactar | 0,006 |
| **Total** | 0,126 |

Scrum master: modelo local, sin coste por uso.

## Qué ha ido bien
- El flujo issue → agente en sandbox → revisión → PR funciona y deja trazabilidad completa.
- Separar datos, componentes y paleta permite cambiar contenidos y colores sin tocar código.
- Pedir al agente pruebas calculables (contraste con la fórmula WCAG, clases idénticas) en lugar de afirmaciones.
- Coste muy bajo por issue gracias a la caché de OpenRouter.

## Qué ha ido mal
- El agente afirmó cosas que no podía comprobar ("contraste AA") y tomó datos reales de `docs/` (cifras de opiniones).
- Fallos que se escaparon en una revisión y se detectaron en la siguiente (contraste del botón de WhatsApp).
- Problemas de entorno: contenedor reutilizado sin puerto, conflicto de puertos, contraseña de Open WebUI.
- Errores de Git por trabajar en la rama equivocada o pegar varios comandos a la vez.

## Cambios en el proceso aplicados durante el sprint
- Lighthouse en los dos temas como paso obligatorio de la revisión.
- Normas añadidas a AGENTS.md: primary-700 para texto blanco, comprobar ambos temas, no usar `docs/` como fuente de datos.
- Scripts `crear-issues.sh` y `preparar-tarea.sh`.

## Acciones para el Sprint 2
- Revisar con Lighthouse en cada issue, no al final.
- Ejecutar los comandos de Git de uno en uno o encadenados con `&&`.
- Guardar las credenciales nuevas en un gestor de contraseñas desde el primer momento.