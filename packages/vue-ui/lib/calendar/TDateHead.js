"use strict";
var dataConstant = require("./dataConstant.js");
var TDateHead_vue_vue_type_template_lang = require("./TDateHead.vue_vue_type_template_lang.js");
var vueComponentNormalizer = require("../_virtual/vueComponentNormalizer.js");
const __vue2_script = {
  props: {
    value: {
      type: Object,
      required: true
    }
  },
  computed: {
    weekdays() {
      const weekdays = [];
      const val = this.value.clone();
      const localeData = val.localeData();
      for (let dateColIndex = 0; dateColIndex < dataConstant.DATE_COL_COUNT; dateColIndex++) {
        const index = dateColIndex % dataConstant.DATE_COL_COUNT;
        weekdays[dateColIndex] = localeData.weekdaysShort(val.day(index));
      }
      return weekdays;
    }
  },
  data() {
    return {};
  },
  created() {
  },
  mounted() {
  }
};
const __cssModules = {};
var __component__ = /* @__PURE__ */ vueComponentNormalizer(__vue2_script, TDateHead_vue_vue_type_template_lang.render, TDateHead_vue_vue_type_template_lang.staticRenderFns, false, __vue2_injectStyles, null, null, null);
function __vue2_injectStyles(context) {
  for (let o in __cssModules) {
    this[o] = __cssModules[o];
  }
}
__component__.options.__file = "components/calendar/TDateHead.vue";
var TDateHead = /* @__PURE__ */ function() {
  return __component__.exports;
}();
module.exports = TDateHead;
