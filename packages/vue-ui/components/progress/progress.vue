<template>
  <div class="c-progress">
    <div class="c-progress-inner" :style="styles">
      <span class="percent" v-if="showPercent">{{percent}}</span>
    </div>
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
    showPercent: Boolean,
  },
  computed: {
    styles() {
      return {
        width: this.perent,
        background: this.color ?? null,
      };
    },
    percent() {
      return parseInt(this.process, 10) + '%';
    },
  },
};
</script>
