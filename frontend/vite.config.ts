import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    manifest: true,
    outDir: "../backend/public/assets",
    emptyOutDir: true,
    rollupOptions: {
      input: resolve(__dirname, "index.html"),
      output: {
        entryFileNames: `[name].[hash].js`,
        chunkFileNames: `[name].[hash].js`,
        assetFileNames: (assetInfo) => {
          // Keep the original names for images
          if (assetInfo.name && /\.(gif|jpe?g|png|svg)$/.test(assetInfo.name)) {
            return `[name].[ext]`;
          }
          return `[name].[hash].[ext]`;
        },
      },
    },
  },
});
