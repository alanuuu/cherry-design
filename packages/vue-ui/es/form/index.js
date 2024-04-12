import Form from "./form.js";
export { default } from "./form.js";
import FormItem from "./form-item.js";
import { prefix } from "../packages/vue-ui/constants/index.js";
Form.item = FormItem;
Form.install = (Vue) => {
  Vue.component(prefix + Form.name, Form);
  Vue.component(prefix + FormItem.name, FormItem);
};
