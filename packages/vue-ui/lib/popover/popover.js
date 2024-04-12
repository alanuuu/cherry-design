"use strict";
var popover_vue_vue_type_template_lang = require("./popover.vue_vue_type_template_lang.js");
require("./popover.vue_vue_type_style_index_0_lang.js");
var vueComponentNormalizer = require("../_virtual/vueComponentNormalizer.js");
const __vue2_script = {
  name: "Popover",
  props: {
    mask: {
      type: Boolean,
      default: true
    },
    useMaskClose: {
      type: Boolean,
      default: true
    },
    value: Boolean,
    show: Boolean,
    type: {
      type: String,
      default: "center",
      validator(val) {
        return ["center", "top", "bottom", "left", "right"].indexOf(val) > -1;
      }
    }
  },
  computed: {
    cls() {
      const name = "c-pop";
      return {
        [`${name}--${this.type}`]: !!this.type,
        [`${name}--show`]: this.show || this.value
      };
    }
  },
  methods: {
    onMaskClick() {
      if (!this.useMaskClose) {
        return;
      }
      this.$emit("input");
      this.$emit("close");
    }
  }
};
const __cssModules = {};
var __component__ = /* @__PURE__ */ vueComponentNormalizer(__vue2_script, popover_vue_vue_type_template_lang.render, popover_vue_vue_type_template_lang.staticRenderFns, false, __vue2_injectStyles, null, null, null);
function __vue2_injectStyles(context) {
  for (let o in __cssModules) {
    this[o] = __cssModules[o];
  }
}
__component__.options.__file = "components/popover/popover.vue";
var Popover = /* @__PURE__ */ function() {
  return __component__.exports;
}();
module.exports = Popover;
