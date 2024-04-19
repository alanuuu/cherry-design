import DateConstants from "./dataConstant.js";
import { staticRenderFns, render } from "./TDateHead.vue_vue_type_template_lang.js";
import normalizeComponent from "../_virtual/vueComponentNormalizer.js";
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
      for (let dateColIndex = 0; dateColIndex < DateConstants.DATE_COL_COUNT; dateColIndex++) {
        const index = dateColIndex % DateConstants.DATE_COL_COUNT;
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
var __component__ = /* @__PURE__ */ normalizeComponent(__vue2_script, render, staticRenderFns, false, __vue2_injectStyles, null, null, null);
function __vue2_injectStyles(context) {
  for (let o in __cssModules) {
    this[o] = __cssModules[o];
  }
}
__component__.options.__file = "components/calendar/TDateHead.vue";
var TDateHead = /* @__PURE__ */ function() {
  return __component__.exports;
}();
export { TDateHead as default };
