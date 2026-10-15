/**
 * Datos de la sección de opiniones.
 * Todos los nombres y textos son ficticios (taller de demostración).
 *
 * `valoracionMedia` y `totalOpiniones` representan el total del negocio (por
 * ejemplo, los que podrían venir de Google en el futuro) y NO se calculan a
 * partir de los testimonios de abajo: estos son solo una selección.
 */
export interface Testimonio {
  id: string;
  nombre: string;
  /** Puntuación de 1 a 5 estrellas de este testimonio. */
  puntuacion: number;
  texto: string;
}

export const opiniones = {
  valoracionMedia: 4.8,
  totalOpiniones: 127,
  testimonios: [
    {
      id: "marta-herrera",
      nombre: "Marta Herrera",
      puntuacion: 5,
      texto:
        "Cambiaron los neumáticos de mi deportiva y me explicaron todo con calma antes de empezar. Quedó perfecta y el trato fue de diez.",
    },
    {
      id: "diego-sanchez",
      nombre: "Diego Sánchez",
      puntuacion: 5,
      texto:
        "Llevé la scooter con un ruido extraño y en la pre-revisión encontraron el problema al instante. Presupuesto claro y entrega puntual.",
    },
    {
      id: "luisa-campos",
      nombre: "Luisa Campos",
      puntuacion: 4,
      texto:
        "Muy buena puesta a punto de mi clásica. Tardaron un poco más de lo previsto, pero el resultado valió la espera.",
    },
    {
      id: "raul-iglesias",
      nombre: "Raúl Iglesias",
      puntuacion: 5,
      texto:
        "Me ayudaron a elegir mi primera moto de ocasión y me la dejaron lista para el verano. Estoy encantado con la compra.",
    },
    {
      id: "elena-perez",
      nombre: "Elena Pérez",
      puntuacion: 5,
      texto:
        "La pintura del depósito quedó impecable, como recién salido de fábrica. Detallistas de verdad y muy amables.",
    },
  ] satisfies Testimonio[],
};