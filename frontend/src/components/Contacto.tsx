"use client";

import { Clock, MapPin, MessageCircle, Phone } from "lucide-react";
import { useState, type FormEvent } from "react";

import { contacto } from "@/data/contacto";

/** Estado de los errores de validación del formulario. */
interface Errores {
  nombre?: string;
  email?: string;
  mensaje?: string;
  privacidad?: string;
}

/**
 * Sección "Contacto": muestra dirección, teléfono, WhatsApp y horario tomados
 * del archivo de datos, junto a un formulario de contacto.
 *
 * En este sprint el formulario NO envía nada (sin backend ni servicios
 * externos): solo valida los campos y, si todo es correcto, muestra el mensaje
 * "Mensaje enviado" y vacía el formulario.
 */
export default function Contacto() {
  const [form, setForm] = useState({
    nombre: "",
    email: "",
    mensaje: "",
    privacidad: false,
  });
  const [errores, setErrores] = useState<Errores>({});
  const [enviado, setEnviado] = useState(false);

  const urlWhatsApp = `https://wa.me/${contacto.whatsAppNumero}?text=${encodeURIComponent(
    contacto.whatsAppMensaje,
  )}`;

  const validar = (): Errores => {
    const nuevos: Errores = {};
    if (!form.nombre.trim()) {
      nuevos.nombre = "Escribe tu nombre.";
    }
    if (!form.email.trim()) {
      nuevos.email = "Escribe tu correo electrónico.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
      nuevos.email = "Escribe un correo electrónico válido.";
    }
    if (!form.mensaje.trim()) {
      nuevos.mensaje = "Escribe tu mensaje.";
    }
    if (!form.privacidad) {
      nuevos.privacidad = "Debes aceptar la política de privacidad.";
    }
    return nuevos;
  };

  const manejarEnvio = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const nuevos = validar();
    setEnviado(false);
    if (Object.keys(nuevos).length > 0) {
      setErrores(nuevos);
      return;
    }
    setErrores({});
    setEnviado(true);
    setForm({ nombre: "", email: "", mensaje: "", privacidad: false });
  };

  const actualizar = (
    campo: keyof typeof form,
    valor: string | boolean,
  ) => {
    setForm((prev) => ({ ...prev, [campo]: valor }));
    // Limpia el error del campo en cuanto el usuario lo corrige.
    if (campo in errores) {
      setErrores((prev) => ({ ...prev, [campo]: undefined }));
    }
  };

  return (
    <section
      id="contacto"
      aria-labelledby="contacto-titulo"
      className="scroll-mt-24 border-b border-zinc-100 bg-white px-4 py-16 dark:border-zinc-800 dark:bg-zinc-950 sm:px-6 sm:py-20"
    >
      <div className="mx-auto max-w-6xl">
        <h2
          id="contacto-titulo"
          className="text-center text-2xl font-bold tracking-tight text-primary-700 dark:text-primary-400 sm:text-3xl"
        >
          Contacto
        </h2>

        <div className="mt-10 grid grid-cols-1 items-start gap-10 lg:grid-cols-2">
          {/* Datos de contacto */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">
              Dónde estamos
            </h3>
            <ul className="space-y-4 text-sm leading-relaxed text-zinc-700 dark:text-zinc-200">
              <li className="flex items-start gap-3">
                <MapPin
                  aria-hidden="true"
                  className="mt-0.5 h-5 w-5 shrink-0 text-primary-700 dark:text-primary-400"
                />
                <address className="not-italic">{contacto.direccion}</address>
              </li>
              <li className="flex items-center gap-3">
                <Phone
                  aria-hidden="true"
                  className="h-5 w-5 shrink-0 text-primary-700 dark:text-primary-400"
                />
                <a
                  href={`tel:+${contacto.telefono.replace(/\s/g, "")}`}
                  className="transition-colors hover:text-primary-700 dark:hover:text-primary-400"
                >
                  {contacto.telefono}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <MessageCircle
                  aria-hidden="true"
                  className="h-5 w-5 shrink-0 text-primary-700 dark:text-primary-400"
                />
                <a
                  href={urlWhatsApp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-primary-700 dark:hover:text-primary-400"
                >
                  Escríbenos por WhatsApp
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock
                  aria-hidden="true"
                  className="mt-0.5 h-5 w-5 shrink-0 text-primary-700 dark:text-primary-400"
                />
                <dl>
                  {contacto.horario.map((h) => (
                    <div
                      key={h.dia}
                      className="flex flex-col sm:flex-row sm:gap-2"
                    >
                      <dt className="font-medium text-zinc-900 dark:text-zinc-50">
                        {h.dia}:
                      </dt>
                      <dd>{h.horas}</dd>
                    </div>
                  ))}
                </dl>
              </li>
            </ul>
          </div>

          {/* Formulario de contacto */}
          <form
            onSubmit={manejarEnvio}
            noValidate
            className="space-y-5 rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900"
          >
            <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">
              Envíanos un mensaje
            </h3>

            {/* Aviso de resultado (solo se anuncia al enviar) */}
            <p
              role="status"
              aria-live="polite"
              className="sr-only"
            >
              {enviado
                ? "Mensaje enviado."
                : "Campos con errores."}
            </p>

            <div className="space-y-1">
              <label
                htmlFor="contacto-nombre"
                className="block text-sm font-medium text-zinc-800 dark:text-zinc-100"
              >
                Nombre
              </label>
              <input
                id="contacto-nombre"
                name="nombre"
                type="text"
                autoComplete="name"
                value={form.nombre}
                onChange={(e) => actualizar("nombre", e.target.value)}
                aria-invalid={Boolean(errores.nombre)}
                aria-describedby={
                  errores.nombre ? "contacto-nombre-error" : undefined
                }
                className="w-full rounded-lg border border-zinc-300 bg-white px-3 py-2 text-sm text-zinc-900 outline-none focus:border-primary-600 focus:ring-2 focus:ring-primary-600 dark:border-zinc-700 dark:bg-zinc-950 dark:text-zinc-50"
              />
              {errores.nombre && (
                <p
                  id="contacto-nombre-error"
                  className="text-sm text-red-600 dark:text-red-400"
                >
                  {errores.nombre}
                </p>
              )}
            </div>

            <div className="space-y-1">
              <label
                htmlFor="contacto-email"
                className="block text-sm font-medium text-zinc-800 dark:text-zinc-100"
              >
                Correo electrónico
              </label>
              <input
                id="contacto-email"
                name="email"
                type="email"
                autoComplete="email"
                value={form.email}
                onChange={(e) => actualizar("email", e.target.value)}
                aria-invalid={Boolean(errores.email)}
                aria-describedby={
                  errores.email ? "contacto-email-error" : undefined
                }
                className="w-full rounded-lg border border-zinc-300 bg-white px-3 py-2 text-sm text-zinc-900 outline-none focus:border-primary-600 focus:ring-2 focus:ring-primary-600 dark:border-zinc-700 dark:bg-zinc-950 dark:text-zinc-50"
              />
              {errores.email && (
                <p
                  id="contacto-email-error"
                  className="text-sm text-red-600 dark:text-red-400"
                >
                  {errores.email}
                </p>
              )}
            </div>

            <div className="space-y-1">
              <label
                htmlFor="contacto-mensaje"
                className="block text-sm font-medium text-zinc-800 dark:text-zinc-100"
              >
                Mensaje
              </label>
              <textarea
                id="contacto-mensaje"
                name="mensaje"
                rows={4}
                value={form.mensaje}
                onChange={(e) => actualizar("mensaje", e.target.value)}
                aria-invalid={Boolean(errores.mensaje)}
                aria-describedby={
                  errores.mensaje ? "contacto-mensaje-error" : undefined
                }
                className="w-full resize-y rounded-lg border border-zinc-300 bg-white px-3 py-2 text-sm text-zinc-900 outline-none focus:border-primary-600 focus:ring-2 focus:ring-primary-600 dark:border-zinc-700 dark:bg-zinc-950 dark:text-zinc-50"
              />
              {errores.mensaje && (
                <p
                  id="contacto-mensaje-error"
                  className="text-sm text-red-600 dark:text-red-400"
                >
                  {errores.mensaje}
                </p>
              )}
            </div>

            <div className="space-y-1">
              <label
                htmlFor="contacto-privacidad"
                className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-200"
              >
                <input
                  id="contacto-privacidad"
                  name="privacidad"
                  type="checkbox"
                  checked={form.privacidad}
                  onChange={(e) => actualizar("privacidad", e.target.checked)}
                  aria-invalid={Boolean(errores.privacidad)}
                  aria-describedby={
                    errores.privacidad
                      ? "contacto-privacidad-error"
                      : "contacto-privacidad-ayuda"
                  }
                  className="mt-0.5 h-4 w-4 shrink-0 accent-primary-700"
                />
                <span>
                  Acepto la{" "}
                  <a
                    href="/privacidad"
                    className="font-medium text-primary-700 underline underline-offset-2 hover:text-primary-800 dark:text-primary-400"
                  >
                    política de privacidad
                  </a>
                  .
                </span>
              </label>
              <p id="contacto-privacidad-ayuda" className="sr-only">
                La política de privacidad se publicará próximamente.
              </p>
              {errores.privacidad && (
                <p
                  id="contacto-privacidad-error"
                  className="text-sm text-red-600 dark:text-red-400"
                >
                  {errores.privacidad}
                </p>
              )}
            </div>

            <button
              type="submit"
              className="inline-flex w-full items-center justify-center rounded-lg bg-primary-700 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-primary-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-700 sm:w-auto"
            >
              Enviar mensaje
            </button>

            {enviado && (
              <p
                role="status"
                className="rounded-lg bg-green-50 px-4 py-3 text-sm font-medium text-green-800 dark:bg-green-900/30 dark:text-green-300"
              >
                Mensaje enviado
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}