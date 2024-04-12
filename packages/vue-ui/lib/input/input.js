"use strict";
var index = require("../packages/vue-ui/constants/index.js");
var form = require("../mixins/form.js");
var input_vue_vue_type_template_lang = require("./input.vue_vue_type_template_lang.js");
var vueComponentNormalizer = require("../_virtual/vueComponentNormalizer.js");
const __vue2_script = {
  name: "Input",
  mixins: [form],
  props: {
    value: {
      type: String,
      default: ""
    },
    placeholder: {
      type: String,
      default: "\u8BF7\u8F93\u5165\u5185\u5BB9"
    },
    disabled: {
      type: Boolean,
      default: false
    },
    maxlength: {
      type: Number
    },
    limit: {
      type: Boolean,
      default: false
    },
    type: {
      type: String,
      default: "text"
    }
  },
  data() {
    return {
      text: ""
    };
  },
  computed: {
    textNum() {
      return this.value.length;
    },
    isWordLimitVisible() {
      return this.limit && this.maxlength && this.type !== "password";
    },
    cls() {
      const name = index.prefix + "-input";
      return {
        [name + "-disabled"]: this.itemDisabled,
        [name + "-content"]: true,
        [name + "-limit"]: this.isWordLimitVisible
      };
    }
  },
  methods: {
    onInput(e) {
      var _a, _b;
      this.$emit("input", (_a = e.target) == null ? void 0 : _a.value);
      (_b = this.formItem) == null ? void 0 : _b.onField("change");
    },
    onChange(e) {
      var _a;
      this.$emit("change", (_a = e.target) == null ? void 0 : _a.value);
    },
    onBlur(e) {
      this.$emit("blur");
    },
    onEnter(e) {
      if (e.target) {
        this.$emit("enter", e.target.value);
      }
    },
    onFocus(e) {
      this.$emit("focus");
    }
  }
};
const __cssModules = {};
var __component__ = /* @__PURE__ */ vueComponentNormalizer(__vue2_script, input_vue_vue_type_template_lang.render, input_vue_vue_type_template_lang.staticRenderFns, false, __vue2_injectStyles, null, null, null);
function __vue2_injectStyles(context) {
  for (let o in __cssModules) {
    this[o] = __cssModules[o];
  }
}
__component__.options.__file = "components/input/input.vue";
var Input = /* @__PURE__ */ function() {
  return __component__.exports;
}();
module.exports = Input;
