import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/SPEAK_test_mock/",
  plugins: [react()],
});
