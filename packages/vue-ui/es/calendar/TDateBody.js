import dayjs from "../node_modules/dayjs/dayjs.min.js";
import DateConstants from "./dataConstant.js";
import { staticRenderFns, render } from "./TDateBody.vue_vue_type_template_lang.js";
import normalizeComponent from "../_virtual/vueComponentNormalizer.js";
function isSameDay(one, two) {
  return one && two && one.isSame(two, "day");
}
function beforeCurrentMonthYear(current, today) {
  if (current.year() < today.year()) {
    return 1;
  }
  return current.year() === today.year() && current.month() < today.month();
}
function beforeCurrentDay(current, today) {
  if (current.year() < today.year()) {
    return false;
  }
  if (current.month() < today.month()) {
    return false;
  }
  return current.year() === today.year() && current.month() === today.month() && current.date() < today.date();
}
function afterCurrentMonthYear(current, today) {
  if (current.year() > today.year()) {
    return 1;
  }
  return current.year() === today.year() && current.month() > today.month();
}
const __vue2_script = {
  props: {
    value: {
      type: Object,
      required: true
    },
    showAll: Boolean,
    selects: Array
  },
  data() {
    return {
      ROW: DateConstants.DATE_ROW_COUNT,
      COL: DateConstants.DATE_COL_COUNT
    };
  },
  computed: {
    total() {
      return dayjs(this.value).daysInMonth();
    },
    dateTable() {
      let current;
      let passed = 0;
      const dateTable = [];
      for (let iIndex = 0; iIndex < DateConstants.DATE_ROW_COUNT; iIndex++) {
        for (let jIndex = 0; jIndex < DateConstants.DATE_COL_COUNT; jIndex++) {
          current = this.firstDay;
          if (passed) {
            current = current.add(passed, "days");
          }
          dateTable.push({
            value: current,
            date: current.date(),
            format: current.format("YYYY-MM-DD"),
            today: isSameDay(current, this.value),
            selected: this.selects.filter((v) => {
              return isSameDay(v, current);
            }).length,
            beforeDay: beforeCurrentDay(current, this.value),
            beforeCurrentMonthYear: beforeCurrentMonthYear(current, this.value),
            afterCurrentMonthYear: afterCurrentMonthYear(current, this.value)
          });
          passed++;
        }
      }
      return dateTable;
    },
    firstDay() {
      const month1 = this.value.date(1);
      const day = month1.day();
      const lastMonthDiffDay = day % 7;
      return month1.add(0 - lastMonthDiffDay, "days");
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
__component__.options.__file = "components/calendar/TDateBody.vue";
var TDateBody = /* @__PURE__ */ function() {
  return __component__.exports;
}();
export { TDateBody as default };
