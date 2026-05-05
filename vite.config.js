import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/onox-quote-engine/', // Burası deponuzun adıyla birebir aynı olmalı
})