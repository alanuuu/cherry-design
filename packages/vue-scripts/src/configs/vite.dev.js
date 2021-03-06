const {defineConfig} = require('vite')
// const vue = require('@vitejs/plugin-vue')
const { createVuePlugin } = require('vite-plugin-vue2');
module.exports = defineConfig({
  mode: 'development',
  build: {
    target: 'modules',
    outDir: 'es',
    emptyOutDir: false,
    minify: false,
    brotliSize: false,
    rollupOptions: {
      output: {
        entryFileNames: '[name].js',
        preserveModules: true,
        preserveModulesRoot: 'components',
        globals: {
          vue: 'Vue'
        }
      },
      external: ['vue'],
    },
    lib: {
      entry: 'components/index.js',
      formats: ['es'],
    },
    watch: {},
  },  

  plugins: [
    // vue(),
    createVuePlugin()
  ],
});
