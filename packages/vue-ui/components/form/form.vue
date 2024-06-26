<template>
  <form
    class="c-form"
    :class="cls"
    @submit.prevent="handleSubmit"
    :disabled="disabled">
    <slot></slot>
  </form>
</template>

<script>
import { formKey } from './context';
import { isArray, isFunction } from '../../util/is';

export default {
  name: 'Form',
  props: {
    layout: {
      type: String,
      default: 'vertical',
      validator: (val) => {
        return ['vertical', 'horizontal'].indexOf(val) > -1;
      },
    },
    model: {
      type: Object,
      required: true,
    },
    size: {
      type: String,
      default: 'medium',
      validator: (val) => {
        return ['large', 'medium', 'small'].indexOf(val) > -1;
      },
    },
    labelCol: {
      type: Object,
      default: () => ({
      }),
    },
    wrapperCol: {
      type: Object,
      default: () => ({
      }),
    },
    name: {
      type: String,
      required: true,
    },
    disabled: Boolean,
  },
  data() {
    return {
      fields: [],
    };
  },
  provide() {
    return {
      [formKey]: {
        name: this.name,
        model: this.model,
        fields: this.fields,
        addField: this.addField,
        removeField: this.removeField,
        validateField: this.validateField,
        labelCol: this.labelCol,
        wrapperCol: this.wrapperCol,
        disabled: this.disabled,
      },
    };
  },
  computed: {
    cls() {
      const name = 'c-form';
      return {
        [`${name}-size-${this.size}`]: this.size,
        [`${name}-${this.layout}`]: this.layout,
      };
    },
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

        if (isFunction(callback)) {
          callback(hasError ? errors : undefined);
        }
        return hasError ? errors : undefined;
      });
    },
    validateField(field, callback) {
      const list = [];

      // eslint-disable-next-line no-restricted-syntax
      for (const ctx of this.fields) {
        if (
          (isArray(field) && field.includes(ctx.field))
          || field === ctx.field
        ) {
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

        if (isFunction(callback)) {
          callback(hasError ? errors : undefined);
        }
        return hasError ? errors : undefined;
      });
    },
    handleSubmit(e) {
      const list = [];
      this.fields.forEach((field) => {
        list.push(field.validate());
      });
      // async validate
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
          this.$emit('fail', { values: this.model, errors });
        } else {
          this.$emit('success', { values: this.model });
        }

        this.$emit('submit', { values: this.model, errors: hasError ? errors : undefined });
      });
    },
  },
  watch: {
    rules() {
      this.validate();
    },
  },
};
</script>
