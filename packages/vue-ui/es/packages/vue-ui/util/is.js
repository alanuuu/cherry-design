function isWindow(obj) {
  return obj !== null && obj !== void 0 && obj === obj.window;
}
function isFunction(v) {
  return Object.prototype.toString.call(v) === "[object Function]";
}
function isArray(v) {
  return Object.prototype.toString.call(v) === "[object Array]";
}
export { isArray, isFunction, isWindow };
