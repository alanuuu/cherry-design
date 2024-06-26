import Vue from 'vue';
import dayjs from 'dayjs';
import localeData from 'dayjs/plugin/localeData'
dayjs.extend(localeData)

import Button from './button';
import Avatar from './avatar';
import Layout from './layout';
import Badge from './badge';
import Img from './img';
import Breadcrumb from './breadcrumb';
import Link from './link';
import Switch from './switch';
import Loading from './loading';
import Dialog from './dialog';
import Card from './card';
import Empty from './empty';
import BackTop from './backtop';
import Input from './input';
import { Col, Row } from './grid';
import Rate from './rate';
import Affix from './affix';
import Navs from './navs';
import Carousel from './carousel';
import CarouselItem from './carousel-item';
import Radio from './radio';
import RadioGroup from './radio-group';
import Space from './space';
import Form from './form';
import { Select, Option } from './select';
import List from './list';
import Pagination from './pagination';
import Checkbox from './checkbox';
import CheckboxGroup from './checkbox-group';
import Popover from './popover';
import Tabs from './tabs';
import Tag from './tag';
import Toast from './toast';
import Progress from './progress';
import Calendar from './calendar';

const components = {
  Button,
  Layout,
  Badge,
  Avatar,
  Img,
  Breadcrumb,
  Link,
  Switch,
  Loading,
  Dialog,
  Card,
  Empty,
  BackTop,
  Input,
  Row,
  Col,
  Rate,
  Affix,
  Navs,
  Carousel,
  CarouselItem,
  Radio,
  RadioGroup,
  Space,
  Form,
  Select,
  Option,
  List,
  CheckboxGroup,
  Checkbox,
  Popover,
  Tabs,
  Tag,
  Toast,
  Progress,
  Pagination,
  Calendar,
};

const install = (app, options) => {
  // eslint-disable-next-line no-restricted-syntax
  for (const key of Object.keys(components)) {
    app.use(components[key], options);
  }
};

const CherryUI = {
  ...components,
  install,
};

Vue.prototype.$toast = Toast;

export default CherryUI;
