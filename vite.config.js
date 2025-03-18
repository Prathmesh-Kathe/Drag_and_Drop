import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import "core-js/stable";
import "regenerator-runtime/runtime";


// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),tailwindcss()],
  base : '/'
})
