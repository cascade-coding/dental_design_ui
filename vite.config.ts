import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
export default defineConfig({
  plugins: [
    tailwindcss(),
  ],

  base: "/dental-design-ui/",

  server: {
    host: true,
    allowedHosts: true
  },
})