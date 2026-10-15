# Sprint 2 — Motos en venta

Objetivo: catálogo de las motos nuevas en exposición, con una ficha por moto. Sin backend, sin base de datos y sin pagos.
Todas las historias cumplen la Definición de Hecho de AGENTS.md.

---
TÍTULO: Listado de motos en venta
ETIQUETAS: frontend, must
HISTORIA: Como visitante, quiero ver las motos que tiene el taller en exposición para elegir la que me interesa.
CRITERIOS DE ACEPTACIÓN:
- El menú incluye el enlace "Motos en venta", que lleva a la página del listado.
- Cada moto se muestra en una tarjeta con foto, modelo, precio y una etiqueta de texto con su estado ("Disponible" o "Reservada") sobre la foto, con un color de apoyo. El estado nunca se indica solo con color.
- Las motos con estado "vendida" no aparecen en el listado.
- Al pulsar una tarjeta se abre la ficha de esa moto en la misma pestaña.
- Los datos de las motos están en un único archivo de datos; añadir o quitar una moto no requiere tocar componentes.
NOTAS: Datos y fotos de la demo inventados. El taller tiene pocas motos en exposición: sin filtros.

---
TÍTULO: Ficha de cada moto con su propia URL
ETIQUETAS: frontend, must
HISTORIA: Como visitante, quiero ver todos los detalles de una moto en una página que pueda compartir.
CRITERIOS DE ACEPTACIÓN:
- Cada moto tiene su URL propia (/motos/<nombre-de-la-moto>), que funciona al abrirla directamente o desde un enlace compartido.
- La ficha muestra una galería de fotos que se pueden pasar, la descripción, el carnet necesario (A1, A2 o A), los colores disponibles, la garantía del fabricante y el precio, indicando si incluye matriculación.
- Las especificaciones técnicas se muestran en una tabla con un aviso visible: "Especificaciones provisionales".
- Si la moto está vendida, la ficha se muestra con la etiqueta "Vendida", sin botones de compra, y con un enlace "Ver otras motos en venta".
- Una URL de una moto que no existe muestra una página de error 404 con la cabecera y el pie comunes.

---
TÍTULO: Botones de contacto por WhatsApp en la ficha
ETIQUETAS: frontend, must
HISTORIA: Como visitante, quiero contactar con el taller sobre una moto concreta sin tener que explicar cuál es.
CRITERIOS DE ACEPTACIÓN:
- Si la moto está disponible, la ficha muestra dos botones: "Quiero reservarla" y "Quiero verla en la tienda".
- Si la moto está reservada, la ficha muestra un único botón: "Preguntar por esta moto".
- Cada botón abre un enlace wa.me con el número de contacto.ts y un mensaje ya escrito que incluye el modelo y el precio de la moto.
- Los enlaces se abren en una pestaña nueva con rel="noopener noreferrer".
NOTAS: Sin pago ni señal. Más adelante estos botones llevarán a la reserva y a la cita.