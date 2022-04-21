<template>
  <div class="c-input">
    <input
      v-bind="$attrs"
      :class="cls"
      :disabled="itemDisabled"
      :placeholder="placeholder"
      @input="onInput"
      @change="onChange"
      @blur="onBlur"
      :maxlength="maxlength"
      :type="type"
      :value="value"
      @keyup.enter="onEnter"
    >
    <span v-if="isWordLimitVisible" class="c-input-tip">{{textNum}}/{{maxlength}}</span>
  </div>
</template>

<script>
import { prefix } from '../../constants';
import formMixins from '../mixins/form';

export default {
  name: 'Input',
  mixins: [formMixins],
  props: {
    value: {
      type: String,
      default: '',
    },
    placeholder: {
      type: String,
      default: '请输入内容',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    maxlength: {
      type: Number,
    },
    limit: {
      type: Boolean,
      default: false,
    },
    type: {
      type: String,
      default: 'text',
    },
  },
  data() {
    return {
      text: '',
    };
  },
  computed: {
    textNum() {
      return this.value.length;
    },
    isWordLimitVisible() {
      return this.limit
        && this.maxlength
        && this.type !== 'password';
    },
    cls() {
      const name = prefix + '-input';
      return {
        [name + '-disabled']: this.itemDisabled,
        [name + '-content']: true,
        [name + '-limit']: this.isWordLimitVisible,
      };
    },
  },
  methods: {
    onInput(e) {
      this.$emit('input', e.target?.value);
      this.formItem?.onField('change');
    },
    onChange(e) {
      this.$emit('change', e.target?.value);
    },
    onBlur(e) {
      this.$emit('blur');
    },
    onEnter(e) {
      if (e.target) {
        this.$emit('enter', e.target.value);
      }
    },
    onFocus(e) {
      this.$emit('focus');
    },
  },
};
</script>
