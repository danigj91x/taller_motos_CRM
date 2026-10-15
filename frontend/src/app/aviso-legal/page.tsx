import PaginaLegal from "@/components/PaginaLegal";

/** Página de aviso legal (texto provisional). */
export default function AvisoLegal() {
  return (
    <PaginaLegal titulo="Aviso legal">
      <p>
        Este apartado contendrá la información sobre el responsable del sitio,
        la titularidad del contenido y las condiciones de uso. Los datos de
        empresa (razón social, CIF, domicilio fiscal y registro mercantil) se
        completarán cuando se revise este texto.
      </p>
      <p>
        Este sitio es una demostración y todos los nombres, datos y contenidos
        mostrados son ficticios.
      </p>
    </PaginaLegal>
  );
}