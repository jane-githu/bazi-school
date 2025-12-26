import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/bazi-school/", // <--- 加上这一行！注意前后都有斜杠
})