<template>
  <tbody :class="{ 'show-all': showAll }">
    <tr v-for="row in ROW" :key="row">
      <td
        v-for="col in COL"
        :key="col"
        :index="COL * (row - 1) + col - 1"
        :title="dateTable[COL * (row - 1) + col - 1].format"
        class="day"
        :class="{
          beforeMonth:
            dateTable[COL * (row - 1) + col - 1].beforeCurrentMonthYear,
          afterMonth: dateTable[7 * (row - 1) + col - 1].afterCurrentMonthYear,
          currentMonth:
            !dateTable[COL * (row - 1) + col - 1].beforeCurrentMonthYear &&
            !dateTable[COL * (row - 1) + col - 1].afterCurrentMonthYear,
          beforeDay: dateTable[7 * (row - 1) + col - 1].beforeDay,
          today: dateTable[7 * (row - 1) + col - 1].today,
          selected: dateTable[7 * (row - 1) + col - 1].selected,
        }"
      >
        <span class="day-text">{{
          dateTable[COL * (row - 1) + col - 1].date
        }}</span>
      </td>
    </tr>
  </tbody>
</template>

<script>
import dayjs from 'dayjs';
import DateConstants from './dataConstant';

function isSameDay(one, two) {
  return one && two && one.isSame(two, 'day');
}

function beforeCurrentMonthYear(current, today) {
  if (current.year() < today.year()) {
    return 1;
  }
  return current.year() === today.year() && current.month() < today.month();
}

function beforeCurrentDay(current, today) {
  if (current.year() < today.year()) {
    return false;
  }
  if (current.month() < today.month()) {
    return false;
  }
  return (
    current.year() === today.year() &&
    current.month() === today.month() &&
    current.date() < today.date()
  );
}

function afterCurrentMonthYear(current, today) {
  if (current.year() > today.year()) {
    return 1;
  }
  return current.year() === today.year() && current.month() > today.month();
}

export default {
  props: {
    value: {
      type: Object,
      required: true,
    },
    showAll: Boolean,
    selects: Array,
  },
  data() {
    return {
      ROW: DateConstants.DATE_ROW_COUNT,
      COL: DateConstants.DATE_COL_COUNT,
    };
  },
  computed: {
    // 本月总天数
    total() {
      return dayjs(this.value).daysInMonth();
    },
    dateTable() {
      let current;
      let passed = 0;
      const dateTable = [];
      for (let iIndex = 0; iIndex < DateConstants.DATE_ROW_COUNT; iIndex++) {
        for (let jIndex = 0; jIndex < DateConstants.DATE_COL_COUNT; jIndex++) {
          current = this.firstDay;
          if (passed) {
            current = current.add(passed, 'days');
          }
          dateTable.push({
            value: current,
            date: current.date(),
            format: current.format('YYYY-MM-DD'),
            today: isSameDay(current, this.value),
            selected: this.selects.filter((v) => {
              return isSameDay(v, current);
            }).length,
            beforeDay: beforeCurrentDay(current, this.value),
            beforeCurrentMonthYear: beforeCurrentMonthYear(current, this.value),
            afterCurrentMonthYear: afterCurrentMonthYear(current, this.value),
          });
          passed++;
        }
      }
      return dateTable;
    },
    firstDay() {
      const month1 = this.value.date(1);
      const day = month1.day();
      const lastMonthDiffDay = day % 7;
      return month1.add(0 - lastMonthDiffDay, 'days');
    },
  },
};
</script>

