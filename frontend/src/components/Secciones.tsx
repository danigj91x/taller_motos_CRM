import Portada from "@/components/Portada";
import SobreNosotros from "@/components/SobreNosotros";
import Servicios from "@/components/Servicios";
import Trabajos from "@/components/Trabajos";
import Opiniones from "@/components/Opiniones";
import Contacto from "@/components/Contacto";

/**
 * Secciones de la página de inicio, en el orden del menú: la portada (sección
 * "inicio"), "sobre nosotros", "servicios", "trabajos", "opiniones" y
 * "contacto". Todas con contenido propio.
 */
export default function Secciones() {
  return (
    <main className="flex-1">
      <Portada />
      <SobreNosotros />
      <Servicios />
      <Trabajos />
      <Opiniones />
      <Contacto />
    </main>
  );
}