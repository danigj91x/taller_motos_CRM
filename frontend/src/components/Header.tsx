"use client";

import { useState } from "react";
import { contacto } from "@/data/contacto";
import { enlacesMenu } from "@/data/menu";
import { sitio } from "@/data/sitio";

/** Icono de menú (hamburguesa) y de cierre, en SVG inline. */
function IconoMenu({ cerrado }: { cerrado: boolean }) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {cerrado ? (
        <>
          <line x1="3" y1="6" x2="21" y2="6" />
          <line x1="3" y1="12" x2="21" y2="12" />
          <line x1="3" y1="18" x2="21" y2="18" />
        </>
      ) : (
        <>
          <line x1="6" y1="6" x2="18" y2="18" />
          <line x1="6" y1="18" x2="18" y2="6" />
        </>
      )}
    </svg>
  );
}

export default function Header() {
  const [abierto, setAbierto] = useState(false);

  const urlWhatsApp = `https://wa.me/${contacto.whatsAppNumero}?text=${encodeURIComponent(
    contacto.whatsAppMensaje,
  )}`;

  const cerrar = () => setAbierto(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-zinc-200 bg-white/95 shadow-sm backdrop-blur dark:border-zinc-800 dark:bg-zinc-950/95">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        {/* Logo: solo texto con el nombre ficticio */}
        <a
          href="#inicio"
          onClick={cerrar}
          className="text-lg font-bold tracking-tight text-primary-700 dark:text-primary-400"
        >
          {sitio.nombre}
        </a>

        {/* Navegación de escritorio */}
        <nav className="hidden md:block" aria-label="Principal">
          <ul className="flex items-center gap-6">
            {enlacesMenu.map(({ id, texto }) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  className="text-sm font-medium text-zinc-700 transition-colors hover:text-primary-600 dark:text-zinc-200 dark:hover:text-primary-400"
                >
                  {texto}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          {/* Botón de WhatsApp (escritorio y móvil) */}
          <a
            href={urlWhatsApp}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-primary-700 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-primary-800"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.49 0 1.47 1.07 2.89 1.22 3.09.15.2 2.1 3.2 5.08 4.49.71.3 1.26.49 1.69.63.71.22 1.36.19 1.87.12.57-.09 1.76-.72 2.01-1.42.25-.7.25-1.29.17-1.42-.07-.13-.27-.2-.57-.35zM12.05 21.79h-.01a9.87 9.87 0 0 1-5.03-1.38l-.36-.21-3.74.98 1-3.64-.24-.37a9.86 9.86 0 0 1-1.51-5.26c0-5.45 4.44-9.88 9.9-9.88 2.64 0 5.12 1.03 6.99 2.9a9.82 9.82 0 0 1 2.9 6.99c0 5.45-4.44 9.87-9.9 9.87zM20.5 3.5A11.8 11.8 0 0 0 12.05 0C5.5 0 .16 5.33.16 11.9c0 2.1.55 4.14 1.59 5.95L.08 24l6.34-1.66a11.9 11.9 0 0 0 5.62 1.43c6.55 0 11.89-5.33 11.89-11.9 0-3.18-1.24-6.16-3.43-8.37z" />
            </svg>
            WhatsApp
          </a>

          {/* Botón hamburguesa (móvil) */}
          <button
            type="button"
            onClick={() => setAbierto((v) => !v)}
            aria-expanded={abierto}
            aria-controls="menu-movil"
            aria-label={abierto ? "Cerrar menú" : "Abrir menú"}
            className="inline-flex h-10 w-10 items-center justify-center rounded-md text-zinc-700 hover:bg-zinc-100 md:hidden dark:text-zinc-200 dark:hover:bg-zinc-800"
          >
            <IconoMenu cerrado={!abierto} />
          </button>
        </div>
      </div>

      {/* Menú móvil */}
      <nav
        id="menu-movil"
        aria-label="Principal móvil"
        className={`grid overflow-hidden border-zinc-200 bg-white transition-all md:hidden dark:border-zinc-800 dark:bg-zinc-950 ${
          abierto ? "grid-rows-[1fr] border-t" : "grid-rows-[0fr]"
        }`}
      >
        <div className="min-h-0">
          <ul className="flex flex-col divide-y divide-zinc-100 px-4 dark:divide-zinc-800">
            {enlacesMenu.map(({ id, texto }) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  onClick={cerrar}
                  className="block py-3 text-sm font-medium text-zinc-700 hover:text-primary-600 dark:text-zinc-200 dark:hover:text-primary-400"
                >
                  {texto}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
}
