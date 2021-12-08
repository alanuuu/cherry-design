import Button from './button';
import Avatar from './avatar';
import Layout from './layout';
import Badge from './badge';
import Image from './image';
import Breadcrumb from './breadcrumb';
import Link from './link';
import Switch from './switch';
import Loading from './loading';
import Dialog from './dialog';
import Card from './card';
import Empty from './empty';
import BackTop from './backtop';

const components = {
  Button,
  Layout,
  Badge,
  Avatar,
  Image,
  Breadcrumb,
  Link,
  Switch,
  Loading,
  Dialog,
  Card,
  Empty,
  BackTop,
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
