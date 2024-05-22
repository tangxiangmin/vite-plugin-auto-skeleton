import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Unocss from 'unocss/vite'

// eslint-disable-next-line antfu/no-import-dist
import { SkeletonApiPlugin, SkeletonPlaceholderPlugin } from '../dist/vite'

export default defineConfig({
  plugins: [
    Unocss(),
    SkeletonPlaceholderPlugin(),
    vue(),
    SkeletonApiPlugin(),
  ],
  build: {
    cssCodeSplit: false,
  },
})
