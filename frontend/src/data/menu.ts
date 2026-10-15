/**
 * Enlaces del menú de navegación.
 * `id` debe coincidir con el atributo id de cada sección de la página.
 */
export interface EnlaceMenu {
  id: string;
  texto: string;
  /**
   * URL propia para enlaces que NO son secciones de la página de inicio
   * (por ejemplo, una página como /motos). Si no se indica, la cabecera
   * construye el enlace a la sección `/#<id>` de la página de inicio.
   */
  href?: string;
}

export const enlacesMenu: EnlaceMenu[] = [
  { id: "inicio", texto: "Inicio" },
  { id: "sobre-nosotros", texto: "Sobre nosotros" },
  { id: "servicios", texto: "Servicios" },
  { id: "trabajos", texto: "Trabajos" },
  { id: "motos", texto: "Motos en venta", href: "/motos" },
  { id: "opiniones", texto: "Opiniones" },
  { id: "contacto", texto: "Contacto" },
];
