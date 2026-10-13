# Procedimiento: de una issue a `main`

Ciclo completo para que un agente implemente una issue, con la issue #2 (cabecera) como ejemplo real.

**Principio general:** el agente escribe, Daniel valida. El agente nunca toca `main` ni el repositorio remoto. Todo lo que llega a `main` ha pasado por una revisión humana contra los criterios de aceptación.

---

## 1. Preparar

```bash
./infra/scripts/preparar-tarea.sh 2
```

El script hace tres cosas:
1. Cambia a `main` y lo actualiza con `git pull --ff-only`.
2. Se detiene si hay cambios sin commitear.
3. Vuelca la issue de GitHub a `.tarea-actual.md`.

**Por qué:**
- El agente debe partir siempre del último `main`. Si parte de una versión antigua, su rama chocará con el trabajo ya fusionado.
- `--ff-only` evita fusiones silenciosas si el `main` local y el remoto han divergido.
- Si hay cambios propios sin guardar, el agente los mezclaría con los suyos y sería imposible separar quién hizo qué.
- El agente no tiene acceso a GitHub (ni clave SSH ni token). El archivo `.tarea-actual.md` es la forma de pasarle la tarea sin darle credenciales. Está en `.gitignore` porque es temporal.

En el tablero: mover la issue a **En curso**.

---

## 2. Lanzar el agente

```bash
pi-agent
```

Comprobar abajo a la derecha el modelo (DeepSeek V4 Flash) y el nivel de razonamiento. Pegar la plantilla de `agents/pi/plantilla-tarea.md` con el número y la descripción de la issue.

**Por qué la sandbox:**
- Pi ejecuta comandos sin pedir permiso. Dentro del contenedor solo ve la carpeta del proyecto: ni el `home`, ni las claves SSH, ni el resto del sistema.
- Se ejecuta con un usuario sin privilegios (`node`).
- No tiene acceso a Docker. Darle el *socket* de Docker equivaldría a darle root sobre el host. Por eso la prueba con Docker la hace Daniel.
- No puede hacer `push`. Lo impide la norma de `AGENTS.md` y lo impide la técnica: no tiene credenciales.

**Por qué la plantilla:** la historia de usuario no cubre las convenciones del proyecto (dónde van los datos, qué reutilizar, qué no tocar). Sin ellas, cada issue tomaría decisiones distintas.

---

## 3. Vigilar mientras trabaja

Pi muestra cada comando que ejecuta. Si hace algo fuera de la tarea (trabajar en `main`, añadir dependencias raras, tocar `infra/` o `agents/`), se pulsa **Escape** para interrumpirlo y se le corrige.

Al terminar, Pi ofrece un resumen. **El resumen no es una prueba.** En la issue #1, Pi informó de que todo funcionaba y el contenedor no publicaba el puerto en la práctica (ver incidencia 011).

Si pregunta si arranca el servidor: no. Su contenedor no publica puertos, así que no se vería.

---

## 4. Revisar el trabajo

### 4.1 Qué ha cambiado

```bash
git log --oneline main..feature/2-cabecera
git diff main --stat
```

Comprobar:
- Los commits son de `pi-agent`, pequeños y con prefijo (`feat:`, `fix:`…).
- Solo ha tocado lo que la tarea pide. En la #2: `frontend/src/` (datos, componentes y página).
- No ha tocado `infra/`, `agents/` ni `docs/incidencias/`.

**Por qué:** el `--stat` es la forma más rápida de detectar un agente que se ha salido de su tarea.

### 4.2 Revisiones puntuales de seguridad

Según lo que haya tocado:

```bash
# Si toca .gitignore: comprobar que un .env sigue ignorado
touch frontend/.env && git check-ignore -v frontend/.env && rm frontend/.env

# Si añade enlaces a pestañas nuevas: comprobar rel="noopener"
grep -n -B3 -A3 "_blank" frontend/src/components/Header.tsx

# Buscar secretos por si acaso
git diff main | grep -iE "password|secret|token|api_key"
```

**Por qué:** son los fallos más caros. Un `.env` subido a GitHub o una clave en el código no se arreglan con un commit: hay que rotar la credencial.

### 4.3 Levantar la versión nueva

```bash
git checkout feature/2-cabecera
docker compose up -d --build
```

Comprobar que el contenedor sirve **de verdad** la versión nueva, preguntando al servicio y no suponiéndolo:

```bash
curl -s http://localhost:3000 | grep -o 'wa.me/[0-9]*' | head -1
```

