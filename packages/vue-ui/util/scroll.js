import { isWindow } from './is';

export function getScroll(target, top = true) {
  if (typeof window === 'undefined') {
    return 0;
  }
  const method = top ? 'scrollTop' : 'scrollLeft';

  let result = 0;
  if (isWindow(target)) {
    result = target[top ? 'pageYOffset' : 'pageXoffset'];
  } else if (target instanceof Document) {
    result = target.documentElement[method];
  } else if (target) {
    result = target[method];
  }

  if (target && !isWindow(target) && typeof result !== 'number') {
    result = (target.ownerDocument || target).documentElement[method];
  }
  return result;
}

export function getOffsetTop(element, container) {
  if (!element) return 0;
  if (container === window || !container) {
    // eslint-disable-next-line no-param-reassign
    container = element.ownerDocument.documentElement;
    return element.offsetTop - container.clientTop;
  }
  return element.offsetTop - container.getBoundingClientRect().top;
}

export function easeInOutCubic(t, b, c, d) {
  const cc = c - b;
  // eslint-disable-next-line no-param-reassign
  t /= d / 2;
  if (t < 1) {
    return (cc / 2) * t * t * t + b;
  }
  // eslint-disable-next-line
  return (cc / 2) * ((t -= 2) * t * t + 2) + b;
}

export function scrollTo(y, options = {}) {
  const { getContainer = () => window, callback, duration = 450 } = options;

  const container = getContainer();
  const scrollTop = getScroll(container);
  const start = Date.now();

  const frameFunc = () => {
    const timestamp = Date.now();
    const time = timestamp - start;
    const nextScrollTop = easeInOutCubic(
      time > duration ? duration : time,
      scrollTop,
      y,
      duration
    );
    if (isWindow(container)) {
      container.scrollTo(window.pageXOffset, nextScrollTop);
    } else {
      container.scrollTop = nextScrollTop;
    }
    if (time <= duration) {
      requestAnimationFrame(frameFunc);
    } else if (typeof callback === 'function') {
      callback();
    }
  };
  return requestAnimationFrame(frameFunc);
}

export function isScrollToBottom(target, options = {}) {
  if (!target) {
    return false;
  }
  const { getContainer = () => document.body, offset = 20 } = options;
  const container = getContainer();
  const scrollTop = getScroll(container, true);

  if (scrollTop > 0 && (scrollTop + container.clientHeight + offset >= target.clientHeight)) {
    return true;
  }
  return false;
}
