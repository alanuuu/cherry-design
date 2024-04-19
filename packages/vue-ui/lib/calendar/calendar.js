"use strict";
var dayjs_min = require("../node_modules/dayjs/dayjs.min.js");
require("../button/button.js");
var TDateHead = require("./TDateHead.js");
var TDateBody = require("./TDateBody.js");
var calendar_vue_vue_type_template_lang = require("./calendar.vue_vue_type_template_lang.js");
var vueComponentNormalizer = require("../_virtual/vueComponentNormalizer.js");
const __vue2_script = {
  name: "Calendar",
  props: {
    showAll: Boolean,
    showChange: {
      type: Boolean,
      default: true
    },
    showHead: {
      type: Boolean,
      default: true
    },
    selects: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      now: dayjs_min()
    };
  },
  mounted() {
  },
  components: {
    TDateHead,
    TDateBody
  },
  methods: {
    changeMonth(type) {
      const now = this.now.clone();
      if (type === "before") {
        this.now = now.subtract(1, "months");
      } else {
        this.now = now.add(1, "months");
      }
    }
  }
};
const __cssModules = {};
var __component__ = /* @__PURE__ */ vueComponentNormalizer(__vue2_script, calendar_vue_vue_type_template_lang.render, calendar_vue_vue_type_template_lang.staticRenderFns, false, __vue2_injectStyles, null, null, null);
function __vue2_injectStyles(context) {
  for (let o in __cssModules) {
    this[o] = __cssModules[o];
  }
}
__component__.options.__file = "components/calendar/calendar.vue";
var Calendar = /* @__PURE__ */ function() {
  return __component__.exports;
}();
module.exports = Calendar;
