"use strict";
var list_vue_vue_type_template_lang = require("./list.vue_vue_type_template_lang.js");
var vueComponentNormalizer = require("../_virtual/vueComponentNormalizer.js");
const __vue2_script = {
  name: "List",
  provide() {
    return {
      itemLayout: this.itemLayout
    };
  },
  props: {
    header: String,
    footer: String,
    border: {
      type: Boolean,
      default: true
    },
    split: {
      type: Boolean,
      default: true
    },
    itemLayout: {
      type: String,
      default: "horizontal",
      validator: (val) => {
        return ["horizontal", "vertical"].indexOf(val) !== -1;
      }
    }
  },
  computed: {
    cls() {
      const name = "c-list";
      return {
        [name]: true,
        [name + "-border"]: this.border,
        [name + "-split"]: this.split
      };
    }
  }
};
const __cssModules = {};
var __component__ = /* @__PURE__ */ vueComponentNormalizer(__vue2_script, list_vue_vue_type_template_lang.render, list_vue_vue_type_template_lang.staticRenderFns, false, __vue2_injectStyles, null, null, null);
function __vue2_injectStyles(context) {
  for (let o in __cssModules) {
    this[o] = __cssModules[o];
  }
}
__component__.options.__file = "components/list/list.vue";
var List = /* @__PURE__ */ function() {
  return __component__.exports;
}();
module.exports = List;
