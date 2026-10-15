"use client";

import { Clock, Cookie, MapPin, MessageCircle, Phone } from "lucide-react";

import { contacto } from "@/data/contacto";
import { sitio } from "@/data/sitio";
import { useConsentimientoCookies } from "@/components/cookies/ConsentimientoCookies";

/**
 * Pie de página común a todas las páginas. Muestra dirección, teléfono,
 * WhatsApp y horario tomados del mismo archivo de datos que la sección de
 * contacto, enlaces a las páginas legales y un botón "Configurar cookies"
 * (reutiliza el mecanismo de consentimiento existente).
 */
export default function Footer() {
  const { abrirBanner } = useConsentimientoCookies();

  const urlWhatsApp = `https://wa.me/${contacto.whatsAppNumero}?text=${encodeURIComponent(
    contacto.whatsAppMensaje,
  )}`;

  const enlacesLegales = [
    { href: "/aviso-legal", texto: "Aviso legal" },
    { href: "/privacidad", texto: "Política de privacidad" },
    { href: "/cookies", texto: "Política de cookies" },
  ];

  return (
    <footer className="border-t border-zinc-200 bg-zinc-50 px-4 py-12 dark:border-zinc-800 dark:bg-zinc-950 sm:px-6">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 md:grid-cols-3">
        {/* Marca */}
        <div>
          <p className="text-lg font-bold tracking-tight text-primary-700 dark:text-primary-400">
            {sitio.nombre}
          </p>
          <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-300">
            Un taller de motos de demostración con datos ficticios.
          </p>
        </div>

        {/* Contacto */}
        <div>
          <h2 className="text-sm font-semibold uppercase tracking-wide text-zinc-900 dark:text-zinc-50">
            Contacto
          </h2>
          <ul className="mt-4 space-y-3 text-sm text-zinc-600 dark:text-zinc-300">
            <li className="flex items-start gap-2">
              <MapPin
                aria-hidden="true"
                className="mt-0.5 h-4 w-4 shrink-0 text-primary-700 dark:text-primary-400"
              />
              <address className="not-italic">{contacto.direccion}</address>
            </li>
            <li className="flex items-center gap-2">
              <Phone
                aria-hidden="true"
                className="h-4 w-4 shrink-0 text-primary-700 dark:text-primary-400"
              />
              <a
                href={`tel:+${contacto.telefono.replace(/\s/g, "")}`}
                className="transition-colors hover:text-primary-700 dark:hover:text-primary-400"
              >
                {contacto.telefono}
              </a>
            </li>
            <li className="flex items-center gap-2">
              <MessageCircle
                aria-hidden="true"
                className="h-4 w-4 shrink-0 text-primary-700 dark:text-primary-400"
              />
              <a
                href={urlWhatsApp}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-primary-700 dark:hover:text-primary-400"
              >
                WhatsApp
              </a>
            </li>
            <li className="flex items-start gap-2">
              <Clock
                aria-hidden="true"
                className="mt-0.5 h-4 w-4 shrink-0 text-primary-700 dark:text-primary-400"
              />
              <span>
                {contacto.horario.map((h) => (
                  <span key={h.dia} className="block">
                    {h.dia}: {h.horas}
                  </span>
                ))}
              </span>
            </li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h2 className="text-sm font-semibold uppercase tracking-wide text-zinc-900 dark:text-zinc-50">
            Información legal
          </h2>
          <ul className="mt-4 flex flex-col items-start gap-3 text-sm">
            {enlacesLegales.map(({ href, texto }) => (
              <li key={href}>
                <a
                  href={href}
                  className="text-zinc-600 transition-colors hover:text-primary-700 dark:text-zinc-300 dark:hover:text-primary-400"
                >
                  {texto}
                </a>
              </li>
            ))}
            <li>
              <button
                type="button"
                onClick={abrirBanner}
                className="inline-flex items-center gap-2 rounded-lg bg-primary-700 px-3 py-2 text-sm font-semibold text-white transition-colors hover:bg-primary-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-700"
              >
                <Cookie
                  aria-hidden="true"
                  className="h-4 w-4"
                />
                Configurar cookies
              </button>
            </li>
          </ul>
        </div>
      </div>

      <p className="mx-auto mt-10 max-w-6xl border-t border-zinc-200 pt-6 text-xs text-zinc-500 dark:border-zinc-800 dark:text-zinc-400">
        © {sitio.nombre}. Todos los textos y datos son ficticios.
      </p>
    </footer>
  );
}