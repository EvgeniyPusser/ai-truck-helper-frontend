// vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    host: true,
    allowedHosts: ["https://36cb574f5f66.ngrok-free.app"], // 👈 Вставь сюда свой домен
  },
});
