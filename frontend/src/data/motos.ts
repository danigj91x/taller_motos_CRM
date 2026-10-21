/**
 * Datos de las motos en venta del taller (todas ficticias).
 * El modelo de datos es COMPLETO: aunque el listado solo muestra una parte
 * (foto, modelo, precio y estado), la ficha (issue posterior) usará el resto
 * (matriculación, carnet, tipo, colores, garantía, descripción, fotos y
 * especificaciones técnicas).
 *
 * `slug` es el identificador para la URL de la ficha (/motos/<slug>).
 * `fotos` apunta a marcadores provisionales en `public/motos/<slug>/`.
 */
export type EstadoMoto = "disponible" | "reservada" | "vendida";

export type CarnetMoto = "A1" | "A2" | "A";

export interface EspecificacionMoto {
  nombre: string;
  valor: string;
}

export interface FotoMoto {
  src: string;
  alt: string;
}

export interface Moto {
  slug: string;
  modelo: string;
  precio: number;
  incluyeMatriculacion: boolean;
  estado: EstadoMoto;
  carnet: CarnetMoto;
  tipo: string;
  colores: string[];
  garantia: string;
  descripcion: string;
  fotos: FotoMoto[];
  especificaciones: EspecificacionMoto[];
}

export const motos: Moto[] = [
  {
    slug: "nebula-300",
    modelo: "Nebula 300",
    precio: 4990,
    incluyeMatriculacion: true,
    estado: "disponible",
    carnet: "A2",
    tipo: "Naked",
    colores: ["Naranja", "Negro"],
    garantia: "2 años",
    descripcion:
      "Naked ligera y ágil para el día a día por ciudad y carretera. Motor de 300 cc, ABS de serie y posición de conducción cómoda.",
    fotos: [
      {
        src: "/motos/nebula-300/foto-1.svg",
        alt: "Marcador provisional de la Nebula 300, vista lateral",
      },
      {
        src: "/motos/nebula-300/foto-2.svg",
        alt: "Marcador provisional de la Nebula 300, vista frontal",
      },
      {
        src: "/motos/nebula-300/foto-3.svg",
        alt: "Marcador provisional de la Nebula 300, detalle de la instrumentación",
      },
    ],
    especificaciones: [
      { nombre: "Cilindrada", valor: "300 cc" },
      { nombre: "Potencia", valor: "27 CV" },
      { nombre: "Peso", valor: "165 kg" },
      { nombre: "Depósito", valor: "14 l" },
    ],
  },
  {
    slug: "torrente-650",
    modelo: "Torrente 650",
    precio: 7990,
    incluyeMatriculacion: false,
    estado: "disponible",
    carnet: "A",
    tipo: "Trail",
    colores: ["Azul", "Blanco"],
    garantia: "3 años",
    descripcion:
      "Trail versátil preparada para la ciudad y las escapadas al asfalto. Motor de 650 cc, gran autonomía y maletero de serie.",
    fotos: [
      {
        src: "/motos/torrente-650/foto-1.svg",
        alt: "Marcador provisional de la Torrente 650, vista lateral",
      },
      {
        src: "/motos/torrente-650/foto-2.svg",
        alt: "Marcador provisional de la Torrente 650, vista frontal",
      },
      {
        src: "/motos/torrente-650/foto-3.svg",
        alt: "Marcador provisional de la Torrente 650, detalle de las maletas",
      },
    ],
    especificaciones: [
      { nombre: "Cilindrada", valor: "650 cc" },
      { nombre: "Potencia", valor: "47 CV" },
      { nombre: "Peso", valor: "205 kg" },
      { nombre: "Depósito", valor: "21 l" },
    ],
  },
  {
    slug: "brisa-125",
    modelo: "Brisa 125",
    precio: 2890,
    incluyeMatriculacion: true,
    estado: "reservada",
    carnet: "A1",
    tipo: "Scooter",
    colores: ["Gris", "Rojo"],
    garantia: "2 años",
    descripcion:
      "Scooter 125 ligero y económico para moverte sin complicaciones. Motor de 125 cc, frenada combinada y gran espacio bajo el asiento.",
    fotos: [
      {
        src: "/motos/brisa-125/foto-1.svg",
        alt: "Marcador provisional de la Brisa 125, vista lateral",
      },
      {
        src: "/motos/brisa-125/foto-2.svg",
        alt: "Marcador provisional de la Brisa 125, vista frontal",
      },
      {
        src: "/motos/brisa-125/foto-3.svg",
        alt: "Marcador provisional de la Brisa 125, detalle del maletero",
      },
    ],
    especificaciones: [
      { nombre: "Cilindrada", valor: "125 cc" },
      { nombre: "Potencia", valor: "11 CV" },
      { nombre: "Peso", valor: "132 kg" },
      { nombre: "Depósito", valor: "9 l" },
    ],
  },
  {
    slug: "cumbre-1000",
    modelo: "Cumbre 1000",
    precio: 12490,
    incluyeMatriculacion: false,
    estado: "vendida",
    carnet: "A",
    tipo: "Gran turismo",
    colores: ["Negro", "Plata"],
    garantia: "3 años",
    descripcion:
      "Gran turismo de altas prestaciones con maletas laterales y control de crucero. Motor de 1000 cc, pensada para viajes largos.",
    fotos: [
      {
        src: "/motos/cumbre-1000/foto-1.svg",
        alt: "Marcador provisional de la Cumbre 1000, vista lateral",
      },
      {
        src: "/motos/cumbre-1000/foto-2.svg",
        alt: "Marcador provisional de la Cumbre 1000, vista frontal",
      },
      {
        src: "/motos/cumbre-1000/foto-3.svg",
        alt: "Marcador provisional de la Cumbre 1000, detalle de las maletas",
      },
    ],
    especificaciones: [
      { nombre: "Cilindrada", valor: "1000 cc" },
      { nombre: "Potencia", valor: "95 CV" },
      { nombre: "Peso", valor: "242 kg" },
      { nombre: "Depósito", valor: "22 l" },
    ],
  },
];