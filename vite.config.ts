import { resolve } from 'node:path'
import process from 'node:process'

import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import AutoImport from 'unplugin-auto-import/vite'
import { defineConfig, loadEnv } from 'vite'

// https://vitejs.dev/config/
const env = loadEnv(
  process.env.NODE_ENV as string,
  resolve(process.cwd(), 'env'),
  'VITE_',
)

export default defineConfig({
  base: env.VITE_DIST_PATH || './',
  server: {
    host: '0.0.0.0',
    port: 9000,
    open: true,
    cors: true,
  },
  plugins: [
    vue(),
    vueJsx(),
    AutoImport({
      imports: ['vue'],
    }),
  ],
  resolve: {
    alias: {

      '@': resolve(__dirname, './src'),
    },
  },
})
