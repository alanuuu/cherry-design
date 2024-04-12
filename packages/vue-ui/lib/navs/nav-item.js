"use strict";
var navItem_vue_vue_type_template_lang = require("./nav-item.vue_vue_type_template_lang.js");
var vueComponentNormalizer = require("../_virtual/vueComponentNormalizer.js");
const __vue2_script = {
  name: "NavItem",
  props: {
    name: {
      type: String,
      required: true
    },
    label: {
      type: String,
      required: true
    }
  },
  computed: {
    cls() {
      return {
        ["c-nav-" + this.name]: true
      };
    }
  }
};
const __cssModules = {};
var __component__ = /* @__PURE__ */ vueComponentNormalizer(__vue2_script, navItem_vue_vue_type_template_lang.render, navItem_vue_vue_type_template_lang.staticRenderFns, false, __vue2_injectStyles, null, null, null);
function __vue2_injectStyles(context) {
  for (let o in __cssModules) {
    this[o] = __cssModules[o];
  }
}
__component__.options.__file = "components/navs/nav-item.vue";
var NavItem = /* @__PURE__ */ function() {
  return __component__.exports;
}();
module.exports = NavItem;
