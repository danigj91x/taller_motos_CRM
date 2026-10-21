import type { Metadata } from "next";
import { notFound } from "next/navigation";

import FichaMoto from "@/components/FichaMoto";
import { motos } from "@/data/motos";

interface Props {
  params: Promise<{ slug: string }>;
}

/** Genera una página por moto (incluidas las vendidas) para compartir URLs. */
export function generateStaticParams() {
  return motos.map((moto) => ({ slug: moto.slug }));
}

/** El título de la pestaña del navegador incluye el modelo de la moto. */
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const moto = motos.find((m) => m.slug === slug);

  if (!moto) {
    return { title: "Moto no encontrada | MotoTaller Demo" };
  }

  return {
    title: `${moto.modelo} | MotoTaller Demo`,
    description: moto.descripcion,
  };
}

/**
 * Ficha de una moto con su URL propia (/motos/<slug>). Si el slug no
 * corresponde a ninguna moto, se muestra un 404 con la cabecera y el pie
 * comunes y se devuelve el código de estado HTTP 404.
 */
export default async function FichaMotoPage({ params }: Props) {
  const { slug } = await params;
  const moto = motos.find((m) => m.slug === slug);

  if (!moto) {
    notFound();
  }

  return <FichaMoto moto={moto} />;
}