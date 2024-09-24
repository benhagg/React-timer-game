import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/React-timer-game/", // name of repo here
  plugins: [react()],
});
