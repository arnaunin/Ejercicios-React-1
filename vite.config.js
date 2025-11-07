import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/Ejercicios-React-1/',
  server: {
    watch: {
      usePolling: true, // Usa polling para detectar cambios
    }
  }
})
