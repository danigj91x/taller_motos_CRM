import { NextResponse, type NextRequest } from "next/server";

import { motos } from "@/data/motos";

/**
 * Todos los slugs de motos válidos se conocen en tiempo de compilación.
 * `dynamicParams` no es compatible con `nextConfig.cacheComponents` (opción
 * global que no tocamos), así que rechazamos aquí, antes de que la petición
 * llegue a la ruta dinámica, cualquier slug de /motos/<slug> que no esté en la
 * lista.
 *
 * Ventajas:
 *  - El 404 se devuelve desde la primera petición (la ruta [slug] nunca se
 *    invoca para estos slugs, así que no se genera ni cachea una página por
 *    slug arbitrario → evita el llenado de la caché).
 *  - Re-escrimos a una ruta que no existe para que Next sirva la página 404
 *    propia (app/not-found.tsx) con la cabecera y el pie comunes.
 */
export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const match = pathname.match(/^\/motos\/([^/]+)\/?$/);

  if (match) {
    const slug = match[1];
    const existe = motos.some((moto) => moto.slug === slug);

    if (!existe) {
      // Re-escrimos a una ruta raíz que no existe: Next sirve la página 404
      // propia (app/not-found.tsx) con la cabecera y el pie comunes. Al ser un
      // 404 estático no se genera ni cachea nada por cada slug desconocido.
      return NextResponse.rewrite(new URL("/404-moto", request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  // Solo afecta a las rutas de ficha de moto (deja intactas el resto).
  matcher: ["/motos/:slug"],
};