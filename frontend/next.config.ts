import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* Producción: exporta un servidor autocontenido para la imagen Docker. */
  output: "standalone",
  /* config options here */
  cacheComponents: true,
  partialPrefetching: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
