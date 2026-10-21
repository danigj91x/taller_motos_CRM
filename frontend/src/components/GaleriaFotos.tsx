"use client";

import Image from "next/image";
import { useState } from "react";

/**
 * Foto con ruta y texto alternativo, tal y como la definen los datos de
 * trabajos y de motos. Acepta cualquier objeto con `src` y `alt`.
 */
interface Foto {
  src: string;
  alt: string;
}

/**
 * Galería de fotos reutilizable (sección de trabajos y ficha de moto).
 * Permite pasar entre las fotos con los botones anterior/siguiente (funcionan
 * con teclado y tienen aria-label) y muestra un contador.
 */
export default function GaleriaFotos({ fotos }: { fotos: Foto[] }) {
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