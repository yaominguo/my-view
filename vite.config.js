import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
const { resolve } = require('path')

export default defineConfig({
  plugins: [vue(), vueJsx()],
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
