const { createVuePlugin } = require('vite-plugin-vue2');

module.exports = (type) => {
  const name = type === 'component' ? 'cherry-ui' : 'cherry-vue-icon';
  const entry =
    type === 'component'
      ? `components/${name}.js`
      : `components/icon/${name}.js`;

  return {
    mode: 'pruduction',
    build: {
      target: 'modules',
      outDir: 'dist',
      emptyOutDir: false,
      sourcemap: true,
      minify: false,
      brotliSize: true,
      rollupOptions: {
        output: [
          {
            format: 'umd',
            entryFileNames: `[name].js`,
            globals: {
              vue: 'Vue',
            },
          },
        ],
        external: ['vue'],
      },
      lib: {
        entry,
        formats: ['umd'],
        name,
      },
    },

    plugins: [createVuePlugin({ jsx: true })],
  };
};
