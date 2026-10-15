import type { ReactNode } from "react";

/**
 * Estructura de una página legal (/aviso-legal, /privacidad, /cookies).
 * Muestra un aviso claramente marcado como texto provisional pendiente de
 * revisión legal. No se inventan datos de empresa (razón social, CIF, etc.).
 */
export default function PaginaLegal({
  titulo,
  children,
}: {
  titulo: string;
  children: ReactNode;
}) {
  return (
    <main className="flex-1 bg-white px-4 py-16 pt-28 dark:bg-zinc-950 sm:px-6 sm:py-20 sm:pt-32">
      <div className="mx-auto max-w-3xl">
        <h1 className="text-2xl font-bold tracking-tight text-primary-700 dark:text-primary-400 sm:text-3xl">
          {titulo}
        </h1>

        <p className="mt-4 rounded-lg border border-amber-300 bg-amber-50 px-4 py-3 text-sm font-medium text-amber-800 dark:border-amber-700 dark:bg-amber-900/30 dark:text-amber-200">
          Texto provisional pendiente de revisión legal.
        </p>

        <div className="mt-8 space-y-6 text-sm leading-relaxed text-zinc-700 dark:text-zinc-200">
          {children}
        </div>
      </div>
    </main>
  );
}