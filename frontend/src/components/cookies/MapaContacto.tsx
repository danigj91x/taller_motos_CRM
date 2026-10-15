"use client";

import { Map } from "lucide-react";

import { contacto } from "@/data/contacto";
import { useConsentimientoCookies } from "./ConsentimientoCookies";

/**
 * Mapa de Google de la sección de contacto, sujeto a consentimiento de
 * cookies. Se muestra SOLO si el usuario ha aceptado o si, en esta visita, ha
 * pulsado "Cargar mapa". En cualquier otro caso se muestra un recuadro con un
 * botón "Cargar mapa" que NO contiene nada de Google (ni iframe, ni scripts).
 */
export default function MapaContacto() {
  const { decision, listo, mapaCargadoEstaVisita, cargarMapa } =
    useConsentimientoCookies();

  const permitido = mapaCargadoEstaVisita || decision === "aceptado";

  if (listo && permitido) {
    return (
      <div className="aspect-video w-full overflow-hidden rounded-2xl border border-zinc-200 dark:border-zinc-800">
        {/* El iframe de Google solo se monta cuando el usuario da su consentimiento. */}
        <iframe
          src={contacto.mapaUrl}
          title="Mapa de la ubicación del taller"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
          className="h-full w-full border-0"
        />
      </div>
    );
  }

  // Recuadro sin contenido de Google hasta que el usuario decida cargar el mapa.
  return (
    <div className="flex aspect-video w-full flex-col items-center justify-center gap-4 rounded-2xl border border-dashed border-zinc-300 bg-zinc-50 px-6 text-center dark:border-zinc-700 dark:bg-zinc-900">
      <Map
        aria-hidden="true"
        className="h-8 w-8 text-primary-700 dark:text-primary-400"
      />
      <p className="max-w-sm text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
        El mapa de Google se cargará solo si lo permites. Haz clic en el botón
        para verlo en esta visita.
      </p>
      <button
        type="button"
        onClick={cargarMapa}
        className="inline-flex items-center justify-center rounded-lg bg-primary-700 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-primary-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-700"
      >
        Cargar mapa
      </button>
    </div>
  );
}