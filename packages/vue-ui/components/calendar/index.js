import Calendar from './calendar.vue';
import { prefix } from '../../constants';

Calendar.install = (Vue) => {
  Vue.component(prefix + Calendar.name, Calendar);
};

export default Calendar;
