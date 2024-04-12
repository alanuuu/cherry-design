"use strict";
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
var Vue = require("vue");
require("./button/index.js");
require("./avatar/index.js");
require("./layout/index.js");
require("./badge/index.js");
require("./img/index.js");
require("./breadcrumb/index.js");
require("./link/index.js");
require("./switch/index.js");
require("./loading/index.js");
require("./dialog/index.js");
require("./card/index.js");
require("./empty/index.js");
require("./backtop/index.js");
require("./input/index.js");
require("./grid/index.js");
require("./rate/index.js");
require("./affix/index.js");
require("./navs/index.js");
require("./carousel/index.js");
require("./carousel-item/index.js");
require("./radio/index.js");
require("./radio-group/index.js");
require("./space/index.js");
require("./form/index.js");
require("./select/index.js");
require("./list/index.js");
require("./pagination/index.js");
require("./checkbox/index.js");
require("./checkbox-group/index.js");
require("./popover/index.js");
require("./tabs/index.js");
require("./tag/index.js");
require("./toast/index.js");
require("./progress/index.js");
var toast = require("./toast/toast.js");
var row = require("./grid/row.js");
var col = require("./grid/col.js");
var select = require("./select/select.js");
var option = require("./select/option.js");
var button = require("./button/button.js");
var layout = require("./layout/layout.js");
var badge = require("./badge/badge.js");
var avatar = require("./avatar/avatar.js");
var img = require("./img/img.js");
var breadcrumb = require("./breadcrumb/breadcrumb.js");
var link = require("./link/link.js");
var _switch = require("./switch/switch.js");
var loading = require("./loading/loading.js");
var dialog = require("./dialog/dialog.js");
var card = require("./card/card.js");
var empty = require("./empty/empty.js");
var backtop = require("./backtop/backtop.js");
var input = require("./input/input.js");
var rate = require("./rate/rate.js");
var affix = require("./affix/affix.js");
var navs = require("./navs/navs.js");
var carousel = require("./carousel/carousel.js");
var carouselItem = require("./carousel/carousel-item.js");
var radio = require("./radio/radio.js");
var radioGroup = require("./radio/radio-group.js");
var space = require("./space/space.js");
var form = require("./form/form.js");
var list = require("./list/list.js");
var checkboxGroup = require("./checkbox-group/checkbox-group.js");
var checkbox = require("./checkbox/checkbox.js");
var popover = require("./popover/popover.js");
var tabs = require("./tabs/tabs.js");
var tag = require("./tag/tag.js");
var progress = require("./progress/progress.js");
var pagination = require("./pagination/pagination.js");
function _interopDefaultLegacy(e) {
  return e && typeof e === "object" && "default" in e ? e : { "default": e };
}
var Vue__default = /* @__PURE__ */ _interopDefaultLegacy(Vue);
const components = {
  Button: button,
  Layout: layout,
  Badge: badge,
  Avatar: avatar,
  Img: img,
  Breadcrumb: breadcrumb,
  Link: link,
  Switch: _switch,
  Loading: loading,
  Dialog: dialog,
  Card: card,
  Empty: empty,
  BackTop: backtop,
  Input: input,
  Row: row,
  Col: col,
  Rate: rate,
  Affix: affix,
  Navs: navs,
  Carousel: carousel,
  CarouselItem: carouselItem,
  Radio: radio,
  RadioGroup: radioGroup,
  Space: space,
  Form: form,
  Select: select,
  Option: option,
  List: list,
  CheckboxGroup: checkboxGroup,
  Checkbox: checkbox,
  Popover: popover,
  Tabs: tabs,
  Tag: tag,
  Toast: toast,
  Progress: progress,
  Pagination: pagination
};
const install = (app, options) => {
  for (const key of Object.keys(components)) {
    app.use(components[key], options);
  }
};
const CherryUI = __spreadProps(__spreadValues({}, components), {
  install
});
Vue__default["default"].prototype.$toast = toast;
module.exports = CherryUI;
