import dayjs from "../node_modules/dayjs/dayjs.min.js";
import "../button/button.js";
import TDateHead from "./TDateHead.js";
import TDateBody from "./TDateBody.js";
import { staticRenderFns, render } from "./calendar.vue_vue_type_template_lang.js";
import normalizeComponent from "../_virtual/vueComponentNormalizer.js";
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
      now: dayjs()
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
var __component__ = /* @__PURE__ */ normalizeComponent(__vue2_script, render, staticRenderFns, false, __vue2_injectStyles, null, null, null);
function __vue2_injectStyles(context) {
  for (let o in __cssModules) {
    this[o] = __cssModules[o];
  }
}
__component__.options.__file = "components/calendar/calendar.vue";
var Calendar = /* @__PURE__ */ function() {
  return __component__.exports;
}();
export { Calendar as default };
