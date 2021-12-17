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
      <form-item-message status="status">123</form-item-message>
    </c-col>
  </c-row>
</template>

<script>
import get from 'lodash/get';
import Schema from 'async-validator';

import { Col, Row } from '../grid';
import FormItemLabel from './form-item-label.vue';
import FormItemMessage from './form-item-message.vue';
import { formKey, formItemKey, status } from './context';

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
    name: {
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
      // 记录初始值
      initVal: {},
      // 禁用验证
      disableValidate: false,
    };
  },
  computed: {
    cls() {
      const name = 'c-form-item';
      return {
        [name + '--required']: this.isRequired,
        [name + '--error']: this.status === 'error',
        [name + '--validating']: this.status === 'validating',
      };
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
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      this.initVal = this.getVal();
    },
    getVal() {
      // eslint-disable-next-line prefer-destructuring
      const { name, model } = this;
      return get(model, name);
    },
    getRules() {
      const required = this.isRequired ? { required: true } : [];
      return [].concat(required).concat(this.rules);
    },
    getFilterRule(trigger) {
      const rules = this.getRules();
      return rules.filter(
        (rule) => !rule.trigger || rule.trigger.indexOf(trigger) !== -1,
      );
    },
    validator(trigger, callback = () => {}) {
      if (this.disableValidate) {
        return Promise.resolve();
      }
      const rules = this.getFilterRule(trigger);
      if (!rules || rules.length === 0) {
        callback();
        return true;
      }

      this.status = status.validating;

      const schema = new Schema({
        [this.name]: rules.map((rule) => {
          if (!rule.type && !rule.validator) {
            // eslint-disable-next-line no-param-reassign
            rule.type = 'string';
          }
          return rule;
        }),
      });
      const field = this.name;
      return new Promise((resolve) => {
        schema.validate({ [field]: this.getVal() }, (error, fields) => {
          const isError = Boolean(error?.[field]);
          this.updateValidateState(field, {
            status: isError ? 'error' : 'success',
            message: error?.[field].message ?? '',
          });
          const err = isError
            ? {
              field,
              value: error[field].value,
              type: error[field].type,
              isRequiredError: Boolean(error[field].RequiredError),
              message: error[field].message,
            }
            : undefined;

          resolve(err);
        });
      });
    },
    updateValidateState(name, state) {
      this.status = state.status;
      this.message = state.message;
    },
  },
};
</script>
