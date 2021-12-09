export function isWindow(obj) {
  return obj !== null && obj !== undefined && obj === obj.window;
}

export function isFunction(v) {
  return String.prototype.toString.call(v) === '[object Function]';
}
