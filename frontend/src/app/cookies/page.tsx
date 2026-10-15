import PaginaLegal from "@/components/PaginaLegal";

/** Página de política de cookies (texto provisional). */
export default function Cookies() {
  return (
    <PaginaLegal titulo="Política de cookies">
      <p>
        Esta web solo utiliza el almacenamiento local del navegador para
        recordar tu elección sobre el mapa de Google. No emplea cookies de
        seguimiento ni de publicidad.
      </p>
      <h2 className="text-base font-semibold text-zinc-900 dark:text-zinc-50">
        Almacenamiento local: consentimiento de cookies
      </h2>
      <p>
        Utilizamos la clave del navegador{" "}
        <code className="rounded bg-zinc-100 px-1.5 py-0.5 font-mono text-xs dark:bg-zinc-800">
          mototaller-consentimiento-cookies
        </code>{" "}
        para guardar tu decisión (aceptar o rechazar). No es una cookie y solo
        se almacena en tu navegador.
      </p>
      <h2 className="text-base font-semibold text-zinc-900 dark:text-zinc-50">
        Google Maps
      </h2>
      <p>
        La sección de contacto puede mostrar un mapa embebido de Google Maps.
        Solo se carga después de que aceptes el consentimiento, o si pulsas
        &laquo;Cargar mapa&raquo; en una visita concreta. Si decides no cargarlo,
        no se realiza ninguna conexión a los servidores de Google. Puedes
        cambiar tu elección en cualquier momento con el botón
        &laquo;Configurar cookies&raquo;.
      </p>
      <p>
        Este sitio es una demostración y todos los nombres, datos y contenidos
        mostrados son ficticios.
      </p>
    </PaginaLegal>
  );
}