Si no aparece el cambio esperado:

```bash
docker compose up -d --build --force-recreate
```

**Por qué:** Docker reutiliza capas en caché y Compose reutiliza contenedores si cree que nada ha cambiado (incidencia 011). Si `docker compose up` dice `Running` o `Started` en vez de `Recreated`, conviene verificarlo.

### 4.4 Criterios de aceptación, uno a uno

Abrir `http://localhost:3000` y comprobar cada criterio de la issue. Para la #2:

| Criterio | Cómo se comprueba |
|---|---|
| Cabecera fija con logo, menú y WhatsApp | Bajar con el scroll: la cabecera se queda arriba |
| Los enlaces llevan a cada sección | Pulsar cada enlace del menú |
| Menú de móvil que se cierra al pulsar un enlace | F12 → Ctrl + Shift + M → iPhone → abrir el menú y pulsar un enlace |
| WhatsApp abre wa.me con el número de datos | Pasar el ratón por el botón y mirar la URL abajo a la izquierda |

**Accesibilidad:** pasar Lighthouse (F12 → Lighthouse → Accesibilidad) en escritorio y en móvil. Cero fallos de contraste. Pi no tiene navegador: cualquier afirmación suya sobre contraste es una suposición.

Y la **Definición de Hecho** de `AGENTS.md`: móvil y escritorio, paleta verde, contraste, datos ficticios y `npm run build` sin errores.

**Por qué:** los criterios de aceptación son el contrato. Si se cumplen todos, la issue está hecha. Si no, no lo está, aunque "parezca que funciona".

### 4.5 Revisar el contenido, no solo el funcionamiento

En la #2, el número de WhatsApp "ficticio" (`34600123456`) tenía un formato válido de móvil español y podía pertenecer a alguien real. Se sustituyó por `34000000000`, que no puede existir.

**Por qué:** un dato ficticio debe ser imposible, no solo improbable.

---

## 5. Decidir

**Si falla algún criterio:** mover la issue de vuelta a **En curso** y devolvérsela a Pi indicando el criterio concreto y lo observado. Ejemplo:

> Revisión de la issue #2: el número de WhatsApp 34600123456 podría ser real. Cámbialo por 34000000000 en contacto.ts, con un commit fix: en la misma rama.

**Por qué devolvérsela en lugar de corregirlo a mano:** el historial refleja quién hizo cada cambio, y el agente recibe el contexto del fallo. Una corrección mínima (una línea en un archivo de datos) puede hacerla Daniel con un commit propio.

**Si cumple todo:** mover la issue a **Revisión** y seguir.

---

## 6. Pull request y merge

```bash
git push -u origin feature/2-cabecera
gh pr create --title "Cabecera fija con menú y botón de WhatsApp" --body "Closes #2"
gh pr merge --merge --delete-branch
git checkout main
git pull
```

**Por qué:**
- `Closes #2` en la descripción hace que GitHub cierre la issue al fusionar y que el milestone avance.
- `--merge` conserva los commits individuales del agente. `--squash` los aplastaría en uno y se perdería la trazabilidad.
- `--delete-branch` evita acumular ramas de issues ya cerradas.
- El `push` lo hace Daniel desde su terminal: el código solo sale de la máquina después de la revisión.

---

## 7. Cerrar

- Comprobar que la issue aparece **CLOSED** (`gh issue view 2`) y que el milestone ha avanzado.
- Mover la tarjeta a **Hecho** si no se ha movido sola.
- Anotar el coste de la sesión en `docs/costes.md` (aparece abajo en Pi; el dato oficial está en OpenRouter → Actividad).
- Si ha surgido un problema nuevo, documentarlo en `docs/incidencias/`, **en `main`**, nunca en la rama de la issue.
- Parar el contenedor si no se va a usar: `docker compose down`.

---

## Errores ya encontrados (no repetir)

| Problema | Lección |
|---|---|
| Puerto 3000 ocupado por Open WebUI | Consultar `docs/puertos.md` antes de asignar puertos |
| Contenedor reutilizado sin el puerto publicado | Verificar con `curl` qué sirve; `--force-recreate` si hay dudas |
| Incidencia commiteada en la rama de la issue | Los documentos propios van siempre en `main` |
| Archivos con espacios en el nombre | Usar guiones; la shell separa argumentos por espacios |
| `docker compose` sin `compose.yaml` en `main` | `docker` trabaja con contenedores; `docker compose`, con el archivo del proyecto |