import { fileURLToPath, URL } from 'node:url'

import path from 'path'

import vue from '@vitejs/plugin-vue'
import copy from 'rollup-plugin-copy';
import { defineConfig } from 'vite'
import svg from 'vite-plugin-svgo'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          console.log('id: ', id)
          if (id.includes('node_modules')) {
            return 'vendor'
          }

          if (id.endsWith('.svg')) {
            return path.basename(id)
          }

          if (id.includes('module-a')) {
            return 'module-a'
          }

          if (id.includes('module-b')) {
            return 'module-b'
          }

          if (id.includes('common')) {
            return 'common'
          }
        }
      },
      plugins: [
        copy({
          targets: [
            { src: 'src/assets/manifest/android-chrome-192x192.png', dest: 'dist/assets/manifest' },
            { src: 'src/assets/manifest/android-chrome-512x512.png', dest: 'dist/assets/manifest' }
          ],
          hook: 'writeBundle'
        })
      ]
    }
  },
  plugins: [
    vue({
      template: {
        compilerOptions: {
          isCustomElement: (tag) => tag.startsWith('omni-')
        }
      }
    }),
    svg()
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
