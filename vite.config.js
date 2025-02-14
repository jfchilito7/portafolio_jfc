import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  assetsInclude: ['**/*.PNG'],
  build: {
    sourcemap: true, // Habilita los mapas de origen
    target: "esnext",
    minify: "terser",
    terserOptions: {
      compress: {
        drop_console: true, // Elimina console.log en producción
      },
    },
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules")) {
            return "vendor";
          }
        },
      },
    },
  },
});
