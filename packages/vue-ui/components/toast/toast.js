import Vue from 'vue';
import Toast from './toast.vue';

let ToastConstructor = Vue.extend(Toast);
let instance;
let instances = [];
let seed = 1;

const ToastDialog = (options = {}) => {
  if (typeof options === 'string') {
    options = {
      message: options,
    };
  } else {
    options = {
      message: options.content || '',
      duration: options.duration || 3000,
      showClose: options.closable || false,
      top: options.top,
    };
  }
  let id = `toast_${seed++}`;
  instance = new ToastConstructor({
    data: options,
  });
  instance.id = id;
  instance.vm = instance.$mount();
  document.body.appendChild(instance.vm.$el);
  instance.vm.visible = true;
  instance.dom = instance.vm.$el;
  let top = options.top || 20;
  instances.forEach((item) => {
    if (!item.closed) {
      top += item.$el.offsetHeight + 16;
    }
  });
  instance.vm.top = top;
  instances.push(instance.vm);
  return instance.vm;
};

export default ToastDialog;
