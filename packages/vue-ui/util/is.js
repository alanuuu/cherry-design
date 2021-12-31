export function isWindow(obj) {
  return obj !== null && obj !== undefined && obj === obj.window;
}

export function isFunction(v) {
  return Object.prototype.toString.call(v) === '[object Function]';
}

export function isArray(v) {
  return Object.prototype.toString.call(v) === '[object Array]';
}

export function isObject(v) {
  return Object.prototype.toString.call(v) === '[object Object]';
}
