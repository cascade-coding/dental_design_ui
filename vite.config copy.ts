import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import { resolve } from 'path'
import fs from 'fs'

// get all .html files in the root directory
const htmlFiles = fs.readdirSync(__dirname).filter(file => file.endsWith('.html'))

// create an input object for Rollup
const input = htmlFiles.reduce((entries, file) => {
  const name = file.replace('.html', '')
  entries[name] = resolve(__dirname, file)
  return entries
}, {} as Record<string, string>)

export default defineConfig({
  plugins: [tailwindcss()],
  base: "/dental-design-ui/",
  server: {
    host: true,
    allowedHosts: true
  },
  build: {
    rollupOptions: {
      input
    }
  }
})
