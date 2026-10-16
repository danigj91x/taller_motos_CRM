"use client";

import GaleriaFotos from "@/components/GaleriaFotos";
import { trabajos } from "@/data/trabajos";

/**
 * Sección "Trabajos": lista de trabajos realizados, cada uno con su galería de
 * fotos. En móvil se muestran en una sola columna.
 */
export default function Trabajos() {
  return (
    <section
      id="trabajos"
      aria-labelledby="trabajos-titulo"
      className="scroll-mt-24 border-b border-zinc-100 bg-white px-4 py-16 dark:border-zinc-800 dark:bg-zinc-950 sm:px-6 sm:py-20"
    >
      <div className="mx-auto max-w-6xl">
        <h2
          id="trabajos-titulo"
          className="text-center text-2xl font-bold tracking-tight text-primary-700 dark:text-primary-400 sm:text-3xl"
        >
          Trabajos realizados
        </h2>
        <ul className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {trabajos.map(({ id, titulo, fotos }) => (
            <li key={id} className="flex flex-col gap-4">
              <GaleriaFotos fotos={fotos} />
              <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">
                {titulo}
              </h3>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}