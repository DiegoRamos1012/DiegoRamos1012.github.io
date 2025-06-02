import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/DiegoRamos1012.github.io/', // Use o nome do seu repositório aqui
})
