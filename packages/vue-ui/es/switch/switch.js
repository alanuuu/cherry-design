import formMixins from "../mixins/form.js";
import { staticRenderFns, render } from "./switch.vue_vue_type_template_lang.js";
import normalizeComponent from "../_virtual/vueComponentNormalizer.js";
const __vue2_script = {
  name: "CSwitch",
  mixins: [formMixins],
  props: {
    value: {
      type: Boolean,
      default: false
    },
    width: {
      type: Number,
      default: 40
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    cls() {
      const name = "c-switch";
      return {
        [name + "-core"]: true,
        [name + "-checked"]: this.value,
        [name + "-disabled"]: this.itemDisabled
      };
    }
  },
  methods: {
    checkValue() {
      var _a;
      if (this.itemDisabled)
        return;
      this.$emit("change", !this.value);
      this.$emit("input", !this.value);
      (_a = this.formItem) == null ? void 0 : _a.onField("change");
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
__component__.options.__file = "components/switch/switch.vue";
var Switch = /* @__PURE__ */ function() {
  return __component__.exports;
}();
export { Switch as default };
