import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwind from '@tailwindcss/vite'


// import { b } from "framer-motion/client";


export default defineConfig({
  plugins: [react(), tailwind()],
})
