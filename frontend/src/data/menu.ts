/**
 * Enlaces del menú de navegación.
 * `id` debe coincidir con el atributo id de cada sección de la página.
 */
export interface EnlaceMenu {
  id: string;
  texto: string;
}

export const enlacesMenu: EnlaceMenu[] = [
  { id: "inicio", texto: "Inicio" },
  { id: "sobre-nosotros", texto: "Sobre nosotros" },
  { id: "servicios", texto: "Servicios" },
  { id: "trabajos", texto: "Trabajos" },
  { id: "opiniones", texto: "Opiniones" },
  { id: "contacto", texto: "Contacto" },
];
