import PaginaLegal from "@/components/PaginaLegal";

/** Página de política de privacidad (texto provisional). */
export default function Privacidad() {
  return (
    <PaginaLegal titulo="Política de privacidad">
      <p>
        Aquí se explicará qué datos personales se recogen a través del
        formulario de contacto y con qué finalidad se tratan. En este momento
        el formulario no envía datos a ningún servidor, por lo que esta sección
        se completará y revisará tan pronto como se active el envío real.
      </p>
      <p>
        Este sitio es una demostración y todos los nombres, datos y contenidos
        mostrados son ficticios.
      </p>
    </PaginaLegal>
  );
}