import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    sourcemap: true,
    proxy: {
      "/api": {
        target: "https://todo-backend-sample.onrender.com",
      },
    },
  },
});
