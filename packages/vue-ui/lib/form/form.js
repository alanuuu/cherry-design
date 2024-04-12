"use strict";
var context = require("./context.js");
var is = require("../packages/vue-ui/util/is.js");
var form_vue_vue_type_template_lang = require("./form.vue_vue_type_template_lang.js");
var vueComponentNormalizer = require("../_virtual/vueComponentNormalizer.js");
const __vue2_script = {
  name: "Form",
  props: {
    layout: {
      type: String,
      default: "vertical",
      validator: (val) => {
        return ["vertical", "horizontal"].indexOf(val) > -1;
      }
    },
    model: {
      type: Object,
      required: true
    },
    size: {
      type: String,
      default: "medium",
      validator: (val) => {
        return ["large", "medium", "small"].indexOf(val) > -1;
      }
    },
    labelCol: {
      type: Object,
      default: () => ({})
    },
    wrapperCol: {
      type: Object,
      default: () => ({})
    },
    name: {
      type: String,
      required: true
    },
    disabled: Boolean
  },
  data() {
    return {
      fields: []
    };
  },
  provide() {
    return {
      [context.formKey]: {
        name: this.name,
        model: this.model,
        fields: this.fields,
        addField: this.addField,
        removeField: this.removeField,
        validateField: this.validateField,
        labelCol: this.labelCol,
        wrapperCol: this.wrapperCol,
        disabled: this.disabled
      }
    };
  },
  computed: {
    cls() {
      const name = "c-form";
      return {
        [`${name}-size-${this.size}`]: this.size,
        [`${name}-${this.layout}`]: this.layout
      };
    }
  },
  methods: {
    addField(formItemInfo) {
      if (formItemInfo && formItemInfo.field) {
        this.fields.push(formItemInfo);
      }
    },
    removeField(formItemInfo) {
      if (formItemInfo && formItemInfo.field) {
        this.fields.splice(this.fields.indexOf(formItemInfo), 1);
      }
    },
    setFields(data) {
      this.fields.forEach((field) => {
        if (data[field.field]) {
          field.setField(data[field.field]);
        }
      });
    },
    resetFields() {
      this.fields.forEach((field) => {
        field.resetField();
      });
    },
    clearFields() {
      this.fields.forEach((field) => {
        field.clearFields();
      });
    },
    validate(callback) {
      const list = [];
      this.fields.forEach((field) => {
        list.push(field.validate());
      });
      return Promise.all(list).then((result) => {
        const errors = {};
        let hasError = false;
        result.forEach((item) => {
          if (item) {
            hasError = true;
            errors[item.field] = item;
          }
        });
        if (is.isFunction(callback)) {
          callback(hasError ? errors : void 0);
        }
        return hasError ? errors : void 0;
      });
    },
    validateField(field, callback) {
      const list = [];
      for (const ctx of this.fields) {
        if (is.isArray(field) && field.includes(ctx.field) || field === ctx.field) {
          list.push(ctx.validate());
        }
      }
      return Promise.all(list).then((result) => {
        const errors = {};
        let hasError = false;
        result.forEach((item) => {
          if (item) {
            hasError = true;
            errors[item.field] = item;
          }
        });
        if (is.isFunction(callback)) {
          callback(hasError ? errors : void 0);
        }
        return hasError ? errors : void 0;
      });
    },
    handleSubmit(e) {
      const list = [];
      this.fields.forEach((field) => {
        list.push(field.validate());
      });
      return Promise.all(list).then((result) => {
        const errors = {};
        let hasError = false;
        result.forEach((item) => {
          if (item) {
            hasError = true;
            errors[item.field] = item;
          }
        });
        if (hasError) {
          this.$emit("fail", { values: this.model, errors });
        } else {
          this.$emit("success", { values: this.model });
        }
        this.$emit("submit", { values: this.model, errors: hasError ? errors : void 0 });
      });
    }
  },
  watch: {
    rules() {
      this.validate();
    }
  }
};
const __cssModules = {};
var __component__ = /* @__PURE__ */ vueComponentNormalizer(__vue2_script, form_vue_vue_type_template_lang.render, form_vue_vue_type_template_lang.staticRenderFns, false, __vue2_injectStyles, null, null, null);
function __vue2_injectStyles(context2) {
  for (let o in __cssModules) {
    this[o] = __cssModules[o];
  }
}
__component__.options.__file = "components/form/form.vue";
var Form = /* @__PURE__ */ function() {
  return __component__.exports;
}();
module.exports = Form;
