/**
 * Datos de contacto del taller (ficticios y no asignables).
 * El número de WhatsApp se guarda en formato internacional, sin "+" ni
 * guiones, para poder construir el enlace https://wa.me/<numero>.
 * Este archivo también lo usa el pie de página (issue #10).
 */
export const contacto = {
  whatsAppNumero: "34000000000",
  whatsAppMensaje: "Hola MotoTaller Demo, me gustaría consultar sobre el taller.",
  direccion: "Calle Ejemplo, 123, 00000 Ciudad Demo",
  telefono: "000 000 000",
  /** Horario de apertura, un bloque por día o franja (ficticio). */
  horario: [
    { dia: "Lunes a viernes", horas: "de 9:00 a 14:00 y de 16:00 a 19:00" },
    { dia: "Sábados", horas: "de 9:30 a 13:30" },
    { dia: "Domingos y festivos", horas: "cerrado" },
  ],
};