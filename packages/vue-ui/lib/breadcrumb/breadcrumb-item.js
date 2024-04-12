"use strict";
var link = require("../link/link.js");
var breadcrumbItem_vue_vue_type_template_lang = require("./breadcrumb-item.vue_vue_type_template_lang.js");
var vueComponentNormalizer = require("../_virtual/vueComponentNormalizer.js");
const __vue2_script = {
  name: "BreadcrumbItem",
  components: { Link: link },
  props: {
    className: {
      type: String,
      default: ""
    },
    href: {
      type: String,
      default: null
    },
    to: {
      type: [String, Object],
      default: ""
    },
    replace: {
      type: Boolean,
      default: false
    }
  },
  inject: ["breadcrumb"],
  computed: {
    isLink() {
      return !!this.to || !!this.href;
    },
    separatorClass() {
      return ["c-breadcrumb-separator", ...this.className.split(" ")];
    }
  }
};
const __cssModules = {};
var __component__ = /* @__PURE__ */ vueComponentNormalizer(__vue2_script, breadcrumbItem_vue_vue_type_template_lang.render, breadcrumbItem_vue_vue_type_template_lang.staticRenderFns, false, __vue2_injectStyles, null, null, null);
function __vue2_injectStyles(context) {
  for (let o in __cssModules) {
    this[o] = __cssModules[o];
  }
}
__component__.options.__file = "components/breadcrumb/breadcrumb-item.vue";
var BreadcrumbItem = /* @__PURE__ */ function() {
  return __component__.exports;
}();
module.exports = BreadcrumbItem;
