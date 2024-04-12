import Progress from "./progress.js";
export { default } from "./progress.js";
Progress.install = (Vue) => {
  Vue.component(Progress.name, Progress);
};
