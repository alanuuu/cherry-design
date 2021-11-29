const fs = require('fs-extra');
const path = require('path');
const { build } = require('vite');
const config = require('../../configs/vite.prod.js')

const run = async ({ umd = false }) => {
  await fs.emptyDir(path.resolve(process.cwd(), 'es'));
  await fs.emptyDir(path.resolve(process.cwd(), 'lib'));
  await build(config);
};

module.exports = run;
