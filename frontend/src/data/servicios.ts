/**
 * Servicios del taller (todos ficticios).
 * `icono` es el nombre del icono de la librería `lucide-react` que se usará en
 * la tarjeta. Se guarda como texto para poder cambiar un icono sin tocar el
 * componente, siempre que el nombre exista en la librería.
 */
export interface Servicio {
  id: string;
  titulo: string;
  descripcion: string;
  icono: string;
}

export const servicios: Servicio[] = [
  {
    id: "asesoramiento",
    titulo: "Asesoramiento",
    descripcion:
      "Te ayudamos a elegir la moto, el repuesto o la mejora que mejor encaja contigo. Resolvemos tus dudas antes de tomar cualquier decisión.",
    icono: "MessagesSquare",
  },
  {
    id: "reparacion",
    titulo: "Reparación",
    descripcion:
      "Reparamos averías de mecánica y electrónica con diagnóstico previo y presupuesto claro. Tu moto vuelve a rodar como debe.",
    icono: "Wrench",
  },
  {
    id: "revision-puesta-a-punto",
    titulo: "Revisión y puesta a punto",
    descripcion:
      "Revisión completa de frenos, cadena, líquidos y sistemas de la moto. La ponemos a punto para que ruedes con total seguridad.",
    icono: "ClipboardCheck",
  },
  {
    id: "pre-itv",
    titulo: "Pre-ITV",
    descripcion:
      "Comprobamos los puntos que revisa la inspección y corregimos cualquier defecto. Llegas a la ITV con garantías de pasarla a la primera.",
    icono: "ShieldCheck",
  },
  {
    id: "venta-accesorios",
    titulo: "Venta de accesorios",
    descripcion:
      "Contamos con un surtido de accesorios para tu moto y para ti. Te asesoramos para elegir el que de verdad necesitas.",
    icono: "ShoppingBag",
  },
  {
    id: "neumaticos",
    titulo: "Neumáticos",
    descripcion:
      "Cambio y equilibrado de ruedas con las principales marcas del mercado. Te recomendamos el compuesto ideal para tu uso.",
    icono: "Disc",
  },
  {
    id: "pintura",
    titulo: "Pintura",
    descripcion:
      "Reparamos y pintamos depósitos, carenados y piezas con acabados de fábrica. Recuperamos el color y la estética de tu moto.",
    icono: "Paintbrush",
  },
  {
    id: "venta-vehiculos",
    titulo: "Venta de vehículos",
    descripcion:
      "Exposición de motos de ocasión revisadas y listas para rodar. Buscamos el vehículo que se adapta a tu presupuesto y necesidad.",
    icono: "Bike",
  },
  {
    id: "modificaciones",
    titulo: "Modificaciones",
    descripcion:
      "Adaptamos escapes, escapes legales y mejoras de rendimiento con total seguridad. Tu moto, exactamente como la imaginas.",
    icono: "SlidersHorizontal",
  },
  {
    id: "electricidad",
    titulo: "Electricidad",
    descripcion:
      "Diagnosticamos y reparamos fallos eléctricos, baterías y sistemas de carga. Todo el cableado, revisado al detalle.",
    icono: "Zap",
  },
  {
    id: "montaje-accesorios",
    titulo: "Montaje de accesorios",
    descripcion:
      "Instalamos maletas, top cases, protectores y cualquier accesorio con garantía. Queda bien colocado y seguro en carretera.",
    icono: "PackageCheck",
  },
];