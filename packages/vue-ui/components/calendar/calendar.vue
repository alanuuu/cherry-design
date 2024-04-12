<template>
  <div class="c-calendar-wrapper">
    <div class="title" v-if="showHead">
      <c-button class="c-calendar-change" v-if="showChange" round size="small" @click.stop="changeMonth('before')">上一月</c-button>
      <span class="text">{{ now.format('YYYY年MM月') }}</span>
      <c-button class="c-calendar-change" v-if="showChange"  round size="small" @click.stop="changeMonth('next')">下一月</c-button>
    </div>
    <table class="c-calendar">
      <t-date-head :value="now"></t-date-head>
      <t-date-body
        :value="now"
        :showAll="showAll"
        :selects="selects"
      ></t-date-body>
    </table>
  </div>
</template>

<script>
import dayjs from 'dayjs'
import CButton from '../button/button.vue';
import TDateHead from './TDateHead.vue';
import TDateBody from './TDateBody.vue';

export default {
  name: 'Calendar',
  props: {
    showAll: Boolean,
    showChange: {
      type: Boolean,
      default: true
    },
    showHead: {
      type: Boolean,
      default: true
    },
    selects: {
      type: Array,
      default: () => []
    },
  },
  data() {
    return {
      now: dayjs(),
    };
  },
  mounted() {
    // console.log(this.now.format(), this.now);
  },
  components: {
    TDateHead,
    TDateBody,
  },
  methods: {
    changeMonth(type) {
      const now = this.now.clone();
      if(type === 'before') {
        this.now = now.subtract(1, 'months')
      } else {
        this.now = now.add(1, 'months')
      }
    }
  }
};
</script>

