"use strict";
var form = require("../mixins/form.js");
var switch_vue_vue_type_template_lang = require("./switch.vue_vue_type_template_lang.js");
var vueComponentNormalizer = require("../_virtual/vueComponentNormalizer.js");
const __vue2_script = {
  name: "CSwitch",
  mixins: [form],
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
var __component__ = /* @__PURE__ */ vueComponentNormalizer(__vue2_script, switch_vue_vue_type_template_lang.render, switch_vue_vue_type_template_lang.staticRenderFns, false, __vue2_injectStyles, null, null, null);
function __vue2_injectStyles(context) {
  for (let o in __cssModules) {
    this[o] = __cssModules[o];
  }
}
__component__.options.__file = "components/switch/switch.vue";
var Switch = /* @__PURE__ */ function() {
  return __component__.exports;
}();
module.exports = Switch;
