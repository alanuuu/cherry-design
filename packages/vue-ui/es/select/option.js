import { staticRenderFns, render } from "./option.vue_vue_type_template_lang.js";
import normalizeComponent from "../_virtual/vueComponentNormalizer.js";
const __vue2_script = {
  name: "Option",
  props: {
    value: {
      type: [String, Number],
      required: true
    },
    label: {
      type: [String, Number]
    }
  },
  data() {
    return {
      parent: this.$parent.$options.name === "Select" ? this.$parent : null,
      inputText: ""
    };
  },
  computed: {
    cls() {
      const name = "c-select-option-item";
      return {
        [name + "-selected"]: this.parent.value === this.value
      };
    },
    visiable() {
      return !!(!this.label || this.label.indexOf(this.inputText) > -1 || this.inputText === "");
    }
  },
  methods: {
    select() {
      if (this.parent) {
        this.parent.selectData(this.value, this.label);
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
__component__.options.__file = "components/select/option.vue";
var Option = /* @__PURE__ */ function() {
  return __component__.exports;
}();
export { Option as default };
