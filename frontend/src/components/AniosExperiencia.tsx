"use client";

import { useEffect, useState } from "react";
import { sobreNosotros } from "@/data/sobreNosotros";

/**
 * Muestra "X años de experiencia" calculado como (año actual − año de apertura).
 *
 * El cálculo se hace en el navegador y NO durante el build. Si lo calculásemos
 * en el servidor, Next.js lo incrustaría con "static generation" en el HTML y
 * quedaría congelado en la fecha de compilación. Al calcularlo en el cliente
 * después del montaje, el valor refleja siempre el año en el que abre la web,
 * sin necesidad de recompilar.
 *
 * Además, se comienza con `null` (idéntico en servidor y navegador) y se
 * actualiza tras el montaje para evitar el aviso de "hydration mismatch" de React.
 */
export default function AniosExperiencia() {
  const [anios, setAnios] = useState<number | null>(null);

  useEffect(() => {
    setAnios(new Date().getFullYear() - sobreNosotros.anioApertura);
  }, []);

  return <span>{anios ?? "…"} años de experiencia</span>;
}