import { staticRenderFns, render } from "./badge.vue_vue_type_template_lang.js";
import normalizeComponent from "../_virtual/vueComponentNormalizer.js";
const preName = "c-badge";
const __vue2_script = {
  name: "Badge",
  props: {
    max: {
      type: Number,
      default: -1
    },
    hidden: {
      type: Boolean,
      default: false
    },
    dot: {
      type: Boolean,
      default: false
    },
    value: {
      type: [String, Number],
      default: null
    }
  },
  computed: {
    isShowTip() {
      return this.value && !this.hidden && !this.dot;
    },
    isShowDot() {
      return this.dot && !this.hidden;
    },
    cls() {
      return {
        [preName + "-tip"]: true
      };
    },
    dotCls() {
      return {
        [preName + "-dot"]: true
      };
    },
    badgeValue() {
      if (!this.value || this.max < 0)
        return this.value;
      if (+this.value > this.max)
        return this.max + "+";
      return this.value;
    }
  }
};
const __cssModules = {};
var __component__ = /* @__PURE__ */ normalizeComponent(__vue2_script, render, staticRenderFns, false, __vue2_injectStyles, null, null, null);
function __vue2_injectStyles(context) {
  for (let o in __cssModules) {
    this[o] = __cssModules[o];
  }
}
__component__.options.__file = "components/badge/badge.vue";
var Badge = /* @__PURE__ */ function() {
  return __component__.exports;
}();
export { Badge as default };
