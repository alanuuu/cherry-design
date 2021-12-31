const { defineConfig } = require('vite');
const { createVuePlugin } = require('vite-plugin-vue2');

module.exports = defineConfig({
  mode: 'pruduction',
  build: {
    target: 'modules',
    outDir: 'es',
    emptyOutDir: false,
    minify: false,
    brotliSize: false,
    rollupOptions: {
      input: ['components/index.js', 'components/icon/index.js'],
      output: [
        {
          entryFileNames: '[name].js',
          preserveModules: true,
          preserveModulesRoot: 'components',
          format: "es",
          globals: {
            vue: 'Vue'
          }
        },
        {
          format: 'commonjs',
          dir: 'lib',
          entryFileNames: '[name].js',
          preserveModules: true,
          preserveModulesRoot: 'components',
        },
      ],
      external: ['vue'],
    },
    lib: {
      entry: 'components/index.js',
      formats: ['es', 'cjs'],
    },
  },  

  plugins: [
    // vue(),
    createVuePlugin()
  ],
});
