import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
  const config = {
    plugins: [react()],
    base: "/"
  };

  if (command !== "serve") {
    config.base = "Riiskager.github.io";// 👈 Replace with your repository name
  }

  return config;
});