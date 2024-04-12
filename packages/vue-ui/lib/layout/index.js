"use strict";
var layout = require("./layout.js");
var header = require("./header.js");
var content = require("./content.js");
var footer = require("./footer.js");
var sider = require("./sider.js");
var index = require("../packages/vue-ui/constants/index.js");
layout.Header = header;
layout.Content = content;
layout.Footer = footer;
layout.Sider = sider;
layout.install = (Vue) => {
  Vue.component(index.prefix + layout.name, layout);
  Vue.component(index.prefix + header.name, header);
  Vue.component(index.prefix + content.name, content);
  Vue.component(index.prefix + footer.name, footer);
  Vue.component(index.prefix + sider.name, sider);
};
module.exports = layout;
