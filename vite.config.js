import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
const { resolve } = require('path')

export default defineConfig({
  plugins: [vue()],
  alias: {
    '@': resolve(__dirname, './src'),
  },
  // build: {
  //   base: './',
  // },
  optimizeDeps: {
    include: ['moment/locale/zh-cn'],
  },
})
