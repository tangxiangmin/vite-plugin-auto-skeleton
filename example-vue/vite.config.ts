import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'


// @ts-ignore
import {SkeletonPlaceholderPlugin, SkeletonApiPlugin} from '../src/plugins/vitePlugin'


export default defineConfig({
  plugins: [
    // @ts-ignore
    SkeletonPlaceholderPlugin(),
    vue(),
    SkeletonApiPlugin(),
  ],
  build: {
    cssCodeSplit: false
  }
})
