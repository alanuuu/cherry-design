"use strict";
var tabPane_vue_vue_type_template_lang = require("./tab-pane.vue_vue_type_template_lang.js");
var vueComponentNormalizer = require("../_virtual/vueComponentNormalizer.js");
const __vue2_script = {
  name: "TabPane",
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
    active() {
      return this.$parent.currentName === this.name;
    }
  }
};
const __cssModules = {};
var __component__ = /* @__PURE__ */ vueComponentNormalizer(__vue2_script, tabPane_vue_vue_type_template_lang.render, tabPane_vue_vue_type_template_lang.staticRenderFns, false, __vue2_injectStyles, null, null, null);
function __vue2_injectStyles(context) {
  for (let o in __cssModules) {
    this[o] = __cssModules[o];
  }
}
__component__.options.__file = "components/tabs/tab-pane.vue";
var TabPane = /* @__PURE__ */ function() {
  return __component__.exports;
}();
module.exports = TabPane;
