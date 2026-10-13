/**
 * Trabajos realizados por el taller (todos ficticios).
 * `fotos` apunta a marcadores provisionales en `public/trabajos/`. Para poner
 * las fotos reales basta con sustituir esos archivos (o cambiar `src`) sin
 * tocar el componente.
 */
export interface FotoTrabajo {
  src: string;
  alt: string;
}

export interface Trabajo {
  id: string;
  titulo: string;
  fotos: FotoTrabajo[];
}

export const trabajos: Trabajo[] = [
  {
    id: "restauracion-clasica",
    titulo: "Restauración de una clásica",
    fotos: [
      {
        src: "/trabajos/trabajo-1-foto-1.svg",
        alt: "Marcador provisional de la restauración de una moto clásica, vista lateral",
      },
      {
        src: "/trabajos/trabajo-1-foto-2.svg",
        alt: "Marcador provisional del motor restaurado de la moto clásica",
      },
      {
        src: "/trabajos/trabajo-1-foto-3.svg",
        alt: "Marcador provisional del acabado final de la moto clásica",
      },
    ],
  },
  {
    id: "puesta-punto-deportiva",
    titulo: "Puesta a punto deportiva",
    fotos: [
      {
        src: "/trabajos/trabajo-2-foto-1.svg",
        alt: "Marcador provisional de la puesta a punto de una moto deportiva, vista frontal",
      },
      {
        src: "/trabajos/trabajo-2-foto-2.svg",
        alt: "Marcador provisional de la cadena y transmisión ajustadas de la deportiva",
      },
      {
        src: "/trabajos/trabajo-2-foto-3.svg",
        alt: "Marcador provisional del resultado final de la puesta a punto deportiva",
      },
    ],
  },
  {
    id: "reparacion-scooter",
    titulo: "Reparación y mejora de un scooter",
    fotos: [
      {
        src: "/trabajos/trabajo-3-foto-1.svg",
        alt: "Marcador provisional del scooter entrando al taller antes de la reparación",
      },
      {
        src: "/trabajos/trabajo-3-foto-2.svg",
        alt: "Marcador provisional del recambio de frenos y ruedas del scooter",
      },
      {
        src: "/trabajos/trabajo-3-foto-3.svg",
        alt: "Marcador provisional del scooter reparado y listo para entregar",
      },
    ],
  },
];