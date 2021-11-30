const { defineConfig } = require('vite');
const { createVuePlugin } = require('vite-plugin-vue2');
const { terser } = require('rollup-plugin-terser')

const name = "csdn-ui"

module.exports = defineConfig({
  mode: 'pruduction',
  build: {
    target: 'modules',
    outDir: 'dist',
    emptyOutDir: true,
    sourcemap: true,
    minify: false,
    brotliSize: true,
    rollupOptions: {
      output: [
        {
          format: 'umd',
          entryFileNames: `csdn-ui.js`,
          globals: {
            vue: 'Vue'
          },
        },
        {
          format: 'umd',
          entryFileNames: `csdn-ui.min.js`,
          globals: {
            vue: 'Vue'
          },
          plugins: [terser()]
        },
      ],
      external: ['vue'],
    },
    lib: {
      entry: 'components/csdn-ui.js',
      formats: ['umd'],
      name
    },
  },  

  plugins: [
    // vue(),
    createVuePlugin()
  ],
});
