import Button from './button';
import Layout from './layout';

const components = {
  Button,
  Layout
}

const install = (app, options) => {
  for (const key of Object.keys(components)) {
    app.use(components[key], options);
  }
};

const CSDNUI = {
  ...components,
  install,
}

export default CSDNUI
