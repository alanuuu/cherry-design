import Switch from "./switch.js";
export { default } from "./switch.js";
Switch.install = (Vue) => {
  Vue.component(Switch.name, Switch);
};
