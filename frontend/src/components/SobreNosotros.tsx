import AniosExperiencia from "@/components/AniosExperiencia";
import { sobreNosotros } from "@/data/sobreNosotros";

/**
 * Sección "Sobre nosotros": breves datos del taller (ficticios) y una tarjeta
 * con el año de apertura y los años de experiencia, calculados en el cliente.
 */
export default function SobreNosotros() {
  return (
    <section
      id="sobre-nosotros"
      aria-labelledby="sobre-nosotros-titulo"
      className="scroll-mt-24 border-b border-zinc-100 bg-white px-4 py-16 dark:border-zinc-800 dark:bg-zinc-950 sm:px-6 sm:py-20"
    >
      <div className="mx-auto grid max-w-6xl items-center gap-10 md:grid-cols-2">
        <div>
          <h2
            id="sobre-nosotros-titulo"
            className="text-2xl font-bold tracking-tight text-primary-700 dark:text-primary-400 sm:text-3xl"
          >
            Sobre nosotros
          </h2>
          <p className="mt-4 leading-relaxed text-zinc-700 dark:text-zinc-300">
            {sobreNosotros.texto}
          </p>
          <p className="mt-6 text-sm text-zinc-500 dark:text-zinc-500">
            {sobreNosotros.notaMencion}
          </p>
        </div>

        <div className="rounded-2xl bg-primary-700 p-6 text-white shadow-sm sm:p-8">
          <p className="text-sm font-medium uppercase tracking-wide text-primary-100">
            Año de apertura
          </p>
          <p className="mt-2 text-5xl font-extrabold tracking-tight sm:text-6xl">
            {sobreNosotros.anioApertura}
          </p>
          <p className="mt-4 text-lg font-semibold">
            <AniosExperiencia />
          </p>
        </div>
      </div>
    </section>
  );
}