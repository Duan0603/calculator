import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// ⚠️ Thay 'ten-github' và 'ten-repo' bằng của bạn
export default defineConfig({
  plugins: [react()],
  base: "/calculator/",
});
