<template>
  <div
    class="c-upload-dragger"
    :class="{
      'is-dragover': dragover,
    }"
    @drop.prevent="onDrop"
    @dragover.prevent="onDragover"
    @dragleave.prevent="dragover = false"
  >
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'UploadDrag',
  props: {
    disabled: Boolean,
  },
  inject: {
    uploader: {
      default: '',
    },
  },
  data() {
    return {
      dragover: false,
    };
  },
  methods: {
    onDragover() {
      if (!this.disabled) {
        this.dragover = true;
      }
    },
    onDrop(e) {
      if (this.disabled || !this.uploader) return;
      const accept = this.uploader.accept || '*/*';
      this.dragover = false;
      if (!accept) {
        this.$emit('file', e.dataTransfer.files);
        return;
      }
      this.$emit(
        'file',
        [].slice.call(e.dataTransfer.files).filter((file) => {
          const { type, name } = file;
          // eslint-disable-next-line operator-linebreak
          const extension =
            name.indexOf('.') > -1 ? `.${name.split('.').pop()}` : '';
          const baseType = type.replace(/\/.*$/, '');
          return accept
            .split(',')
            .map((s) => s.trim())
            .filter(Boolean)
            .some((acceptedType) => {
              if (/\..+$/.test(acceptedType)) {
                return extension === acceptedType;
              }
              if (/\/\*$/.test(acceptedType)) {
                return baseType === acceptedType.replace(/\/\*$/, '');
              }
              // eslint-disable-next-line no-useless-escape
              if (/^[^\/]+\/[^\/]+$/.test(acceptedType)) {
                return type === acceptedType;
              }
              return false;
            });
        }),
      );
    },
  },
};
</script>
