# Sprint 1 — Web base

Objetivo: web informativa del taller, sin login ni base de datos.
Todas las historias cumplen la Definición de Hecho de AGENTS.md.

---
TÍTULO: Montar el proyecto Next.js con TypeScript, Tailwind y Docker
ETIQUETAS: frontend, infra, must
HISTORIA: Como desarrollador, quiero la base del proyecto montada y contenerizada para construir la web sobre ella.
CRITERIOS DE ACEPTACIÓN:
- El proyecto se crea con create-next-app (TypeScript, Tailwind CSS, App Router) en frontend/.
- `npm run dev` muestra una página de inicio en localhost:3000.
- El Dockerfile es multi-etapa (build y ejecución) y la imagen final se ejecuta con un usuario sin privilegios.
- `docker compose up` levanta solo el frontend y la web responde en localhost:3000.
- Existe un .dockerignore que excluye node_modules y .next.
NOTAS: Sin base de datos en este sprint.

---
TÍTULO: Cabecera fija con menú y botón de WhatsApp
ETIQUETAS: frontend, must
HISTORIA: Como visitante, quiero una cabecera siempre visible para moverme por la web y contactar rápido.
CRITERIOS DE ACEPTACIÓN:
- La cabecera muestra el logo, enlaces a cada sección y un botón de WhatsApp, y permanece visible al hacer scroll.
- Al pulsar un enlace del menú, la página se desplaza a esa sección.
- En móvil, el menú se abre con un icono y se cierra al pulsar un enlace.
- El botón de WhatsApp abre un enlace wa.me con el número del archivo de datos de contacto.
NOTAS: El enlace wa.me abre la app en móvil y WhatsApp Web en escritorio.

---
TÍTULO: Portada con imagen, título y botón de contacto
ETIQUETAS: frontend, must
HISTORIA: Como visitante, quiero una portada clara para saber al instante qué ofrece el taller.
CRITERIOS DE ACEPTACIÓN:
- La portada muestra una imagen de fondo con una capa oscura que garantiza que el texto se lea.
- Se muestran el título, el eslogan y un botón "Contactar", con textos tomados del archivo de datos.
- El botón "Contactar" lleva a la sección de contacto.

---
TÍTULO: Sección "Sobre nosotros" con años de experiencia automáticos
ETIQUETAS: frontend, must
HISTORIA: Como visitante, quiero conocer la trayectoria del taller para confiar en él.
CRITERIOS DE ACEPTACIÓN:
- Se muestra un texto breve tomado del archivo de datos.
- Se muestran el año de apertura y "X años de experiencia", donde X se calcula como año actual menos año de apertura.
- Al cambiar el año de apertura en el archivo de datos, ambos valores se actualizan sin tocar el componente.

---
TÍTULO: Sección de servicios con 11 tarjetas
ETIQUETAS: frontend, must
HISTORIA: Como visitante, quiero ver los servicios del taller para saber qué pueden hacer por mi moto.
CRITERIOS DE ACEPTACIÓN:
- Se muestran 11 tarjetas: asesoramiento, reparación, revisión y puesta a punto, pre-ITV, venta de accesorios, neumáticos, pintura, venta de vehículos, modificaciones, electricidad y montaje de accesorios.
- Cada tarjeta tiene un icono, un título y una descripción de una o dos frases.
- En escritorio se ven 4 tarjetas por fila; en móvil, 1.
- Los servicios se definen en un único archivo de datos; añadir o quitar uno no requiere tocar componentes.

---
TÍTULO: Galería de trabajos realizados
ETIQUETAS: frontend, should
HISTORIA: Como visitante, quiero ver trabajos anteriores para valorar la calidad del taller.
CRITERIOS DE ACEPTACIÓN:
- Se muestra una lista de trabajos, cada uno con título y al menos 3 fotos que se pueden pasar.
- Las fotos son provisionales y están en una carpeta dedicada, para sustituirlas por las reales sin tocar código.
- En móvil, los trabajos se muestran en una sola columna.

---
TÍTULO: Sección de opiniones
ETIQUETAS: frontend, should
HISTORIA: Como visitante, quiero ver opiniones de otros clientes para confiar en el taller.
CRITERIOS DE ACEPTACIÓN:
- Se muestra la valoración media y el número total de opiniones.
- Cada testimonio muestra el nombre, un círculo con su inicial, de 1 a 5 estrellas según la puntuación y el texto.
- Los testimonios se definen en un archivo de datos.

---
TÍTULO: Sección de contacto con formulario sin envío
ETIQUETAS: frontend, must
HISTORIA: Como visitante, quiero los datos de contacto y un formulario para comunicarme con el taller.
CRITERIOS DE ACEPTACIÓN:
- Se muestran dirección, teléfono, WhatsApp y horario, tomados del archivo de datos de contacto.
- El formulario tiene nombre, email, mensaje y una casilla de aceptación de privacidad.
- Si falta un campo, el email no es válido o la casilla no está marcada, se muestra un error junto al campo y no se envía.
- Con todo correcto, se muestra el mensaje "Mensaje enviado" y el formulario se vacía.
NOTAS: En este sprint el formulario NO envía nada (sin backend). El envío real llegará en un sprint posterior.

---
TÍTULO: Banner de cookies y mapa con consentimiento
ETIQUETAS: frontend, must
HISTORIA: Como visitante, quiero decidir sobre las cookies para que se respete mi privacidad.
CRITERIOS DE ACEPTACIÓN:
- En la primera visita aparece un banner con "Aceptar" y "Rechazar", igual de visibles.
- La decisión se recuerda: el banner no vuelve a aparecer al cambiar de página ni al volver otro día.
- Si se ha aceptado, la sección de contacto muestra el mapa de Google.
- Si se ha rechazado o aún no se ha decidido, en lugar del mapa aparece un recuadro con un botón "Cargar mapa"; al pulsarlo, se carga el mapa solo en esa visita.
- Existe una forma de cambiar la decisión (por ejemplo, un enlace "Configurar cookies" en el pie).
NOTAS: La decisión puede guardarse en el almacenamiento local del navegador.

---
TÍTULO: Pie de página con contacto y páginas legales
ETIQUETAS: frontend, must
HISTORIA: Como visitante, quiero encontrar los datos de contacto y la información legal al final de cualquier página.
CRITERIOS DE ACEPTACIÓN:
- El pie muestra dirección, teléfono, WhatsApp y horario, tomados del mismo archivo de datos que la sección de contacto.
- Contiene enlaces a tres páginas propias de la web: /aviso-legal, /privacidad y /cookies.
- Cada página existe, usa la cabecera y el pie comunes, y muestra un texto provisional.