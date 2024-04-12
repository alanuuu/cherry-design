import Link from "../link/link.js";
import { staticRenderFns, render } from "./breadcrumb-item.vue_vue_type_template_lang.js";
import normalizeComponent from "../_virtual/vueComponentNormalizer.js";
const __vue2_script = {
  name: "BreadcrumbItem",
  components: { Link },
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
var __component__ = /* @__PURE__ */ normalizeComponent(__vue2_script, render, staticRenderFns, false, __vue2_injectStyles, null, null, null);
function __vue2_injectStyles(context) {
  for (let o in __cssModules) {
    this[o] = __cssModules[o];
  }
}
__component__.options.__file = "components/breadcrumb/breadcrumb-item.vue";
var BreadcrumbItem = /* @__PURE__ */ function() {
  return __component__.exports;
}();
export { BreadcrumbItem as default };
