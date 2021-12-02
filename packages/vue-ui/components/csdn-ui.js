import Button from './button';
import Avatar from './avatar';
import Layout from './layout';
import Badge from './badge';
import Image from './image';
import Breadcrumb from './breadcrumb';

const components = {
  Button,
  Layout,
  Badge,
  Avatar,
  Image,
  Breadcrumb,
};

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
