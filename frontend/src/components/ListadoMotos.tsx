import Image from "next/image";
import Link from "next/link";

import { motos, type EstadoMoto } from "@/data/motos";

/**
 * Etiqueta de estado de una moto: texto con un color de apoyo. El estado nunca
 * se comunica solo con color (hay texto). Colores elegidos para cumplir el
 * contraste AA (≥ 4,5:1) con el texto blanco:
 *  - Disponible: fondo green-700 (#15803d) → 5,0:1
 *  - Reservada:  fondo amber-700  (#b45309) → 5,0:1
 *  - Vendida:    fondo zinc-600   (#52525b) → 7,7:1
 */
export function EtiquetaEstado({ estado }: { estado: EstadoMoto }) {
  const etiquetas: Record<
    EstadoMoto,
    { texto: string; clases: string }
  > = {
    disponible: {
      texto: "Disponible",
      clases: "bg-green-700 text-white",
    },
    reservada: {
      texto: "Reservada",
      clases: "bg-amber-700 text-white",
    },
    vendida: {
      texto: "Vendida",
      clases: "bg-zinc-600 text-white",
    },
  };

  const { texto, clases } = etiquetas[estado];
  return (
    <span
      className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold ${clases}`}
    >
      {texto}
    </span>
  );
}

/** Formatea un precio en euros con separador de miles. */
function formatPrecio(precio: number) {
  return `${precio.toLocaleString("es-ES")} €`;
}

/**
 * Listado de motos en venta. Muestra una tarjeta por moto (foto, estado,
 * modelo y precio) y enlaza a su ficha (/motos/<slug>). Las motos vendidas no
 * aparecen. Añadir o quitar una moto solo requiere tocar el archivo de datos.
 */
export default function ListadoMotos() {
  const disponibles = motos.filter((moto) => moto.estado !== "vendida");

  return (
    <main className="flex-1 bg-white px-4 py-16 pt-28 dark:bg-zinc-950 sm:px-6 sm:py-20 sm:pt-32">
      <div className="mx-auto max-w-6xl">
        <h1 className="text-2xl font-bold tracking-tight text-primary-700 dark:text-primary-400 sm:text-3xl">
          Motos en venta
        </h1>
        <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-300">
          Exposición actual del taller ({disponibles.length} motos).
        </p>

        <ul className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {disponibles.map(({ slug, modelo, precio, estado, fotos }) => {
            const foto = fotos[0];
            return (
              <li key={slug}>
                <Link
                  href={`/motos/${slug}`}
                  className="group flex flex-col overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm transition-shadow hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-700 dark:border-zinc-800 dark:bg-zinc-900"
                >
                  <div className="relative aspect-4/3 w-full overflow-hidden bg-zinc-100 dark:bg-zinc-800">
                    <Image
                      src={foto.src}
                      alt={foto.alt}
                      fill
                      className="object-cover transition-transform group-hover:scale-105"
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    />
                    <div className="absolute left-3 top-3">
                      <EtiquetaEstado estado={estado} />
                    </div>
                  </div>
                  <div className="flex flex-col gap-1 p-5">
                    <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">
                      {modelo}
                    </h2>
                    <p className="text-sm font-medium text-primary-700 dark:text-primary-400">
                      {formatPrecio(precio)}
                    </p>
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </main>
  );
}