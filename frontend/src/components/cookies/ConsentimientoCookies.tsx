"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

/** Valores posibles para la decisión de cookies del usuario. */
export type DecisionCookies = "aceptado" | "rechazado";

/** Estado y acciones del consentimiento de cookies. */
export interface Consentimiento {
  /** Decisión guardada, o null si el usuario aún no ha decidido. */
  decision: DecisionCookies | null;
  /** Indica si el banner de cookies debe mostrarse ahora mismo. */
  bannerAbierto: boolean;
  /** Carga el mapa solo para esta visita (no se guarda en localStorage). */
  mapaCargadoEstaVisita: boolean;
  /** Se ha leído ya localStorage (evita el parpadeo y errores de hidratación). */
  listo: boolean;
  aceptar: () => void;
  rechazar: () => void;
  /** Abre el banner de nuevo para cambiar la decisión (p. ej. "Configurar cookies"). */
  abrirBanner: () => void;
  cerrarBanner: () => void;
  cargarMapa: () => void;
}

const CLAVE_LOCALSTORAGE = "mototaller-consentimiento-cookies";

const ContextoConsentimiento = createContext<Consentimiento | null>(null);

/**
 * Proveedor del consentimiento de cookies.
 *
 * La decisión se guarda en `localStorage` y se lee SOLO en el navegador (en un
 * `useEffect`), nunca durante el render del servidor, para evitar errores de
 * hidratación. Mientras no se ha leído, `listo` es `false` y no se muestra el
 * banner ni ningún contenido de Google, con lo que tampoco parpadea.
 *
 * `mapaCargadoEstaVisita` es un estado efímero (no persistido): al pulsar
 * "Cargar mapa" el mapa aparece solo en esa visita.
 */
export function ConsentimientoCookiesProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [decision, setDecision] = useState<DecisionCookies | null>(null);
  const [bannerAbierto, setBannerAbierto] = useState(false);
  const [mapaCargadoEstaVisita, setMapaCargadoEstaVisita] = useState(false);
  const [listo, setListo] = useState(false);

  useEffect(() => {
    let guardada: DecisionCookies | null = null;
    try {
      const valor = window.localStorage.getItem(CLAVE_LOCALSTORAGE);
      if (valor === "aceptado" || valor === "rechazado") {
        guardada = valor;
      }
    } catch {
      guardada = null;
    }
    setDecision(guardada);
    // El banner solo aparece si aún no se ha decidido.
    setBannerAbierto(guardada === null);
    setListo(true);
  }, []);

  const guardar = useCallback((nueva: DecisionCookies) => {
    try {
      window.localStorage.setItem(CLAVE_LOCALSTORAGE, nueva);
    } catch {
      // Sin almacenamiento disponible: la decisión vale solo para esta sesión.
    }
  }, []);

  const aceptar = useCallback(() => {
    setDecision("aceptado");
    setBannerAbierto(false);
    guardar("aceptado");
  }, [guardar]);

  const rechazar = useCallback(() => {
    setDecision("rechazado");
    setBannerAbierto(false);
    guardar("rechazado");
  }, [guardar]);

  const abrirBanner = useCallback(() => setBannerAbierto(true), []);
  const cerrarBanner = useCallback(() => setBannerAbierto(false), []);
  const cargarMapa = useCallback(() => setMapaCargadoEstaVisita(true), []);

  const valor = useMemo<Consentimiento>(
    () => ({
      decision,
      bannerAbierto,
      mapaCargadoEstaVisita,
      listo,
      aceptar,
      rechazar,
      abrirBanner,
      cerrarBanner,
      cargarMapa,
    }),
    [
      decision,
      bannerAbierto,
      mapaCargadoEstaVisita,
      listo,
      aceptar,
      rechazar,
      abrirBanner,
      cerrarBanner,
      cargarMapa,
    ],
  );

  return (
    <ContextoConsentimiento.Provider value={valor}>
      {children}
    </ContextoConsentimiento.Provider>
  );
}

/** Hook para consumir el consentimiento de cookies. */
export function useConsentimientoCookies() {
  const contexto = useContext(ContextoConsentimiento);
  if (!contexto) {
    throw new Error(
      "useConsentimientoCookies debe usarse dentro de ConsentimientoCookiesProvider",
    );
  }
  return contexto;
}