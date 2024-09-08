import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    sourcemap: true,
    proxy: {
      "/api": {
        target: "https://backend-todo-app-8jr8.onrender.com",
      },
    },
  },
});
