<template>
  <c-row class="c-form-item">
    <c-col :span="labelCol">
      <form-item-label>{{ label }}</form-item-label>
    </c-col>
    <c-col :span="wrapperCol">
      <div class="c-form-item--content">
        <slot></slot>
      </div>
      <form-item-message></form-item-message>
    </c-col>
  </c-row>
</template>

<script>
import { Col as CCol, Row as CRow } from '../grid';
import FormItemLabel from './form-item-label.vue';
import FormItemMessage from './form-item-message.vue';

export default {
  name: 'FormItem',
  components: {
    CRow,
    CCol,
    FormItemLabel,
    FormItemMessage,
  },
  inject: {
    name: this.name,
    fields: this.fields,
    addField: this.addField,
    labelCol: this.labelCol,
    wrapperCol: this.wrapperCol,
  },
};
</script>
