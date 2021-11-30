import Button from './button';
import Avatar from './avatar';
import Layout from './layout';

const components = {
  Button,
  Avatar,
  Layout
}

const install = (app, options) => {
  // eslint-disable-next-line no-restricted-syntax
  for (const key of Object.keys(components)) {
    app.use(components[key], options);
  }
};

const CSDNUI = {
  ...components,
  install,
};

export default CSDNUI;
