import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { fileURLToPath, URL } from "node:url";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: "127.0.0.1",
    port: 5173,
  },
  resolve: {
    alias: {
      // eslint-disable-next-line @typescript-eslint/naming-convention
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
