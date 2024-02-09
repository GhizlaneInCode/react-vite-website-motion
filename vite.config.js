import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    minify: true,
    sourcemap: false,
  },
  base: "/react-vite-website-motion/",
  plugins: [react()],
})
