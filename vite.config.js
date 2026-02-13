import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  server: {
    port: 1008,
    proxy: {
      '/api': {
        target: 'https://libertyanimationstudio.com/', // External backend port (temporary fallback) or use the same env
        changeOrigin: true,
      },
    },
  },
})  