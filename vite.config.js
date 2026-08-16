import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  // Must match the GitHub repository name so built asset URLs resolve
  // correctly when served from https://<user>.github.io/house-coffee-desserts/
  base: '/house-coffee-desserts/',
  plugins: [react()],
})
