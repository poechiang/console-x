import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { fileURLToPath, URL } from 'node:url'
import AutoImport from 'unplugin-auto-import/vite'
import { defineConfig } from 'vite'

import qiankun from 'vite-plugin-qiankun'

const useDevMode = true

const host = 'localhost'
const port = 3007
const origin = `//${host}:${port}`
const server = {
  port,
  host,
  origin,
  cors: true,
  headers: {
    'Access-Control-Allow-Origin': '*'
  }
}
const alias = {
  '~': fileURLToPath(new URL('./src', import.meta.url)),
  '@fonts': fileURLToPath(new URL('./src/assets/fonts', import.meta.url)),
  '@components': fileURLToPath(new URL('./src/components', import.meta.url)),
  '@images': fileURLToPath(new URL('./src/assets/images', import.meta.url)),
  '@icons': fileURLToPath(new URL('./src/icons', import.meta.url)),
  '@libs': fileURLToPath(new URL('./src/libs', import.meta.url)),
  '@stores': fileURLToPath(new URL('./src/stores', import.meta.url)),
  '@styles': fileURLToPath(new URL('./src/assets/styles', import.meta.url)),
  '@themes': fileURLToPath(new URL('./src/assets/themes', import.meta.url)),
  '@views': fileURLToPath(new URL('./src/views', import.meta.url))
}
// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const __DEV__ = mode === 'development'
  return {
    plugins: [
      vue(),
      vueJsx(),
      qiankun('res', { useDevMode }),
      AutoImport({
        imports: ['vue', 'vue-router', 'pinia'],
        include: [/\.[tj]sx?$/, /\.vue$/],
        dts: 'src/types/auto-import.d.ts'
      })
    ],
    resolve: { alias },
    server,
    base: __DEV__ ? '/' : origin
  }
})
