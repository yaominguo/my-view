import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { resolve } from 'path'

export default defineConfig({
  plugins: [vue(), vueJsx()],
  alias: {
    '@': resolve(__dirname, './src'),
  },
  // build: {
  //   base: './',
  // },
  // assetsDir: 'assets',
  optimizeDeps: {
    include: [
      'moment/locale/zh-cn',
      'echarts/core',
      'echarts/components',
      'echarts/charts',
      'echarts/renderers',
    ],
  },
})
