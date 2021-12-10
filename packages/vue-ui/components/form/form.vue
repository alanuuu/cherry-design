<template>
  <form class="c-form">
    <slot></slot>
  </form>
</template>

<script>
export default {
  name: 'Form',
  props: {
    model: {
      type: Object,
      required: true,
    },
    size: {
      type: String,
      default: 'medium',
    },
    labelCol: {
      type: Object,
      default: () => ({
        span: 8,
      }),
    },
    wrapperCol: {
      type: Object,
      default: () => ({
        span: 16,
      }),
    },
    name: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      fields: [],
    };
  },
  provide() {
    return {
      name: this.name,
      fields: this.fields,
      addField: this.addField,
      labelCol: this.labelCol,
      wrapperCol: this.wrapperCol,
    };
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
    validate(cb) {},
  },
};
</script>
