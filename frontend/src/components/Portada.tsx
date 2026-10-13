import { sitio } from "@/data/sitio";

/**
 * Portada (sección "inicio"): imagen de fondo con capa oscura para asegurar
 * el contraste del texto, título, eslogan y botón que lleva a "contacto".
 */
export default function Portada() {
  return (
    <section
      id="inicio"
      className="relative flex min-h-[80vh] scroll-mt-24 items-center overflow-hidden bg-primary-950"
    >
      {/* Fondo: marcador provisional sustituible por una foto real del taller */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/fondo-taller.svg')" }}
      />
      {/* Capa oscura para garantizar la legibilidad del texto */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-primary-950/75"
      />

      <div className="relative mx-auto w-full max-w-6xl px-4 py-28 text-center sm:px-6">
        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
          {sitio.nombre}
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-zinc-100 sm:text-xl">
          {sitio.eslogan}
        </p>
        <div className="mt-8">
          <a
            href="#contacto"
            className="inline-flex items-center rounded-full bg-primary-600 px-6 py-3 text-base font-semibold text-white transition-colors hover:bg-primary-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            {sitio.botonContactar}
          </a>
        </div>
      </div>
    </section>
  );
}
