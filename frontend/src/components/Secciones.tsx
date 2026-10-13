import { enlacesMenu } from "@/data/menu";

/**
 * Secciones de la página de inicio.
 * Por ahora son espacios reservados vacíos con su `id` (que coincide con los
 * enlaces del menú). El contenido real lo rellenarán issues posteriores.
 * `scroll-mt` compensa la cabecera fija para que el ancla no quede oculta.
 */
export default function Secciones() {
  return (
    <main className="flex-1">
      {enlacesMenu.map(({ id, texto }) => (
        <section
          key={id}
          id={id}
          aria-labelledby={`${id}-titulo`}
          className="flex min-h-[70vh] scroll-mt-24 items-center justify-center border-b border-zinc-100 bg-white px-4 py-16 dark:border-zinc-800 dark:bg-zinc-950"
        >
          <div className="text-center">
            <h2
              id={`${id}-titulo`}
              className="text-2xl font-bold text-primary-700 dark:text-primary-400"
            >
              {texto}
            </h2>
            <p className="mt-2 text-sm text-zinc-400 dark:text-zinc-500">
              Sección en construcción.
            </p>
          </div>
        </section>
      ))}
    </main>
  );
}
