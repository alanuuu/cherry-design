const path = require('path');
const fs = require('fs-extra');

const root = process.cwd();
const iconPath = path.resolve(root, 'components/icon');
const esPath = path.resolve(root, 'es/icon');

function createIconTemp(name, content) {
  const c = content.replace(/\<svg/, '<svg :class="cls"');
  return `
<template>
${c}
</template>
<script>
  export default {
    name: 'icon-${name}',
    computed: {
      cls() {
        return {
          'c-icon': true,
          'c-${name}': true
        }
      }
    }
  }
</script>
`;
}

function hasSplitToUpperCase(name) {
  const names = name.split('-');
  if (names.length > 1) {
    return names.map((v) => v.replace(/^\S/, (s) => s.toUpperCase())).join('');
  }
  return name.replace(/^\S/, (s) => s.toUpperCase());
}

function createIndexTemp(data) {
  const imports = [];
  const exports = [];
  const components = [];

  for (const item of data) {
    const componentName ="Icon" +  hasSplitToUpperCase(item.name);
    components.push(componentName);
    imports.push(`import ${componentName} from './${item.name}.vue';`);
    exports.push(
      `export { default as ${componentName} } from './${item.name}.vue'; `
    );
  }

  const iconContent = getVueIcon({ imports, components });
  const indexContent = getIndex({ exports });

  fs.outputFile(
    path.resolve(iconPath, 'cherry-vue-icon.js'),
    iconContent,
    (err) => {
      if (err) {
        console.log(`Build VueIcon Failed: ${err}`);
      } else {
        console.log('Build VueIcon Success!');
      }
    }
  );
  fs.outputFile(
    path.resolve(esPath, 'cherry-vue-icon.js'),
    iconContent,
  );

  fs.outputFile(path.resolve(iconPath, 'index.js'), indexContent, (err) => {
    if (err) {
      console.log(`Build Index Failed: ${err}`);
    } else {
      console.log('Build Index Success!');
    }
  });
  fs.outputFile(path.resolve(esPath, 'index.js'), indexContent);

  fs.outputFile(
    path.resolve(path.resolve(iconPath), 'icons.json'),
    JSON.stringify(data, null, 2),
    (err) => {
      if (err) {
        console.log(`Build JSON Failed: ${err}`);
      } else {
        console.log('Build JSON Success!');
      }
    }
  );
}

const getVueIcon = ({ imports, components }) =>
// prettier-ignore
`${imports.join('\n')}

const icons = {
  ${components.join(',\n  ')}
};

const install = (Vue, options) => {
  for (const key of Object.keys(icons)) {
    Vue.component(icons[key].name, icons[key]);
  }
};

const cherryVueIcon = {
  ...icons,
  install
};

export default cherryVueIcon;
`;

const getIndex = ({ exports }) =>
  // prettier-ignore
  `export { default } from './cherry-vue-icon';
${exports.join('\n')}
`;


module.exports = {
  createIconTemp,
  createIndexTemp,
  hasSplitToUpperCase
}
