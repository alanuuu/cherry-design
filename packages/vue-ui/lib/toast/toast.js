"use strict";
var Vue = require("vue");
var toast = require("./toast2.js");
function _interopDefaultLegacy(e) {
  return e && typeof e === "object" && "default" in e ? e : { "default": e };
}
var Vue__default = /* @__PURE__ */ _interopDefaultLegacy(Vue);
const ToastConstructor = Vue__default["default"].extend(toast);
let instance;
const instances = [];
let seed = 1;
const iconList = {
  success: "icon-check-circle",
  error: "icon-close-circle",
  info: "icon-warning-circle",
  none: "none"
};
const ToastDialog = (options = {}) => {
  if (typeof options === "string") {
    options = {
      message: options
    };
  } else {
    options = {
      message: options.content || "",
      duration: options.duration || 3e3,
      showClose: options.closable || false,
      top: options.top || 20,
      icon: iconList[options.type] || "icon-warning-circle",
      type: options.type || "info"
    };
  }
  const id = `toast_${seed++}`;
  instance = new ToastConstructor({
    data: options
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
module.exports = ToastDialog;
