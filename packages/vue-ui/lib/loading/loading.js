"use strict";
var loading = require("../icon/loading.js");
var loading_vue_vue_type_template_lang = require("./loading.vue_vue_type_template_lang.js");
var vueComponentNormalizer = require("../_virtual/vueComponentNormalizer.js");
const __vue2_script = {
  name: "Loading",
  components: {
    IconLoading: loading
  },
  props: {
    tip: {
      type: String,
      default: ""
    },
    size: {
      type: String,
      default: "largest",
      validator: (val) => {
        return ["small", "medium", "large", "largest"].indexOf(val) > -1;
      }
    }
  }
};
const __cssModules = {};
var __component__ = /* @__PURE__ */ vueComponentNormalizer(__vue2_script, loading_vue_vue_type_template_lang.render, loading_vue_vue_type_template_lang.staticRenderFns, false, __vue2_injectStyles, null, null, null);
function __vue2_injectStyles(context) {
  for (let o in __cssModules) {
    this[o] = __cssModules[o];
  }
}
__component__.options.__file = "components/loading/loading.vue";
var Loading = /* @__PURE__ */ function() {
  return __component__.exports;
}();
module.exports = Loading;
