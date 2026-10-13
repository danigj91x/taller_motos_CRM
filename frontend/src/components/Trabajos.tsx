"use client";

import Image from "next/image";
import { useState } from "react";

import { trabajos, type FotoTrabajo } from "@/data/trabajos";

/**
 * Galería de fotos de un único trabajo. Permite pasar entre las fotos con los
 * botones anterior/siguiente (funcionan con teclado y tienen aria-label) y
 * muestra un contador.
 */
function Galeria({ fotos }: { fotos: FotoTrabajo[] }) {
  const [indice, setIndice] = useState(0);
  const total = fotos.length;
  const foto = fotos[indice];

  const anterior = () =>
    setIndice((i) => (i === 0 ? total - 1 : i - 1));
  const siguiente = () => setIndice((i) => (i === total - 1 ? 0 : i + 1));

  return (
    <div className="relative overflow-hidden rounded-2xl bg-zinc-100 dark:bg-zinc-900">
      <Image
        src={foto.src}
        alt={foto.alt}
        width={800}
        height={600}
        className="aspect-4/3 h-auto w-full object-cover"
      />

      {/* Contador accesible */}
      <p className="absolute left-3 top-3 rounded-full bg-black/60 px-3 py-1 text-xs font-medium text-white">
        Foto {indice + 1} de {total}
      </p>

      {/* Botones anterior / siguiente */}
      <button
        type="button"
        onClick={anterior}
        aria-label="Foto anterior"
        className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-black/60 p-3 text-white transition-colors hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
      >
        <svg
          aria-hidden="true"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        type="button"
        onClick={siguiente}
        aria-label="Foto siguiente"
        className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-black/60 p-3 text-white transition-colors hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
      >
        <svg
          aria-hidden="true"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  );
}

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
              <Galeria fotos={fotos} />
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