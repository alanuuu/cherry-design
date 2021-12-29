<template>
  <div class="c-progress">
    <div class="c-progress-inner" :style="styles"></div>
  </div>
</template>

<script>
export default {
  name: 'CProgress',
  props: {
    process: {
      type: Number,
      default: 0,
    },
    color: String,
  },
  computed: {
    styles() {
      return {
        width: parseInt(this.process, 10) + '%',
        color: this.color ?? null,
      };
    },
  },
};
</script>
