import Loading from "../loading/loading.js";
import { staticRenderFns, render } from "./button.vue_vue_type_template_lang.js";
import normalizeComponent from "../_virtual/vueComponentNormalizer.js";
const __vue2_script = {
  name: "Button",
  components: {
    Loading
  },
  props: {
    type: {
      type: String,
      default: "primary",
      validator: (val) => {
        return ["primary", "success", "black"].indexOf(val) !== -1;
      }
    },
    size: {
      type: String,
      default: "small",
      validator: (val) => {
        return ["large", "medium", "small"].indexOf(val) !== -1;
      }
    },
    htmlType: {
      type: String,
      default: "button"
    },
    disabled: Boolean,
    ghost: Boolean,
    loading: Boolean
  },
  computed: {
    cls() {
      const name = "c-btn";
      return {
        [name]: true,
        [`${name}-${this.size}`]: true,
        [`${name}-${this.type}`]: true,
        [`${name}-disabled`]: this.disabled,
        [`${name}-loading`]: this.loading,
        [`${name}-ghost`]: this.ghost
      };
    }
  },
  methods: {
    onClick(event) {
      if (this.loading || this.disabled)
        return;
      this.$emit("click", event);
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
__component__.options.__file = "components/button/button.vue";
var CButton = /* @__PURE__ */ function() {
  return __component__.exports;
}();
export { CButton as default };
