<template>
  <thead class="t-date-head">
    <tr>
      <th v-for="(v, i) in weekdays" :key="i" :title="v" class="t-column-head">
        {{ v }}
      </th>
    </tr>
  </thead>
</template>

<script>
import DateConstants from './dataConstant';

export default {
  props: {
    value: {
      type: Object,
      required: true,
    },
  },
  computed: {
    weekdays() {
      const weekdays = [];
      const val = this.value.clone();
      const localeData = val.localeData();

      for (
        let dateColIndex = 0;
        dateColIndex < DateConstants.DATE_COL_COUNT;
        dateColIndex++
      ) {
        const index = dateColIndex % DateConstants.DATE_COL_COUNT;
        weekdays[dateColIndex] = localeData.weekdaysShort(val.day(index))
      }
      return weekdays;
    },
  },
  data() {
    return {};
  },
  created() {},
  mounted() {},
};
</script>

