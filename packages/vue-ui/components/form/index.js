import Form from './form.vue';
import FormItem from './form-item.vue';
import { prefix } from '../../constants';

Form.item = FormItem;

Form.install = (Vue) => {
  Vue.component(prefix + Form.name, Form);
  Vue.component(prefix + FormItem.name, FormItem);
};

export default Form;
