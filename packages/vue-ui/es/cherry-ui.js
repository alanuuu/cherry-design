var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
import Vue from "vue";
import "./button/index.js";
import "./avatar/index.js";
import "./layout/index.js";
import "./badge/index.js";
import "./img/index.js";
import "./breadcrumb/index.js";
import "./link/index.js";
import "./switch/index.js";
import "./loading/index.js";
import "./dialog/index.js";
import "./card/index.js";
import "./empty/index.js";
import "./backtop/index.js";
import "./input/index.js";
import "./grid/index.js";
import "./rate/index.js";
import "./affix/index.js";
import "./navs/index.js";
import "./carousel/index.js";
import "./carousel-item/index.js";
import "./radio/index.js";
import "./radio-group/index.js";
import "./space/index.js";
import "./form/index.js";
import "./select/index.js";
import "./list/index.js";
import "./pagination/index.js";
import "./checkbox/index.js";
import "./checkbox-group/index.js";
import "./popover/index.js";
import "./tabs/index.js";
import "./tag/index.js";
import "./toast/index.js";
import "./progress/index.js";
import ToastDialog from "./toast/toast.js";
import Row from "./grid/row.js";
import Col from "./grid/col.js";
import Select from "./select/select.js";
import Option from "./select/option.js";
import CButton from "./button/button.js";
import Layout from "./layout/layout.js";
import Badge from "./badge/badge.js";
import CAvatar from "./avatar/avatar.js";
import Img from "./img/img.js";
import Breadcrumb from "./breadcrumb/breadcrumb.js";
import Link from "./link/link.js";
import Switch from "./switch/switch.js";
import Loading from "./loading/loading.js";
import Dialog from "./dialog/dialog.js";
import Card from "./card/card.js";
import Empty from "./empty/empty.js";
import BackTop from "./backtop/backtop.js";
import Input from "./input/input.js";
import Rate from "./rate/rate.js";
import Affix from "./affix/affix.js";
import Navs from "./navs/navs.js";
import Carousel from "./carousel/carousel.js";
import CarouselItem from "./carousel/carousel-item.js";
import Radio from "./radio/radio.js";
import RadioGroup from "./radio/radio-group.js";
import Space from "./space/space.js";
import Form from "./form/form.js";
import List from "./list/list.js";
import CheckboxGroup from "./checkbox-group/checkbox-group.js";
import Checkbox from "./checkbox/checkbox.js";
import Popover from "./popover/popover.js";
import Tabs from "./tabs/tabs.js";
import Tag from "./tag/tag.js";
import Progress from "./progress/progress.js";
import Pagination from "./pagination/pagination.js";
const components = {
  Button: CButton,
  Layout,
  Badge,
  Avatar: CAvatar,
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
  Toast: ToastDialog,
  Progress,
  Pagination
};
const install = (app, options) => {
  for (const key of Object.keys(components)) {
    app.use(components[key], options);
  }
};
const CherryUI = __spreadProps(__spreadValues({}, components), {
  install
});
Vue.prototype.$toast = ToastDialog;
export { CherryUI as default };
