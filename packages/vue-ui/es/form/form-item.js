import get_1 from "../node_modules/lodash/get.js";
import Schema from "../node_modules/async-validator/dist-web/index.js";
import "../grid/index.js";
import FormItemLabel from "./form-item-label.js";
import FormItemMessage from "./form-item-message.js";
import { formKey, formItemKey, Status } from "./context.js";
import { staticRenderFns, render } from "./form-item.vue_vue_type_template_lang.js";
import normalizeComponent from "../_virtual/vueComponentNormalizer.js";
import Row from "../grid/row.js";
import Col from "../grid/col.js";
const __vue2_script = {
  name: "FormItem",
  components: {
    CRow: Row,
    CCol: Col,
    FormItemLabel,
    FormItemMessage
  },
  inject: {
    formCtx: formKey
  },
  provide() {
    return {
      [formItemKey]: {
        updateValidateState: this.updateValidateState,
        disabled: this.isDisabled,
        onField: this.onField
      }
    };
  },
  props: {
    label: String,
    required: Boolean,
    labelCol: {
      type: Object,
      default() {
        return this.formCtx.labelCol;
      }
    },
    wrapperCol: {
      type: Object,
      default() {
        return this.formCtx.wrapperCol;
      }
    },
    field: {
      type: [Array, String]
    },
    rules: {
      type: Array,
      default: () => []
    },
    disabled: Boolean
  },
  data() {
    return {
      status: "",
      message: "",
      validateStatus: {},
      validateMessage: {},
      validateDisabled: false,
      initVal: {},
      formItemInfo: {}
    };
  },
  computed: {
    cls() {
      const name = "c-form-item";
      return {
        [name + "--required"]: this.isRequired,
        [name + "--error"]: this.status === "error",
        [name + "--validating"]: this.status === "validating",
        [name + "--disabled"]: this.isDisabled
      };
    },
    fieldId() {
      const formName = this.formCtx.field;
      return formName + "_" + this.field.join("_");
    },
    isRequired() {
      if (this.required) {
        return true;
      }
      if (this.rules && this.rules.length > 0) {
        for (const rule of this.rules) {
          if (rule.required) {
            return true;
          }
        }
      }
      return false;
    },
    isDisabled() {
      var _a;
      return this.disabled || ((_a = this.formCtx) == null ? void 0 : _a.disabled);
    },
    isError() {
      return this.status === "error";
    }
  },
  created() {
    this.init();
  },
  beforeDestroy() {
    var _a;
    if (this.field) {
      (_a = this.formCtx) == null ? void 0 : _a.removeField(this.formItemInfo);
    }
  },
  methods: {
    init() {
      var _a;
      this.formItemInfo = {
        field: this.field,
        disabled: this.isDisabled,
        error: this.isError,
        validate: this.validate,
        clearValidate: this.clearValidate,
        resetField: this.resetField,
        setField: this.setField
      };
      this.initVal = this.getVal();
      if (this.field) {
        (_a = this.formCtx) == null ? void 0 : _a.addField(this.formItemInfo);
      }
    },
    getVal() {
      var _a;
      return get_1((_a = this.formCtx) == null ? void 0 : _a.model, this.field);
    },
    getRules() {
      const required = this.isRequired ? { required: true } : [];
      const has = this.rules.find((v) => v.required);
      return has ? [].concat(this.rules) : [].concat(required).concat(this.rules);
    },
    getTriggerRule(trigger) {
      const rules = this.getRules();
      return rules.filter((rule) => !rule.trigger || rule.trigger.indexOf(trigger) !== -1);
    },
    validate(trigger) {
      const rules = this.getTriggerRule(trigger);
      if (!rules || rules.length === 0) {
        return Promise.resolve();
      }
      const field = this.field ? this.field : false;
      if (!field) {
        console.warn("filed \u4E3A\u5FC5\u586B\u9879\uFF01");
        return Promise.resolve();
      }
      this.updateValidateState(this.field, {
        status: Status.validating,
        message: ""
      });
      const val = this.getVal();
      const schema = new Schema({
        [field]: rules.map((rule) => {
          if (!rule.type && !rule.validator) {
            rule.type = Array.isArray(val) ? "array" : typeof val;
          }
          return rule;
        })
      });
      return new Promise((resolve) => {
        schema.validate({ [field]: val }, (error, fields) => {
          var _a;
          const isError = Boolean(error);
          this.updateValidateState(field, {
            status: isError ? "error" : "success",
            message: (_a = error == null ? void 0 : error[0].message) != null ? _a : ""
          });
          const err = isError ? error[0] : void 0;
          resolve(err);
        });
      });
    },
    validator() {
      var _a;
      if (this.validateDisabled) {
        return Promise.resolve();
      }
      const rules = (_a = this.rules) == null ? void 0 : _a.slice();
      if (!rules || rules.length === 0) {
        return Promise.resolve();
      }
      const field = this.field ? this.field : false;
      if (!field) {
        console.warn("filed \u4E3A\u5FC5\u586B\u9879\uFF01");
        return Promise.resolve();
      }
      this.updateValidateState(this.field, {
        status: Status.validating,
        message: ""
      });
      const val = this.getVal();
      const schema = new Schema({
        [field]: rules.map((rule) => {
          if (!rule.type && !rule.validator) {
            rule.type = typeof val;
          }
          return rule;
        })
      });
      return new Promise((resolve) => {
        schema.validate({ [field]: val }, (error, fields) => {
          var _a2;
          const isError = Boolean(error);
          this.updateValidateState(field, {
            status: isError ? "error" : "success",
            message: (_a2 = error == null ? void 0 : error[0].message) != null ? _a2 : ""
          });
          const err = isError ? error[0] : void 0;
          resolve(err);
        });
      });
    },
    updateValidateState(field, state) {
      this.validateStatus[field] = state.status;
      this.validateMessage[field] = state.message;
      this.status = state.status;
      this.message = state.message;
    },
    clearValidate() {
      if (this.field) {
        this.updateValidateState(this.field, {
          status: "",
          message: ""
        });
      }
    },
    resetField() {
      var _a;
      this.clearValidate();
      this.validateDisabled = true;
      if ((_a = this.formCtx) == null ? void 0 : _a.model[this.field]) {
        this.formCtx.model[this.field] = this.initVal;
      }
      this.$nextTick(() => {
        this.validateDisabled = false;
      });
    },
    setField({ value, status, message }) {
      var _a;
      if (this.field) {
        this.validateDisabled = true;
        if (value && ((_a = this.formCtx) == null ? void 0 : _a.model[this.field])) {
          this.formCtx.model[this.field] = value;
        }
        if (status || message) {
          this.updateValidateState(this.field, {
            status: status != null ? status : "",
            message: message != null ? message : ""
          });
        }
        this.$nextTick(() => {
          this.validateDisabled = false;
        });
      }
    },
    onField(type) {
      if (this.validateDisabled) {
        this.validateDisabled = false;
        return;
      }
      this.validate(type);
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
__component__.options.__file = "components/form/form-item.vue";
var FormItem = /* @__PURE__ */ function() {
  return __component__.exports;
}();
export { FormItem as default };
