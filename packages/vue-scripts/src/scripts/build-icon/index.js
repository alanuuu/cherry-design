const path = require('path');
const fs = require('fs-extra');
const glob = require('glob');
const root = process.cwd();
const {
  createIconTemp,
  createIndexTemp,
  hasSplitToUpperCase,
} = require('../../helper');
const extname = '.svg';

const run = async () => {
  const data = [];
  const files = glob.sync('**/*.svg', {
    cwd: path.resolve(root, 'icons'),
  });

  for (const filename of files) {
    const filePath = path.resolve(root, `icons/${filename}`);
    const content = fs.readFileSync(filePath, 'utf-8');
    const name = path.basename(filename, extname);
    const conponentPath = path.resolve(root, `components/icon`);
    const temp = createIconTemp(name, content);
    const vueFileName = filename.replace(extname, '.vue');
    fs.writeFileSync(conponentPath + '/' + vueFileName, temp, 'utf-8');
    const componentName = 'Icon' + hasSplitToUpperCase(name);
    data.push({
      name: name,
      componentName,
    });
  }

  await createIndexTemp(data);
  console.log('build icon success');
};

module.exports = run;
