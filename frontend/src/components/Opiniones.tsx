import { Star } from "lucide-react";

import { opiniones } from "@/data/opiniones";

/**
 * Renderiza la puntuación de un testimonio como estrellas accesibles: las
 * estrellas son decorativas (`aria-hidden`) y el lector de pantalla anuncia la
 * puntuación como texto ("4 de 5 estrellas").
 */
function Estrellas({ puntuacion }: { puntuacion: number }) {
  return (
    <div className="flex items-center gap-0.5">
      <span className="sr-only">{puntuacion} de 5 estrellas</span>
      <div aria-hidden="true" className="flex items-center gap-0.5">
        {Array.from({ length: 5 }, (_, i) => (
          <Star
            key={i}
            className={`h-4 w-4 ${
              i < puntuacion
                ? "fill-primary-700 text-primary-700"
                : "fill-zinc-200 text-zinc-200 dark:fill-zinc-700 dark:text-zinc-700"
            }`}
            strokeWidth={1.5}
          />
        ))}
      </div>
    </div>
  );
}

/**
 * Sección "Opiniones": muestra la valoración media y el número total de
 * opiniones del negocio, seguidos de una selección de testimonios. Cada
 * testimonio muestra el nombre, un círculo con su inicial, su puntuación en
 * estrellas y el texto.
 */
export default function Opiniones() {
  return (
    <section
      id="opiniones"
      aria-labelledby="opiniones-titulo"
      className="scroll-mt-24 border-b border-zinc-100 bg-white px-4 py-16 dark:border-zinc-800 dark:bg-zinc-950 sm:px-6 sm:py-20"
    >
      <div className="mx-auto max-w-6xl">
        <h2
          id="opiniones-titulo"
          className="text-center text-2xl font-bold tracking-tight text-primary-700 dark:text-primary-400 sm:text-3xl"
        >
          Opiniones de clientes
        </h2>

        <div className="mt-6 flex flex-col items-center gap-1 text-center">
          <p className="text-4xl font-bold text-zinc-900 dark:text-zinc-50">
            {opiniones.valoracionMedia.toFixed(1)}
          </p>
          <Estrellas
            puntuacion={Math.round(opiniones.valoracionMedia)}
          />
          <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-300">
            Basado en {opiniones.totalOpiniones} opiniones
          </p>
        </div>

        <ul className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {opiniones.testimonios.map(({ id, nombre, puntuacion, texto }) => (
            <li
              key={id}
              className="flex flex-col gap-4 rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900"
            >
              <Estrellas puntuacion={puntuacion} />
              <blockquote className="flex-1">
                <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
                  “{texto}”
                </p>
              </blockquote>
              <div className="flex items-center gap-3">
                <span
                  aria-hidden="true"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary-700 text-sm font-bold text-white"
                >
                  {nombre.charAt(0)}
                </span>
                <span className="text-sm font-semibold text-zinc-900 dark:text-zinc-50">
                  {nombre}
                </span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}