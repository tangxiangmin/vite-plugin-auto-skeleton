import { defineConfig } from 'tsup'

export default defineConfig({
  entry: {
    client: 'src/client/index.ts',
    vite: 'src/plugins/vitePlugin.ts',
  },
  format: ['cjs', 'esm'],
  splitting: false,
  sourcemap: false,
  clean: true,
  dts: true,
})
