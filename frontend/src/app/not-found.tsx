import Link from "next/link";

/**
 * Página 404 propia. Se renderiza dentro del layout raíz, así que incluye la
 * cabecera y el pie comunes. Se invoca para URLs que no existen (por ejemplo,
 * /motos/<slug-desconocido>).
 */
export default function NotFound() {
  return (
    <main className="flex-1 bg-white px-4 py-16 pt-28 dark:bg-zinc-950 sm:px-6 sm:py-20 sm:pt-32">
      <div className="mx-auto max-w-xl text-center">
        <p className="text-6xl font-black tracking-tight text-primary-700 dark:text-primary-400">
          404
        </p>
        <h1 className="mt-4 text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
          Página no encontrada
        </h1>
        <p className="mt-3 text-zinc-600 dark:text-zinc-300">
          La página que buscas no existe o ha cambiado de dirección.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex items-center justify-center rounded-full bg-primary-700 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-700"
        >
          Volver al inicio
        </Link>
        <Link
          href="/motos"
          className="mt-4 block text-sm font-semibold text-primary-700 underline decoration-primary-300 underline-offset-4 transition-colors hover:text-primary-600 dark:text-primary-400 dark:decoration-primary-700 dark:hover:text-primary-300"
        >
          Ver motos en venta
        </Link>
      </div>
    </main>
  );
}