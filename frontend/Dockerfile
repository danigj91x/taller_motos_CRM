# ============================================================
# Dockerfile multi-etapa para el frontend Next.js
# Etapa 1: dependencias · Etapa 2: build · Etapa 3: runtime sin root
# ============================================================

# ---------- Etapa 1: dependencias ----------
FROM node:22-bookworm-slim AS deps
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci

# ---------- Etapa 2: build ----------
FROM node:22-bookworm-slim AS build
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
ENV NEXT_TELEMETRY_DISABLED=1
RUN npm run build

# ---------- Etapa 3: ejecución (usuario sin privilegios) ----------
FROM node:22-bookworm-slim AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
ENV PORT=3000
ENV HOSTNAME=0.0.0.0

# Usuario sin privilegios (uid no root)
RUN useradd --system --uid 1001 --create-home nextjs

# Se copia el build standalone de Next.js (más pequeño y autocontenido)
COPY --from=build --chown=nextjs:nextjs /app/.next/standalone ./
COPY --from=build --chown=nextjs:nextjs /app/.next/static ./.next/static
COPY --from=build --chown=nextjs:nextjs /app/public ./public

USER nextjs

EXPOSE 3000

CMD ["node", "server.js"]
