"use strict";
var layout_vue_vue_type_template_lang = require("./layout.vue_vue_type_template_lang.js");
var vueComponentNormalizer = require("../_virtual/vueComponentNormalizer.js");
const __vue2_script = {
  name: "Layout",
  props: {
    hasSider: {
      type: Boolean
    }
  },
  data() {
    return {
      siders: []
    };
  },
  provide() {
    return {
      onSiderCreate: this.onSiderCreate
    };
  },
  methods: {
    onSiderCreate(id) {
      this.siders.push(id);
    }
  },
  computed: {
    cls() {
      return {
        "c-has-sider": this.hasSider || this.siders.length > 0
      };
    }
  }
};
const __cssModules = {};
var __component__ = /* @__PURE__ */ vueComponentNormalizer(__vue2_script, layout_vue_vue_type_template_lang.render, layout_vue_vue_type_template_lang.staticRenderFns, false, __vue2_injectStyles, null, null, null);
function __vue2_injectStyles(context) {
  for (let o in __cssModules) {
    this[o] = __cssModules[o];
  }
}
__component__.options.__file = "components/layout/layout.vue";
var Layout = /* @__PURE__ */ function() {
  return __component__.exports;
}();
module.exports = Layout;
