import type { LucideIcon } from "lucide-react";
import {
  Bike,
  ClipboardCheck,
  Disc,
  MessagesSquare,
  PackageCheck,
  Paintbrush,
  ShieldCheck,
  ShoppingBag,
  SlidersHorizontal,
  Wrench,
  Zap,
} from "lucide-react";

import { servicios } from "@/data/servicios";

/**
 * Registro que traduce el nombre de icono (guardado como texto en el archivo de
 * datos) al componente de `lucide-react`. Añadir un icono nuevo aquí permite
 * usarlo desde los datos sin tocar este componente en cada servicio.
 */
const iconosDisponibles: Record<string, LucideIcon> = {
  Bike,
  ClipboardCheck,
  Disc,
  MessagesSquare,
  PackageCheck,
  Paintbrush,
  ShieldCheck,
  ShoppingBag,
  SlidersHorizontal,
  Wrench,
  Zap,
};

/** Icono de reserva por si un nombre de los datos no está registrado. */
function IconoServicio({ nombre }: { nombre: string }) {
  const Icono = iconosDisponibles[nombre] ?? Wrench;
  return <Icono aria-hidden="true" className="h-8 w-8" strokeWidth={1.75} />;
}

/**
 * Sección "Servicios": tarjeta por cada servicio del archivo de datos.
 * En escritorio 4 columnas; en móvil 1.
 */
export default function Servicios() {
  return (
    <section
      id="servicios"
      aria-labelledby="servicios-titulo"
      className="scroll-mt-24 border-b border-zinc-100 bg-white px-4 py-16 dark:border-zinc-800 dark:bg-zinc-950 sm:px-6 sm:py-20"
    >
      <div className="mx-auto max-w-6xl">
        <h2
          id="servicios-titulo"
          className="text-center text-2xl font-bold tracking-tight text-primary-700 dark:text-primary-400 sm:text-3xl"
        >
          Servicios
        </h2>

        <ul className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {servicios.map(({ id, titulo, descripcion, icono }) => (
            <li
              key={id}
              className="flex flex-col gap-4 rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900"
            >
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary-700 text-white">
                <IconoServicio nombre={icono} />
              </span>
              <div>
                <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">
                  {titulo}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
                  {descripcion}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}