"use strict";
require("../input/index.js");
require("../select/index.js");
var pagination_vue_vue_type_template_lang = require("./pagination.vue_vue_type_template_lang.js");
var vueComponentNormalizer = require("../_virtual/vueComponentNormalizer.js");
var select = require("../select/select.js");
var option = require("../select/option.js");
var input = require("../input/input.js");
const defaultShowPageNum = 7;
const halfPageSize = (defaultShowPageNum - 1) / 2;
const __vue2_script = {
  name: "Pagination",
  components: {
    CInput: input,
    CSelect: select,
    COption: option
  },
  props: {
    total: {
      type: Number
    },
    pageSizeOptions: {
      type: Array,
      default: () => [10, 20, 50, 100]
    },
    showPageSize: {
      type: Boolean,
      default: false
    },
    showJumpPage: {
      type: Boolean,
      default: false
    },
    prevText: {
      type: String,
      default: "prev"
    },
    nextText: {
      type: String,
      default: "next"
    }
  },
  data() {
    return {
      size: 10,
      curPageNum: 1
    };
  },
  mounted() {
    if (this.pageSizeOptions.length) {
      this.size = this.pageSizeOptions[0];
    }
  },
  watch: {
    pageSizeOptions(val) {
      if (val.length && !val.includes(this.size)) {
        this.size = val[0];
      }
    }
  },
  computed: {
    middlePageNum() {
      let startPage = 2;
      let endPage = this.total - 1;
      if (this.curPageNum - halfPageSize <= 1) {
        endPage = startPage + defaultShowPageNum - 3;
      } else if (this.curPageNum + halfPageSize >= this.total) {
        startPage = endPage - defaultShowPageNum + 3;
      } else {
        startPage = this.curPageNum - Math.floor((defaultShowPageNum - 2 - 1) / 2);
        endPage = startPage + defaultShowPageNum - 3;
      }
      const pageArr = [];
      for (let i = startPage; i <= endPage; i += 1) {
        pageArr.push(i);
      }
      return pageArr;
    },
    showPrevEllipsis() {
      return this.curPageNum > defaultShowPageNum && this.total > defaultShowPageNum;
    },
    showNextEllipsis() {
      return this.curPageNum < this.total - defaultShowPageNum && this.total > defaultShowPageNum;
    }
  },
  methods: {
    onJumpPage(val) {
      if (typeof val === "string" && val) {
        this.$emit("jumpPage", Number(val));
      }
    },
    onChangePageSize() {
      this.$emit("changePageSize", this.size);
    },
    changePage(pageNum) {
      this.curPageNum = pageNum;
      this.$emit("change", pageNum);
    },
    prevPage() {
      this.curPageNum = this.curPageNum - 1 < 1 ? 1 : this.curPageNum - 1;
      this.$emit("change", this.curPageNum);
    },
    nextPage() {
      this.curPageNum = this.curPageNum + 1 > this.total ? this.total : this.curPageNum + 1;
      this.$emit("change", this.curPageNum);
    }
  }
};
const __cssModules = {};
var __component__ = /* @__PURE__ */ vueComponentNormalizer(__vue2_script, pagination_vue_vue_type_template_lang.render, pagination_vue_vue_type_template_lang.staticRenderFns, false, __vue2_injectStyles, null, null, null);
function __vue2_injectStyles(context) {
  for (let o in __cssModules) {
    this[o] = __cssModules[o];
  }
}
__component__.options.__file = "components/pagination/pagination.vue";
var Pagination = /* @__PURE__ */ function() {
  return __component__.exports;
}();
module.exports = Pagination;
