import Link from "next/link";

import GaleriaFotos from "@/components/GaleriaFotos";
import { EtiquetaEstado } from "@/components/ListadoMotos";
import { motos, type Moto } from "@/data/motos";

/** Formatea un precio en euros con separador de miles. */
function formatPrecio(precio: number) {
  return `${precio.toLocaleString("es-ES")} €`;
}

/**
 * Ficha de una moto: galería de fotos, descripción, carnet, colores,
 * garantía, precio (con indicación de si incluye matriculación) y una tabla de
 * especificaciones técnicas con el aviso visible de que son provisionales.
 *
 * Si la moto está vendida, se muestra la etiqueta "Vendida", no aparecen
 * acciones de compra y se ofrece el enlace a otras motos en venta. Los botones
 * de contacto por WhatsApp son la issue #28 y NO se implementan aquí.
 */
export default function FichaMoto({ moto }: { moto: Moto }) {
  const vendida = moto.estado === "vendida";
  const otrasEnVenta = motos.some(
    (m) => m.estado !== "vendida" && m.slug !== moto.slug,
  );

  return (
    <main className="flex-1 bg-white px-4 py-10 pt-24 dark:bg-zinc-950 sm:px-6 sm:py-12 sm:pt-28">
      <div className="mx-auto max-w-6xl">
        {/* Vuelta al listado */}
        <Link
          href="/motos"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-primary-700 transition-colors hover:text-primary-600 dark:text-primary-400 dark:hover:text-primary-300"
        >
          <svg
            aria-hidden="true"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M19 12H5M11 18l-6-6 6-6" />
          </svg>
          Motos en venta
        </Link>

        {/* Título con etiqueta de estado */}
        <header className="mt-4 flex flex-wrap items-center gap-3">
          <h1 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-3xl">
            {moto.modelo}
          </h1>
          <EtiquetaEstado estado={moto.estado} />
        </header>
        <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">
          {moto.tipo}
        </p>

        {/* Galería */}
        <div className="mt-6">
          <GaleriaFotos fotos={moto.fotos} />
        </div>

        {/* Descripción */}
        <p className="mt-8 max-w-prose text-base leading-relaxed text-zinc-700 dark:text-zinc-300">
          {moto.descripcion}
        </p>

        {/* Precio */}
        <div className="mt-6 rounded-2xl border border-zinc-200 bg-zinc-50 p-5 dark:border-zinc-800 dark:bg-zinc-900">
          <p className="text-sm text-zinc-500 dark:text-zinc-400">Precio</p>
          <p className="mt-1 text-2xl font-bold text-primary-700 dark:text-primary-400">
            {formatPrecio(moto.precio)}
            <span className="ml-2 text-sm font-medium text-zinc-600 dark:text-zinc-300">
              {moto.incluyeMatriculacion
                ? "matriculación incluida"
                : "sin matriculación"}
            </span>
          </p>
        </div>

        {/* Datos generales */}
        <dl className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-xl border border-zinc-200 p-4 dark:border-zinc-800">
            <dt className="text-xs font-medium uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
              Carnet
            </dt>
            <dd className="mt-1 text-base font-semibold text-zinc-900 dark:text-zinc-50">
              {moto.carnet}
            </dd>
          </div>
          <div className="rounded-xl border border-zinc-200 p-4 dark:border-zinc-800">
            <dt className="text-xs font-medium uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
              Colores
            </dt>
            <dd className="mt-1 text-base font-semibold text-zinc-900 dark:text-zinc-50">
              {moto.colores.join(" · ")}
            </dd>
          </div>
          <div className="rounded-xl border border-zinc-200 p-4 dark:border-zinc-800">
            <dt className="text-xs font-medium uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
              Garantía del fabricante
            </dt>
            <dd className="mt-1 text-base font-semibold text-zinc-900 dark:text-zinc-50">
              {moto.garantia}
            </dd>
          </div>
        </dl>

        {/* Especificaciones técnicas */}
        <section
          aria-labelledby="especificaciones-titulo"
          className="mt-10"
        >
          <h2
            id="especificaciones-titulo"
            className="text-lg font-semibold text-zinc-900 dark:text-zinc-50"
          >
            Especificaciones técnicas
          </h2>
          <p className="mt-2 inline-flex items-center gap-2 rounded-lg bg-amber-50 px-3 py-1.5 text-sm font-medium text-amber-900 dark:bg-amber-950 dark:text-amber-200">
            <svg
              aria-hidden="true"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="10" />
              <line x1="12" y1="8" x2="12" y2="12" />
              <line x1="12" y1="16" x2="12.01" y2="16" />
            </svg>
            Especificaciones provisionales
          </p>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full border-collapse text-left text-sm">
              <tbody className="divide-y divide-zinc-200 dark:divide-zinc-800">
                {moto.especificaciones.map(({ nombre, valor }) => (
                  <tr key={nombre}>
                    <th
                      scope="row"
                      className="w-1/2 whitespace-nowrap py-3 pr-4 font-medium text-zinc-900 dark:text-zinc-50"
                    >
                      {nombre}
                    </th>
                    <td className="py-3 text-zinc-600 dark:text-zinc-300">
                      {valor}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Moto vendida: sin acciones de compra y enlace a otras en venta */}
        {vendida && (
          <div className="mt-10 rounded-2xl border border-zinc-200 bg-zinc-50 p-5 dark:border-zinc-800 dark:bg-zinc-900">
            <p className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
              Esta moto ya ha sido vendida.
            </p>
            {otrasEnVenta && (
              <Link
                href="/motos"
                className="mt-3 inline-block text-sm font-semibold text-primary-700 underline decoration-primary-300 underline-offset-4 transition-colors hover:text-primary-600 dark:text-primary-400 dark:decoration-primary-700 dark:hover:text-primary-300"
              >
                Ver otras motos en venta
              </Link>
            )}
          </div>
        )}
      </div>
    </main>
  );
}