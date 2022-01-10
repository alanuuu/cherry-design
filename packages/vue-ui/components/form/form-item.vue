<template>
  <c-row class="c-form-item" :class="cls">
    <c-col :span="labelCol"   class="c-form-item--label">
      <form-item-label
        v-if="label"
        :required="isRequired"
        >{{ label }}</form-item-label
      >
    </c-col>
    <c-col :span="wrapperCol" class="c-form-item--control">
      <div class="c-form-item--content">
        <slot></slot>
      </div>
      <form-item-message :status="status">
        {{ message }}
      </form-item-message>
    </c-col>
  </c-row>
</template>

<script>
import get from 'lodash/get';
import Schema from 'async-validator';

import { Col, Row } from '../grid';
import FormItemLabel from './form-item-label.vue';
import FormItemMessage from './form-item-message.vue';
import { formKey, formItemKey, Status } from './context';

export default {
  name: 'FormItem',
  components: {
    CRow: Row,
    CCol: Col,
    FormItemLabel,
    FormItemMessage,
  },
  inject: {
    formCtx: formKey,
  },
  provide() {
    return {
      [formItemKey]: {
        updateValidateState: this.updateValidateState,
        disabled: this.isDisabled,
        onField: this.onField,
      },
    };
  },
  props: {
    label: String,
    required: Boolean,
    labelCol: {
      type: Object,
      default() {
        return this.formCtx.labelCol;
      },
    },
    wrapperCol: {
      type: Object,
      default() {
        return this.formCtx.wrapperCol;
      },
    },
    field: {
      type: [Array, String],
    },
    rules: {
      type: Array,
      default: () => [],
    },
    disabled: Boolean,
  },
  data() {
    return {
      status: '',
      message: '',
      validateStatus: {},
      validateMessage: {},
      // 重置表弟；不验证
      validateDisabled: false,
      // 记录初始值
      initVal: {},
      formItemInfo: {},
    };
  },
  computed: {
    cls() {
      const name = 'c-form-item';
      return {
        [name + '--required']: this.isRequired,
        [name + '--error']: this.status === 'error',
        [name + '--validating']: this.status === 'validating',
        [name + '--disabled']: this.isDisabled,
      };
    },
    fieldId() {
      const formName = this.formCtx.field;
      return formName + '_' + this.field.join('_');
    },
    isRequired() {
      if (this.required) {
        return true;
      }
      if (this.rules && this.rules.length > 0) {
        // eslint-disable-next-line no-restricted-syntax
        for (const rule of this.rules) {
          if (rule.required) {
            return true;
          }
        }
      }
      return false;
    },
    isDisabled() {
      return this.disabled || this.formCtx?.disabled;
    },
    isError() {
      return this.status === 'error';
    },
  },
  created() {
    this.init();
  },
  beforeDestroy() {
    if (this.field) {
      this.formCtx?.removeField(this.formItemInfo);
    }
  },
  methods: {
    init() {
      this.formItemInfo = {
        field: this.field,
        disabled: this.isDisabled,
        error: this.isError,
        validate: this.validate,
        clearValidate: this.clearValidate,
        resetField: this.resetField,
        setField: this.setField,
      };
      // 记录初始化值
      this.initVal = this.getVal();
      if (this.field) {
        this.formCtx?.addField(this.formItemInfo);
      }
    },
    getVal() {
      return get(this.formCtx?.model, this.field);
    },
    getRules() {
      const required = this.isRequired ? { required: true } : [];
      const has = this.rules.find((v) => v.required);
      return has
        ? [].concat(this.rules)
        : [].concat(required).concat(this.rules);
    },
    getTriggerRule(trigger) {
      const rules = this.getRules();
      return rules.filter(
        (rule) => !rule.trigger || rule.trigger.indexOf(trigger) !== -1,
      );
    },
    validate(trigger) {
      const rules = this.getTriggerRule(trigger);
      if (!rules || rules.length === 0) {
        return Promise.resolve();
      }
      const field = this.field ? this.field : false;
      if (!field) {
        // eslint-disable-next-line no-console
        console.warn('filed 为必填项！');
        return Promise.resolve();
      }
      this.updateValidateState(this.field, {
        status: Status.validating,
        message: '',
      });
      const val = this.getVal();
      const schema = new Schema({
        [field]: rules.map((rule) => {
          if (!rule.type && !rule.validator) {
            rule.type = Array.isArray(val) ? 'array' : typeof val;
          }
          return rule;
        }),
      });
      return new Promise((resolve) => {
        schema.validate({ [field]: val }, (error, fields) => {
          const isError = Boolean(error);
          this.updateValidateState(field, {
            status: isError ? 'error' : 'success',
            message: error?.[0].message ?? '',
          });
          const err = isError ? error[0] : undefined;
          resolve(err);
        });
      });
    },
    validator() {
      if (this.validateDisabled) {
        return Promise.resolve();
      }
      const rules = this.rules?.slice();
      if (!rules || rules.length === 0) {
        return Promise.resolve();
      }
      const field = this.field ? this.field : false;
      if (!field) {
        // eslint-disable-next-line no-console
        console.warn('filed 为必填项！');
        return Promise.resolve();
      }
      this.updateValidateState(this.field, {
        status: Status.validating,
        message: '',
      });
      const val = this.getVal();
      const schema = new Schema({
        [field]: rules.map((rule) => {
          if (!rule.type && !rule.validator) {
            // eslint-disable-next-line no-param-reassign
            rule.type = typeof val;
          }
          return rule;
        }),
      });
      return new Promise((resolve) => {
        schema.validate({ [field]: val }, (error, fields) => {
          const isError = Boolean(error);
          this.updateValidateState(field, {
            status: isError ? 'error' : 'success',
            message: error?.[0].message ?? '',
          });
          const err = isError ? error[0] : undefined;
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
          status: '',
          message: '',
        });
      }
    },
    resetField() {
      this.clearValidate();
      this.validateDisabled = true;
      if (this.formCtx?.model[this.field]) {
        this.formCtx.model[this.field] = this.initVal;
      }
      this.$nextTick(() => {
        this.validateDisabled = false;
      });
    },
    setField({ value, status, message }) {
      if (this.field) {
        this.validateDisabled = true;
        if (value && this.formCtx?.model[this.field]) {
          this.formCtx.model[this.field] = value;
        }

        if (status || message) {
          this.updateValidateState(this.field, {
            status: status ?? '',
            message: message ?? '',
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
    },
  },
};
</script>
