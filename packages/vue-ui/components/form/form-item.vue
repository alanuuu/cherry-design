<template>
  <c-row class="c-form-item" :class="cls">
    <c-col :span="labelCol">
      <form-item-label v-if="label" :required="isRequired">{{
        label
      }}</form-item-label>
    </c-col>
    <c-col :span="wrapperCol">
      <div class="c-form-item--content">
        <slot></slot>
      </div>
      <form-item-message status="status" v-if="message">
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

const name = 'c-form-item';

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
      return {
        [name + '--required']: this.isRequired,
        [name + '--error']: this.status === 'error',
        [name + '--validating']: this.status === 'validating',
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
      return false;
    },
    isError() {
      return this.status === 'error';
    },
  },
  mounted() {
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
        validate: this.validator,
        clearValidate: this.clearValidate,
        resetField: this.resetField,
        setField: this.setField,
      };
      console.log(this.formItemInfo);
      // 记录初始化值
      this.initVal = this.getVal();
      if (this.field) {
        this.formCtx?.addField(this.formItemInfo);
      }
    },
    getVal() {
      return get(this.formKey?.model, this.field);
    },
    getRules() {
      const required = this.isRequired ? { required: true } : [];
      return [].concat(required).concat(this.rules);
    },
    validator() {
      if (this.validateDisabled) {
        return Promise.resolve();
      }
      const rules = this.rules?.slice();
      if (!rules || rules.length === 0) {
        return Promise.resolve();
      }
      this.updateValidateState(this.field, {
        status: Status.validating,
        message: '',
      });

      const schema = new Schema({
        [this.field]: rules.map((rule) => {
          if (!rule.type && !rule.validator) {
            // eslint-disable-next-line no-param-reassign
            rule.type = 'string';
          }
          return rule;
        }),
      });
      // eslint-disable-next-line prefer-destructuring
      const field = this.field;
      return new Promise((resolve) => {
        schema.validate({ [field]: this.getVal() }, (error, fields) => {
          const isError = Boolean(error);
          this.updateValidateState(field, {
            status: isError ? 'error' : 'success',
            message: error?.[0].message ?? '',
          });
          const data = {
            field,
            value: error[field].value,
            type: error[field].type,
            isRequiredError: Boolean(error[field].RequiredError),
            message: error[field].message,
          };
          const err = isError ? data : undefined;

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
  },
};
</script>
