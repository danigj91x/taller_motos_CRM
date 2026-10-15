import type { Metadata } from "next";

import ListadoMotos from "@/components/ListadoMotos";

export const metadata: Metadata = {
  title: "Motos en venta | MotoTaller Demo",
};

/** Página de listado de motos en venta. */
export default function MotosPage() {
  return <ListadoMotos />;
}