const fs = require('fs-extra');
const path = require('path');
const { build } = require('vite');
const config = require('../../configs/vite.prod.js')
const releaseConfig = require('../../configs/vite.prod.release.js');
const minConfig = require('../../configs/vite.prod.min.js');

const run = async ({ release = false }) => {
  await fs.emptyDir(path.resolve(process.cwd(), 'es'));
  await fs.emptyDir(path.resolve(process.cwd(), 'lib'));
  await build(config);

  if(release) {
    await build(releaseConfig('component'));
    await build(minConfig('component'));
    await build(releaseConfig('icon'));
    await build(minConfig('icon'));
  }
};

module.exports = run;
