import viteReact from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

import { TanStackRouterVite } from '@tanstack/router-plugin/vite'
import { resolve } from 'node:path'

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  plugins: [TanStackRouterVite({ autoCodeSplitting: true }), viteReact()],
  server: {
    host: '0.0.0.0'
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, './src')
    }
  }
})
