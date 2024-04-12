import { staticRenderFns, render } from "./link.vue_vue_type_template_lang.js";
import normalizeComponent from "../_virtual/vueComponentNormalizer.js";
const __vue2_script = {
  name: "Link",
  props: {
    status: {
      type: String,
      default: "default"
    },
    underline: {
      type: Boolean,
      default: true
    },
    disabled: {
      type: Boolean,
      default: false
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
  computed: {
    cls() {
      return {
        "c-link": true,
        [`c-link-${this.status}`]: true,
        disabled: this.disabled,
        underline: this.underline && !this.disabled
      };
    }
  },
  methods: {
    handleClick(event) {
      if (this.disabled || this.href)
        return;
      const { to, $router } = this;
      if (to && $router) {
        $router[this.replace ? "replace" : "push"](to);
      } else {
        this.$emit("click", event);
      }
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
__component__.options.__file = "components/link/link.vue";
var Link = /* @__PURE__ */ function() {
  return __component__.exports;
}();
export { Link as default };
