"use client";

import { useConsentimientoCookies } from "./ConsentimientoCookies";

/**
 * Banner de consentimiento de cookies. Solo se pinta cuando `bannerAbierto`
 * es true y ya se ha leído el estado guardado (evita parpadeos).
 * "Aceptar" y "Rechazar" tienen el mismo tamaño y la misma visibilidad.
 */
export default function BannerCookies() {
  const { listo, bannerAbierto, aceptar, rechazar } =
    useConsentimientoCookies();

  if (!listo || !bannerAbierto) {
    return null;
  }

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="banner-cookies-titulo"
      className="fixed inset-x-0 bottom-0 z-50 px-4 pb-4 sm:px-6 sm:pb-6"
    >
      <div className="mx-auto max-w-2xl rounded-2xl border border-zinc-200 bg-white p-5 shadow-xl dark:border-zinc-800 dark:bg-zinc-900 sm:p-6">
        <h2
          id="banner-cookies-titulo"
          className="text-base font-bold text-zinc-900 dark:text-zinc-50"
        >
          Sobre las cookies
        </h2>
        <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
          Usamos cookies para recordar tu elección sobre el mapa de Google. Si
          aceptas, el mapa se cargará en la sección de contacto. Puedes cambiar
          tu decisión en cualquier momento.
        </p>
        <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:justify-end">
          <button
            type="button"
            onClick={rechazar}
            className="inline-flex w-full items-center justify-center rounded-lg bg-primary-700 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-primary-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-700 sm:w-auto"
          >
            Rechazar
          </button>
          <button
            type="button"
            onClick={aceptar}
            className="inline-flex w-full items-center justify-center rounded-lg bg-primary-700 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-primary-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-700 sm:w-auto"
          >
            Aceptar
          </button>
        </div>
      </div>
    </div>
  );
}