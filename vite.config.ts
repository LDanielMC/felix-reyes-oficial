import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import VitePluginSitemap from "vite-plugin-sitemap";
import { routes } from "./sitemapRoutes";

export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react({
      jsxImportSource: "react",
      tsDecorators: true,
    }),
    VitePluginSitemap({
      hostname: "https://felixreyescontadores.com.mx",
      dynamicRoutes: routes,
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  esbuild: {
    jsx: "automatic",
  },
}));
